import { useEffect, useState } from "react";
import type { CarData } from "../types";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams
} from "@mui/x-data-grid";
import { deleteCar, getCars } from "../carapi";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Snackbar } from "@mui/material";
import AddCar from "./AddCar";
import UpdateCar from "./UpdateCar";

export default function CarList() {
  const [cars, setCars] = useState<CarData[] | null>();
  const [open, setOpen] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "brand", headerName: "Brand", flex: 4 },
    { field: "model", headerName: "Model", flex: 4 },
    { field: "color", headerName: "Color", flex: 2 },
    { field: "fuel", headerName: "Fuel", flex: 1 },
    { field: "modelYear", headerName: "Model Year", flex: 1 },
    { field: "price", headerName: "Price(€)", flex: 1 },
    {
      field: "_links.car.href",
      headerName: "",
      sortable: false,
      filterable: false,
      hideable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <UpdateCar fetchCars={fetchCars} carData={params.row} />
      )
    },
    {
      field: "_links.self.href",
      headerName: "",
      sortable: false,
      filterable: false,
      hideable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          aria-label="delete"
          onClick={() => handleDelete(params.row._links.self.href)}
        >
          <DeleteIcon color="error" />
        </IconButton>
      )
    }
  ];

  const fetchCars = () => {
    getCars()
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDelete = (url: string) => {
    if (window.confirm("Are you sure?")) {
      deleteCar(url)
        .then(() => {
          fetchCars();
          setOpen(true);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <AddCar fetchCars={fetchCars} />
      <div style={{marginTop: 10}}>
        <DataGrid
          rows={cars || []}
          columns={columns}
          autoPageSize
          getRowId={(row) => row._links.self.href}
        />
      </div>
      <Snackbar
        open={open}
        message="Car deleted"
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
