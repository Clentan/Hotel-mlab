import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Parking = () => {
    const CasinoObject = [
        {
            name: 'casino1',
            photoName: "Casino/casino1.jpeg"  
        },
        {
            name: "casino2",
            photoName: "Casino/casino2.jpeg"  
        
        },
        {
            name: "Casino3",
            photoName: "Casino/casino3.jpeg"  

        }
    ];

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
            {CasinoObject.map((item, index) => (  // Corrected to CasinoObject
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed:", item.name)}  
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name} 
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
};

export default Parking;  
