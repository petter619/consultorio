// pages/api/tratamientos/index.js
import { NextResponse } from 'next/server';
import Tratamiento from '../../../models/Tratamiento';
import sequelize from '../../../lib/db';
// Autenticación
import { authMiddleware } from '../../../lib/authMiddleware';

export default authMiddleware(async function handler(req, res) {
  if (req.method === 'GET') {
    // Lógica para GET
  } else if (req.method === 'POST') {
    // Lógica para POST
  }
});
export async function GET() {
  await sequelize.sync();
  const tratamientos = await Tratamiento.findAll();
  return NextResponse.json(tratamientos);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const tratamiento = await Tratamiento.create(data);
  return NextResponse.json(tratamiento);
}