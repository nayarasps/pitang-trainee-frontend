# Pitang Trainee - Backend

Projeto final

Diante do cenário atual, existe uma demanda gigante de pessoas para tomar a vacina para
o COVID-19. E com isso nossa cidade está precisando de um simples sistema para realizar
os agendamentos.
O processo consiste na criação de um portal onde será possível agendar pacientes para
tomar a vacina, construir uma página para consulta dos agendamentos feitos por dia e
horário.

## Executar o Servidor (Default Port 3000)

    yarn start

## Regras de uso:
- O agendamento deve ser feito em uma página por um formulário.
- A disponibilidade das vagas são de 20 por dia.
- Cada horário só tem a disponibilidade de 2 agendamentos para o mesmo horário.
- O resultado dos agendamentos devem ser agrupados por dia e hora do
  agendamento.
- Deve ser criada uma página para consultar os agendamentos.
- O intervalo de tempo entre um agendamento e outro é de 1 hora.
## Regras de negócio:
- O paciente deve informar seu nome, data de nascimento e dia e horário para o
  agendamento.
- Deverá ser checado se o formulário foi preenchido.
- Os dados do paciente/agendamentos devem ser armazenados em memória.
- Quando o usuário der F5 ou recarregar a página os dados não podem ser perdidos.
- Dentro da página para consultar os agendamentos deve ser possível visualizar a
  listagem de agendamentos feitos e informar se o agendamento foi realizado ou não,
  e qual a conclusão do atendimento(se foi realizado). 
- Quando o usuário der F5 ou recarregar a página os dados não podem ser perdidos.