const logoutcontrollers=(req,res)=>{
res.clearCookie('jwttokens',{path:'/'});
res.status(200).render('index');


}
module.exports=logoutcontrollers;