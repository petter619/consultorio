// models/Cita.js
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');
const Paciente = require('./Paciente');

const Cita = sequelize.define('Cita', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
});

// Relación entre Cita y Paciente
Cita.belongsTo(Paciente, { foreignKey: 'pacienteId' });
Paciente.hasMany(Cita, { foreignKey: 'pacienteId' });

module.exports = Cita;