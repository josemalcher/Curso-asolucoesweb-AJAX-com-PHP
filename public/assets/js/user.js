window.onload = function () {

    var btn_users = document.querySelector("#btn_users");
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);

    btn_users.onclick = function () {
        //console.log('teste');

        xhttp.onreadystatechange = function () {

            console.log(xhttp.readyState); // - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            console.log(xhttp.status); // - https://developer.mozilla.org/en-US/docs/Web/HTTP/status

            /*if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText); // responseText ->
            }*/
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText); // responseText ->
            }
        };/* fim onreadystatechange*/

        xhttp.open('GET', 'ajax/user.php', true); // open -> abrindo requisição | Arquivo de trabalho | true/false -> assicrono ou sincrono
        xhttp.send(); // enviando a solicitação
    };/* fim onclick */
/*
1
0
2
200
3
200
4
200
Teste dentro do PHP - USER.PHP
*/

};