import mongoose, { Document, Schema } from 'mongoose';

// Definimos la interfaz para el tipo de datos del visitante
export interface IVisitor extends Document {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  // Si tienes otros campos, agréguelos aquí
}

// Definimos el esquema de Mongoose para el visitante
const visitorSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  celular: { type: String, required: true},  // Asegúrate de que el teléfono tenga 10 dígitos
  interesadoEnEventos: { type: Boolean, required: true }  // Agregar este campo

});

// Creamos y exportamos el modelo de visitante
const Visitor = mongoose.model<IVisitor>('Visitor', visitorSchema);
export default Visitor;  // Exportamos el modelo de visitante
