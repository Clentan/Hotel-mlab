import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Miami from '../img/Dining/Miami.jpeg'
import Complex from '../img/Dining/Breakfast.jpeg'
import Drinks from '../img/Dining/Rectangle 32.jpg'

export default function App() {
  const list  = [
    {
      name: "Miami",
      photoName: Miami
    },
    {
      name: "Complex food",
      photoName: Complex
    },
    {
      name: "Drinks",
      photoName: Drinks
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0  ">
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
  );
}
