function validate() {

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const form = document.getElementById("form")

    if (name.value === "" || name.value === null) {
        window.alert("Name must be filled")
        return false;
    }

    if (email.value === '' || email.value === null) {
        window.alert("Email must be filled")
        return false;
    } 

    if (password.value === "" || password.value === null) {
        window.alert("Password must be filled")
        return false;
    } 

}
