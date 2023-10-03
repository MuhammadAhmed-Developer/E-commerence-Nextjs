'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
// type Props = {}

const SigninForm = () => {
    const [user, setUser] = useState({
      name:'',
      email:'',
      password:''
    })
  return (
    <div>signinForm</div>
  )
}

export default SigninForm