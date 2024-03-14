import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcrypt"
import NextAuth from 'next-auth/next';
import { Provider } from 'next-auth/providers/index';
import { NextRequest } from 'next/server';
 
export default async function handler (
  // req: NextApiRequest,
  req: NextRequest | Request,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
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
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
