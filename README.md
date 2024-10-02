Utilização:

Criar um aluno (POST):

URL: http://localhost:3000/students
Método: POST
Body (JSON):
json
Copiar código
{
  "nome": "João",
  "email": "joao@hotmail.com",
  "matricula": "1"
}
Listar todos os alunos (GET):

URL: http://localhost:3000/students
Método: GET
Listar um aluno específico (GET):

URL: http://localhost:3000/students/12345 (substitua "12345" pela matrícula desejada)
Método: GET
Atualizar um aluno (PUT):

URL: http://localhost:3000/students/12345 (substitua "12345" pela matrícula do aluno)
Método: PUT
Body (JSON):
json
Copiar código
{
  "nome": "João Atualizado",
  "email": "joao_novo@example.com"
}
Excluir um aluno (DELETE):

URL: http://localhost:3000/students/12345 (substitua "12345" pela matrícula do aluno)
Método: DELETE
