import { Request, Response } from 'express';
import * as visitorService from '../services/visitorService'; // Importamos el servicio

// Controlador para registrar un nuevo visitante
export const registrarVisitante = async (req: Request, res: Response): Promise<void> => {
    console.log('Datos recibidos:', req.body); // Verifica los datos que llegan al servidor
    try {
      const nuevoVisitante = await visitorService.agregarVisitante(req.body);
      res.status(201).json(nuevoVisitante);
    } catch (error) {
      console.error('Error al registrar el visitante:', error); // Log de errores en el servidor
      res.status(400).json({ message: (error as Error).message });
    }
  };
  

// Controlador para obtener todos los visitantes
export const obtenerVisitantes = async (req: Request, res: Response): Promise<void> => {
  try {
    const visitantes = await visitorService.obtenerVisitantes();
    res.json(visitantes);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Controlador para obtener un visitante por correo
export const obtenerVisitantePorCorreo = async (req: Request, res: Response): Promise<void> => {
  try {
    const visitante = await visitorService.obtenerVisitantePorCorreo(req.params.correo);
    res.json(visitante);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
};
