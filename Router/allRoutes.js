import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/visit", "Habitats & animaux", "/pages/visit.html"),
    new Route("/services", "Services", "/pages/services.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/authentifiation/editPassword.html"),
    //new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
    //new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";