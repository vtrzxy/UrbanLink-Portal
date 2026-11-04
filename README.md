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

### Links da entrega

| Item | Endereço |
| --- | --- |
| GitHub da Sprint 4 | Inserir URL do repositório público do grupo |
| Vercel | Inserir URL da aplicação publicada |
| API Java | https://urbanlink-sboot.onrender.com |
| Vídeo | Inserir URL do YouTube com a demonstração |

## Contato

A página **Contato** apresenta o formulário demonstrativo. Os perfis de GitHub e LinkedIn abaixo identificam os integrantes e servem para contato com a equipe.

## Autores

| Foto | Integrante | RM | Turma | Perfis |
| --- | --- | --- | --- | --- |
| <img src="public/assets/integrantes/FelipeCabral.jpg" width="48" alt="Foto de Felipe Cabral"> | Felipe Cabral | 569432 | 1TDS | [GitHub](https://github.com/Felipecmf) · [LinkedIn](https://www.linkedin.com/in/felipe-fernandes-126887266/) |
| <img src="public/assets/integrantes/FelipeFalcao.jpeg" width="48" alt="Foto de Felipe Falcão"> | Felipe Falcão | 571956 | 1TDS | [GitHub](https://github.com/fefalcaoo) · [LinkedIn](https://www.linkedin.com/in/felipe-falc%C3%A3o-ferreira-529714278/) |
| <img src="public/assets/integrantes/RafaelAndres.jpg" width="48" alt="Foto de Rafael Andres"> | Rafael Andres | 573700 | 1TDS | [GitHub](https://github.com/Andresxxyz) · [LinkedIn](https://www.linkedin.com/in/rafaandres/) |
| <img src="public/assets/integrantes/VitorReis.jpg" width="48" alt="Foto de Vitor Reis"> | Vitor Reis | 573315 | 1TDS | [GitHub](https://github.com/vtrzxy) · [LinkedIn](https://www.linkedin.com/in/vi-reis/) |
| <img src="public/assets/integrantes/VitorRodrigo.jpg" width="48" alt="Foto de Vitor Rodrigues"> | Vitor Rodrigues | 571297 | 1TDS | [GitHub](https://github.com/vitorf8) · [LinkedIn](https://www.linkedin.com/in/vitor-rodrigues-ferreira-22048a30b/) |

A base visual e os recursos vieram do [UrbanLink Frontend da Sprint 3](https://github.com/challenge2026-Andres/UrbanLink_Frontend). O logo, os banners e os ícones do projeto estão em `public/assets`.
