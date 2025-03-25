import prisma from "../../database/client.js";

const controller = {}

controller.create = async function(req, res){
    //Conecta, cria e envia instruçõe s´rp banco

    try{
        await prisma.categoria.create({ data: req.body })

        //Envai uma mensagem de sucesso ao front
        //201: created
        res.status(201).end()
    }
    catch(error){
        //Deu errp dpodp
        console.error(error)

        //Emvoa p erro pro front
        //500 Internal Server Error
        res.status(500).send(error)
    }
}

export default controller