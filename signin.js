function vadidate()
{
    var username=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(username=="email" && password=="password")
    {
        alert("login successfully");
        return false;
    }
    else
    {
        alert("login failed")
    }
}