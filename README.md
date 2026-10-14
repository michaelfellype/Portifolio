# Portfólio de Michael Almeida

Site profissional preparado para GitHub Pages. Inclui apresentação, projetos, competências, experiência, formação e contato.

**Endereço previsto após publicação:** https://fellipemec.github.io/Portifolio/

## Publicar pelo navegador

1. Entre na conta **Fellipemec** em https://github.com.
2. Crie um repositório chamado **Portifolio** e selecione **Public**. Se já existir um repositório com esse nome, confira o conteúdo antes de usá-lo.
3. Descompacte o pacote `portfolio-michael-almeida.zip` no seu computador.
4. No repositório, escolha **Add file → Upload files**. Envie o **conteúdo** da pasta descompactada: `index.html`, `projeto-cbi.html`, `projeto-estoque.html`, `assets/` e `projetos/`. O `index.html` deve ficar na raiz do repositório, sem uma pasta adicional envolvendo o site. Você pode enviar também este README e o arquivo `.nojekyll`.
5. Confirme o envio em **Commit changes**.
6. Abra **Settings → Pages**.
7. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
8. Em **Branch**, escolha **main** e **/ (root)**. Clique em **Save**.
9. Aguarde a publicação. A seção Pages mostrará o link do site; pode levar alguns minutos.
10. Confira a página inicial, os dois projetos e o botão **Abrir demonstração** do CBI.

Não é necessário instalar Node, executar comandos ou compilar o portfólio. O pacote contém arquivos estáticos prontos para upload. Documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Colocar nos Destaques do LinkedIn

Depois que o endereço público estiver funcionando, adicione o link à seção **Destaques** do seu perfil.

Título sugerido: **Michael Almeida | Portfólio de projetos**

Descrição sugerida: **Conheça meus projetos de controle de estoque em Excel e desenvolvimento web, além da minha trajetória em suporte de TI.**

## O que está incluído

- `index.html`: página principal.
- `projeto-estoque.html`: apresentação do Excel com uma simulação de saldo e alertas no navegador.
- `projeto-cbi.html`: apresentação da landing page com captura real.
- `projetos/cbi/`: demonstração da landing page a partir do build fornecido, com caminhos adaptados para uma subpasta do GitHub Pages.
- `assets/`: estilos, scripts, imagens, fontes locais e licenças.

O painel ilustrado do estoque usa dados fictícios e está identificado como representação da interface. A simulação em JavaScript apresenta a lógica básica do projeto; o projeto original é uma planilha Excel. A planilha original e o PDF do perfil não foram incluídos nos arquivos públicos.

A experiência e a formação foram organizadas com base no perfil fornecido. Os períodos marcados como atuais seguem o PDF. O CBI mantém o conteúdo do projeto fornecido, inclusive contatos e indicação de depoimentos demonstrativos.

## Alterações futuras

- Edite os textos diretamente nos três arquivos HTML.
- Altere cores e layout em `assets/style.css`.
- Altere o menu e a simulação em `assets/main.js`.
- Para atualizar a demonstração do CBI, use um novo build do projeto original, adaptando os caminhos dos ativos para a subpasta.
- Se mudar o nome do repositório, atualize as URLs de `canonical`, `og:url`, `og:image` e os dados estruturados nos três arquivos HTML. Os links internos já são relativos.

As fontes e as dependências reutilizadas do projeto CBI têm suas licenças preservadas em `assets/licenses/` e `projetos/cbi/licenses/`.
