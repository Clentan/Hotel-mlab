import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Bedroom = () => {
    const Cars = [
        {
            name: 'Bedroom1',
            photoName: "Bedroom/Bedroom1.jpeg"
        },
        {
            name: "Bedroom2",
            photoName: "Bedroom/Bedroom2.jpeg"
        },
        {
            name: "Bedroom3",
            photoName: "Bedroom/Bedroom3.jpeg"
        }
    ];

    return (
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {Cars.map((item, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed:", item.name)}
                    className="w-full" // Ensures card takes full width of its grid cell
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[300px] md:h-[400px] max-w-full"  // Fully responsive image
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
};

export default Bedroom;
