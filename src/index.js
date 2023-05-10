import app from "./app.js";
import { PORT } from "./config.js";
//COMENTARIO: se ejecuta en el puerto 3000
app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);
