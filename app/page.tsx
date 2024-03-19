import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-full flex justify-center items-center' style={{minHeight: "100vh"}}>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><Link href={'/signIn'} className='btn-primary mx-5'>Singin</Link></button>
     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded'> <Link href={'/signUp'} className='btn'>SingUp</Link></button>
    </div>
  )
}

export default page