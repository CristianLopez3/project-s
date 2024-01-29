import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">

        <div className="p-6 md:p-20">

          <h2 className="font-mono mb-5 text-4xl font-bold"> Login </h2>

          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account if you area employee.
          </p>

          <Input
            placeholder={"Enter your email"}
            classes={"mb-4"}
            variant={"basic"}
            name={"email"}
            className={'mb-6'}
          />
          
          <Input
            placeholder={"Enter your password"}
            type={"password"}
            variant={"basic"}
            name={"password"}
          />

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-thing text-cyan-700">Forgot Password</div>

            <Button 
            // classes="bg-cyan-700 text-white px-10 w-auto" 
              type={'primary'} 
              size={'md '}
            >
              <span>Next</span>
              <svg
                className="w-7"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </Button>
          </div>

          <hr className="mt-12 border-b border-b-gray-300" />
        </div>

        <img
          src="image.jpg"
          alt="image"
          className="w-[430px] hidden md:block"
        />
      </div>
    </div>
  );
};

export default Login;
