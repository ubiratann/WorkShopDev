const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("db/ws.db")



db.serialize(function(){
    //Criar tabela
    db.run(
        `CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description,
            link TEXT
        );
    `)    
    //Inserir dados na tabela
/*     const query = `
        INSERT INTO ideas(image,title,category,description,link) 
        VALUES(?,?,?,?,?);`

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla, quis est repellat illo sequi at molestias",
        "https://rocketseat.com"
    ]

    db.run(query, values,function(err){
        if(err) return console.log(err)

        console.log(this)
    }) */




/*     //Consultar dados da tabel
    const queryin = `SELECT * FROM ideas`
    db.all(queryin,function(err,rows){
        if(err)return console.log(err)
        console.log(rows)
    })


    //Deletar dados na tabelea
    const querydel = `DELETE FROM ideas WHERE id = ?`
    db.all(querydel,[1],function(err){
        if(err)return console.log(err)
        console.log("DELETED",this)
    }) */

})

module.exports = db
