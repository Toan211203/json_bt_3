function fetchData(){
    return fetch('login.json')
    .then(tra => tra.json())
    .catch(error => {console.error("error: ",error)})
}
function loginCheck(user,pass,data){
    const getUser = data.login;
    return getUser.find( getdata => getdata.user === user && getdata.pass === pass);
}

function LoginAccess(){
    const username = document.getElementById("user").value;
    const passw = document.getElementById("pass").value;

    fetchData()
    .then (data=> {
        const account = loginCheck(username,passw, data);
        if(account){
            if(account.role === 'admin'){
                window.location = 'admin.html';
            }
            else{
                window.location = 'client.html';
            }
        }
        else{
            alert("Incorrect username or password!");
        }
    })
}
