import Heroimage from "../assets/heroimage.jpg";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 md:px-0">
      
      <div className="mx-0 md:mx-10 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold my-5">
          Welcome to <br /> Raccoon City Survivors
        </h1>
        <p className="text-gray-600 px-4 md:px-0">
          On this page you will receive updates on RE franchise
        </p>
        <button className="bg-blue-700 rounded-2xl text-white p-2 mt-6 hover:bg-blue-800 transition-colors">
          Register Now 
        </button>
      </div>

      <div>
        <img
          className="w-full max-w-[500px] h-auto mr-0 md:mr-20 px-4 md:px-0"
          src={Heroimage}
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Hero;