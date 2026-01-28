/**
 * Classe de base des DAO
 */
class DAO {
    constructor() {
        this._adresseAPI = "https://rapport-iut-f698f563b27d.herokuapp.com/";
    }
    
    /**
     * Getter pour l'adresse de l'API
     * */
    get adresseAPI() {
        return this._adresseAPI;
    }
}