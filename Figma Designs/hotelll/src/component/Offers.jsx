import { Link } from 'react-router-dom'
import Center from '../img/Gallery/Interior Design Ideas.jpeg'



const Offers = () => {

  return (
    <div className='flex justify-center gap-10 py-32 -ml-14'>
        <div>
            <img src={Center} alt='bacground' className='h-full w-[500px]'/>
        </div>
        <div>
            <h2 className='text-white'>FEATURED OFFER</h2>
            <p>Discover the perfect blend <br /> of affordability  and comfort <br /> in our Economy Luxe <br /> Room. Enjoy stylish décor <br />, cozy bedding, 
and modern <br />
 amenities for a relaxing <br /> stay at Diamond Luxury <br /> Hotels.</p>
 <br />
            <p><em className='font-bold'>25%</em> Discount stay 6 months <br /> or more</p>
            <br />
            <p><em className='font-bold'>10%</em> Discount stay 2 months <br /> or more</p>

            <Link to='/Booking'>
            <i>
                <button className='bg-black hover:bg-orange-700 text-white font-bold py-
                2 px-4 rounded mt-48'>Book Now</button>
            </i>
            </Link>
          
        </div>
    </div>
  )
}

export default Offers
