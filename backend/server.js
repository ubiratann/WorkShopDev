const express = require("express")
const server = express()

//variavel
const ideas= [
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title:"Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title:"Exercícos Físicos",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
        url:"https://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title:"Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
        url:"https://rocketseat.com.br"
    }
]

//configurar arquivos estaticos
server.use(express.static("frontend/public"))

const nunjucks = require('nunjucks')
nunjucks.configure("frontend/views",{
    express: server,
    noCache: true,

})


//criando rotar pro nunjucks
server.get('/',function(req,res){
    const reverIdeas = [...ideas].reverse()
    let lastIdeas = []
    
    for (let idea of reverIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        } 
    }//selecionando as ultimas ideias 

    return res.render("index.html",{ ideas: lastIdeas })
})


server.get('/ideias',function(req,res){
    const reverIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas:reverIdeas})
})

server.listen(3333)
  
/* 

FUNCIONA MAS E RUIM
server.get("/",function(req,res){
    return res.sendFile(__dirname+"index.html")
})

/**
 * Intuito do arquivo:
 *  Configurar arquivos estaticos
*/