const Users=require('../model/Users')

exports.renderHomePage=(req,res)=>{
    res.render('index',{title:'Metra'})
}

exports.renderUsers=(req,res)=>{
    Users.getListUser(req.body, (results) => 
    {
        // res.send(results);
        // res.render('./Viewss/users',{results})
        console.log(results,'Hi metra')
    });
   
}