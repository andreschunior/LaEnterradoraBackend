import express, { Request, Response } from 'express'; // Importar express con los tipos
import router from './routes/routes'; // Importa las rutas desde 'routes/routes'
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// Crear la aplicación express
const app = express();

// Ruta principal
app.get('/', (req: Request, res: Response) => {
  res.send('Todo ok en el servidor');
});

// Usar el middleware morgan
app.use(morgan('dev'));  // Para loguear las peticiones HTTP

// Usar el middleware cors
app.use(cors());  // Para permitir peticiones de diferentes orígenes

// Middleware para parsear JSON
app.use(express.json());  // Para parsear el cuerpo de las peticiones como JSON

// Usar body-parser para leer JSON
app.use(bodyParser.json());

// Usar el enrutador importado
app.use(router);  // Las rutas de '/api' están manejadas por el router importado

// Exportar la app
export default app;

