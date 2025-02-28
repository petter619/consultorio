// pages/api/pagos/index.js
import { NextResponse } from 'next/server';
import Pago from '../../../models/Pago';
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
  const pagos = await Pago.findAll();
  return NextResponse.json(pagos);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const pago = await Pago.create(data);
  return NextResponse.json(pago);
}