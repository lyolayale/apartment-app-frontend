import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApartmentNew({ onCreateApartment, currentUser }) {
  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    zip: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    id: currentUser?.id,
  });
  const navigative = useNavigate();

  function handleChange(e) {
    setNewApartment(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCreateApartment(newApartment);
    navigative("/userapartments");
  }

  return (
    <section className="w-full h-screen">
      <h2 className="text-center text-3xl sm:text-5xl mt-0">
        Create New Apartment Listing
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-center items-start mt-12 w-[80%] lg:w-[40%] xl:w-[30%] p-5 mx-auto shadow-lg shadow-black"
      >
        <h2 className="text-2xl sm:text-3xl mb-5 underline">New Apartment</h2>

        <input
          onChange={handleChange}
          placeholder="Enter street"
          name="street"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter unit"
          name="unit"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
        />

        <input
          onChange={handleChange}
          placeholder="Enter city"
          name="city"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter state"
          name="state"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter zipcode"
          name="zip"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter square footage"
          name="square-footage"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter price"
          name="price"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter city"
          name="city"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter bedrooms"
          name="bedrooms"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter bathrooms"
          name="bathrooms"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter pets"
          name="pets"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />

        <input
          onChange={handleChange}
          placeholder="Enter image URL"
          name="image"
          type="text"
          className="p-1 px-2 w-full bg-transparent border border-1 border-gray-400 rounded-md focus:outline-gray-50"
          required
        />
        <button
          onClick={handleSubmit}
          className="block text-xl mx-auto w-full p-2 bg-gray-900 text-gray-50 rounded-md mt-10 hover:bg-gray-700 duration-200"
        >
          Create Listing
        </button>
      </form>
    </section>
  );
}
