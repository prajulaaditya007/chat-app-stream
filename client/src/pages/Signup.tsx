import React, {useRef} from "react";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {useAuth} from "../context/AuthContext";

const Signup = () => {
    const {signup} = useAuth();
    const usernameRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const imageUrlRef = useRef<HTMLInputElement>(null);
    return (
        <React.Fragment>
            <h1 className="text-3xl font-bond mb-8 text-center">
                Sign up for an account
            </h1>
            <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
                <label htmlFor="userName">Username</label>
                <Input id="userName" pattern="\S*" required ref={usernameRef}/>
                <label htmlFor="name">Name</label>
                <Input id="name" required ref={nameRef}/>
                <label htmlFor="imageUrl">Image URL</label>
                <Input id="imageURL" type="url" ref={imageUrlRef}/>
                <Button type="submit" className="col-span-full">
                    Sign Up
                </Button>
            </form>
        </React.Fragment>
    );
};

export default Signup;
