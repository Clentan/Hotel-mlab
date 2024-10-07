import { Link } from 'react-router-dom'
import Behind from '../img/top-top/behind.jpeg'
import Top from '../img/top-top/top.jpeg'


const About = () => {
  return (
    <div className="flex py-96 justify-evenly ">
      <div>
        <h1 className="text-white">About Us</h1>
        <h2 className="text-white">At Diamond Hotel </h2>
        <p className="font-bold">
        Enjoy comfort and elegance in every <br />
        room at Diamond Luxury Hotels. <br />
        Relax with luxurious bedding, modern amenities, and <br />
        breathtaking views for a perfect stay.
        </p><br />
        <Link to='About'>
        <i>
        <button className="bg-[rgb(46,31,31)] text-white w-44  rounded-full active:bg-slate-400" >READ MORE</button>
        </i>
        </Link>
      </div>
       <div className='-m-80'>
        <span >
            <img src={Behind} className='w-96 h-96 -mb-36 ml-44 rounded-md'  />
        </span>
        <span className="imageTwo">
        <img src={Top} className='w-auto h-96 mb-2 rounded-md'  />
        </span>
       </div>

    </div>
  )
}

export default About
