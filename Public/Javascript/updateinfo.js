document.getElementById('button').onclick = () => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let exit = false;
    let name_valid = /^([ A-Za-z]){2,20}$/;
    let email_valid = /^([_\-A-Za-z0-9]+)@([_\-A-Za-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let age_valid = /^[0-9]{1,2}$/g;
    if (name != '' && name_valid.test(name)) {
        document.getElementById('name').classList.remove('is-invalid');

    }
    else {
        document.getElementById('name').classList.add('is-invalid');
        exit = true;
    }
    if (email != '' && email_valid.test(email)) {
        document.getElementById('email').classList.remove('is-invalid');
    }
    else {
        document.getElementById('email').classList.add('is-invalid');
        exit = true;
    }
    if (age != '' && age_valid.test(age)) {
        document.getElementById('age').classList.remove('is-invalid');
    }
    else {
        document.getElementById('age').classList.add('is-invalid');
        exit = true;
    }
    let optfor = document.getElementsByName('options');
    let opt = '';
    for (let i = 0; i < optfor.length; i++) {
        if (optfor[i].checked) {
            document.getElementsByName('options')[i].checked = false;
            opt = optfor[i].value;
            document.getElementById('dead').classList.remove('is-invalid');
            break;
        }
        else if (i == optfor.length - 1) {
            document.getElementById('dead').classList.add('is-invalid');
            exit = true;
        }
    }
    if (exit) {
        return null;
    }

    let id = window.location.href;
    id = id.split('http://localhost:9000/update/')[1];

    let obj = {
        "id": id,
        "name": name,
        "email": email,
        "age": age,
        "options": opt
    };
    
    fetch(window.location.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then(response => response.json()).then(data => console.log(data));

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('alert').style.display = 'inline';
}

document.getElementById('btn').onclick = () => {
    document.getElementById('alert').style.display = 'none';
}
