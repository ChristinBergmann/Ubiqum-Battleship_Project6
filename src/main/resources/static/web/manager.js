////__________________ Fct to get Input Details ________________/////

function getLogIn() {

    let username;
    let password;
    let feedback;

    username = document.getElementById("user").value;
    password = document.getElementById("passw").value;

    if (username && password) {
        feedback = "Well done!"
        alert(feedback)
    } else {
        feedback = "OOOPSIE you missed a field! Please enter all!"
        alert(feedback)
    }
    // postLogIn(username, password)

}

// function postLogIn() {

// }



// load and display JSON sent by server for /players
function postLogIn() {

    fetch.get("/players")
        .done(function (data) {
            console.log(data)
            showOutput(JSON.stringify(data, null, 2));

        })

        .fail(function (jqXHR, textStatus) {
            showOutput("Failed: " + textStatus);

        });

}

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