
"use client"
import Link from "next/link";
import Search from "./Search";
import { useState } from "react";
import { simpleSearch } from "@/app/data";
const CarTable = ({ cars, handleDelete = () => { } }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);
  const filteredCars = simpleSearch(
    cars,
    searchTerm,
    statusFilter === "all" ? "" : statusFilter
  );
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-[20px] rounded-[10px] bg-[#182237]">
      <h2 className="text-[#7bac1] font-bold mb-5 text-lg md:text-xl">
        Latest Transactions
      </h2>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Search
            placeholder="Search for a user..."
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
          <div
            className="w-full p-[10px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] 
          text-[var(--text)] "
          >
            <select
              className="w-full p-[10px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <Link href={`/dashboard/car-rental/addrental`}>
          <button className="p-2 bg-[#5d57c9] text-[var(--text)] border-none rounded-md cursor-pointer w-full">
            Add New
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full min-w-[700px] text-sm text-left">
          <thead>
            <tr>
              <td className="p-[10px]">Name</td>
              <td className="p-[10px]">Model</td>
              <td className="p-[10px]">Amount</td>
              <td className="p-[10px]">Year</td>
              <td className="p-[10px]">Status</td>
              <td className="p-[10px]">Action</td>
            </tr>
          </thead>
          <tbody>
            {currentCars.length > 0 ? (
              currentCars.map((car, index) => (
                <tr className="" key={index}>
                  <td className="p-[10px]">{car?.make}</td>
                  <td className="p-[10px]">{car?.model}</td>
                  <td className="p-[10px]">{car?.PricePerDay}</td>
                  <td className="p-[10px]">{car?.year}</td>
                  <td className="p-[10px]">
                    {car.status === "pending" ? (
                      <span className="text-gray-600 font-semibold">
                        Pending
                      </span>
                    ) : car.status === "approved" ? (
                      <span className="text-green-600 font-semibold">
                        Approved
                      </span>
                    ) : car.status === "rejected" ? (
                      <span className="text-red-600 font-semibold">
                        Rejected
                      </span>
                    ) : (
                      <span className="text-orange-600 font-semibold capitalize">
                        {car.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="flex gap-[10px]">
                      <Link href={`/dashboard/car-rental/${car?.id}`}>
                        <button className="px-2.5 py-1.5 rounded text-[var(--text)] border-none cursor-pointer bg-teal-400">
                          Edit
                        </button>
                      </Link>
                      <div>
                        <input type="hidden" name="id" value="" />
                        <button
                          onClick={() => handleDelete(car?.id)}
                          className="px-2.5 py-1.5 rounded text-[var(--text)] border-none cursor-pointer bg-red-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 px-4 border text-center">
                  No cars found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="block md:hidden space-y-4">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
            <div key={index} className="bg-[#1f2a3a] p-4 rounded shadow-md">
              <div className="text-white font-semibold mb-2">
                {car?.make} {car?.model}
              </div>
              <div className="text-sm text-gray-300">
                <p>
                  <span className="font-medium text-white">Amount:</span> ₹
                  {car?.PricePerDay}
                </p>
                <p>
                  <span className="font-medium text-white">Year:</span>{" "}
                  {car?.year}
                </p>
                <p>
                  <span className="font-medium text-white">Status:</span>{" "}
                  {car.status === "pending" ? (
                    <span className="text-gray-400">Pending</span>
                  ) : car.status === "approved" ? (
                    <span className="text-green-500">Approved</span>
                  ) : car.status === "rejected" ? (
                    <span className="text-red-500">Rejected</span>
                  ) : (
                    <span className="text-orange-500 capitalize">
                      {car.status}
                    </span>
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Link href={`/dashboard/car-rental/${car?.id}`}>
                  <button className="w-full bg-teal-500 text-white py-2 rounded text-sm">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(car?.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No cars found</p>
        )}
      </div>
      {filteredCars.length > carsPerPage && (
        <div className="flex justify-end mt-4 p-4">
          <nav className="inline-flex rounded-md shadow">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-md border flex cursor-pointer border-gray-300 bg-purple-100 text-purple-500 hover:bg-gray-50 disabled:opacity-50"
            >
              
              Previous
            </button>
            <span className="p-2"> {currentPage}</span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-md cursor-pointer border border-gray-300 bg-purple-100 text-purple-500 hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default CarTable;
