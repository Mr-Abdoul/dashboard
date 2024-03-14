import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full flex justify-center items-center' style={{minHeight: "100vh"}}>
      <Link href={'/signIn'} className='btn-primary mx-5'>Singin</Link>
      <Link href={'/signUp'} className='btn'>SingUp</Link>
    </div>
  )
}

export default page