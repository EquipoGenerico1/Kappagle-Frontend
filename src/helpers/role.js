function getRole(){  
    // THIS SHOULD NOT BE HERE //
    var item = {    
                    // role: "ROLE_USER",
                    role: "ROLE_ADMIN",
                    expires_in: Date.now()
                };
    
    localStorage.setItem("token",JSON.stringify(item) );
    /////////////////////////////
    
    var token=localStorage.getItem("token");
    
    if(token){
        token= JSON.parse(token);
        if(token.role){
            return token.role;
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function isLogged(){
    var role = getRole();
    return role == 'ROLE_USER'
    || role == 'ROLE_ADMIN'
    || role == 'ROLE_ASSOCIATE'
}

module.exports = {
    getRole
    ,isLogged
};