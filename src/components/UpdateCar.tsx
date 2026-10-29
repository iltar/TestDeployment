import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import type { CarData } from "../types";
import { updateCar } from "../carapi";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CarForm from "./CarForm";

type UpdateCarProps = {
  fetchCars: () => void;
  carData: CarData;
};

export default function UpdateCar(props: UpdateCarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [car, setCar] = useState<CarData>({} as CarData);

  const handleClickOpen = () => {
    setOpen(true);
    setCar({
      brand: props.carData.brand,
      model: props.carData.model,
      color: props.carData.color,
      fuel: props.carData.fuel,
      modelYear: props.carData.modelYear,
      price: props.carData.price
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    updateCar(car, props.carData._links?.self.href || "")
      .then(props.fetchCars)
      .catch((err) => console.error(err));
    handleClose();
  };

  return (
    <>
      <IconButton aria-label="edit car" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
        <CarForm car={car} setCar={setCar} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
