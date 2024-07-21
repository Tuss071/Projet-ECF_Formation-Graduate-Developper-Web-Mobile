import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/visit", "Habitats & animaux", "/pages/visit.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/authentification/signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";