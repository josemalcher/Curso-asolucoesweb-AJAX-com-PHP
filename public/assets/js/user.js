window.onload = function () {

    var btn_users = document.querySelector("#btn_users");
    var div_user = document.querySelector("#div_user");
    var xhttp = new XMLHttpRequest();

    btn_users.onclick = function () {
        xhttp.onreadystatechange = function () {

            if (this.readyState < 4) {
                div_user.innerHTML = `<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>`;
            }

            if (this.readyState == 4 && this.status == 200) {

                var users = JSON.parse(this.responseText);
                //console.log(users);

                var table = `<table class="table table-striped">`; // usando crase ECS 6
                table+= `<thead><tr><td>ID</td><td>Nome</td><td>email</td></tr></thead>`;
                table+= `<tbody>`;
                    users.forEach(function (user) {
                        table+= `<tr>`;
                        table+= `<td> ${user.id} </td>`;
                        table+= `<td> ${user.nome} </td>`;
                        table+= `<td> ${user.email} </td>`;
                        table+= `</tr>`;
                    });
                table+= `</tbody>`;
                div_user.innerHTML = table;

            }
        };/*fim onreadystatechange*/

        xhttp.open('GET', 'ajax/user.php', true);
        xhttp.send();
    };/*fim onclick */

};