import Bag from "../img/background.jpg";
import About from "../component/About";
import OurChoice from '../component/OurChoice';
import Gallery from "../component/Gallery";
import Center from '../component/Offers';
import Place from "../component/place";
import Grid from "../component/Grid";
import Faqs from "../component/Faqs";
import Qustions from "../component/Qustions";

const Homepage = () => {
  return (
    <div className="relative">
      <img src={Bag} alt="Background" className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 p-5">
        <div className="Bar bg-white rounded-lg shadow-lg p-5">
          <form className="flex gap-10 justify-center">
            <div>
              <label className="block text-gray-700">Start Date:</label>
              <input
                type="date"
                name="start"
                className="border rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date:</label>
              <input
                type="date"
                name="end"
                className="border rounded-md p-2 mt-1"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition"
              >
                Check Availability
              </button>
            </div>
          </form>
        </div>
        
        <About />
        <OurChoice />
        <Gallery />
        <Center />
        <Place />
        <Grid />
        <Faqs />
        <Qustions />

        {/* Embedded Map Section */}
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">Our Location</h2>
          <div className="w-full max-w-4xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14678.858100529444!2d30.6992065!3d36.8890468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3901cc0c3cab1%3A0x86857e2c474a1613!2sK%C4%B1%C5%9Fla%2C%20Diamond%20luxury%20Hotel%2C%2040.%20Sk.%20No%2029%2C%2007040%20Muratpa%C5%9Fa%2FAntalya%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2sin!4v1636686681918"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Embedded Map"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
