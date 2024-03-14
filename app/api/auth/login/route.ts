import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcrypt"
import NextAuth from 'next-auth/next';
import { Provider } from 'next-auth/providers/index';
import { NextRequest } from 'next/server';
 
export  async function POST(
  // req: NextApiRequest,
  req: NextRequest | Request,
  res: NextApiResponse
) {
  console.log(req);
  
  const { email, password } = req.body

  fetch("http://localhost:4000/api/auth/login", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password)
   })
   .then(res =>{
    if (!res.ok) {
      throw new Error(`Erreur du HTTP! Statut: ${res.status}`);
    }
    return res.json(); 
   })
   .catch(error => {
    // ici je gérez les erreurs de la requête
    console.error('Erreur lors de la requête: cet utilisateur n\'existe pas', error);
  });


  // try {
  //   // await login('credentials', { email, password })
  //   res.status(200).json({ success: true })
  // } catch (error: any) {
  //   if (error.type === 'CredentialsSignin') {
  //     res.status(401).json({ error: 'Invalid credentials.' })
  //   } else {
  //     res.status(500).json({ error: 'Something went wrong.' })
  //   }
  // }
}

