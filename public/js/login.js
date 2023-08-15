const formdatasubmit = (event) => {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let valid = 0;
    const fetchapidata = async () => {
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            if (res.status === 500) {
                window.alert('All field require');
            }
            else if (res.status === 200) {
                window.alert('Login Sucessfully');
                window.location.assign('/');
            }
            else if (res.status === 400) {
                window.alert('Invalid login details');
            }



        }
        catch (error) {
            window.alert('Some technical issue');
        }
    }

    fetchapidata();

    if (valid === 1) {
        return true

    }
    else {
        return false

    }

}
