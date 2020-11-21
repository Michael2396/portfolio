var request1 = $.ajax({
    url: 'clients.json',
    method: "GET",
    dataType: "json"
});

request1.done(function (msg) {
    console.log(msg);
    display1(msg);

});
request1.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
});

function display1(msg) {
    var res = msg;
    const listClients = document.getElementById('list_clients');
    var clientFirstName;
    var clientLastName;
    var clientJob;
    var clientAdress;
    for (let i = 0; i < res.length; i++) {
        clientAvatar = res[i].general.avatar;
        clientFirstName = res[i].general.firstName;
        clientLastName = res[i].general.lastName;
        clientJob = res[i].job.company;
        clientAdress = res[i].address.country;
        listClients.innerHTML += '<div class="client" data-clientFirstName="' + clientFirstName + '"' +
            ' data-clientLastName="' + clientLastName + '" data-clientJob="' + clientJob + '"' +
            ' data-clientAddress="' + clientAdress + '" + data-clientAvatar="' + clientAvatar + '"><div class="client-avatar"><img src=' + clientAvatar + ' alt=""></div>' +
            '<div class="client-info">' + '<p>' + clientFirstName + '<br>' + clientLastName + '</p></div></div>';
    }
    var client = document.getElementsByClassName("client");
    var listClientInfo = document.getElementsByClassName('list-client-info');
    $(client).click(function (e) {
        var dataClientFirstName = this.dataset.clientfirstname;
        var dataClientLastName = this.dataset.clientlastname;
        var dataClientJob = this.dataset.clientjob;
        var dataClientAvatar = this.dataset.clientavatar;
        var dataClientAddress = this.dataset.clientaddress;
        listClientInfo[0].innerHTML = " ";
        listClientInfo[0].innerHTML += '<div class="client-avatar"><img src="' + dataClientAvatar + '" alt=""></div><div class="client-info"><p>Name:' + " " + '' + dataClientFirstName + " " + dataClientLastName + '</p><p>Client Job:' + " " + '' + dataClientJob + '</p><p>Address:' + " " + '' + dataClientAddress + '</p></div>'
    });
    var button = document.getElementById('button');
    var inputSearch = document.getElementById('input-search');
    $(button).click(function () {
        var inputValue = inputSearch.value;
        for (let i = 0; i < client.length; i++) {
            if (inputValue !== client[i].dataset.clientfirstname) {
                client[i].style.visibility = 'hidden';
            }
        }
    })
}
