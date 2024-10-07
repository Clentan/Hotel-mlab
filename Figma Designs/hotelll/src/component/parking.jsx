import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Parking = () => {
    const Cars = [
        {
            name: 'car1',
            photoName: "Parking/car1.jpeg"  // Corrected the key name
        },
        {
            name: "car2",
            photoName: "Parking/car2.jpeg"
        },
        {
            name: "car3",
            photoName: "Parking/car3.jpeg"
        }
    ];

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
            {Cars.map((item, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed:", item.name)}  // Added name to the console for debugging
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name} 
                            className="w-60 object-cover h-[400px]"
                            src={item.photoName}  // Using the correct key here
                        />
                    </CardBody>
                    <CardFooter className="text-small text-center">
                        <b>{item.name}</b>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Parking;
