
import Left from '../img/Gallery/left.jpeg'
import BottolLeft from '../img/Gallery/rightTop.jpeg'
import Right from '../img/Gallery/rightBottom.jpeg'
import Bottom from '../img/Gallery/middleBottom.jpeg'
import {Image} from "@nextui-org/react";

const Gallery = () => {
  return (
<div>
    <div className=' flex  justify-center gap-10 py-24'>
        <div className='first'>
           
            <Image isZoomed width={240} alt="NextUI Fruit Image with Zoom" src={Left} className='h-96 w-80'/>
            <h2 className='firstLetter'>$100/night</h2>
        </div>
        <div className='second'> 
            <img src={BottolLeft} alt="Gallery "   className='h-96 w-auto'/>
            
            <h2 className='firstLetter'>$700/night</h2>
        </div>
    </div>
    <div className=' flex justify-center -mt-24 gap-9'>
        <div className=''>
            <Image isZoomed width={240} src={Left} alt="Gallery" className='h-80 w-60'/>
            <h2  className='secondLetter'>$100/night</h2>
        </div>
        <div className=''> 
            <Image isZoomed width={240} src={Bottom} alt="Gallery"  className='h-80 w-60'/>
            <h2 className='secondLetter'>$200/night</h2>
        </div>
        <div className=''> 
            <Image isZoomed width={240} src={Right} alt="Gallery"  className='h-80 w-60'/>
            <h2 className='secondLetter'>$700/night</h2>
        </div>
    </div>
    

    </div>
    
  )
}

export default Gallery
