
import NextAuth from 'next-auth/next';
import { Provider } from 'next-auth/providers/index';
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from "bcrypt";
import mongoose, { Schema } from 'mongoose';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Votre logique d'inscription va ici
  const { email, password, confirmPassword } = req.body;

  // Assurez-vous que tous les champs sont fournis
  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Schéma du modèle utilisateur
  const User = mongoose.model('User', new Schema({
    email: String,
    password: String,
  }));

  // Assurez-vous que les mots de passe correspondent
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Cet utilisateur existe déjà.' });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // Enregistrer l'utilisateur dans la base de données
    await newUser.save();

    // Répondre avec succès
    res.status(200).json({ success: true, message: 'Inscription réussie.' });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
  }

}
