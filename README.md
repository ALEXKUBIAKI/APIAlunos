Utilização:
na pasta do projeto rodar os seguintes comandos:
npm init -y
npm install express
após isto, rodar node server.js para iniciar o servidor.

Utilizando Postman, segue as formas de interação


Criar um aluno (POST):
---------------------------------------
URL: http://localhost:3000/students
Método: POST
Body (JSON):
json
{
  "nome": "João",
  "email": "joao@hotmail.com",
  "matricula": "1"
}


Listar todos os alunos (GET):
---------------------------------------
URL: http://localhost:3000/students
Método: GET

Listar um aluno específico (GET):
---------------------------------------
URL: http://localhost:3000/students/1 (substitua "1" pela matrícula desejada)
Método: GET

Atualizar um aluno (PUT):
---------------------------------------
URL: http://localhost:3000/students/1 (substitua "1" pela matrícula do aluno)
Método: PUT
Body (JSON):
json
{
  "nome": "João Atualizado",
  "email": "joao_novo@example.com"
}
Excluir um aluno (DELETE):
---------------------------------------
URL: http://localhost:3000/students/12345 (substitua "12345" pela matrícula do aluno)
Método: DELETE
