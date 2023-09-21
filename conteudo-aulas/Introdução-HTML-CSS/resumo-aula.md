# __Resumo da aula de introdução ao HTML5 e CSS3__

- ### Introduçã ao HTML5
  
  - O elemento HMTL:
    ![Iniciando com HTML - Aprendendo desenvolvimento web | MDN](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVITzKlP16eo1LknnzJpypHD8FcxcfqnI8g&amp;usqp=CAU)
  
  - Estrutura básica:
    
    ```js
    <!DOCTYPE html>
    <html>
        <head>
            <meta>
            <title></title>
        </head>
        <body>
        </body>
    </html>
    ```
    
    - \<!DOCTYPE>: indica o tipo de elemento que está sendo escrito
    
    - \<html>: onde estará contido todo o conteúdo HTML
    
    - \<head>: contém meta-informações que o navegador necessita
      
      - \<meta>: usada para indicar ao navegador como fazer o _encoder_ dos caracteres
      - \<title>: para nomear a aba da página
    
    - \<body>: o conteúdo da página ficará aqui
  
  - Semântica
    
    - \<section>: seção genérica de conteúdo
    
    - \<header>: cabeçalho da página ou de uma parte da página
    
    - \<article>: representa conteúdo relevante da página
    
    - \<aside>: conteúdo relacionado ao conteúdo principal, como uma biografia.
    
    - \<footer>: rodapé da página ou de uma parte da página
    
    - \<h1> - \<h6>: representam a importância de um título dentro da página.
    
    - \<p>: conteúdo do artigo
    
    - \<a>: interliga conteúdo na web
      
      - href: atributo que indica o link para onde a âncora aponta
      
      - target: indica como o link será a berto
        \- _blank: abrir o link em outra aba
    
    - \<img>: adicionar fotos
      
      - src: passar o caminho da imagem
      
      - alt: adicionar texto descritivo à imagem
    
    - \<ul>: lista não ordenada
    
    - \<ol>: lista ordenada
    
    - \<li>: o elemento de um lista

- ### Introdução ao CSS
  
  - O CSS é uma linguagem de estilo, que cria regra de estilo para elementos HTML
  
  - Para diferenciar os elementos é usados os id's (que só podem ser usados uma vez na página) e as class:
    atribuindo o _id_ e a _class_ no HTML
    
    ```html
    <header id="header"></header>
    <header class="apresentacao"></header>
    ```
    
    aplicando regras de estilo no CSS:
    
    ```css
    #header{
        padding: 10px;
    }
    .apresentacao{
        padding: 12px;
    }
    ```
  
  - O navegador representa cada elemento HTML como uma caixa retângular, a _box model_, podemos a alterar pelo CSS
  
  - A _box model_ tem quatro áreas:
    
    - margin: espaçamento entre elementos
    
    - border: circundam o _padding_ e o conteúdo
    
    - padding: espaçamento entre a _border_ e o conteúdo
    
    - content: o conteúdo do elemento
  
  - Margin e padding: pode-se atribuir valores a cada lado destes dois, da seguinte forma:
    dois valores:
    
    ```css
    .presentation{
        margin: 10px 5px;
        padding: 5px 3px;
    }
    ```
    
    nesse caso o primeiro valor é atruído ao eixo y, ou seja, a parte superior e inferior
    quatro valores:
    
    ```css
    .presentation{
        padding: 15px 10px 5px 0;
    }
    ```
    
    aqui os valores são atribuídos individualmente a cada lado, sendo a sequência: topo, direita, inferior e esquerda. pode ainda ser dessa forma:
    
    ```css
      .presentation{
          padding-top: 15px;
          padding-right: 10px;
          padding-bottom: 5px;
          padding-left: 0;
      }
    ```
  
  - A propriedade border pode ter três valores: largura, cor e estilo
  
  - text:
    
    - font-family: altera a fonte do texto
    
    - font-style: altera a aparência do texto
    
    - font-weight: altera o peso da fonte (negrito)
    
    - font-transform: altera entre maiúscula e minúscula, com os valores uppercar (todo maiúsculo), lowercase (minúsculo) e capitalize (primeira maiúsculo)
    
    - text-decoration: dar descaque a um texto adicionando linhas a ele
