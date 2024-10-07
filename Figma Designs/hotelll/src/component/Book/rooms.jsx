import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Button, Modal, Input } from "@nextui-org/react";
import { MdArrowForward, MdArrowBack } from "react-icons/md"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; 

const Bedroom = () => {
    const Cars = [
        {
            name: 'Bedroom1',
            photoName: "Book/Bed3.jpeg",
            additionalImages: [
                "Book/Bed3.jpeg", 
                "Book/Bed2.jpeg", 
                "Book/Bed1.jpeg"
            ],
        },
        {
            name: "Bedroom2",
            photoName: "Book/Bed2.jpeg",
            additionalImages: [
                "Book/Bed2.jpeg", 
                "Book/Bed4.jpeg", 
                "Book/Bed5.jpeg"
            ],
        },
        {
            name: "Bedroom3",
            photoName: "Book/Bed1.jpeg",
            additionalImages: [
                "Book/Bed1.jpeg", 
                "Book/Bed6.jpeg", 
                "Book/Bed3.jpeg"
            ],
        },
        {
            name: "Bedroom4",
            photoName: "Book/Bed4.jpeg",
            additionalImages: [
                "Book/Bed4.jpeg", 
                "Book/Bed1.jpeg", 
                "Book/Bed5.jpeg"
            ],
        },
        {
            name: "Bedroom5",
            photoName: "Book/Bed5.jpeg",
            additionalImages: [
                "Book/Bed5.jpeg", 
                "Book/Bed2.jpeg", 
                "Book/Bed4.jpeg"
            ],
        },
        {
            name: "Bedroom6",
            photoName: "Book/Bed6.jpeg",
            additionalImages: [
                "Book/Bed6.jpeg", 
                "Book/Bed3.jpeg", 
                "Book/Bed1.jpeg"
            ],
        }
    ];

    const [currentViewIndex, setCurrentViewIndex] = useState({});
    const [ratings, setRatings] = useState(Array(Cars.length).fill(0));
    const [bookingModalVisible, setBookingModalVisible] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [availability, setAvailability] = useState(true);

    const handleArrowClick = (index, direction) => {
        const currentIndex = currentViewIndex[index] || 0;
        const nextIndex = direction === "next" 
            ? (currentIndex + 1) % Cars[index].additionalImages.length 
            : (currentIndex - 1 + Cars[index].additionalImages.length) % Cars[index].additionalImages.length;

        setCurrentViewIndex((prevState) => ({
            ...prevState,
            [index]: nextIndex,
        }));
    };

    const handleRatingClick = (index, rating) => {
        const newRatings = [...ratings];
        newRatings[index] = rating;
        setRatings(newRatings);
    };

    const handleBookingClick = (name) => {
        setSelectedRoom(name);
        setBookingModalVisible(true);
    };

    const checkAvailability = () => {
        if (date && time) {
            const isAvailable = Math.random() > 0.5;
            setAvailability(isAvailable);
            return isAvailable;
        }
        return false;
    };

    const handleConfirmBooking = () => {
        if (checkAvailability()) {
            console.log(`Booking confirmed for ${selectedRoom} on ${date} at ${time} by ${name}`);
            setBookingModalVisible(false);
            setDate("");
            setTime("");
            setName("");
            setAvailability(true);
        } else {
            console.log(`Room not available for the selected date and time.`);
            setAvailability(false);
        }
    };

    return (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6">
            {Cars.map((item, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                    onPress={() => console.log("Item pressed:", item.name)}
                    className="transition-transform transform hover:scale-105"
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.name}
                            className="w-full object-cover h-[300px] sm:h-[350px] md:h-[400px]"
                            src={item.photoName}
                        />
                    </CardBody>
                    <CardFooter className="text-sm text-center flex flex-col items-center gap-2">
                        <b>{item.name}</b>
                        <div className="flex gap-4">
                            <Button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                onClick={() => handleArrowClick(index, "prev")}
                            >
                                <MdArrowBack className="h-5 w-5" />
                            </Button>
                            <Button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                onClick={() => handleArrowClick(index, "next")}
                            >
                                <MdArrowForward className="h-5 w-5" />
                            </Button>
                        </div>
                        <Image
                            src={item.additionalImages[currentViewIndex[index] || 0]} 
                            alt={`View ${currentViewIndex[index] + 1 || 1}`}
                            className="w-full h-48 object-cover rounded-lg mt-2"
                        />
                        <div className="flex gap-1 mt-2">
                            {[...Array(5)].map((_, starIndex) => (
                                <span key={starIndex} onClick={() => handleRatingClick(index, starIndex + 1)}>
                                    {starIndex < ratings[index] ? (
                                        <AiFillStar className="text-yellow-500 h-5 w-5 cursor-pointer" />
                                    ) : (
                                        <AiOutlineStar className="text-gray-300 h-5 w-5 cursor-pointer" />
                                    )}
                                </span>
                            ))}
                        </div>
                        <Button
                            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                            onClick={() => handleBookingClick(item.name)}
                        >
                            Book Now
                        </Button>
                    </CardFooter>
                </Card>
            ))}

            {/* Booking Modal */}
            <Modal
                closeButton
                open={bookingModalVisible}
                onClose={() => setBookingModalVisible(false)}
            >
                <Modal.Header>
                    <h2>Booking for {selectedRoom}</h2>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        label="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Input
                        label="Time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    {!availability && <p className="text-red-500">Room not available for the selected date and time.</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="bg-blue-500 text-white"
                        onClick={handleConfirmBooking}
                    >
                        Confirm Booking
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Bedroom;
