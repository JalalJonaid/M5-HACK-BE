const db =  require("../db/dbConfig.js");

const getSingleRoute = async (id) => {
    try{
        const result = await db.one("SELECT * FROM saved_routes WHERE route_id=$1", id)
        return result
    }
    catch(error){
        return error
    }
}







module.exports = {
    getSingleRoute,
}