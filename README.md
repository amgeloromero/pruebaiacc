# Pruebaiacc
# Se requiere node >=16.17

### git clone https://github.com/amgeloromero/pruebaiacc.git

cd pruebaiacc
npm install
npm run dev

### usar Postman o Thunder Client


### get estudiantes
metodo --> GET  --> http://localhost:3000/api/estudiantes

### insert estudiantes
metodo --> POST  -->  http://localhost:3000/api/estudiantes
Content-Type: application/json

{
  "name": "angelo romero",
  "carrera": "informatica"
}

### Get estudiantes by id
metodo --> GET  -->  http://localhost:3000/api/estudiantes/2

### delete estudiantes by id
metodo --> DELETE  -->   http://localhost:3000/api/estudiantes/2


### Update an estudiantes
metodo --> PATCH  -->  http://localhost:3000/api/estudiantes/2
Content-Type: application/json

{
  "name": "angelo romero",
  "carrera": "enfermeria"
}


### Para ejecutar test 
npm test


### codigo en produccion index
https://pruebaiacc-production.up.railway.app/

### codigo en produccion index de api
https://pruebaiacc-production.up.railway.app/api/estudiantes