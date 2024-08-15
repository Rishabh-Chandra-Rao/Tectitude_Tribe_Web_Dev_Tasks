document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Button clicked!';
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('formMessage').textContent = `Thank you, ${name}. We have received your email: ${email}`;
});
