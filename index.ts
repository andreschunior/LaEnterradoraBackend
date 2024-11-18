// Importa app desde el servidor
import app from "./src/server";
import dbCon from "./src/config/dbCon";

// Conectar a la base de datos
dbCon()
  .then(() => {
    // Levanta el servidor después de conectar a la base de datos
    app.listen(3000, () => {
      console.log('Servidor Express escuchando en el puerto 3000');
    });
  })
  .catch((err: Error) => {
    console.error('Error al conectar a la base de datos:', err);
  });
