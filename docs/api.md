# Integração Java

| Método | Rota | Uso |
| --- | --- | --- |
| GET | /transportes | Catálogo |
| GET | /transportes/{id} | Detalhe e tarifa |
| GET | /usuarios | Seleção do perfil de demonstração e saldo |
| GET | /vouchers/usuario/{id} | Histórico |
| GET | /vouchers/{codigo} | Detalhe do voucher |
| POST | /vouchers | Emissão |
| PUT | /vouchers/{codigo}/utilizar | Utilização |
| PUT | /vouchers/{codigo} | Cancelamento |

Na emissão, envie `usuarioId`, `transporteId` e `percentualCobertura`. O Java calcula o preço em pontos. Na utilização, envie `usuarioId`. No cancelamento, envie `status: "CANCELADO"`. Use um perfil de demonstração ao testar operações que alteram o saldo.

A API publicada é `https://urbanlink-sboot.onrender.com`. A primeira chamada pode demorar mais de um minuto, como observado no Postman. Ao publicar, configure `CORS_ORIGIN` no backend com a origem do front e configure `VITE_API_URL` na Vercel antes de gerar o build.
