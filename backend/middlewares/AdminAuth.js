const AdminAuth = async(req,res,next)=>{
    try {
        const {email, password} = req.body
        if(email=="nirmal@gmail.com" && password=="nirmal"){
            req.admin = {admin:"authorized"}
            next()
        }
        if(email=="Alipa@gmail.com" && password=="Alipa"){
            req.admin = {admin:"authorized"}
            next()
        }
        if(email=="Mlaxmi@gmail.com" && password=="Mlaxmi"){
            req.admin = {admin:"authorized"}
            next()
        }
        else{
            res.status(450).json({error:"Un-Authorized Access"})
        }
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}
module.exports = AdminAuth