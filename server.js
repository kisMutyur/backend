const express = require(express);
const cors = require(Cors);
const mysql = require(mysql2);

const app = require(express());
app.use = Cors()

const szoveg;
const query = "SELECT * from konyvek, mufajok.nev ORDER BY konyvek.kiadasi_ev ASC inner JOIN mufajok on konyvek.mufaj_id = mufajok.id;"
app.GET("/konyvek", Async (req, res)) => 
    {
         try{res.send(mysql.query(query))} 
         catch (error)
         {
            console.error('Hiba az adatok megszerzésében', error.message);
            res.status(500).json({
            success: false,
            message: 'Internal server error',
            error : error.message                
            })
         }
         
    }
   
    const query1 = "SELECT * FROM konyvek WHERE konyvek.kolcsonozheto = 1 and konyvek.kiadasi_ev < 2000"
 app.GET("/konyvek/elerheto", Async (req, res)) =>
    {
        try{res.send(mysql.query(query1))} 
        catch (error)
        {
           console.error('Hiba az adatok megszerzésében', error.message);
           res.status(500).json({
           success: false,
           message: 'Internal server error',
           error : error.message                
           })
        }
    }
    const query2 = "SELECT * FROM konyvek WHERE konyvesk.cim CONTAINS ${szoveg} "
app.GET("/konyvek/kereses/:szoveg", Async (req, res)) =>
    {  try{res.send(mysql.query(query2))} 
catch (error)
{
   console.error('Hiba az adatok megszerzésében', error.message);
   res.status(500).json({
   success: false,
   message: 'Internal server error',
   error : error.message                
   })
}    }


const query3 = "SELECT * FROM konyvek WHERE konyvek.oldalszam CONTAINS ${szoveg} "
        app.GET("/konyvek/statisztika", Async (req, res)) => 
            { 
                try{res.send(mysql.query(query3))} 
        catch (error)
        {
           console.error('Hiba az adatok megszerzésében', error.message);
           res.status(500).json({
           success: false,
           message: 'Internal server error',
           error : error.message                
           })
        }
   }
const query4 = "UPDATE konyvek SET kolcsonozheto = '0' WHERE id = 1;"
   app.GET("konyvek/frissit", Async (req, res)) => 
    {
        try{res.send(mysql.query(query4))} 
        catch (error)
        {
           console.error('Hiba az adatok megszerzésében', error.message);
           res.status(500).json({
           success: false,
           message: 'Internal server error',
           error : error.message                
           })
        }
    }
           
const query5 = "UPDATE konyvek SET kolcsonozheto = '1' WHERE id = 1;"
    app.GET("konyvek/frissit", Async (req, res)) => 
        {
            try{res.send(mysql.query(query5))} 
        catch (error)
        {
           console.error('Hiba az adatok megszerzésében', error.message);
           res.status(500).json({
           success: false,
           message: 'Internal server error',
           error : error.message                
           })
        }
        }

const query6 = "INSERT INTO konyvek (id, mufaj_id, cim, kiadasi_ev, oldalszam, kolcsonozheto) VALUES (?, ?, ?, ?, ?, ?)"

app.post("konyvek/hozzaad", Async (req, res)) => 
    {
        db.query(sql, [1, 1, 'Egri csillagok', 1901, 320, 1], (err, result) => {
            if (err) throw err;
        });
        db.query(sql, [2, 2, 'Pál utcai fiúk', 1906, 240, 1], (err, result) => {
            if (err) throw err;
        });
        res.send('A könyvek sikeresen hozzáadva!');
    }
    
const Port = 3000;
app.listen("a szerver elindult a 3000 Port-on");