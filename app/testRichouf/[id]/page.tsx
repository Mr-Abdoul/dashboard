"use client"

import React from 'react'
import { useRouter, useParams } from "next/navigation"; 

function page() {

    const params = useParams()
    const {id} = params;

  return (
    <div>Richouf avec l'id : {id}</div>
  )
}

export default page