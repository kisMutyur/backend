const express = require(express);
const cors = require(Cors);
const mysql = require(mysql2);

const app = express();
app = Cors()

const szoveg;
app.GET("/konyvek", Async (req, res) =>
    req.send(mysql.query("SELECT * from konyvek, mufajok.nev ORDER BY konyvek.kiadasi_ev ASC inner JOIN mufajok on konyvek.mufaj_id = mufajok.id;  ")),
    res());

 app.GET("/konyvek/elerheto", Async (req, res) =>
res.send(mysql.query("SELECT * FROM konyvek WHERE konyvek.kolcsonozheto = 1 and konyvek.kiadasi_ev < 2000")
set),

app.GET($"/konyvek/kereses/:szoveg", Async (req, res) =>
    res.send(mysql.query("SELECT * FROM konyvek WHERE konyvek.cim CONTAINS ${szoveg} ")
    set)



        hosszuakapp.GET($"/konyvek/statisztika", Async (req, res) =>
            res.send(mysql.query("SELECT * FROM konyvek WHERE konyvek.oldalszam CONTAINS ${szoveg} ")
            set)
   
const Port = 3000;
app.listen("a szerver elindult a ${Port} Port-on")