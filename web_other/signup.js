function signUp() {
    let username = document.querySelector('#username').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let confirmPassword = document.querySelector('#confirm-password').value
    let authenticate = true

    if (username == '' || email == '' || password == '' || confirmPassword == '') {
        return alert('Ô không được để trống')
        authenticate = false
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return alert('Email không hợp lệ')
        authenticate = false
    }

    if (password.length < 8) {
        return alert('mật khẩu ít nhất phải dài 8 ký tự')
        authenticate = false
    }

    if (password != confirmPassword) {
        return alert('mật khẩu phải trùng !')
        authenticate = false
    }

    if (authenticate) {
        window.localStorage.setItem('username', username)
        window.localStorage.setItem('email', email)
        window.localStorage.setItem('password', password)
        return alert('Đăng ký tài khoản thành công')
    }
}

document.querySelector('#username').addEventListener('blur', function() {{
    if (document.querySelector('#username').value.trim() == '') {
        document.querySelector('#username-error').textContent = 'Ô không được để trống'
        document.querySelector('#username-error').style.display = 'block'
    }
    else {
        document.querySelector('#username-error').textContent = ''
        document.querySelector('#username-error').style.display = 'none'
    }
}})

document.querySelector('#email').addEventListener('blur', function() {{
    if (document.querySelector('#email').value.trim() == '') {
        document.querySelector('#email-error').textContent = 'Ô không được để trống'
        document.querySelector('#email-error').style.display = 'block'
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.querySelector('#email').value)) {
        document.querySelector('#email-error').textContent = 'Email không hợp lệ'
        document.querySelector('#email-error').style.display = 'block'
    }

    else {
        document.querySelector('#email-error').textContent = ''
        document.querySelector('#email-error').style.display = 'none'
    }
}})

document.querySelector('#password').addEventListener('blur', function() {{
    if (document.querySelector('#password').value.trim() == '') {
        document.querySelector('#password-error').textContent = 'Ô không được để trống'
        document.querySelector('#password-error').style.display = 'block'
    }
    else {
        document.querySelector('#password-error').textContent = ''
        document.querySelector('#password-error').style.display = 'none'
    }
}})

document.querySelector('#confirm-password').addEventListener('blur', function() {{
    if (document.querySelector('#confirm-password').value.trim() == '') {
        document.querySelector('#confirm-password-error').textContent = 'Ô không được để trống'
        document.querySelector('#confirm-password-error').style.display = 'block'
    }
    else {
        document.querySelector('#confirm-password-error').textContent = ''
        document.querySelector('#confirm-password-error').style.display = 'none'
    }
}})