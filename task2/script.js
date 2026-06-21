let users =
JSON.parse(localStorage.getItem("users"))
|| [];
displayUsers();
document
.getElementById("loginForm")
.addEventListener("submit", function(e){
    e.preventDefault();
    const email =
    document.getElementById("email").value;
    const password =
    document.getElementById("password").value;
    const message =
    document.getElementById("message");
    if(password.length < 10){
        message.innerText =
        "Password must be at least 10 characters";
        return;
    }
    const exists = users.find(
        user => user.email === email
    );
    if(exists){
        message.innerText =
        "User already exists";
        return;
    }
    users.push({
        email,
        password
    });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    message.innerText =
    "User added successfully";

    displayUsers();

    document.getElementById("loginForm").reset();

});

function displayUsers(){
    const userList =
    document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
        userList.innerHTML +=
        `<li>${user.email}</li>`;
    });
}