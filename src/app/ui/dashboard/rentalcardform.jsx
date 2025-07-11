"use client";
import { fetchCarById, updateCar } from "@/app/data";
import { createCar } from "@/app/services/carService";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
export default function CarForm({ carId }) {
  const isEdit = !!carId;

  const [inputData, setInputData] = useState({
    make: "",
    model: "",
    year: "",
    dailyRate: "",
    status: "pending",
  });

  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const loadCar = () => {
    try {
      const car = fetchCarById(carId);
      setInputData({
        make: car.make,
        model: car.model,
        year: car.year,
        dailyRate: car.dailyRate,
        status: car.status,
        PricePerDay: car.PricePerDay,
        location: car?.location,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
   
      loadCar();
    }
  }, [carId, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (isEdit) {
        updateCar(carId, inputData);
         toast.success("Updated Success");
        window.location.href = "/dashboard";
      } else {
        await createCar(inputData);
         toast.success("Car created successfully!");
        window.location.href = "/dashboard";
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading car data...</div>;

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Loading car data...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {isEdit ? "Edit Car" : "Add New Car"}
      </h1>

      <form onSubmit={handleSubmit} className="flex-col">
        <div className="flex w-full gap-[20px] pb-[10px]">
          <div className="flex flex-col w-1/2 ">
            <label className="pb-[10px]">Brand Name</label>
            <input
              type="text"
              placeholder="Brand Name"
              name="make"
              value={inputData.make}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="pb-[10px]">Model</label>
            <input
              type="text"
              placeholder="Model"
              name="model"
              value={inputData.model}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-[20px] pb-[10px]">
          <div className="flex flex-col w-1/2 ">
            <label className="block mb-1">Year</label>
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={inputData.year}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
              min="1900"
              max={new Date().getFullYear() + 1}
              required
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="block mb-1">Daily Rate ($)</label>
            <input
              type="number"
              name="dailyRate"
              placeholder="Daily Rate"
              value={inputData.dailyRate}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
              min="1"
              step="0.01"
              required
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="block mb-1">Price PerDay</label>
            <input
              type="number"
              name="PricePerDay"
              placeholder="Price PerDay"
              value={inputData.PricePerDay}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
              min="1"
              step="0.01"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-[20px] pb-[10px]">
          <div className="flex flex-col w-1/2 ">
            <label className="pb-[10px]">Location</label>
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={inputData.location}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
            />
          </div>
          <div className="flex flex-col w-1/2 ">
            <label className="mb-1">Status</label>
            <select
              name="status"
              value={inputData.status}
              onChange={handleChange}
              className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
              required
            >
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Update Car" : "Add Car"}
        </button>
      </form>
    </div>
  );
}
