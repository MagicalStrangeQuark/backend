class AuthController {
    /**
     * Login.
     * 
     * @param {Object} request
     * @param {Object} response
     */
    login(request, response) {
        return response.json({
            "token": "761b69db-ace4-49cd-84cb-4550be231e8f"
        });
    }

    /**
     * 
     */
    logout(request, response) {

    }
}

module.exports = AuthController;