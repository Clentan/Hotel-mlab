
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Spa() {

    const SpaPIc=
    [
        {
            name:"picture one",
            photoName:'Spa/hpuse.jpeg'
        },
        {
            name:"picture two",
            photoName:'Spa/lady.jpeg'
        },
        {
            name:"picture three",
            photoName:'Spa/R.jpeg'
        }
    ]
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 ">
    {SpaPIc.map((item,index)=>(
      <Card
        shadow="sm"
        key={index}
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-visible p-0   ">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.name} // Use item.name for alt text
            className="w-60 object-cover h-[400px]"
            src={item.photoName} 
          />
        </CardBody>
        <CardFooter className="text-small text-center">
          <b>{item.name}</b> 
        </CardFooter>
      </Card>
    ))}
  </div>
  )
}
