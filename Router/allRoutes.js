import Route from "../Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/visit", "Habitats & animaux", "./pages/visit.html"),
    new Route("/services", "Services", "/pages/services.html"), 
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/authentification/signin.html", "/RenduDynamic_js/auth/signin.js"),
    //new Route("/signup","Création de compte utilisateur", "/pages/authentification/signup.html", ["admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";