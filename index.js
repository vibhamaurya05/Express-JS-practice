const express = require('express');
const app= express();
const port=3000;
const path= require('path');
const cat= require('./data');
const logger = require('morgan');

//****for home page
// app.get('/',(req,res)=>{
//     /*******************send status code***********************/
//     res.status(404).send("<h1>Something error</h1>") 
    
//*****send data to the server
//     res.send('<h1>Hello World!</h1>')


// })

//*****routing
//*****for contact page 
// app.get('/phone',(req,res)=>{
//     res.send("hello contacts");
// })


//******how to send file
// app.get('/files',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'index.html')); //file send k lie path pta hona chahiye upr const path nbna h 
// })


//**********res.json
// app.get('/jsonres',(req,res)=>{
//     res.json([{
//         firstname:"john",
//         lastname:"cena"
//     },
// {
//     firstname:"rajni",
//     lastname: "maurya"
// }])
// })

//********extra pages jo exist ni krti jaise about is case me uske liye 
// app.all('*',(req,res)=>{
//     res.send("page not found");
// })


//*******kisi project ko access krne ke liye jaise hm javascript ka project use kiye h 
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'example','index.html'))
// })

//*******kisi pure folder ko access krna ho to qki usme image css file sb rhenge isliye aise krenge app.use ka use krenge
//app.use(express.static('creativity'))

//********express.json**********
// app.get('/',(req,res)=>{
//         res.json(cat);
//     })

//******************/
// app.get('/cat',(req,res)=>{
//     res.send('<h1>hello</h1><a href="/cat">cat</a>')
// })


//*****agr sirf particular chije access krni ho to  */
// app.get('/cat',(req,res)=>{
//     const newItem=cat.map((cat)=>{
//         const {id,name,image}=cat;
//         return{id, name, image};
//     })
//     res.json(newItem);
// })

//***********agr single single pe jana huya to */
// app.get('/cat/:catID',(req,res)=>{
//     const {catID} = req.params;
//     console.log(req.params);
//     const singlecat= cat.find((cat)=>cat.id===Number(catID))

//     if(!singlecat){
//         res.send("product not found....")
//     }
//     res.json(singlecat);
// })

//*********name wise kisi ko search krna huya to url me    /api/cat/query?search=b   */
// app.get('/api/v1/query',(req,res)=>{
//     let sortedcat=[...cat];
//     const {search, limit}= req.query;
//     if(search){
//         sortedcat = sortedcat.filter((cat)=>{
//             return cat.name.toLowerCase().startsWith(search)
//         })
//     }

//     res.json(sortedcat);
// })


//********limit k liye khud se bnao- ye jo bna g worng h bt isko debug kro bn jayega *********/
// app.get('/api/v1/query',(req,res)=>{
//     let sortedcat=[...cat];
//     const {search, limit}= req.query;
//     if(limit){
//         sortedcat = sortedcat.slice((cat)=>{
//             return cat.id.startsWith(limit)
//         })
//     }

//     res.json(sortedcat);
// })


//***********middleware************/
// const logger = (req,res,next)=>{
//     console.log(`${new Date()}, Request[${req.method}], [${req.url}]`);
//     next();
// }

// const authorize = (req,res,next)=>{
//     console.log("i am second one");
//     next();
// }

// app.use([authorize, logger]);    //do middleware h isliye array me rkhe h 


// app.get('/home',(req,res)=>{
//     res.send("home");
// })

// app.get('/about',(req,res)=>{
//     res.send("about");
// })
// app.get('/contact',(req,res)=>{
//     res.send("contact");
// })


//**********middleware by using morgan***********/
// app.use(logger('dev')) //*** dev/short etc.****


// app.get('/',(req,res)=>{
//     res.send('home')
// })

// app.get('/about',(req,res)=>{
//     res.send('about')
// })

// app.get('/contact',(req,res)=>{
//     res.send('contact')
// })

//********GET, POST method***********/

// app.use(express.static('public'));
// app.use(express.urlencoded({extended:false}))    //****middleware h post k liye **********/
// let books=[
//     {
//         id: 1,
//         title: 'Book1',
//         author: 'author1'
//     },
//     {
//         id: 2,
//         title: 'Book2',
//         author: 'author2'
//     }
// ]
//*****get method */
// app.get('/books',(req,res)=>{
//     res.json(books);
// })

//***post method */  // kisi bhi data ko pane k middleware ka use krna pdta h jaise isme hm form bnakr book add kr rhe 
// app.post('/books',(req,res)=>{
//     const newbook={
//         id:books.length+1,
//         title:req.body.title,
//         author:req.body.author
//     };
//     books.push(newbook);
//     res.status(201).json(newbook);
// })




app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

