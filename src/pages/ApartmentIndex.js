import { NavLink } from "react-router-dom";

export default function ApartmentIndex({ apartments }) {
  return (
    <section id="apartment-index" className="h-[210vh] md:h-screen">
      <h2 className="text-center text-5xl mb-24">All Apartment Listings</h2>
      <ul className="list-none flex flex-col justify-center items-center gap-5 md:flex-row md:justify-evenly w-[90%] mx-auto">
        {apartments.map(apartment => (
          <li key={apartment.id} className="pb-4 shadow-lg shadow-gray-800">
            <img
              className="w-[20rem] h-[30rem]"
              src={apartment.image}
              alt={`Apartment at ${apartment.street}`}
            />
            <div className="w-[90%] mx-auto p-5">
              <p>${apartment.price} Mth.</p>
              <p>{apartment.street}</p>
              <p>
                {apartment.city}, {apartment.state} {apartment.zip}
              </p>
              <p>
                {apartment.bedrooms} Bedrooms, {apartment.bathrooms} Baths
              </p>
              <NavLink to={`/apartmentshow/${apartment.id}`}>
                <button className="mt-5 bg-gray-900 text-gray-50 p-2 px-4 hover:scale-105 duration-200">
                  More Details
                </button>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
