// pages/api/inventario/index.js
import { NextResponse } from 'next/server';
import Inventario from '../../../models/Inventario';
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
  const inventario = await Inventario.findAll();
  return NextResponse.json(inventario);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const item = await Inventario.create(data);
  return NextResponse.json(item);
}