# pruebaiacc
# Se requiere node >=16.17
### git clone https://github.com/amgeloromero/pruebaiacc.git

### cd pruebaiacc

### npm install

### npm run dev




### get estudiantes
GET http://localhost:3000/api/estudiantes

###
POST http://localhost:3000/api/estudiantes
Content-Type: application/json

{
  "name": "angelo romero",
  "carrera": "informatica"
}

### Get estudiantes by id
GET http://localhost:3000/api/estudiantes/2

### Update an estudiantes
PATCH http://localhost:3000/api/estudiantes/2
Content-Type: application/json

{
  "name": "angelo romero",
  "carrera": "enfermeria"
}
