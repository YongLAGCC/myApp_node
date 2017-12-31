const express = require("express");
const router = express.Router(); 


router
    .get("/", (req, res)=>{
       // console.log(req.body); //the third way to get router params
        res.send(users); // get all the users in json format. 
    })
    
    .get("/:id",(req,res)=>{ //path is user/id
        const { id } = req.params;
        const user = users.find(user => user.id == id); // id is number so using double '=' sign;

        if(user) {
            res.send(user); 
        } else {
            res.status(404).send(`user ${id} does not exist`);
        }

    })
    .delete("/:id",(req,res)=>{
        const { id } = req.params;   
        const index = users.findIndex(user => user.id == id); 

        if(index > -1) {   //if this index exist， will be deleted.
            users.splice(index, 1);// after find this user, splice this one value and delete it out
            res.sendStatus(200); // send status over the wire. have to sendStatus without warning.
        } else {
            res.status(404).send(`user ${id} not exist`);
        }
    })
    
    module.exports = router; 


    var users = [{   // this json string is from: www.mockaroo.com
        "id": 1,
        "first_name": "Gregoor",
        "last_name": "Squires",
        "email": "gsquires0@ihg.com",
        "gender": "Male",
        "ip_address": "62.18.231.6"
      }, {
        "id": 2,
        "first_name": "Lyssa",
        "last_name": "Harwin",
        "email": "lharwin1@infoseek.co.jp",
        "gender": "Female",
        "ip_address": "159.182.5.251"
      }, {
        "id": 3,
        "first_name": "Kore",
        "last_name": "Boykett",
        "email": "kboykett2@phpbb.com",
        "gender": "Female",
        "ip_address": "40.247.160.144"
      }, {
        "id": 4,
        "first_name": "Isaak",
        "last_name": "Mockett",
        "email": "imockett3@tripod.com",
        "gender": "Male",
        "ip_address": "162.170.70.174"
      }, {
        "id": 5,
        "first_name": "Angelo",
        "last_name": "Perutto",
        "email": "aperutto4@icio.us",
        "gender": "Male",
        "ip_address": "147.153.71.247"
      }, {
        "id": 6,
        "first_name": "Aloin",
        "last_name": "Boast",
        "email": "aboast5@blog.com",
        "gender": "Male",
        "ip_address": "243.67.145.19"
      }, {
        "id": 7,
        "first_name": "Ernest",
        "last_name": "Conlon",
        "email": "econlon6@usgs.gov",
        "gender": "Male",
        "ip_address": "0.145.164.144"
      }, {
        "id": 8,
        "first_name": "Gretchen",
        "last_name": "Hunsworth",
        "email": "ghunsworth7@theguardian.com",
        "gender": "Female",
        "ip_address": "191.238.97.193"
      }, {
        "id": 9,
        "first_name": "Thomasine",
        "last_name": "Kobierzycki",
        "email": "tkobierzycki8@reuters.com",
        "gender": "Female",
        "ip_address": "40.22.18.21"
      }, {
        "id": 10,
        "first_name": "Miguel",
        "last_name": "Bowlesworth",
        "email": "mbowlesworth9@desdev.cn",
        "gender": "Male",
        "ip_address": "25.83.136.111"
      }, {
        "id": 11,
        "first_name": "Aleece",
        "last_name": "Cheney",
        "email": "acheneya@mapy.cz",
        "gender": "Female",
        "ip_address": "202.166.190.8"
      }, {
        "id": 12,
        "first_name": "Ofelia",
        "last_name": "Bazek",
        "email": "obazekb@slideshare.net",
        "gender": "Female",
        "ip_address": "51.129.14.25"
      }, {
        "id": 13,
        "first_name": "Bronny",
        "last_name": "Mohun",
        "email": "bmohunc@merriam-webster.com",
        "gender": "Male",
        "ip_address": "56.206.115.239"
      }, {
        "id": 14,
        "first_name": "Giles",
        "last_name": "Squibbs",
        "email": "gsquibbsd@bluehost.com",
        "gender": "Male",
        "ip_address": "235.91.145.161"
      }, {
        "id": 15,
        "first_name": "Jeno",
        "last_name": "Denver",
        "email": "jdenvere@soup.io",
        "gender": "Male",
        "ip_address": "65.115.218.69"
      }, {
        "id": 16,
        "first_name": "Lisle",
        "last_name": "Alesbrook",
        "email": "lalesbrookf@wordpress.org",
        "gender": "Male",
        "ip_address": "139.131.4.217"
      }, {
        "id": 17,
        "first_name": "Mada",
        "last_name": "Jouhandeau",
        "email": "mjouhandeaug@census.gov",
        "gender": "Female",
        "ip_address": "107.100.32.123"
      }, {
        "id": 18,
        "first_name": "Carolan",
        "last_name": "Lingley",
        "email": "clingleyh@dagondesign.com",
        "gender": "Female",
        "ip_address": "246.141.2.93"
      }, {
        "id": 19,
        "first_name": "Derron",
        "last_name": "Busby",
        "email": "dbusbyi@comcast.net",
        "gender": "Male",
        "ip_address": "172.7.168.119"
      }, {
        "id": 20,
        "first_name": "Kellina",
        "last_name": "Litzmann",
        "email": "klitzmannj@jiathis.com",
        "gender": "Female",
        "ip_address": "238.6.241.57"
      }]