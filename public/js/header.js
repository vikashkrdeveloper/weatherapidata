let values = true;
const userdataget = async () => {
    try {
        const res = await fetch('/getdata', {
            method: 'GET'
        })
        const data = await res.json();
        const userauth = document.querySelector('#userauth');
        const usersauth = document.querySelector('#usersauth');
        const linksignupElement = document.getElementById("myLink");
        const linkloginElement = document.getElementById("myloginLink");
        if (data) {
            values = false;
        }
        values ? userauth.innerHTML = "Login" : userauth.innerHTML = data.name+" 🞃";
        values ? usersauth.innerHTML = "Signup" : usersauth.innerHTML = "Logout";
        values ?  linksignupElement.href = "/signup": linksignupElement.href = "/logout";
        values ?  linkloginElement.href = "/login":linkloginElement.href = "/profile";

    }
    catch (error) {
        console.log('User not login');
    }
}
userdataget();