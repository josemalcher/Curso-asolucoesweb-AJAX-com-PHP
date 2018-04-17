# AJAX COM PHP

https://www.asolucoesweb.com.br/detalhes/curso-ajax-com-php

---

## <a name="indice">Índice</a>

- [ 01 - Configuração básica](#parte1)   
- [ 02 - Estrutura básica do ajax](#parte2)   
- [ 03 - Entendendo estrutura básica do ajax](#parte3)   
- [ 04 - Conexão banco e model](#parte4)   
- [ 05 - Listando users parte 1](#parte5)   
- [ 06 - Listando users parte 2](#parte6)   
- [ 07 - Loading](#parte7)   
- [ 08 - Refatorando estrutura ajax](#parte8)   
- [ 09 - Ajax refatorado](#parte9)   
- [ 10 - Parâmetros GET](#parte10)   
- [ 11 - Cadastrando com post parte 1](#parte11)   
- [ 12 - Cadastrando com post parte 2](#parte12)   
- [ 13 - Cadastrando com post parte 3](#parte13)   
- [ 14 - Busca parte 1](#parte14)   
- [ 15 - Busca parte 2](#parte15)   
- [ 16 - Estados e cidades parte 1](#parte16)   
- [ 17 - Estados e cidades parte 2](#parte17)   
- [ 01 - Ajax com jquery e GET](#parte18)   
- [ 02 - Ajax com jquery e POST](#parte19)   
- [ 03 - Ajax com jquery e função ajax](#parte20)   




---

## <a name="parte1">01 - Configuração básica </a>

terminal: composer init

- composer.json
```json
{
  "name": "josemalcher/workspace-curso-asolucoesweb-ajax-com-php",
  "authors": [
    {
      "name": "José Stélio R. Malcher Junior",
      "email": "contato@josemalcher.net"
    }
  ],
  "autoload": {
    "psr-4": {
      "app\\": "app"
    }
  }
}

```

- config.php
```php
<?php
require "vendor/autoload.php";
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">02 - Estrutura básica do ajax </a>

- https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX

- public/assets/js/user.js
```js
window.onload = function () {

    var btn_users = document.querySelector("#btn_users");
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    btn_users.onclick = function () {
        //console.log('teste');
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
            }
        };

        xhttp.open('GET', 'ajax/user.php', true); // true = assincrona
        xhttp.send();

    };
};
```
- public/ajax/user.php
```php
<?php
echo "Teste dentro do PHP - USER.PHP";
```

- public/index.php

```php
<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Curso PHP com AJAX</title>
</head>
<body>
<button id="btn_users">ChamarPHP</button>
<script src="assets/js/user.js"></script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte3">03 - Entendendo estrutura básica do ajax</a>


[Voltar ao Índice](#indice)

---

## <a name="parte4">04 - Conexão banco e model</a>


[Voltar ao Índice](#indice)

---

## <a name="parte5"> 05 - Listando users parte 1 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte6">06 - Listando users parte 2</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">  07 - Loading </a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">08 - Refatorando estrutura ajax </a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">09 - Ajax refatorado</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">10 - Parâmetros GET</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">11 - Cadastrando com post parte 1 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte12">12 - Cadastrando com post parte 2 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte13">13 - Cadastrando com post parte 3</a>


[Voltar ao Índice](#indice)

---

## <a name="parte14">14 - Busca parte 1 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte15">15 - Busca parte 2</a>


[Voltar ao Índice](#indice)

---

## <a name="parte16">16 - Estados e cidades parte 1 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte17">17 - Estados e cidades parte 2 </a>


[Voltar ao Índice](#indice)

---

## <a name="parte18">01 - Ajax com jquery e GET</a>


[Voltar ao Índice](#indice)

---

## <a name="parte19">02 - Ajax com jquery e POST</a>


[Voltar ao Índice](#indice)

---

## <a name="parte20">03 - Ajax com jquery e função ajax </a>


[Voltar ao Índice](#indice)

---