// models/Paciente.js
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Paciente = sequelize.define('Paciente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  antecedentesMedicos: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Paciente;