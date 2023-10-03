'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
// type Props = {}

const SignupForm = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });


  const Register = () =>{
    const data ={
      name:user.name,
      email:user.email,
      password:user.password
    }
    axios.post('api/register', data)
    .then((response)=>{
      console.log("Responceeee = >", response)
    }).catch((err)=>{
      console.log("error=>", err);
    }).finally(()=>{
      router.push('/signin')
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-2xl flex flex-col">
        <h1 className="text-xl font-medium mb-4">Sign Up</h1>
        <label htmlFor="" className="mb-2">Name</label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 w-[300px] focus:outline-none focus:border-gray-600 text-black"
          id="name"
          value={user.name}
          placeholder="name"
          onChange={(e)=>setUser({...user, name:e.target.value})}

        />
        <label htmlFor="" className="mb-2">Email</label>
        <input
          type="email"
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 w-[300px] focus:outline-none focus:border-gray-600 text-black"
          id="email"
          value={user.email}
          placeholder="email"
          onChange={(e)=>setUser({...user, email:e.target.value})}

        />
        <label htmlFor="" className="mb-2">Password</label>
        <input
          type="password"
          className="p-2 border-gray-300 border-[1px] rounded-lg mb-4 w-[300px] focus:outline-none focus:border-gray-600 text-black"
          id="password"
          value={user.password}
          placeholder="*******"
          onChange={(e)=>setUser({...user, password:e.target.value})}
        />
        <button onClick={Register} className="p-2  border bg-purple-600 text-white rounded-md  border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600">Register Now</button>
        <Link href='/signin' className='text-sm  text-center mt-5 text-neutral-600'>Already have an Account?</Link>
        <Link href='/' className='text-center mt-2'>Home</Link>
      </div>
    </div>
  );
};

export default SignupForm;
