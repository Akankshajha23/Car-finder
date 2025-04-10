import { Link } from 'react-router-dom';
import { toggleTheme } from '../utils/Theme';
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Your Next Car</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/wishlist" className="text-sm">Wishlist</Link>
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Moon className="w-4 h-4 dark:hidden" />
          <Sun className="w-4 h-4 hidden dark:inline" />
        </button>
      </div>
    </nav>
  );
}
