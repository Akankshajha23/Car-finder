import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCars } from "../api/cars";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    getCars({}).then((cars) => {
      const found = cars.find((c) => c.id === parseInt(id));
      if (!found) return navigate("/");
      setCar(found);
    });
  }, [id, navigate]);

  if (!car) return <p className="p-6">Loading car details...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-4">
      <img src={car.image} alt={car.name} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Fuel Type:</strong> {car.fuelType}</p>
      <p><strong>Seating Capacity:</strong> {car.seatingCapacity}</p>
      <p><strong>Price:</strong> ${car.price}</p>
      <button onClick={() => navigate(-1)} className="mt-4 bg-gray-200 px-4 py-2 rounded">
        ← Back
      </button>
    </div>
  );
}
