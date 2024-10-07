import React, { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";

export default function Form() {
  const [selected, setSelected] = useState("login");
  const [name, setName] = useState("");//store this in the localStorage
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const SignIn = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setEmail("");
    setPassword("");
    setName("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user profile with name
      await updateProfile(userCredential.user, { displayName: name });


      // Store the name in local storage
      localStorage.setItem("userName", name);
      alert("Account created successfully");


      console.log("User created successfully with name:", name);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      alert("Please enter your email for password reset");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      setResetMessage("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col w-full ml-10">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link size="sm" onClick={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                  <button
                    type="button"
                    className="text-blue-600"
                    onClick={() => {
                      setSelected("reset");
                    }}
                  >
                    Forgotten Password
                  </button>
                </div>
              </form>
            </Tab>

            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" onClick={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" onClick={SignIn}>
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>

            {/* Password Reset Tab */}
            <Tab key="reset" title="Reset Password">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => setResetEmail(e.target.value)}
                  type="email"
                />
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" onClick={handlePasswordReset}>
                    Send Reset Email
                  </Button>
                </div>
                {resetMessage && <p className="text-center">{resetMessage}</p>}
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
