// src/Components/CarCard.jsx
import { motion } from "framer-motion";

export default function CarCard({ car, isWishlisted, onWishlistToggle }) {
  if (!car) return null;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 hover:shadow-2xl transition duration-300 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={car.image || "https://via.placeholder.com/300x150?text=No+Image"}
        alt={car.name || "Car Image"}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{car.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Brand: {car.brand}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Fuel: {car.fuelType}</p>
        <p className="text-base font-bold text-green-600 dark:text-green-400">₹{car.price}</p>
        <button
          onClick={() => onWishlistToggle(car)}
          className={`mt-2 px-3 py-1 text-sm rounded-full transition-colors ${
            isWishlisted
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {isWishlisted ? "❤️ Wishlisted" : "♡ Add to Wishlist"}
        </button>
      </div>
    </motion.div>
  );
}
