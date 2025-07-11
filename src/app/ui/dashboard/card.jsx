"user client"

import { MdCarRental } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div
      className="w-full p-[20px] flex cursor-pointer bg-[#182237] rounded-[10px] gap-[20px]
       hover:[#2e374a] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 "
    >
      <MdCarRental size={34} />
      <div className="flex flex-col gap-[20px]">
        <span className="text-[24px] font-bold text-[#5f7094]">New Car Arrived</span>
        <span className="text-[14px] ">10</span>
        <span className="text-[14px]">
          <span className={item?.change > 0 ? "text-lime-500" : "text-red-500"}>
            10%
          </span>{" "}
          {"item.change " > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
