class UserController {
    /**
     * Display a listing of the resource.
     * 
     * @param {Void}
     *
     * @return {Array}
     */
    index() {
        return [
            { "id": 1, "first_name": "Pennie", "last_name": "Spaxman", "email": "pspaxman0@nyu.edu", "gender": "Male", "ip_address": "89.132.9.227" },
            { "id": 2, "first_name": "Belita", "last_name": "McLennan", "email": "bmclennan1@sogou.com", "gender": "Female", "ip_address": "141.86.97.156" },
            { "id": 3, "first_name": "Fiona", "last_name": "Villalta", "email": "fvillalta2@businessinsider.com", "gender": "Female", "ip_address": "220.88.58.170" },
            { "id": 4, "first_name": "Marcello", "last_name": "Thursby", "email": "mthursby3@360.cn", "gender": "Male", "ip_address": "241.204.189.74" },
            { "id": 5, "first_name": "Lonnie", "last_name": "Sinney", "email": "lsinney4@accuweather.com", "gender": "Female", "ip_address": "14.9.107.184" },
            { "id": 6, "first_name": "Dru", "last_name": "Faithfull", "email": "dfaithfull5@hexun.com", "gender": "Female", "ip_address": "137.139.38.176" },
            { "id": 7, "first_name": "Hermie", "last_name": "Wrankmore", "email": "hwrankmore6@reference.com", "gender": "Male", "ip_address": "194.136.222.53" },
            { "id": 8, "first_name": "Vail", "last_name": "Stogill", "email": "vstogill7@dailymail.co.uk", "gender": "Male", "ip_address": "102.177.85.82" },
            { "id": 9, "first_name": "Conant", "last_name": "Quadri", "email": "cquadri8@freewebs.com", "gender": "Male", "ip_address": "176.250.43.50" },
            { "id": 10, "first_name": "Jerrie", "last_name": "Goschalk", "email": "jgoschalk9@army.mil", "gender": "Female", "ip_address": "173.195.29.54" }
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return {Object} response
     */
    create() { }

    /**
     * Store a newly created resource in storage.
     *
     * @param {Object} request
     * 
     * @return {Object} response
     */
    store() { }

    /**
     * Display the specified resource.
     *
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    show() { }

    /**
     * Show the form for editing the specified resource.
     *
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    edit() { }

    /**
     * Update the specified resource in storage.
     *
     * @param {Object} request
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    update() { }

    /**
     * Remove the specified resource from storage.
     *
     * @param {Integer} id
     * 
     * @return {Object} response
     */
    destroy() { }
}

module.exports = UserController;