const { Model, DataTypes } = require('sequelize');

class Operadora extends Model{
    static init(sequelize){
        super.init({
            ope_nome: DataTypes.STRING,
            ope_fantasia: DataTypes.STRING,
            ope_prefixo: DataTypes.INTEGER,
            ope_cidade: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'operadora',
        }

        );
        return this;
    }
}



module.exports = Operadora;