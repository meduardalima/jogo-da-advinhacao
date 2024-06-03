# Jogo da Adivinhação

Este é um projeto simples de jogo de adivinhação, onde o usuário tenta adivinhar um número aleatório entre 0 e 10. O projeto utiliza HTML, CSS e JavaScript para criar uma experiência interativa e divertida.

## Como Funciona

O jogo gera um número aleatório entre 0 e 10 quando a página é carregada ou resetada. O usuário insere um número e clica no botão "Tentar" para ver se adivinhou corretamente. O jogo informa quantas tentativas foram necessárias para adivinhar o número corretamente. Se o usuário quiser jogar novamente, ele pode clicar no botão "Resetar".

## Estrutura do Projeto

### Elementos do DOM

- **Botões:**
  - `btnTry`: Botão para tentar adivinhar o número.
  - `btnReset`: Botão para resetar o jogo.

- **Telas:**
  - `screen1`: Primeira tela que contém o formulário de palpite.
  - `screen2`: Segunda tela que exibe a mensagem de sucesso.

### Variáveis

- `randomNumber`: Armazena o número aleatório gerado.
- `xAttempts`: Conta o número de tentativas feitas pelo usuário.

### Eventos

- `click` no `btnTry`: Chama a função `handleTryClick`.
- `click` no `btnReset`: Chama a função `handleResetClick`.
- `keydown` no documento: Chama a função `handleResetClick` se a tecla "Enter" for pressionada e a `screen1` estiver oculta.

### Como Executar o Projeto
- Clone o repositório para o seu ambiente local.
bash
- Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
- Abra o arquivo index.html no seu navegador.

### Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
  
### Contribuição
Se você deseja contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório, criar uma nova branch, fazer suas alterações e enviar um pull request.

### Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.


