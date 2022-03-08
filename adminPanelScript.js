function admin() {
    var textLog = localStorage.getItem("registeredLogin");
    document.getElementById("adminName").innerHTML = textLog;
}

function deleteUser(){
    if (confirm("Do yo want to delete this user?")==true) {
        localStorage.removeItem("registeredLogin");
        localStorage.removeItem("registeredPassword");
        location.reload();
    }

}