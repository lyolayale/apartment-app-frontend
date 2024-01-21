import { NavLink, useParams } from "react-router-dom";

export default function ApartmentShow({ apartments }) {
  const { id } = useParams();
  const currApartment = apartments?.find(apartment => apartment.id === +id);

  return (
    <section id="apartmen-show">
      <h2 className="text-center text-5xl mb-24">Apartment Listing</h2>
      {currApartment && (
        <section
          key={currApartment.id}
          className="pb-4 shadow-lg shadow-gray-800 w-[90%] md:w-[50%] max-w-screen-md mx-auto"
        >
          <img
            className="w-full h-[30rem] object-cover"
            src={currApartment.image}
            alt={`Apartment at ${currApartment.street}`}
          />
          <div className="w-[90%] mx-auto p-5">
            <p className="text-xl">{currApartment.price}</p>
            <p className="text-xl">{currApartment.street}</p>
            <p className="text-xl">
              {currApartment.city}, {currApartment.state} {currApartment.zip}
            </p>
            <p className="text-xl">
              {currApartment.bedrooms} Bedrooms, {currApartment.bathrooms} Baths
            </p>
            <NavLink to="/apartmentindex">
              <button className="text-xl mt-5 bg-gray-900 text-gray-50 p-2 px-4 hover:scale-105 duration-200">
                Back to Listings
              </button>
            </NavLink>
          </div>
        </section>
      )}
    </section>
  );
}
