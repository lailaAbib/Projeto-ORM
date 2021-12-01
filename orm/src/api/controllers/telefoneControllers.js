const Telefone = require('../models/telefoneModels.js');

module.exports = {
    async index(req, res){
        const telefone = await Telefone.findAll();
        return res.json(telefone);
    }, 

    async store(req, res){
        const {
            tel_descricao,
            tel_modelo,
            tel_cor,
            tel_chips,
            ope_codigo
        } = req.body;

        const telefone = await Telefone.create({
            tel_descricao,
            tel_modelo,
            tel_cor,
            tel_chips,
            ope_codigo
        });

        return res.status(200).send({
            status: 1, 
            message: "Telefone cadastrado com sucesso!!!",
            telefone
        })
    },

    async update(req, res){
        const { tel_descricao, tel_modelo, tel_cor, tel_chips, ope_codigo } = req.body;
        const { codigo } = req.params;
        
        await Telefone.update({
            tel_descricao, tel_modelo, tel_cor, tel_chips, ope_codigo
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Telefone atualizado com sucesso!!!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Telefone.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Telefone excluído com sucesso"
        })
    }
}