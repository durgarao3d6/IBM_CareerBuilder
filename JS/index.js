function login(){
    sessionStorage.set('User',document.getElementById('username').value);
    alert('Successfully logged in');
}