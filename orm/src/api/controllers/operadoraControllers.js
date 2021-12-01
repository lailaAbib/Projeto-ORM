const Operadora = require('../models/operadoraModels.js');

module.exports = {
    async index(req, res){
        const operadora = await Operadora.findAll();
        return res.json(operadora);
    }, 

    async store(req, res){
        const {
            ope_nome,
            ope_fantasia,
            ope_prefixo,
            ope_cidade
        } = req.body;

        const operadora = await Operadora.create({
            ope_nome,
            ope_fantasia,
            ope_prefixo,
            ope_cidade
        });

        return res.status(200).send({
            status: 1, 
            message: "Operadora cadastrado com sucesso!!!",
            operadora
        })
    },

    async update(req, res){
        const { ope_nome, ope_fantasia, ope_prefixo, ope_cidade } = req.body;
        const { codigo } = req.params;
        
        await Operadora.update({
            ope_nome, ope_fantasia, ope_prefixo, ope_cidade
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Operadora atualizado com sucesso!!!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Operadora.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Operadora excluído com sucesso"
        })
    }
}