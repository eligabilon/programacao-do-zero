import churchs from "../models/Church.js";

class ChurchController {

    static findChurchs = (req, res) => {
        churchs.find()    
        .exec((err, churchs)=>{
            res.status(200).send(churchs);
        })
    }

    static findChurchId = (req, res) => {
        let id = req.params.id;
        
        churchs.findById(id)
        .exec((err, churchs) => {
            if(err){
                res.status(400).send({message: `${err.message} - nao encontrou Igreja`})
            } else {
                res.status(200).send(churchs)
            }       
        })        
    }

    static addChurch = (req, res) => {
        let church = new churchs(req.body);

        church.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao add Igreja`})
            } else {
                res.status(201).send(church.toJSON())
            }
        })
    }

    static updateChurch = (req, res) => {
        let id = req.params.id;
        
        churchs.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Igreja atualizado'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao atualizar Igreja`})
            }
        })       
    }

    static deleteChurch = (req, res) => {
        let id = req.params.id;
        
        churchs.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Igreja removido'})
            } else {
                res.status(500).send({message: `${err.message} - falha ao remover Igreja`})
            }
        })       
    }
}

export default ChurchController;