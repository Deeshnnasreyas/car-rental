"use client"
import { useEffect, useState } from "react";
import { deleteCar, getCars } from "../data";
import { toast } from "react-hot-toast";
import Card from "../ui/dashboard/card";
import CarTable from "../ui/dashboard/rentaltable";
const DashboardPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars");
      const localData = getCars();
      setCars(localData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this car?")) {
      try {
        await deleteCar(id);
        setCars((prevCars) => prevCars.filter((car) => car.id !== id));
       
         toast.success("Car deleted successfully"); 
      } catch (error) {
         toast.error("Failed to delete car"); 
      }
    }
  };
 
  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="flex mt-[20px] gap-[20px]">
      <div className="flex-auto flex gap-[20px] flex-col ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] ">
          <Card />
          <Card />
          <Card />
        </div>
        <CarTable cars={cars} handleDelete={handleDelete} />
        {/* <CarTable cars={cars} handleDelete={handleDelete} />
        <CarChart /> */}
      </div>
    </div>
  );
};

export default DashboardPage