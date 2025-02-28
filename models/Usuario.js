// models/Inventario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Inventario = sequelize.define('Inventario', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precioUnitario: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Inventario;