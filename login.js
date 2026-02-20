$(document).ready(function () {
    $('.submit').click(function (e) {
        e.preventDefault(); // stop form submission

        var email = $('#email').val().trim();
        var password = $('#password').val().trim();

        if (email === '' || password === '') {
            alert('Please enter both email and password.');
        } else {
            alert('Success! Email and password entered.');
        }
    });
});