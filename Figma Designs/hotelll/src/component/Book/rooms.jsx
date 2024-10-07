import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Button, Input } from "@nextui-org/react";
import { AiFillStar, AiOutlineStar, AiFillDelete } from "react-icons/ai"; 
import { getDatabase, ref, push, set } from "firebase/database";
import app from "../firebaseConfig";
import { loadStripe } from '@stripe/stripe-js';

// Watchlist Component
const Watchlist = ({ favorites, onRemoveFavorite }) => {
    return (
        <div className="fixed top-4 right-4 bg-slate-400 shadow-lg rounded-lg p-4 z-50 max-w-xs">
            <h3 className="font-bold text-lg">Favorite Rooms</h3>
            <ul>
                {favorites.map((room, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span>{room}</span>
                        <AiFillDelete
                            onClick={() => onRemoveFavorite(room)}
                            className="text-red-500 cursor-pointer h-6 w-6 hover:text-red-700"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

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
            price: 100, // Price in dollars
        },
        {
            name: "Bedroom2",
            photoName: "Book/Bed2.jpeg",
            additionalImages: [
                "Book/Bed2.jpeg", 
                "Book/Bed4.jpeg", 
                "Book/Bed5.jpeg"
            ],
            price: 120,
        },
        {
            name: "Bedroom3",
            photoName: "Book/Bed1.jpeg",
            additionalImages: [
                "Book/Bed1.jpeg", 
                "Book/Bed6.jpeg", 
                "Book/Bed3.jpeg"
            ],
            price: 90,
        },
        {
            name: "Bedroom4",
            photoName: "Book/Bed4.jpeg",
            additionalImages: [
                "Book/Bed4.jpeg", 
                "Book/Bed1.jpeg", 
                "Book/Bed5.jpeg"
            ],
            price: 110,
        },
        {
            name: "Bedroom5",
            photoName: "Book/Bed5.jpeg",
            additionalImages: [
                "Book/Bed5.jpeg", 
                "Book/Bed2.jpeg", 
                "Book/Bed4.jpeg"
            ],
            price: 130,
        },
        {
            name: "Bedroom6",
            photoName: "Book/Bed6.jpeg",
            additionalImages: [
                "Book/Bed6.jpeg", 
                "Book/Bed3.jpeg", 
                "Book/Bed1.jpeg"
            ],
            price: 95,
        }
    ];

    const [currentViewIndex, setCurrentViewIndex] = useState({});
    const [ratings, setRatings] = useState(Array(Cars.length).fill(0));
    const [bookingModalVisible, setBookingModalVisible] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [numberOfRooms, setNumberOfRooms] = useState(1);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // State for favorites
    const [favorites, setFavorites] = useState([]);

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

    const handleBookingClick = (name) => {
        setSelectedRoom(name);
        setBookingModalVisible(true);
    };

    const handleConfirmBooking = async () => {
        if (!checkInDate || !checkOutDate || numberOfRooms <= 0 || numberOfGuests <= 0) {
            setErrorMessage("Please fill in all fields correctly.");
            return;
        }

        const stripe = await stripePromise;

        const response = await fetch('YOUR_SERVER_ENDPOINT/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 5000, // Replace with the actual amount (in cents)
                currency: 'usd', // Replace with your desired currency
            }),
        });

        const data = await response.json();
        if (data.error) {
            setErrorMessage(data.error);
            return;
        }

        const { clientSecret } = data;

        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: {
                    // Use a card element to get card details
                },
                billing_details: {
                    name: 'Guest Name', // You can replace with actual guest name
                },
            },
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setPaymentSuccess(true);
            setErrorMessage("");
            const db = getDatabase(app);
            const bookingsRef = ref(db, 'bookings');
            const newBookingRef = push(bookingsRef);
            set(newBookingRef, {
                room: selectedRoom,
                checkInDate,
                checkOutDate,
                numberOfRooms,
                numberOfGuests,
            }).then(() => {
                console.log(`Booking confirmed for ${selectedRoom} from ${checkInDate} to ${checkOutDate}`);
            });
            setBookingModalVisible(false);
        }
    };

    const handleToggleFavorite = (name) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(name)
                ? prevFavorites.filter((item) => item !== name) // Remove from favorites
                : [...prevFavorites, name] // Add to favorites
        );
    };

    const isFavorite = (name) => favorites.includes(name);

    const handleRemoveFavorite = (name) => {
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item !== name));
    };

    const CustomModal = ({ isVisible, onClose, children }) => {
        if (!isVisible) return null;

        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                    {children}
                    <div className="flex justify-end mt-4">
                        <Button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Close</Button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="relative p-6">
            {/* Watchlist Display */}
            <Watchlist favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
                            <p className="text-gray-600">Price: ${item.price}</p>
                            <div className="flex items-center gap-2">
                                <Button
                                    onClick={() => handleToggleFavorite(item.name)}
                                    className="p-1 rounded-full transition"
                                >
                                    {isFavorite(item.name) ? (
                                        <AiFillStar className="text-yellow-500" />
                                    ) : (
                                        <AiOutlineStar className="text-gray-400" />
                                    )}
                                </Button>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                    onClick={() => handleBookingClick(item.name)}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <CustomModal isVisible={bookingModalVisible} onClose={() => setBookingModalVisible(false)}>
                <h2 className="text-xl font-bold">Booking {selectedRoom}</h2>
                <Input
                    label="Check-in Date"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="mb-2"
                />
                <Input
                    label="Check-out Date"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="mb-2"
                />
                <Input
                    label="Number of Rooms"
                    type="number"
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    className="mb-2"
                />
                <Input
                    label="Number of Guests"
                    type="number"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    className="mb-2"
                />
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {paymentSuccess && <p className="text-green-500">Payment successful!</p>}
                <Button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                    onClick={handleConfirmBooking}
                >
                    Confirm Booking
                </Button>
            </CustomModal>
        </div>
    );
};

export default Bedroom;
