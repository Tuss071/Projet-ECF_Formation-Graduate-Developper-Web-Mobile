const username = document.getElementById("username");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les crédentials en BDD

    if (username.value == "test" && passwordInput.value =="123") {
         //Il faudra récupérer le vrai token
         const token = "fdsjgsdjgsdjgsndnfgfdhgdhfgshshghhfdqhq";
         setToken(token);
         //placer ce token en cookie

         setCookie("RoleCookieName", "admin", 7);
         window.location.replace("/");
    } 
    else {
         username.classList.add("is-Invalid")
         passwordInput.classList.add("is-Invalid")
    }
}