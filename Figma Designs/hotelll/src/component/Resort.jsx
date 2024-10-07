import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Resort = () => {
    const ResortPic = [
        {
            name: 'Resort',
            photoName: "Resort/pic.jpg"  // Corrected the key name
        },
        {
            name: "Resort2",
            photoName: "Resort/picc.jpg"
        },
        {
            name: "Resort3",
            photoName: "Resort/piccc.jpg"
        }
    ];

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
            {ResortPic.map((item, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed:", item.name)} // Added name to the console
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

export default Resort;
