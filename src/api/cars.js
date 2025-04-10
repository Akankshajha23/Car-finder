import vernaImg from "../assets/verna.png"
import cityImg from "../assets/city.png"
import fortunerImg from "../assets/fortuner.png"
import nexonImg from "../assets/nexon.png"
import swiftImg from "../assets/swift.png"
import seltosImg from "../assets/seltos.png"
import tharImg from "../assets/thar.png"
import hectorImg from "../assets/hector.png"
import kigerImg from "../assets/kiger.png"
import ecosportImg from "../assets/eco.png"
import compassImg from "../assets/compass.png"
import kushaqImg from "../assets/kushaq.png"
import poloImg from "../assets/polo.png"
import bmwImg from "../assets/bmw.png"
import audiImg from "../assets/audi.png"
import mcImg from "../assets/mc.png"
import iImg from "../assets/i20.png"
import amazeImg from "../assets/amaze.png"
import balenoImg from "../assets/baleno.png"
import tataImg from "../assets/tata.png"






// Mock car data


export const carList = [
  {
    id: 1,
    name: "Hyundai Verna",
    brand: "Hyundai",
    fuelType: "Petrol",
    price: 13000,
    image: vernaImg
  },
  {
    id: 2,
    name: "Honda City",
    brand: "Honda",
    fuelType: "Diesel",
    price: 15000,
    image: cityImg    
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    brand: "Toyota",
    fuelType: "Diesel",
    price: 27000,
    image: fortunerImg
  },
  {
    id: 4,
    name: "Tata Nexon",
    brand: "Tata",
    fuelType: "Petrol",
    price: 12000,
    image: nexonImg
  },
  {
    id: 5,
    name: "Maruti Swift",
    brand: "Maruti",
    fuelType: "Petrol",
    price: 9000,
    image: swiftImg,
  },
  {
    id: 6,
    name: "Kia Seltos",
    brand: "Kia",
    fuelType: "Diesel",
    price: 16000,
    image: seltosImg,
  },
  {
    id: 7,
    name: "Mahindra Thar",
    brand: "Mahindra",
    fuelType: "Diesel",
    price: 20000,
    image: tharImg,
  },
  {
    id: 8,
    name: "MG Hector",
    brand: "MG",
    fuelType: "Petrol",
    price: 22000,
    image: hectorImg,
  },
  {
    id: 9,
    name: "Renault Kiger",
    brand: "Renault",
    fuelType: "Petrol",
    price: 11000,
    image: kigerImg,
  },
  {
    id: 10,
    name: "Ford EcoSport",
    brand: "Ford",
    fuelType: "Diesel",
    price: 17000,
    image: ecosportImg,
  },
  {
    id: 11,
    name: "Jeep Compass",
    brand: "Jeep",
    fuelType: "Diesel",
    price: 25000,
    image: compassImg,
  },
  {
    id: 12,
    name: "Skoda Kushaq",
    brand: "Skoda",
    fuelType: "Petrol",
    price: 18000,
    image: kushaqImg,
  },
  {
    id: 13,
    name: "Volkswagen Polo",
    brand: "Volkswagen",
    fuelType: "Petrol",
    price: 10000,
    image: poloImg,
  },
  {
    id: 14,
    name: "BMW X1",
    brand: "BMW",
    fuelType: "Diesel",
    price: 42000,
    image: bmwImg,
  },
  {
    id: 15,
    name: "Mercedes GLA",
    brand: "Mercedes",
    fuelType: "Petrol",
    price: 45000,
    image: mcImg,
  },
  {
    id: 16,
    name: "Audi Q3",
    brand: "Audi",
    fuelType: "Diesel",
    price: 48000,
    image: audiImg,
  },
  {
    id: 17,
    name: "Hyundai i20",
    brand: "Hyundai",
    fuelType: "Petrol",
    price: 9500,
    image: iImg,
  },
  {
    id: 18,
    name: "Honda Amaze",
    brand: "Honda",
    fuelType: "Diesel",
    price: 12000,
    image: amazeImg,
  },
  {
    id: 19,
    name: "Maruti Baleno",
    brand: "Maruti",
    fuelType: "Petrol",
    price: 11000,
    image: balenoImg,
  },
  {
    id: 20,
    name: "Tata Harrier",
    brand: "Tata",
    fuelType: "Diesel",
    price: 24000,
    image: tataImg,
  },
];

export function getCars(filters) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = carList;

      if (filters.search) {
        filtered = filtered.filter(car =>
          car.name.toLowerCase().includes(filters.search.toLowerCase())
        );
      }

      if (filters.brand) {
        filtered = filtered.filter(car => car.brand === filters.brand);
      }

      if (filters.fuelType) {
        filtered = filtered.filter(car => car.fuelType === filters.fuelType);
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        filtered = filtered.filter(car => car.price >= min && car.price <= max);
      }

      resolve(filtered);
    }, 1000); // simulates API delay
  });
}