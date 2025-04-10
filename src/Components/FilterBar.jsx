export default function FilterBar({ filters, setFilters }) {
  const brands = ["All", "Honda", "Tesla","MG", "Maruti","Audi", "Mercedez","Ford"];
  const fuelTypes = ["All", "Petrol", "Diesel", "Electric"];

  const handleInputChange = (e) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value === "All" ? "" : e.target.value,
    }));
  };

  return (
    <div className="p-4 flex flex-wrap gap-4 bg-gray-50 dark:bg-gray-800 rounded-md">
      <input
        type="text"
        name="search"
        placeholder="Search cars..."
        value={filters.search}
        onChange={handleInputChange}
        className="p-2 border rounded w-60 dark:bg-gray-700 dark:text-white"
      />

      <select name="brand" value={filters.brand} onChange={handleInputChange} className="p-2 border rounded dark:bg-gray-700 dark:text-white">
        {brands.map(b => <option key={b}>{b}</option>)}
      </select>

      <select name="fuelType" value={filters.fuelType} onChange={handleInputChange} className="p-2 border rounded dark:bg-gray-700 dark:text-white">
        {fuelTypes.map(f => <option key={f}>{f}</option>)}
      </select>

      <select name="sort" value={filters.sort} onChange={handleInputChange} className="p-2 border rounded dark:bg-gray-700 dark:text-white">
        <option value="">Sort by</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
}
