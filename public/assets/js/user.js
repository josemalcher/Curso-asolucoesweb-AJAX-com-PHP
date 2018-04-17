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