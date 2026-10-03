# Guia de publicação — Vercel

RS CONSTRUÇÕES E REFORMAS • Pacote estático • 02/10/2026

## 1. Extraia o pacote

No Windows, clique com o botão direito no ZIP e escolha **Extrair tudo**. Abra a pasta `rs-construcoes-reformas`. Ela contém `public`, `guias`, `vercel.json`, `netlify.toml` e `README.md`. Não publique o ZIP como um arquivo do site.

O site está em `public/index.html`; CSS, JavaScript e imagens já estão conectados por caminhos relativos. Não precisa de banco de dados, chave de API ou compilação.

## 2. Prepare o repositório

1. Entre em https://github.com e crie um repositório para o projeto.
2. Envie o **conteúdo** da pasta `rs-construcoes-reformas`, preservando as subpastas. `vercel.json` deve ficar na raiz do repositório, ao lado de `public`.
3. Confirme que existem `public/index.html`, `public/style.css`, `public/script.js` e os dois arquivos de `public/assets`.
4. Salve o envio na branch principal, normalmente `main`.

## 3. Importe na Vercel

1. Acesse https://vercel.com e entre na conta que administrará o projeto.
2. Use **Add New → Project** e conecte o GitHub, se necessário.
3. Autorize o acesso ao repositório e clique em **Import**.
4. Confira as configurações abaixo. O arquivo `vercel.json` já define a saída estática.

| Campo | Valor deste pacote |
|---|---|
| Framework Preset | Other |
| Root Directory | Raiz do repositório, onde está `vercel.json` |
| Build Command | Vazio, sem compilação |
| Output Directory | `public` |
| Install Command | Vazio; sem dependências de execução |
| Environment Variables | Nenhuma |

5. Clique em **Deploy** e aguarde a conclusão.
6. Abra a URL de produção fornecida pela plataforma. Os nomes dos menus podem variar conforme atualizações do painel.

## 4. Alternativa pelo terminal

Com Node.js/npm instalado, abra um terminal dentro de `rs-construcoes-reformas` e execute:

```bash
npx vercel login
npx vercel
```

Selecione sua conta/equipe, crie ou vincule o projeto e mantenha a pasta atual como raiz. Confira a prévia antes de publicar:

```bash
npx vercel --prod
```

O CLI pode pedir confirmação para sua instalação temporária. Use o `vercel.json` incluído. Não é necessário executar `npm run build`.

## 5. Configure seu domínio

1. Abra o projeto e entre em **Settings → Domains**.
2. Adicione o domínio que você possui e, se desejado, a versão com `www`.
3. Copie os registros DNS indicados **pelo painel desse projeto** para o provedor do domínio. Não use IPs ou destinos de outro projeto.
4. Preserve os registros de e-mail existentes, principalmente MX e TXT.
5. Aguarde a validação do DNS e a ativação do HTTPS; o tempo depende do provedor.
6. Escolha qual endereço será principal e confira o redirecionamento da outra versão.

## 6. Confira a publicação

- Abra o domínio no computador e no celular, incluindo uma janela anônima.
- Confira a imagem de abertura, o logotipo e o carregamento das fontes.
- Abra o menu móvel, o FAQ e o aviso de privacidade.
- Use **Solicitar orçamento**: teste cada tipo de serviço e confira a mensagem no WhatsApp, sem precisar enviá-la.
- Confira o telefone `5521980322415`, o perfil `@rsprime_construcoes_reformas` e o botão de voltar ao início.
- Caso visitantes encontrem uma tela de login, confira a configuração de proteção do deployment de produção na Vercel e ajuste conforme a audiência desejada.

## 7. Atualizações e solução de problemas

Com Git conectado, envie as alterações para a branch de produção para gerar um novo deployment. Pelo CLI, execute novamente `npx vercel --prod` dentro da mesma pasta vinculada.

**Erro 404:** confira se a raiz do projeto contém `vercel.json`, se Output Directory é `public` e se há `public/index.html`.

**Sem imagens ou estilo:** envie a pasta `public` completa; não renomeie os arquivos e respeite maiúsculas/minúsculas.

**Versão antiga:** confirme o deployment de produção e faça uma atualização forçada no navegador.

**Tipografia diferente:** as fontes são carregadas do Google Fonts; bloqueios de rede acionam as fontes alternativas do CSS.

## Referências oficiais

- Configuração: https://vercel.com/docs/builds/configure-a-build
- Arquivo de configuração: https://vercel.com/docs/project-configuration/vercel-json
- Deployments: https://vercel.com/docs/deployments
- Domínio: https://vercel.com/docs/domains/working-with-domains/add-a-domain

As instruções foram adaptadas à estrutura deste pacote. Esta entrega não publica o site na sua conta Vercel.
