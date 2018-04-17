window.onload = function () {

    var btn_users = document.querySelector("#btn_users");
    var div_user = document.querySelector("#div_user");
    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var users = JSON.parse(this.responseText);
                console.log(users);

            }
        };/*fim onreadystatechange*/

        xhttp.open('GET', 'ajax/user.php', true);
        xhttp.send();
    };/*fim onclick */

};