# LinkedIn Messaging Automation

Este projeto é uma automação de envio de mensagens para perfis do LinkedIn usando a biblioteca Puppeteer no Node.js. Ele permite que você faça login na sua conta do LinkedIn, acesse perfis específicos e envie mensagens para esses perfis automaticamente.

## Pré-requisitos

Antes de executar o código, certifique-se de ter instalado o Node.js em sua máquina. Além disso, você precisará ter uma conta no LinkedIn e obter as credenciais de login.

## Configuração

1. Clone este repositório para o seu ambiente local.

2. Pelo terminal ao acessar o diretório do projeto, instale as dependências utilizando o:

```bash
npm install
```

3. No diretório do projeto, crie um arquivo `.env` e defina as seguintes variáveis de ambiente:
   LINKEDIN_LOGIN="seu_email_do_LinkedIn"
   LINKEDIN_PASSWORD="sua_senha_do_LinkedIn"
   MESSAGE_TO_SEND="sua_mensagem_de_envio"

4. Substitua as linhas do `profiles.json`, para os perfis em que você deseja enviar mensagens.

[
"https://www.linkedin.com/in/perfil1/",
"https://www.linkedin.com/in/perfil2/",
"https://www.linkedin.com/in/perfil3/"
]

## Instalação

1. No terminal, execute o comando:

```bash
npm run dev
```

para iniciar a instalação das dependências.

2. O código irá abrir uma instância do chromium, fazer login no LinkedIn usando as credenciais fornecidas.
   Após executar o login, ele irá esperar você validar suas informações pelo Captcha\* acessar cada perfil listado no arquivo `profiles.json`, enviar uma mensagem definida pela variável `MESSAGE_TO_SEND` e fechar a janela do chat.

\*Devido a sua segurança, dos seus dados e possíveis regras do LinkedIn sobre burlar o metódo de proteção por Captcha, o código não fornece nenhum método para executar tal tarefa, visando questões éticas e morais.

## Notas

- Certifique-se de ajustar as configurações do Puppeteer no código, como o caminho para o executável do seu navegador(caso opte), de acordo com o seu ambiente.
- O código usa `setTimeout` para adicionar atrasos antes de executar certas ações, como aguardar a renderização da página e interagir com elementos. Ajuste esses atrasos de acordo com a velocidade da sua conexão à Internet e a capacidade de resposta do LinkedIn.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
