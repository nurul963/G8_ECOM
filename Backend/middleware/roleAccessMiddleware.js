export const roleAccessMiddleWare=(...roleAllowed)=>{
    return (req,resp,next)=>{
        if(!req.user || !req.user.role || !roleAllowed.includes(user.role)){
            return resp.status(401).json({
                statusCode:401,
                message:"Access Denied"
            })
        }
    }
}