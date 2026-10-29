import type { CarData } from "./types";

export function getCars() {
  return fetch(import.meta.env.VITE_API_URL + "/cars").then((response) => {
    if (!response.ok) {
      throw new Error("Error when fetching cars");
    }
    return response.json();
  });
}

export function addCar(car: CarData) {
  return fetch(import.meta.env.VITE_API_URL + "/cars", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when creating car");
    }
    return response.json();
  });
}

export function updateCar(car: CarData, url: string) {
  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when updating car");
    }
    return response.json();
  }

  );
}

export function deleteCar(url: string) {
  return fetch(url, { method: "DELETE" }).then((response) => {
    if (!response.ok) {
      throw new Error("Error when deleting car");
    }
    return response.json();
  });
}
