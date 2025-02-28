// pages/api/auth/login.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../../../models/Usuario';
import sequelize from '../../../lib/db';

export async function POST(request) {
  const { email, password } = await request.json();
  await sequelize.sync();

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
  }

  const validPassword = await bcrypt.compare(password, usuario.password);
  if (!validPassword) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
  }

  const token = jwt.sign({ id: usuario.id }, 'secreto', { expiresIn: '1h' });
  return NextResponse.json({ token });
}