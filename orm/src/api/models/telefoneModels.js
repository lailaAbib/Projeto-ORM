const { Model, DataTypes } = require('sequelize');

class Telefone extends Model{
    static init(sequelize){
        super.init({
            tel_descricao: DataTypes.STRING,
            tel_modelo: DataTypes.STRING,
            tel_cor: DataTypes.STRING,
            tel_chips: DataTypes.INTEGER,
            ope_codigo: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'telefone',
        }

        );
        return this;
    }
}



module.exports = Telefone;