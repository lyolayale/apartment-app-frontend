import { NavLink, useParams } from "react-router-dom";

export default function ApartmentShow({ apartments }) {
  const { id } = useParams();
  const currApartment = apartments?.find(apartment => apartment.id === +id);

  return (
    <section
      id="apartmen-show"
      className="mx-auto h-110vh max-w-screen-lg p-20"
    >
      <h2
        className="text-center text-[darkkhaki] text-5xl mb-24"
        style={{ textShadow: "0 7px 10px rgba(100, 100, 100, 0.3)" }}
      >
        Apartment Listing
      </h2>
      {currApartment && (
        <div className="flex flex-col md:flex-row justify-center items-start">
          <section
            key={currApartment.id}
            className="pb-4 shadow-lg shadow-gray-800 w-[90%] max-w-screen-lg mx-auto"
          >
            <img
              className="w-full h-[30rem] object-cover"
              src={currApartment.image}
              alt={`Apartment at ${currApartment.street}`}
            />
            <div className="w-[90%] mx-auto p-5">
              <p className="text-xl">${currApartment.price} Mth.</p>
              <p className="text-xl">{currApartment.street}</p>
              <p className="text-xl">
                {currApartment.city}, {currApartment.state} {currApartment.zip}
              </p>
              <p className="text-xl">
                {currApartment.bedrooms} Bedrooms, {currApartment.bathrooms}{" "}
                Baths
              </p>
              <NavLink to="/apartmentindex">
                <button className="text-xl mt-5 bg-gray-900 text-gray-50 p-2 px-4 hover:scale-105 duration-200">
                  Back to Listings
                </button>
              </NavLink>
            </div>
          </section>
          <section className="w-[90%] mx-auto flex flex-col justify-center items-center gap-10 mt-10 md:mt-0">
            <img
              className="w-[20rem] md:w-[12rem] md:hover:scale-[2] md:hover:m-40 md:hover:shadow md:shadow-lg md:hover:shadow-gray-800 md:hover:rounded-md duration-500"
              src={currApartment.inside1}
              alt="Interior apartment"
            />
            <img
              className="w-[20rem] md:w-[12rem] md:hover:scale-[2] md:hover:my-40 md:hover:shadow md:shadow-lg md:hover:shadow-gray-800 md:hover:rounded-md duration-500"
              src={currApartment.inside3}
              alt="Interior apartment"
            />
            <img
              className="w-[20rem] md:w-[12rem] md:hover:scale-[2] md:hover:my-40 md:hover:shadow md:shadow-lg md:hover:shadow-gray-800 md:hover:rounded-md duration-500"
              src={currApartment.inside2}
              alt="Interior apartment"
            />
          </section>
        </div>
      )}
    </section>
  );
}
