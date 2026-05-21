"use client";

import {  } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import {FcGoogle} from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {useRouter } from "next/navigation";
import { toast } from "react-toastify";



const RegisterPage = () => {
  const router = useRouter();

 const OnSubmit = async(event) => {
   event.preventDefault();
   const formData = new FormData(event.currentTarget);
   const SignupInfo = Object.fromEntries(formData.entries());
   console.log(SignupInfo);
  
   const {data,error} =await authClient.signUp.email({
    name:SignupInfo.name,
    email:SignupInfo.email,
    password:SignupInfo.password
   })

   if(data) {
    router.push("/login");
   }

   if(error){
    toast.error(error.message)
   }


 };
 const SocialHandler = async() =>{
  await authClient.signIn.social({provider:"google"})
 };
  

  return (
    <section className="min-h-screen w-screen bg-slate-50 flex items-center justify-center p-4  overflow-y-auto">
      <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 bg-white">
        <div className="flex flex-col items-center justify-center mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-900 tracking-tight">
            Register
          </h1>
          <p className="text-slate-400 mt-1 font-medium text-base sm:text-lg">
            Create an account to book your slots
          </p>
        </div>
        <Form className="w-full flex flex-col gap-4" onSubmit={OnSubmit}>
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-base sm:text-lg font-bold text-slate-500 capitalize tracking-wider mb-1.5 block">
              Full Name
            </Label>
            <Input
              placeholder="Enter Your name"
              variant="bordered"
              radius="xl"
              className="w-full"
            />
            <FieldError className="text-base sm:text-lg text-red-500 mt-1 font-semibold" />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-base sm:text-lg font-bold text-slate-500 capitalize tracking-wider mb-1.5 block">
              Email
            </Label>
            <Input
              placeholder="john@example.com"
              variant="bordered"
              radius="xl"
              className="w-full"
            />
            <FieldError className="text-base sm:text-lg text-red-500 mt-1 font-semibold" />
          </TextField>
          <TextField name="image" type="url" className="w-full">
            <Label className="text-base sm:text-lg font-bold text-slate-500 capitalize tracking-wider mb-1.5 block">
              Photo URL
            </Label>
            <Input
              placeholder="Enter Your Photo Url"
              variant="bordered"
              radius="xl"
              className="w-full"
            />
            <FieldError className="text-base sm:text-lg text-red-500 mt-1 font-semibold" />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              return null;
            }}
          >
            <Label className="text-base sm:text-lg font-bold text-slate-500 capitalize tracking-wider mb-1.5 block">
              Password
            </Label>
            <Input
              placeholder="Enter your password"
              variant="bordered"
              radius="xl"
              className="w-full"
            />
            <FieldError className="text-base sm:text-lg text-red-500 mt-1 font-semibold" />
          </TextField>
          <div className="w-full mt-2">
            <Button
              type="submit"
              className="w-full text-base sm:text-lg bg-blue-900 hover:bg-teal-500 text-white font-bold h-12 rounded-xl transition-colors duration-300 shadow-md cursor-pointer"
            >
              Register
            </Button>
          </div>
        </Form>

        <div className="text-center mt-5">
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-teal-600 hover:text-blue-900 font-bold underline transition-colors"
            >
              Login
            </Link>
          </p>
        </div>

        <div className=" border-t border-slate-100 text-center">
          <Button
            onClick={SocialHandler}
            type="button"
            variant="bordered"
            radius="xl"
            className="w-full border-slate-200 font-bold text-slate-700 bg-white hover:bg-slate-50 h-11 cursor-pointer text-base sm:text-lg"
          >
            {<FcGoogle className="w-5 h-5" size={20} />} Continue
            with Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
