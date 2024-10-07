
import Bag from "../img/background.jpg";
import About from "../component/About";
import OurChoice from '../component/OurChoice'
import Gallery from "../component/Gallery";
import Center from '../component/Offers'
import Place from "../component/place";
import Grid from "../component/Grid";
import Faqs from "../component/Faqs";
import Qustions from "../component/Qustions";



const Homepage = () => {
  return (
    <div className="background ">
      <img src={Bag} alt="Background" />
      <div className="Bar bg-white">
        <form className="flex gap-10 ml-10 bg-white" >
          <div>
          <label>Start Date::</label>
          <input type="date" name="start" />
          </div>
          <div>
          <label>End Date::</label>
          <input type="date" name="end"  />
          </div>
        <div>
        <button
         type="submit"
         className=" hover:bg-gray-700 text-black font-bold py-2 px -4 rounded-large"
        >Check Avaibility</button>
        </div>
        </form>
    </div>
    <About/>
    <OurChoice/>
    <Gallery/>
    <Center/>
    <Place/>
    <Grid/>
    <Faqs/>
    <Qustions/>
    </div>
  );
};

export default Homepage;
