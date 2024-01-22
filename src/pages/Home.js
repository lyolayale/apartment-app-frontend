import apartment1 from "../assets/images/inside-apartment-1.avif";
import apartment2 from "../assets/images/inside-apartment-2.avif";
import apartment3 from "../assets/images/inside-apartment-3.avif";

export default function Home() {
  const apartments = [
    {
      name: "The Veranda",
      beds: "1",
      price: "$900 - $1100",
      image: apartment1,
      btnText: "⇩ price drop",
      bgColor: "orange",
      hover: "orange",
    },
    {
      name: "Trail Ride Apartments",
      beds: "1",
      price: "$1500 - $2000",
      image: apartment2,
      btnText: "💵 rent special",
      bgColor: "green",
    },
    {
      name: "The Monument Place",
      beds: "2",
      price: "$1200 - $1700",
      image: apartment3,
      btnText: "💎 best value",
      bgColor: "blue",
    },
  ];
  return (
    <section className="w-full h-full pb-44">
      <div
        id="finder"
        className="mx-auto h-screen flex flex-col justify-center items-center gap-5 mb-24 bg-slate-700 py-10"
      >
        <div
          id="home-text"
          className="w-3/4 mr-10 lg:w-full lg:mr-0 mx-auto flex flex-col justify-center items-center"
        >
          <h1 className="text-[3.2rem] text-yellow-100 tracking-wide">
            Stunning Apartments. Amazing Bargins.
          </h1>
          <p className="text-gray-50 text-5xl font-thin tracking-wide">
            Find that perfect apartment.
          </p>
        </div>
        <div className="w-3/5 text-2xl">
          <input
            placeholder="Atlanta, GA"
            className="w-full mb-5 lg:mb-0 lg:w-2/4 p-[1.1rem] rounded md:rounded-none md:rounded-l-md focus:outline-none"
            type="text"
          />
          <select className="hidden lg:inline w-1/6 p-[1.14rem] border-l-2 border-slate-500 text-gray-500 focus:outline-none">
            <option value="">Beds</option>
            <option value="any">Any</option>
            <option value="studio">Studio</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
            <option value="3">3 Beds</option>
            <option value="4">4+ Beds</option>
          </select>
          <select className="hidden lg:inline w-1/6 p-[1.14rem] border-l-2 border-r-2 border-slate-500 text-gray-500 focus:outline-none">
            <option value="">Price</option>
            <option value="no minimum">No Minimum</option>
            <option value="500">$500</option>
            <option value="700">$700</option>
            <option value="1000">$1000</option>
            <option value="1500">$1500</option>
          </select>
          <button className="w-full lg:w-1/6 p-[1.11rem] rounded md:rounded-none md:rounded-r-md  border-slate-500 bg-yellow-100 text-gray-600">
            Search
          </button>
        </div>
      </div>
      <div id="apartment-cards-wrapper" className="mt-12 px-4 lg:px-0">
        <h3
          className="text-center text-2xl md:text-4xl text-gray-800 tracking-wide"
          style={{ textShadow: "0 5px 5px rgba(100, 100, 100, 0.5)" }}
        >
          Top Apartment Bargins in Altanta, GA
        </h3>
        <ul
          id="apartment-cards"
          className="mt-24 list-none flex flex-col lg:flex-row justify-center items-center gap-10 p-5"
        >
          {apartments.map((apartment, i) => (
            <li
              key={i}
              className="group flex flex-col justify-center items-center gap-2 w-3/4 sm:w-3/6 xl:w-1/4 h-[100%] pb-7 rounded-md border border-1 border-gray-300 shadow-md hover:scale-110 duration-100"
            >
              <img
                className="object-cover rounded-t-md w-full"
                src={apartment.image}
                alt="Inside of an apartment."
              />
              <div className="p-3">
                <h5 className="text-xl md:text-2xl text-gray-800 font-light">
                  {apartment.name}
                </h5>
                <p className="text-sm md:text-base text-gray-700">
                  Apartments - {apartment.beds} Beds | {apartment.price}
                </p>
              </div>
              <button
                className={`text text-gray-700 rounded-3xl font-bold uppercase border border-1 border-${apartment.bgColor}-500 p-2 w-44 group-hover:border-slate-700 group-hover:bg-gray-400 group-hover:text-white group-hover:shadow-md hover:scale-105 duration-100`}
              >
                {apartment.btnText}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="h-1/4 text-center mt-12 text-4xl font-thin tracking-wide">
        <span className="text-slate-500 font-medium cursor-pointer">
          View All Apartments
        </span>{" "}
        in Altanta, GA
      </h3>
    </section>
  );
}
