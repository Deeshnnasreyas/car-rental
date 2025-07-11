import { addCar } from "../data";

const API_BASE_URL = "/api/cars";

export const fetchAllCars = async () => {
  try {
    const response = await fetch("/api/cars", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`ststus ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const createCar = (carData) => {
  try {
    const preparedData = {
      make: carData.make,
      model: carData.model,
      year: Number(carData.year) || 2023,
      dailyRate: Number(carData.dailyRate) || 0,
      status: carData.status || "pending",
      location: carData.location || "",
      type: carData.type || "",
      PricePerDay: Number(carData.PricePerDay) || 0,
      available: carData.available !== false,
    };

    const newCar = addCar(preparedData);
    return newCar;
  } catch (error) {
    throw error;
  }
};
export const deleteCar = (id) => {
  try {
    const carId = Number(id);
    deleteFromStorage(carId);
  } catch (error) {
    throw error;
  }
};
