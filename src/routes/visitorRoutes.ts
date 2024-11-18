import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Visitor from '../models/Visitor';  // Importa el modelo de Visitor

const router = Router();

router.post('/visitors',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('celular').notEmpty().withMessage('El celular es obligatorio'),
    body('correo').isEmail().withMessage('El correo debe ser válido').notEmpty(),
    body('empresa').notEmpty().withMessage('La empresa es obligatoria'),
    body('interesadoEnEventos').isBoolean().withMessage('El campo interesadoEnEventos debe ser un booleano'),
    
    async (req: Request, res: Response): Promise<void> => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log('Errores de validación:', errors.array()); // Aquí mostramos los errores
        res.status(400).json({ errors: errors.array() });
        return;
      }
      
      // Continuar con el proceso si no hay errores
      try {
        const newVisitor = new Visitor(req.body);
        await newVisitor.save();
        res.status(201).json(newVisitor);
      } catch (err) {
        res.status(400).json({ message: 'Error al registrar el visitante', error: err });
      }
    }
  );
  

// Ruta para obtener todos los visitantes
router.get('/visitors', async (req: Request, res: Response): Promise<void> => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los visitantes', error: err });
  }
});

export default router;
