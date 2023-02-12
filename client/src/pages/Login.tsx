import React, {FormEvent, useRef} from "react";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {useAuth} from "../context/AuthContext";

const Login = () => {
  const {login} = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (login.isLoading) {
      return;
    }
    const username = usernameRef.current?.value;
    if (username == null || username==="") {
      return;
    }
    login.mutate(username);
  }

  return (
      <React.Fragment>
        <h1 className="text-3xl font-bond mb-8 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
          <label htmlFor="userName">Username</label>
          <Input id="userName" required ref={usernameRef}/>
          <Button disabled={login.isLoading} type="submit" className="col-span-full">
            {login.isLoading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </React.Fragment>
  );
};

export default Login;
