import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/Logo.png";
import Form from "../component/FormLogin";
import { Avatar } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function PageNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear tokens, redirect)
    console.log("Logged out");
  };

  const handleOpenSignUp = () => {
    // Close dropdown before opening sign-up modal
    setDropdownOpen(false);
    setBackdrop("blur");
    onOpen();
  };

  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <img src={Logo} alt="Logo" className="w-44 h-48" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink to="/" className="text-inherit">
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/service" className="text-inherit" aria-current="page">
            Service
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/book" className="text-inherit">
            Book Now
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="relative">
          <Button onClick={toggleDropdown}>
            <Avatar showFallback src='https://images.unsplash.com/broken' /> Name
          </Button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <button
                onClick={handleOpenSignUp}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Up
              </button>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          )}
        </div>

        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">LOGIN IN</ModalHeader>
            <ModalBody className="ModalBody">
              <Form />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </NavbarContent>
    </Navbar>
  );
}
