const express=require('express')
const app=express();
app.use(express.json())
let book=[
    {id:"1",title:"beauty and the beast",year:1780,author:"jebj"},
    {id:"2",title:"The Boy,the Horse, the fox, the Mole",year:2021,author:"Charley"},
]

app.post("/add",(req,res)=>
    { 
      const data=req.body
      book.push(data)
       res.json({ array:book })
   })    


app.get("/read",(req,res)=>
{  
   res.json({ array: book })

})
app.put("/update/:id",(req,res)=>
{ 
   
 const book1=req.params.id;
  const data=book.find(books=>
   {
    return   books.id==book1;

   });
  res.json({array:data});
  
})

app.delete("/delete/:id",(req,res)=>
   { 
   const bookid=req.params.id;
   const index=book.find(books=>
       books.id=bookid
   );
   if(index!==-1){
       const deletebook=book.splice(index,1);
       res.json(deletebook[0])
   }
  })

app.listen(3000,()=>{
   console.log("listoning port is 3000");   
});