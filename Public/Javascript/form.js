document.getElementById('button').onclick = (event) => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let name_valid = /^([ A-Za-z]){2,20}$/;
    let email_valid = /^([_\-A-Za-z0-9]+)@([_\-A-Za-z0-9]+)\.([a-zA-Z]){2,7}$/;
    let age_valid = /^[0-9]{1,2}$/g;
    if (name != '' && name_valid.test(name)) {
        document.getElementById('name').classList.remove('is-invalid');
    }
    else {
        document.getElementById('name').classList.add('is-invalid');
        event.preventDefault();
    }
    if (email != '' && email_valid.test(email)) {
        document.getElementById('email').classList.remove('is-invalid');
    }
    else {
        document.getElementById('email').classList.add('is-invalid');
        event.preventDefault();
    }
    if (age != '' && age_valid.test(age) && age <50) {
        document.getElementById('age').classList.remove('is-invalid');
    }
    else {
        document.getElementById('age').classList.add('is-invalid');
        event.preventDefault();
    }
    let optfor = document.getElementsByName('options');
    for (let i = 0; i < optfor.length; i++) {
        if (optfor[i].checked) {
            document.getElementById('dead').classList.remove('is-invalid');
            break;
        }
        else if (i == optfor.length - 1) {
            document.getElementById('dead').classList.add('is-invalid');
            console.log('Executed')
            event.preventDefault();
        }
    }
}
const submitted = () => {
    return alert('Form has been submitted');
}
