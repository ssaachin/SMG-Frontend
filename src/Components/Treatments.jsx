import Data from "../Data/Treatment_Data.json";
import { TbMassage } from "react-icons/tb";

export default function Treatments() {
  return (
    <section id="treatments" className="justify-center p-10">
      <header className="tracking-tighter text-5xl px-10"><TbMassage />Treatments</header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
        {Data.map((data) => (
          <div
            key={data.Name}
            className="bg-00233d text-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={data.Image}
                alt={data.Name}
                className="bg-cover w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <header className="text-3xl">{data.Name}</header>
              <p className="text-gray-300">{data.Description}</p>
              <ul className="mt-4 text-center text-gray-300">
                <li>30 Minutes / <span className="text-white">{data.Cost[0].Price_One}</span></li>
                <li>60 Minutes / <span className="text-white">{data.Cost[0].Price_Two}</span></li>
                <li>90 Minutes / <span className="text-white">{data.Cost[0].Price_Three}</span></li>
              </ul>
              <div className="flex justify-end">
                <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
