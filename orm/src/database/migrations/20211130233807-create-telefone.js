'use strict';
 
module.exports = {
 up: async (queryInterface, Sequelize) => {
 return await queryInterface.createTable('telefone', {
      id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
      tel_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      tel_modelo: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      tel_cor: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      tel_chips: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ope_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
      allowNull: false,
      type: Sequelize.DATE,
      },
      updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
      },
 });
 },
 
 down: async (queryInterface, Sequelize) => {
 await queryInterface.dropTable('telefone');
 }
};
