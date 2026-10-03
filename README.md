# RS CONSTRUÇÕES E REFORMAS — código completo

Exportação da versão publicada, incluindo as últimas alterações de Instagram, orçamento e botão de retorno ao topo. HTML, CSS e JavaScript legíveis, conectados entre si e sem etapa de compilação.

## Organização

| Arquivo | Finalidade |
|---|---|
| public/index.html | Conteúdo, navegação, FAQ, diálogos e contatos |
| public/style.css | Design, responsividade, animações e movimento reduzido |
| public/script.js | Menu, WhatsApp, orçamento, animações e diálogos |
| public/assets/logo.webp | Logotipo enviado pelo usuário |
| public/assets/hero.webp | Imagem arquitetônica de abertura |
| vercel.json | Publicação estática da pasta public na Vercel |
| guias/GUIA-VERCEL.md | Passo a passo para Vercel |

## Visualização local

Abra `public/index.html` no navegador. Para servir por HTTP, execute na pasta do projeto, com Python instalado:

```bash
python -m http.server 8080 --directory public
```

Abra http://localhost:8080. As fontes e os links externos precisam de internet. A conta ChatGPT não é necessária para hospedar estes arquivos em outra plataforma.

## Funcionalidades preservadas

Menu móvel, links internos, botão de retorno ao topo, FAQ expansível, aviso de privacidade, WhatsApp flutuante, Instagram discreto na área de contato, formulário com quatro tipos de serviço, mensagem de orçamento com localização e descrição opcionais, animações IntersectionObserver, hover e suporte a movimento reduzido.

## Manutenção

Edite textos e links em `public/index.html`, apresentação em `public/style.css` e comportamentos em `public/script.js`. O telefone aparece no HTML e no JavaScript; ao alterá-lo, atualize todas as ocorrências. Não renomeie as imagens sem atualizar as referências.

O orçamento prepara uma mensagem e abre o WhatsApp. Não há envio automático, armazenamento de leads, painel administrativo ou cálculo de preço. Não são necessárias chaves de API.

## Conteúdo e recursos externos

- Fontes Inter e Barlow Condensed carregadas do Google Fonts; fontes alternativas estão definidas no CSS.
- A fotografia de abertura é uma referência ilustrativa da Casa LCC, Aguirre Arquitetura, preservada da versão atual. Fonte: https://aguirre.arq.br/content/uploads/2022/05/capa_lcc.jpg . A licença de uso comercial não foi confirmada: antes de uso comercial público, obtenha autorização ou substitua por imagem licenciada/do cliente.
- Os depoimentos permanecem identificados como demonstrativos. Não são avaliações de clientes reais.
- WhatsApp, Instagram, Google Maps e e-mail abrem serviços externos.

## Verificação da entrega

Logotipo convertido sem perdas para WebP; foto otimizada para WebP com largura máxima de 2400 px; referências locais, âncoras, sintaxe JavaScript, arquivos de configuração e integridade ZIP conferidos. Não houve deploy na Vercel/Netlify nem teste real de envio de mensagens. O site hospedado anteriormente não foi alterado por esta exportação.
