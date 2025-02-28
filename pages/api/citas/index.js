// pages/api/citas/index.js
import { NextResponse } from 'next/server';
import Cita from '../../../models/Cita';
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
  const citas = await Cita.findAll({ include: Paciente });
  return NextResponse.json(citas);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const cita = await Cita.create(data);
  return NextResponse.json(cita);
}