
# POC Next.js - Superheroes

Este projeto exibe uma lista de heróis utilizando a **SuperheroAPI**. Os heróis são apresentados em cards estilizados, e o usuário pode carregar mais heróis conforme navega pela página. 
  
## Pré-requisitos

Certifique-se de ter o **Node.js** e **npm** instalados em sua máquina.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/R0chaa/SuperHeroe-NextJS.git
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env.local` na raiz do projeto com o token da API SuperheroAPI:

   ```env
   NEXT_PUBLIC_SUPERHERO_API_TOKEN=seu_token_aqui
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto 

```bash
.
├── public
│   ├── noHeroe.png         # Imagem padrão exibida quando a imagem do herói não é encontrada
├── src
│   ├── app
│   │   ├── page.js         # Página principal do Next.js
│   │   ├── page.module.css # Estilos para a página principal
│   │   ├── layout.js       # Configurações de layout padrões do Next.js
│   │   └── globals.css     # Estilos globais
│   ├── components
│   │   ├── HeroCard.js     # Componente do card de heróis
│   │   └── globals.css     # Estilos do card de heróis
└── README.md      
```

## Configuração de Estilo

- **Fundo**: `#212121`
- **Cor do Card**: `#424242`
- **Cor de Intelligence**: `#007aff`
- **Cor de Strength**: `#731d1b`

Essas cores foram escolhidas para criar um contraste agradável e realçar os elementos do design.

## API SuperheroAPI 🔗

A aplicação utiliza a SuperheroAPI para obter dados dos heróis. Para saber mais sobre a API, consulte a [documentação oficial](https://superheroapi.com/).

## Contribuição

Contribuições são bem-vindas! Se você quiser melhorar o projeto, siga as etapas abaixo:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature-nova-funcionalidade`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`).
4. Push para a branch (`git push origin feature-nova-funcionalidade`).
5. Abra um Pull Request.

## Grupo 📬

- Lucas Rocha
- Luiz Saraiva
- Leonardo Pinheiro
- Fábio Sabino
