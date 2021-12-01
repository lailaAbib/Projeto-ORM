'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('operadora', { 
      id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true, 
        },
      ope_nome: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      ope_fantasia: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      ope_prefixo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ope_cidade: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable('operadora');
   
  }
};
