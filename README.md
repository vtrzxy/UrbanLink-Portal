# UrbanLink — Sprint 4

Aplicação do Challenge FIAP que propõe incentivar o transporte público com pontos e vouchers. O catálogo de transportes, a emissão e a consulta de vouchers usam a API Java do grupo.

## Identidade visual

![Logo UrbanLink](public/assets/logosUrbanLink/logo_UrbanLink.svg)

![Mobilidade e recompensas](public/assets/banners/recompensas-banner.svg)

<img src="public/assets/icons/bus-front-fill.svg" width="32" alt="Transporte público"> <img src="public/assets/icons/leaf.svg" width="32" alt="Sustentabilidade">

## Tecnologias

React, Vite, TypeScript, Tailwind CSS, React Router e React Hook Form.

## Estrutura

- `src/pages`: páginas e rotas da aplicação.
- `src/components`: cabeçalho, rodapé, cards e outros componentes compartilhados.
- `src/data` e `src/types`: conteúdo local e tipos TypeScript.
- `src/services`: chamadas à API de transportes, usuários e vouchers.
- `public/assets`: logos, ilustrações e fotos utilizadas na interface.

## Como usar

A API publicada em `https://urbanlink-sboot.onrender.com` já é o padrão do front. Não é necessário instalar ou iniciar o Java no computador.

Para testar a emissão, use um usuário de demonstração com saldo e um transporte integrado que aceite vouchers. Com Node.js 24 e npm instalados, execute na raiz do front.

```bash
npm ci
npm run dev
```

Abra o endereço exibido pelo Vite. Para verificar o projeto:

```bash
npm run lint
npm run build
```

A configuração padrão é `https://urbanlink-sboot.onrender.com`. Para trocar o endereço, copie `.env.example` para `.env.local`, altere `VITE_API_URL` e reinicie o Vite. Em uma publicação, configure a variável antes de gerar o build e inclua a origem do front em `CORS_ORIGIN` no backend.

Em **Recompensas**, escolha um transporte, selecione o usuário de demonstração, informe a cobertura da tarifa e emita o voucher. O código e o crédito retornados aparecem na tela. Em **Meus vouchers**, consulte os vouchers do perfil selecionado. O formulário de contato simula a validação.
