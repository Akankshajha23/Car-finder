import { useEffect, useState } from "react";
import { getCars } from "../api/cars";
import FilterBar from "../Components/FilterBar";
import CarCard from "../Components/CarCard";

const CARS_PER_PAGE = 10;

export default function Home() {
  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    fuelType: "",
    priceRange: null,
    sort: ""
  });

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getCars(filters).then(data => {
      // Apply sorting
      let sortedData = [...data];
      if (filters.sort === "lowToHigh") {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (filters.sort === "highToLow") {
        sortedData.sort((a, b) => b.price - a.price);
      }
  
      setCars(sortedData);
      setLoading(false);
    });
  }, [filters]);
  

  const handleWishlistToggle = (car) => {
    let updated;
    if (wishlist.some(w => w.id === car.id)) {
      updated = wishlist.filter(w => w.id !== car.id);
    } else {
      updated = [...wishlist, car];
    }
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  // Pagination logic
  const totalPages = Math.ceil(cars.length / CARS_PER_PAGE);
  const paginatedCars = cars.slice(
    (currentPage - 1) * CARS_PER_PAGE,
    currentPage * CARS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 space-y-6">
      <FilterBar filters={filters} setFilters={setFilters} />

      {loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, index) => (
      <CarCard key={index} skeleton />
    ))}
  </div>
) : (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {paginatedCars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          isWishlisted={wishlist.some(w => w.id === car.id)}
          onWishlistToggle={handleWishlistToggle}
        />
      ))}
    </div>

    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 py-1 rounded ${
            index + 1 === currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </>
)}

    </div>
  );
}
