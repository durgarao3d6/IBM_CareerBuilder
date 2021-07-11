function login(){
    sessionStorage.setItem('User',document.getElementById('username').value);
    return true;
}

if(sessionStorage.User){
    var User = sessionStorage.User;
    document.getElementById('login').style.display='none';
    document.getElementById('user').style.display='visible';
    document.getElementById('user').innerHTML='<p class="userStyle" onClick="logout()">'+'Logout'+'</p>';
}

function logout(){
    sessionStorage.User='';
}