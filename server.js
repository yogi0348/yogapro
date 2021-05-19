const express = require("express")
const ejs = require("ejs")
const app = express()
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
let name;
let balance;
const string1 = ['0x7dd59016d418b72ffa2a9857f9fb6a99b8d80e4c','0x71c7656ec7ab88b098defb751b7401b5f6d8976f']
const details={
    contractName :"yoga",
    contractAddress:"dharmavaram",
    contractSymbol:"@$",
    decimal:01,
    totalSupply:"jhhasdkhjkasdhlkasdjhjkasjklhkajskdkasgbdjklasjh"
}
app.route('/')
.get((req,res)=>{
    
    res.render('main')
    
})
.post((req,res)=>{
    name = req.body.name
    name = name.toString()
    console.log(name)
    if(string1[0]===name){
        res.send({"Balance":6});
    }else if(string1[1]===name){
        res.send({"Balance":7});
    }
    
});

app.route("/erc20")
.get((req,res)=>{
    res.render('erc20',{name:name,balance:balance})

})
.post((req,res)=>{
    if(req.body.ethAddress1 === string1[0] && req.body.ethAddress2 === string1[1] ){
        res.send({"Balance":13});
    }else if(req.body.ethAddress1 === string1[1] && req.body.ethAddress2 === string1[0]){
        res.send({"Balance":13});
    }else{
        console.log("madda gudu")
    }
})

app.route("/contractinfo")
.get((req,res)=>{
    res.render('contractinfo',
    {
        item1:details.contractName,
        item2:details.contractAddress,
        item3:details.contractSymbol,
        item4:details.decimal,
        item5:details.totalSupply
    }
    )
})

app.listen(3000,()=>{
    console.log("listening to the server")
})