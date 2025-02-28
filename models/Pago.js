// models/Pago.js
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');
const Paciente = require('./Paciente');

const Pago = sequelize.define('Pago', {
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  metodoPago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Relación entre Pago y Paciente
Pago.belongsTo(Paciente, { foreignKey: 'pacienteId' });
Paciente.hasMany(Pago, { foreignKey: 'pacienteId' });

module.exports = Pago;