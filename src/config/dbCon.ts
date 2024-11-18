import mongoose from "mongoose";
require('dotenv').config();

const dbCon = async () => {
    const mongoURI = process.env.MONGOURI;

    if (!mongoURI) {
        throw new Error("MONGOURI no está definida en las variables de entorno.");
    }

    // Realiza la conexión con la base de datos
    await mongoose.connect(mongoURI);
    console.log('Conexión a MongoDB establecida correctamente.');
};

export default dbCon


