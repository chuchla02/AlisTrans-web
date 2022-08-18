
function createCookiePL() {
    var idlangPL = document.getElementById('languagePL')
    var valuePL = idlangPL.getAttribute('value')
    document.cookie = "language="+valuePL+";expires=Thu, 01 Jan 2222 00:00:01;path=/";
}
function createCookieEN() {
    var idlangEN = document.getElementById('languageEN')
    var valueEN = idlangEN.getAttribute('value')
    document.cookie = "language="+valueEN+";expires=Thu, 01 Jan 2222 00:00:01 GMT;path=/";
} 
function redirect(){
    var cookieEN = document.cookie.match('en')
    if(cookieEN !== null)
    {
        window.location.href = "en/index.html"
    }
}

