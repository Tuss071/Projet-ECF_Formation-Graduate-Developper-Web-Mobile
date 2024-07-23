export default class Routes {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
  }

  /*
  [] -> Tout le monde peut y acceder
  ["disconnected"] -> Réserver aux visteur
  ["admin"] -> Réserver à l'administrateur*
  ["employe"] -> Réserver à l'employé
  ["veterinary"] -> Réserver aux vétérinaires
  */