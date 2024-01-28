import inside1 from "./assets/images/inside-1-0.webp";
import inside2 from "./assets/images/inside-1-1.webp";
import inside3 from "./assets/images/inside-1-2.webp";
import inside4 from "./assets/images/inside-1-3.jpeg";
import inside5 from "./assets/images/inside-1-4.jpeg";
import inside6 from "./assets/images/inside-1-5.webp";
import inside7 from "./assets/images/inside-1-6.webp";
import inside8 from "./assets/images/inside-1-7.webp";
import inside9 from "./assets/images/inside-1-8.webp";

let mockApartments = [
  {
    id: 1,
    street: "101 Rimrock",
    unit: "9A",
    city: "San Diego",
    state: "CA",
    zip: 12345,
    square_footage: 500,
    price: "1800",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1601971990427-f5d21086eb41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
    inside1: inside1,
    inside2: inside2,
    inside3: inside3,
    user_id: 1,
  },
  {
    id: 2,
    street: "720 Second Avenue",
    unit: "508",
    city: "San Diego",
    state: "CA",
    zip: 23456,
    square_footage: 700,
    price: "2500",
    bedrooms: 2,
    bathrooms: 2.0,
    pets: "yes!",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
    inside1: inside4,
    inside2: inside6,
    inside3: inside5,
    user_id: 1,
  },
  {
    id: 3,
    street: "415 Rainbow Street",
    unit: "3B",
    city: "San Diego",
    state: "CA",
    zip: 34567,
    square_footage: 400,
    price: "2000",
    bedrooms: 1,
    bathrooms: 2.0,
    pets: "small pets okay",
    image:
      "https://images.unsplash.com/photo-1585129777188-94600bc7b4b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
    inside1: inside7,
    inside2: inside9,
    inside3: inside8,
    user_id: 2,
  },
];

export default mockApartments;
