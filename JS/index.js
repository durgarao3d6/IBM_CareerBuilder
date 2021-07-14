function login(){
    sessionStorage.setItem('User',document.getElementById('username').value);
    return true;
}

if(sessionStorage.User){
    var User = sessionStorage.User;
    document.getElementById('login').style.display='none';
    document.getElementById('user').style.display='visible';
    document.getElementById('user').innerHTML='<button class="userStyle" onClick="logout()">'+'Logout'+'</button>';
}

function logout(){
    sessionStorage.User='';
    window.location.reload();
}