import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema({
        nome: String
});

const responsavel = mongoose.model("responsavel", responsavelSchema);

export { responsavel, responsavelSchema };

