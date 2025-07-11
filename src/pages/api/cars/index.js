import { addCar, getCars } from "@/app/data";
export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const cars = getCars();
      res.status(200).json(cars);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch cars" });
    }
  } else if (req.method === "POST") {
    try {
      const newCar = addCar(req.body);
      res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ error: "Failed to create car" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
