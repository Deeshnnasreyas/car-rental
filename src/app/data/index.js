
let cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    status: "approved",
    dailyRate: 45,
    location: "kochi",
    PricePerDay: 8000,
    status: "pending",
  },
  {
    id: 2,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    dailyRate:25,
    status: "approved",
    location: "kochi",
    PricePerDay: 8000,
    status: "pending",
  },
  {
    id: 3,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    status: "approved",
  
    location: "kochi",
    type: "Sedan",
    PricePerDay: 8000,
    availbe: true,
    dailyRate:25,
    status: "pending",
  },
];
const STORAGE_KEY = "car-rental-data";
const initializeData = () => {
  const defaultData = {
    cars: [
      {
        id: 1,
        make: "Toyota",
        model: "Camry",
        year: 2022,
        status: "approved",
        dailyRate: 45,
        location: "kochi",
        PricePerDay: 8000,
        type: "Sedan",
        available: true,
      },
      {
        id: 2,
        make: "Toyota",
        model: "Camry",
        year: 2022,
        dailyRate: 25,
        status: "approved",
        location: "kochi",
        PricePerDay: 8000,
        type: "Sedan",
        available: true,
      },
      {
        id: 3,
        make: "Toyota",
        model: "Camry",
        year: 2022,
        status: "approved",
        location: "kochi",
        type: "Sedan",
        PricePerDay: 8000,
        available: true,
        dailyRate: 25,
      },
    ],
    nextId: 4,
  };

 
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  }
}
const getData = () => {
  initializeData();
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

let nextId = cars.length + 1;
export const getCars = () => {
  return getData().cars;
};
export const getCarById = (id) => cars.find((car) => car.id === id);

export const addCar = (car) => {
  const data = getData();
  const newCar = {
    ...car,
    id: data.nextId++,
    createdAt: new Date().toISOString(),
  };
  data.cars.push(newCar);
  saveData(data);
  return newCar;
};

export const deleteCar = (id) => {
  const data = getData();
  const initialLength = data.cars.length;

  data.cars = data.cars.filter((car) => car.id !== id);
  if (data.cars.length !== initialLength) {
    saveData(data);
  }
};
export const simpleSearch = (cars, searchTerm = '', status = '') => {
  const data = getData();
  let results = data?.cars;

  if (status) {
    results = results.filter(car => 
      car.status && car.status.toLowerCase() === status.toLowerCase()
    );
  }

  if (searchTerm && typeof searchTerm === 'string') {
    const term = searchTerm.toLowerCase();
    results = results.filter(car => 
      (car.make && car.make.toLowerCase().includes(term)) ||
      (car.model && car.model.toLowerCase().includes(term)) ||
      (car.type && car.type.toLowerCase().includes(term)) ||
      (car.location && car.location.toLowerCase().includes(term))
    );
  }

  return results;
};

export const fetchCarById = (id) => {
  try {
    const data = getData();
    if (!Array.isArray(data?.cars)) {
      throw new Error("Invalid data: 'cars' not found in storage");
    }
    const car = data.cars.find((car) => car.id === Number(id));

    if (!car) {
      throw new Error(`Car with ID ${id} not found`);
    }

    return car;
  } catch (error) {
    throw error; 
  }
};

export const updateCar = (id, carData) => {
  try {
    const data = getData();
    const carIndex = data.cars.findIndex((car) => car.id === Number(id));

    if (carIndex === -1) {
      throw new Error(`Car with ID ${id} not found`);
    }
    if (!carData.make || !carData.model) {
      throw new Error("Make and Model are required fields");
    }
    const updatedCar = {
      ...data.cars[carIndex],
      ...carData,
      id: Number(id),
      year: Number(carData.year) || data.cars[carIndex].year,
      dailyRate: Number(carData.dailyRate) || data.cars[carIndex].dailyRate,
      updatedAt: new Date().toISOString(),
    };
    data.cars[carIndex] = updatedCar;
    saveData(data);

    return updatedCar;
  } catch (error) {
    throw error;
  }
};