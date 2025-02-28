// models/Tratamiento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');
const Paciente = require('./Paciente');

const Tratamiento = sequelize.define('Tratamiento', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  costo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Relación entre Tratamiento y Paciente
Tratamiento.belongsTo(Paciente, { foreignKey: 'pacienteId' });
Paciente.hasMany(Tratamiento, { foreignKey: 'pacienteId' });

module.exports = Tratamiento;