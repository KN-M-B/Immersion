function wipMessage() {
  var var1 = 6;
  var var2 = 8;
  alert("Site under construction.");

  console.log(
    "           _ _          _____ ___  \r\n  _ __ ___ (_) | ___   _|___ // _ \\ \r\n | '_ ` _ \\| | |/ / | | | |_ \\ (_) |\r\n | | | | | | |   <| |_| |___) \\__, |\r\n |_| |_| |_|_|_|\\_\\\\__,_|____/  /_/ \r\n                                    "
  );
  console.log("Math.trunc(((var1 * 4) / 2 + (var2 + 10)) / 2 + 3.87298335 ** 2 + 9)  =  "+
    Math.trunc(((var1 * 4) / 2 + (var2 + 10)) / 2 + 3.87298335 ** 2 + 9)
  );
}


function aaa() {
    $("#formbox").load("fake.html");
    console.log('call')
}

function bbb() {
    $("#formbox").load("real.html");
    console.log('call')
}

function login() {
    //do not do login in JS on actual site. do it server side
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var result = document.getElementById("result");

    if (user.trim().length === 0) {
      result.innerHTML = "Please enter your Username.";
      result.style.color = "#ffff8d";
    } else if (pass.trim().length === 0) {
      result.innerHTML = "Please enter your Password.";
      result.style.color = "#ffff8d";
    } else if (user == "FAKE" && pass == "password") {
      aaa();
    } else if (user == "REAL" && pass == "wordpass") {
      bbb();
    } else {
      result.innerHTML = "Incorrect Password or Username.";
      result.style.color = "red";
    }
  }
  function logout() {
    $("#formbox").load("loginpage.html");
  }