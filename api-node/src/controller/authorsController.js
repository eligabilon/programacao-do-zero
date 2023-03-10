import authors from "../models/Authors.js";

class AuthorController {

    static findAuthors = (req, res) => {
        authors.find((err, authors)=>{
            res.status(200).send(authors);
        })
    }

    static findAuthorId = (req, res) => {
        let id = req.params.id;
        
        authors.findById(id, (err, authors) => {
            if(err){
                res.status(400).send({message: `${err.message} - nao encontrou o autor`})
            } else {
                res.status(200).send(authors)
            }       
        })        
    }

    static addAuthor = (req, res) => {
        let author = new authors(req.body);

        author.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (req, res) => {
        let id = req.params.id;
        
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar o autor`})
            }
        })       
    }

    static deleteAuthor = (req, res) => {
        let id = req.params.id;
        
        authors.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor removido'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover o autor`})
            }
        })       
    }

}

export default AuthorController;