import Visitor, { IVisitor } from "../models/Visitor"; // Importamos el modelo y su tipo

// Tipo para el cuerpo de la solicitud de un visitante
export interface IVisitanteData {
  nombre: string;   
  correo: string;
  telefono: string;
  direccion: string;
}

export const agregarVisitante = async (visitanteData: IVisitanteData): Promise<IVisitor> => {
    try {
      const nuevoVisitante = new Visitor(visitanteData);
      await nuevoVisitante.save();
      return nuevoVisitante;
    } catch (error) {
      console.error('Error al agregar el visitante:', error);  // Imprimir más detalles del error
      throw new Error('Error al agregar el visitante');
    }
  };
  

// Función para obtener todos los visitantes
export const obtenerVisitantes = async (): Promise<IVisitor[]> => {
  try {
    const visitantes = await Visitor.find();
    return visitantes;
  } catch (error) {
    throw new Error('Error al obtener los visitantes');
  }
};

// Función para obtener un visitante por correo
export const obtenerVisitantePorCorreo = async (correo: string): Promise<IVisitor | null> => {
  try {
    const visitante = await Visitor.findOne({ correo });
    if (!visitante) {
      throw new Error('Visitante no encontrado');
    }
    return visitante;
  } catch (error) {
    throw new Error('Error al obtener el visitante');
  }
};
