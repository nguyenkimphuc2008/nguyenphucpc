let savedEmail = window.localStorage.getItem('email')
let savedPassword = window.localStorage.getItem('password')

function login() {
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    if (email == savedEmail) {
        if (password == savedPassword) {
            window.localStorage.setItem('authenticated', true)
            alert('đăng nhập thành công')
        }
        else {
            alert('Sai mật khẩu !')
        }
    }
    else {
        alert('Không tìm thấy tài khoản !')
    }
}