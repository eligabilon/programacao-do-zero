import livros from "../models/Livro.js";

class LivroController {

    static buscarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros)=>{
            res.status(200).send(livros);
        })
    }

    static buscarLivroId = (req, res) => {
        let id = req.params.id;
        
        livros.findById(id, (err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - nao encontrou o livro`})
            } else {
                res.status(200).send(livros)
            }       
        })        
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        let id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar o livro`})
            }
        })       
    }

    static deletarLivro = (req, res) => {
        let id = req.params.id;
        
        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover o livro`})
            }
        })       
    }

}

export default LivroController;