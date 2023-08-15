const formdatasave = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const phone = document.querySelector('#phone').value;
    const password = document.querySelector('#password').value;
    const conformpassword = document.querySelector('#conformpassword').value;


    const fetchdatas =async () => {
        const res = await fetch('/register', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ name,email,password,phone,username,conformpassword })
        })


        if (res.status == 500) {
            window.alert('All field require');
          

        }
        else if (res.status == 400) {
            window.alert('Email id already exist');
          

        }
        else if (res.status == 401) {
            window.alert('Username already exist');
          

        }
        else if (res.status == 402) {
            window.alert('Phone Number already exist');
          

        }
        else if (res.status == 403) {
            window.alert('Password and conform password are not matched');
          

        }
        else if (res.status == 404) {
            window.alert('Some technical issue');
          

        }
        else if (res.status == 200) {
            window.alert('Registration Sucessfully');
          

        }
    }

    fetchdatas();




    return false






}
