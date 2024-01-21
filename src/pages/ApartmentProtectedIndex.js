import { NavLink } from "react-router-dom";

export default function ApartmentProtectedIndex({
  myApartments,
  onDeleteMyApartment,
}) {
  return (
    <section id="apartment-protected-index">
      <h2 className="text-center text-5xl mb-24">My Listings</h2>
      <ul className="list-none flex flex-col justify-center items-center gap-5 md:flex-row md:justify-evenly">
        {myApartments.map(apartment => (
          <li key={apartment.id} className="pb-4 shadow-lg shadow-gray-800">
            <img
              className="w-[20rem] h-[30rem]"
              src={apartment.image}
              alt={`Apartment at ${apartment.street}`}
            />
            <section className="w-[90%] mx-auto p-5">
              <p>{apartment.price}</p>
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

              <div className="flex justify-start items-center gap-5">
                <NavLink to={`/apartmentedit/${apartment.id}`}>
                  <button className="mt-5 bg-gray-500 text-gray-50 p-2 px-4 hover:scale-105 duration-200">
                    Edit
                  </button>
                </NavLink>

                <button
                  onClick={() => onDeleteMyApartment(apartment.id)}
                  className="mt-5 bg-red-900 text-gray-50 p-2 px-4 hover:scale-105 duration-200"
                >
                  Delete Listing
                </button>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
