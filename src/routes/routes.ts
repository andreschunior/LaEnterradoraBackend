import { Router } from 'express';
import { registrarVisitante, obtenerVisitantes,  } from '../controllers/visitorController'; // Asegúrate de que los nombres coinciden

const router = Router();

// Ruta para registrar un nuevo visitante
router.post('/visitors', registrarVisitante);

// Ruta para obtener todos los visitantes
router.get('/visitors', obtenerVisitantes);

export default router;
