
import {DateRangePicker} from "@nextui-org/react";


const Booking = () => {
  return (

    <div className='py-44'>
<div className='Bar bg-white' >
      <form className="flex gap-10 ml-10" >
          <div>
          <label>Start Date::</label>
         
          </div>
          <div>
          <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    />
          </div>
        <div>
        <button
         type="submit"
         className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px -4 rounded-large w-36" 
        >Search</button>
        </div>
        </form>
      
    </div>

    </div>
    
  )
}

export default Booking
