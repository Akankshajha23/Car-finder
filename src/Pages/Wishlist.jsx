import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlist.filter(car => car.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Your wishlist is empty 😢</h2>
        <Link to="/" className="text-blue-500 underline">Go find some cars</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map(car => (
          <div key={car.id} className="border rounded-lg p-4 shadow">
            <Link to={`/car/${car.id}`}>
              <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded mb-2" />
              <h2 className="text-lg font-bold">{car.name}</h2>
              <p>{car.brand} | {car.fuelType} | Seats: {car.seatingCapacity}</p>
              <p>${car.price}</p>
            </Link>
            <button
              onClick={() => handleRemove(car.id)}
              className="mt-2 px-4 py-1 rounded bg-red-500 text-white text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
