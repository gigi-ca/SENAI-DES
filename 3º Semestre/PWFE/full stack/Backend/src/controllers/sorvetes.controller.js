const prisma = require("../data/prisma");

const cadastrarSorvete = async (req, res) => {
  try{
    const {sabor, descricao, preco, tipo, imagem} = req.body;
    const sorvete = await prisma.sorvetes.create({
      data: {
        sabor,
        descricao,
        preco,
        tipo,
        imagem
      }
    });
    res.status(201).json(sorvete);
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar sorvete" });

  }

}

const listarSorvetes = async (req, res) => {
  try{
    const sorvetes = await prisma.sorvetes.findMany();
    res.status(200).json(sorvetes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar sorvetes" });
  }
}

const buscarSorvetePorId = async (req, res) => {
  try{
    const { id } = req.params;
    const sorvete = await prisma.sorvetes.findUnique({
      where: { id: Number(id) }
    });
    if (sorvete) {
      res.status(200).json(sorvete);
    } else {
      res.status(404).json({ error: "Sorvete não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar sorvete" });
  }
}

const atualizarSorvete = async (req, res)=> {
  try{
    const { id } = req.params;
    const {sabor, descricao, preco, tipo, imagem} = req.body;
    const sorvete = await prisma.sorvetes.update({
      where: { id: Number(id)},
      data:{
        sabor,
        descricao,
        preco,
        tipo,
        imagem
      }
    })
    res.status(200).json(sorvete);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar sorvete" });
  }
}

const excluirSorvete = async (req, res)=>{
  try{
    const { id } = req.params;
    await prisma.sorvetes.delete({
      where: { id: Number(id) }
    });
    res.status(204).send();
  }catch (error){
    res.status(500).json({ error: "Erro ao excluir sorvete"});
  }
}

module.exports ={
  cadastrarSorvete,
  listarSorvetes,
  buscarSorvetePorId,
  atualizarSorvete,
  excluirSorvete
}