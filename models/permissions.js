// models/permissions.js
// permite obtener permisos basados ​​en el nombre de un rol

class permissions {
    constructor(){
        this.permissions = [];
    }

// obtener nombre del rol    
    getPermissionsByRoleName(roleName){
        const role = roles.roles.find((r) => r.name === roleName);
        
        /*si se encuentra el rol devuelve el array de permisos asociado, de lo contrario
        devuelve un array vacio */
        return role ? role.permissions : []; 
    }
}
module.exports = Permissions;


