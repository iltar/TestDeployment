import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import type { CarData } from "../types";
import React from "react";

type carFormProps = {
    car: CarData,
    setCar: React.Dispatch<React.SetStateAction<CarData>>
}

export default function CarForm(props: carFormProps) {
  return <>
  <DialogContent>
          <TextField
            required
            margin="dense"
            label="Brand"
            value={props.car.brand}
            fullWidth
            variant="standard"
            onChange={(e) => props.setCar({ ...props.car, brand: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            label="Model"
            value={props.car.model}
            fullWidth
            variant="standard"
            onChange={(e) => props.setCar({ ...props.car, model: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            label="Color"
            value={props.car.color}
            fullWidth
            variant="standard"
            onChange={(e) => props.setCar({ ...props.car, color: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            label="Fuel"
            value={props.car.fuel}
            fullWidth
            variant="standard"
            onChange={(e) => props.setCar({ ...props.car, fuel: e.target.value })}
          />
          <TextField
            required
            margin="dense"
            label="Model year"
            value={props.car.modelYear}
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) =>
              props.setCar({ ...props.car, modelYear: parseInt(e.target.value) })
            }
          />
          <TextField
            required
            margin="dense"
            label="Price (€)"
            value={props.car.price}
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) =>
              props.setCar({ ...props.car, price: parseFloat(e.target.value) })
            }
          />
        </DialogContent>
  </>;
}
