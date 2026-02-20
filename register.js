var stack = [];

function register() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var age = document.getElementById("age");
    var email = document.getElementById("email");

    var isValid = true;

    
    fname.classList.remove("error");
    lname.classList.remove("error");
    age.classList.remove("error");
    email.classList.remove("error");

    
    if (fname.value.trim() === "") {
        fname.classList.add("error");
        isValid = false;
    }

    if (lname.value.trim() === "") {
        lname.classList.add("error");
        isValid = false;
    }

    if (age.value.trim() === "") {
        age.classList.add("error");
        isValid = false;
    }

    if (email.value.trim() === "") {
        email.classList.add("error");
        isValid = false;
    }

    if (!isValid) {
        alert("Don't forget to complete the required fields.");
        return;
    }

    var user = {
        firstName: fname.value,
        middleName: document.getElementById("mname").value,
        lastName: lname.value,
        age: age.value,
        email: email.value
    };

    stack.push(user);
    displayUsers();
    document.getElementById("regForm").reset();

    alert("Your registration has been completed!");
}

function displayUsers() {
    var output = "";

    for (var i = 0; i < stack.length; i++) {
    output += `
 <br>User ${i + 1} <br>
Name: ${stack[i].firstName} <br> Middle:${stack[i].middleName} <br>Last: ${stack[i].lastName} <br>
Age: ${stack[i].age} <br>
Email: ${stack[i].email}
`;
}

    document.getElementById("output").innerHTML = output;
}
