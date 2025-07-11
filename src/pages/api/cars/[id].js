import { fetchCarById, updateCar } from "@/app/data";
export default function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const car = fetchCarById(Number(id));
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ error: "Car not found" });
      }
      break;

    case "PUT":
      const updatedCar = updateCar(Number(id), req.body);
      if (updatedCar) {
        res.status(200).json(updatedCar);
      } else {
        res.status(404).json({ error: "Car not found" });
      }
      break;

    case "DELETE":
      deleteCar(Number(id));
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
