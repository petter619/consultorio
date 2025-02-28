// pages/api/pacientes/index.js
import { NextResponse } from 'next/server';
import Paciente from '../../../models/Paciente';
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
  const pacientes = await Paciente.findAll();
  return NextResponse.json(pacientes);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const paciente = await Paciente.create(data);
  return NextResponse.json(paciente);
}