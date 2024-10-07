import { useState } from "react"; 
import { Link } from "react-router-dom";

const Questions = () => {
  const [show, SetShow] = useState(false); 
  const [show1, SetShow1] = useState(false);
  const [show3, SetShow3] = useState(false);
 

  return (
    <div className="gap-8 flex flex-col justify-center items-center py-14 px-8">
      {/* Question 1 */}
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center underline decoration-wavy">
          <span>Can I host an event or meeting at the hotel?</span>
          <button onClick={() => SetShow((show) => !show)}>
            {show ? "➖" : "➕"}
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${show ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'} origin-top`}>
          <p className="bg-white text-black rounded-md p-4 mt-2">
            Yes, you can book our conference room or event space. <br /> 
            Please contact the front desk for more details.
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center underline decoration-wavy">
          <span>Do you have a fitness center or pool?</span>
          <button onClick={() => SetShow1((show1) => !show1)}>
            {show1 ? "➖" : "➕"}
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${show1 ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'} origin-top`}>
          <p className="bg-white text-black rounded-md p-4 mt-2">
            Yes, we have a fitness center and <br /> an outdoor pool. Please contact the front desk for more.
          </p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center underline decoration-wavy">
          <span>Are pets allowed in the hotel?</span>
          <button onClick={() => SetShow3((show3) => !show3)}>
            {show3 ? "➖" : "➕"}
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-700 ease-in-out transform ${show3 ? 'max-h-screen opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'} origin-top`}>
          <p className="bg-white text-black rounded-md p-4 mt-2">
            Yes, pets are allowed in the hotel. <br /> 
            Please contact the front desk for more details.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center gap-4 py-10">
        <h3 className="text-2xl font-bold">Have More Questions?</h3>
        <Link to="/Contact">
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;
