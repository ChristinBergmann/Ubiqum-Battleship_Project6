function getUserPassw() {

    let username;
    let password;
    let feedback;

    username = document.getElementById("user").value;
    password = document.getElementById("passw").value;

    console.log(username)
    console.log(password)
    if (username && password) {
        feedback = "Well done!"
    } else {
        feedback = "Enter all fields!"
    }
    console.log(feedback)
    // postUserPassw(username, password)

}

// function postUserPassw() {

// }





// $(function () {

//     // display text in the output area
//     function showOutput(text) {

//         $("#output").text(text);

//     }

//     // load and display JSON sent by server for /players
//     function loadData() {

//         $.get("/players")
//             .done(function (data) {
//                 console.log(data)
//                 showOutput(JSON.stringify(data, null, 2));

//             })

//             .fail(function (jqXHR, textStatus) {
//                 showOutput("Failed: " + textStatus);

//             });

//     }

//     // handler for when user clicks add person

//     function addPlayer() {

//         let name = $("#email").val();
//         if (name) {

//             postPlayer(name);

//         }

//     }

//     // code to post a new player using AJAX
//     // on success, reload and display the updated data from the server

//     function postPlayer(userName) {

//         $.post({

//                 headers: {

//                     'Content-Type': 'application/json'

//                 },

//                 dataType: "text",
//                 url: "/players",
//                 data: JSON.stringify({
//                     "userName": userName,
//                     "password": ""
//                 })

//             })

//             .done(function () {

//                 showOutput("Saved – reloading");
//                 loadData();

//             })

//             .fail(function (jqXHR, textStatus) {

//                 showOutput("Failed: " + textStatus);

//             });

//     }
//     $("#add_player").on("click", addPlayer);
//     loadData();

// });