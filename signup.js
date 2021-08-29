function validate() {

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirm-password")
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

    if (confirmPassword === "" || confirmPassword === null) {
        window.alert("Please confirm your password")
        return false;
    }

    if (password.value !== confirmPassword.value) {
        window.alert("Your password do not match")
        return false;
    }

}
