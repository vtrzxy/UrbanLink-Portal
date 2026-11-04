# Backend publicado

O front utiliza `https://urbanlink-sboot.onrender.com`. Não é necessário executar o Java no computador.

O serviço no Render pode ficar inativo após um período sem uso. A primeira requisição o inicia novamente e pode levar mais de um minuto. Aguarde o carregamento e, se aparecer um erro, clique em Tentar novamente.

Na Vercel, configure `VITE_API_URL=https://urbanlink-sboot.onrender.com` antes do build. No Render, inclua a origem exata da aplicação em `CORS_ORIGIN`. Para emissão, escolha um perfil de demonstração com saldo e um transporte integrado que aceite vouchers.
