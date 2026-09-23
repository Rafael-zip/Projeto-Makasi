# NOX — Site do DJ

Site em HTML/CSS/JS puro, organizado como projeto Vite.

## Estrutura

```
nox-dj-site/
├── index.html          # marcação principal (uma página com âncoras)
├── src/
│   ├── css/
│   │   └── style.css    # todos os estilos
│   └── js/
│       ├── main.js      # entrypoint, inicializa os módulos
│       ├── nav.js        # menu mobile
│       └── newsletter.js # formulário de inscrição
├── public/               # imagens e assets estáticos (fotos, capas de release, favicon)
├── package.json
└── vite.config.js
```

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18+).

```bash
npm install      # instala o Vite
npm run dev      # abre o site em modo desenvolvimento (localhost:5173)
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # visualiza a build de produção localmente
```

## Próximos passos

- Trocar o conteúdo placeholder (nome "NOX", textos, datas de shows, links de streaming) pelo conteúdo real
- Colocar fotos reais em `public/` e referenciá-las no lugar dos blocos de gradiente (`.release-art`, `.media-item`)
- Conectar o formulário de newsletter (`src/js/newsletter.js`) a um provedor real (Mailchimp, Resend, Buttondown etc.)
- Publicar em um hosting estático (Netlify, Vercel ou GitHub Pages) após `npm run build`
