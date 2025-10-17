# LinkedIn Messaging Automation

Automação inteligente para envio de mensagens personalizadas no LinkedIn usando Puppeteer. Sistema que automatiza o processo de networking profissional, permitindo envio em massa de mensagens personalizadas com nome do destinatário.

## ✨ Funcionalidades

- **Login Automatizado**: Autenticação automática no LinkedIn
- **Mensagens Personalizadas**: Personalização com nome do destinatário
- **Envio em Massa**: Processamento de múltiplos perfis simultaneamente
- **Interface Visual**: Execução com navegador visível para monitoramento
- **Configuração Flexível**: Arquivo JSON para lista de perfis
- **Variáveis de Ambiente**: Configuração segura de credenciais
- **Tratamento de Erros**: Atrasos inteligentes para estabilidade

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Puppeteer 20.7.4** - Automação de navegador
- **dotenv 16.3.1** - Gerenciamento de variáveis de ambiente
- **nodemon 2.0.22** - Desenvolvimento com hot reload
- **Chrome/Chromium** - Navegador para automação

## 🚀 Como Executar

### Pré-requisitos

- Node.js 14+ instalado
- Conta ativa no LinkedIn
- Navegador Chrome/Chromium

### Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd LinkedInMessagingAutomation
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto:
```env
LINKEDIN_LOGIN="seu_email@exemplo.com"
LINKEDIN_PASSWORD="sua_senha"
MESSAGE_TO_SEND="Sua mensagem personalizada aqui"
```

4. **Configure os perfis:**
Edite o arquivo `profiles.json` com os perfis desejados:
```json
[
  "https://www.linkedin.com/in/perfil1/",
  "https://www.linkedin.com/in/perfil2/",
  "https://www.linkedin.com/in/perfil3/"
]
```

5. **Execute a automação:**
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
LinkedInMessagingAutomation/
├── index.js              # Script principal de automação
├── profiles.json         # Lista de perfis para contato
├── package.json          # Dependências e scripts
├── .env                  # Variáveis de ambiente (criar)
├── LICENSE               # Licença MIT
└── README.md            # Documentação
```

## 🎯 Características Técnicas

- **Automação Web**: Puppeteer para controle do navegador
- **Seletores CSS**: Localização precisa de elementos
- **Timeouts Inteligentes**: Atrasos para estabilidade
- **Personalização Dinâmica**: Extração de nome do perfil
- **Configuração Modular**: Separação de dados e lógica
- **Tratamento de Navegação**: Aguarda carregamento completo
- **Logs Informativos**: Acompanhamento do progresso

## 📝 Uso

1. **Configure as credenciais** no arquivo `.env`
2. **Adicione os perfis** no `profiles.json`
3. **Execute o script** com `npm run dev`
4. **Aguarde o login** e resolva o CAPTCHA manualmente
5. **Monitore o progresso** no console e navegador

## ⚠️ Considerações Importantes

### **Ética e Legalidade**
- Use apenas para networking profissional legítimo
- Respeite os termos de uso do LinkedIn
- Evite spam ou mensagens não solicitadas
- Mantenha frequência adequada entre envios

### **Limitações Técnicas**
- CAPTCHA deve ser resolvido manualmente
- LinkedIn pode detectar automação excessiva
- Ajuste os timeouts conforme sua conexão
- Monitore o comportamento do LinkedIn

### **Configurações Recomendadas**
- Use delays maiores para evitar detecção
- Limite o número de perfis por execução
- Varie o conteúdo das mensagens
- Execute em horários comerciais

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Verificar versão do Node
node --version

# Listar dependências instaladas
npm list
```

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

**Desenvolvido por:** Phillip M. Lopes  
**Email:** phillipmlopes@gmail.com  
**LinkedIn:** [phillipmlopes](https://www.linkedin.com/in/phillipmlopes/)  
**GitHub:** [Phillipml](https://github.com/Phillipml)
