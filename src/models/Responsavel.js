import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema({
        nome: {
                type: String,
                required: [true, 'O nome é obrigatório.'],
                minlength: [5, 'O nome deve ter pelo menos 5 caracteres.']
        }
});

const responsavel = mongoose.model("responsavel", responsavelSchema);

export { responsavel, responsavelSchema };

