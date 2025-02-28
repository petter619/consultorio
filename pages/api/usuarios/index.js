// pages/api/usuarios/index.js
import { NextResponse } from 'next/server';
import Usuario from '../../../models/Usuario';
import sequelize from '../../../lib/db';

export async function GET() {
  await sequelize.sync();
  const usuarios = await Usuario.findAll();
  return NextResponse.json(usuarios);
}

export async function POST(request) {
  const data = await request.json();
  await sequelize.sync();
  const usuario = await Usuario.create(data);
  return NextResponse.json(usuario);
}