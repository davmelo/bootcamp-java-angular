# Resumo da aula de sintaxe básica em JavaScript

- É uma boa prática carregar ao final do _body_ do HTML o arquivo externo JavaScript

- JavaScript possui tipagem fraca

- Os tipos primitivos são: Boolean; null; undefined; Number; String; Array; Object; Function

- Declaração de variáveis:
  
  - __var__: escopo global; seu valor pode ser alterado; se não atribuido, valor inicial será _null_
  
  - __let__: escopo local (ao atribuir variáveis dentro de uma função); seu valor pode ser alterado; se não atribuido, valor inicial será _null_
  
  - __const__: escopo local; não pode ter seu valor alterado; atribuição inicial obrigatória

- No JavaScript, além da atribuição e da comparação, existe também a comparação idência (===), que além de comparar o valor também compara o tipo da variável:
  
  ```javascript
  //COMPARAÇÃO USUAL
  var numberText = "21";
  comparacao = numberText == 21;
  console.log(comparacao);
  //Resultafo igual a true
  
  //COMPARAÇÃO INDÊNTICA
  numberText = "18";
  comparacao = numberText === 18;
  console.log(comparacao)
  //Resultado igual a false
  ```

- Arrow function: são funções de expressão de sintaxe curta; são sempre anônimas, portanto não podem ser nomeadas:
  
  ```javascript
  var funcao = () =>{
      comsole.log("Hello, world!");
  }
  ```
