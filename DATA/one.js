let data=[{"id":1,"name":"Carissa","email":"cdobbson0@biglobe.ne.jp","gender":"Female"},
{"id":2,"name":"Sephira","email":"sblackeby1@dyndns.org","gender":"Female"},
{"id":3,"name":"Babbie","email":"bdjokovic2@cbslocal.com","gender":"Female"},
{"id":4,"name":"Olive","email":"osangster3@histats.com","gender":"Female"},
{"id":5,"name":"Geoffrey","email":"givanuschka4@ucoz.ru","gender":"Male"},
{"id":6,"name":"Berkley","email":"baikman5@liveinternet.ru","gender":"Bigender"},
{"id":7,"name":"Alford","email":"aleaton6@msn.com","gender":"Male"},
{"id":8,"name":"Isacco","email":"imacclinton7@smugmug.com","gender":"Male"},
{"id":9,"name":"Jobina","email":"jetoile8@hubpages.com","gender":"Female"},
{"id":10,"name":"Ravi","email":"rfilgate9@sina.com.cn","gender":"Male"},
{"id":11,"name":"Igor","email":"itompsetta@dailymotion.com","gender":"Male"},
{"id":12,"name":"Riane","email":"rbuckhamb@about.me","gender":"Female"},
{"id":13,"name":"Scotty","email":"sneamesc@live.com","gender":"Male"},
{"id":14,"name":"Stearn","email":"sgrennand@wikimedia.org","gender":"Male"},
{"id":15,"name":"Mickie","email":"mjersone@google.com.au","gender":"Male"},
{"id":16,"name":"Lissi","email":"lglasserf@upenn.edu","gender":"Female"},
{"id":17,"name":"Celie","email":"cburrowg@dagondesign.com","gender":"Female"},
{"id":18,"name":"Oates","email":"owhitlockh@privacy.gov.au","gender":"Male"},
{"id":19,"name":"Sheffield","email":"streeni@hao123.com","gender":"Male"},
{"id":20,"name":"Kirstin","email":"kaggej@t.co","gender":"Female"},
{"id":21,"name":"Brodie","email":"bbonickk@squarespace.com","gender":"Male"},
{"id":22,"name":"Lorne","email":"lsouthwayl@reverbnation.com","gender":"Male"},
{"id":23,"name":"Giffer","email":"ggreenhaughm@about.me","gender":"Male"},
{"id":24,"name":"Grady","email":"gericksonn@i2i.jp","gender":"Male"},
{"id":25,"name":"Josefina","email":"jgorckeo@scientificamerican.com","gender":"Genderfluid"},
{"id":26,"name":"Galen","email":"gricardonp@people.com.cn","gender":"Male"},
{"id":27,"name":"Cacilie","email":"cdeaconq@army.mil","gender":"Genderfluid"},
{"id":28,"name":"Kameko","email":"kkoser@opensource.org","gender":"Female"},
{"id":29,"name":"Mathew","email":"mmunghams@myspace.com","gender":"Male"},
{"id":30,"name":"Bertine","email":"blocht@ning.com","gender":"Female"},
{"id":31,"name":"Kristian","email":"keymoru@bloglines.com","gender":"Male"},
{"id":32,"name":"Wright","email":"walbertv@walmart.com","gender":"Male"},
{"id":33,"name":"Tobin","email":"tgodleew@godaddy.com","gender":"Male"},
{"id":34,"name":"Ches","email":"csuthrenx@com.com","gender":"Male"},
{"id":35,"name":"Thia","email":"tgertrayy@123-reg.co.uk","gender":"Female"},
{"id":36,"name":"Tamarra","email":"tghidiniz@mapy.cz","gender":"Female"},
{"id":37,"name":"Neile","email":"nkittley10@auda.org.au","gender":"Female"},
{"id":38,"name":"Ingemar","email":"ishallo11@gizmodo.com","gender":"Male"},
{"id":39,"name":"Marcos","email":"mwegman12@rambler.ru","gender":"Genderfluid"},
{"id":40,"name":"Boony","email":"bgoodanew13@de.vu","gender":"Agender"},
{"id":41,"name":"Arlan","email":"adurgan14@indiatimes.com","gender":"Male"},
{"id":42,"name":"Marcus","email":"mneno15@trellian.com","gender":"Male"},
{"id":43,"name":"Craggy","email":"cjeeves16@soup.io","gender":"Male"},
{"id":44,"name":"Birk","email":"bjannex17@noaa.gov","gender":"Male"},
{"id":45,"name":"Conway","email":"ccorradetti18@nydailynews.com","gender":"Male"},
{"id":46,"name":"Joan","email":"jmarconi19@google.co.jp","gender":"Female"},
{"id":47,"name":"Burgess","email":"bworshall1a@gizmodo.com","gender":"Male"},
{"id":48,"name":"Marylynne","email":"mpitt1b@who.int","gender":"Female"},
{"id":49,"name":"Loria","email":"lflintuff1c@house.gov","gender":"Genderfluid"},
{"id":50,"name":"Jessi","email":"jmatasov1d@newyorker.com","gender":"Female"}]

function suman(){
    let rows=""
    let i=0
   while(i<=data.length-1){

    rows=rows+`<tr>
    
    <td>${data[i].id}</td>
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].gender}</td>
    
    
    
    </tr>`
    i=i+1
   }
    
   
document.getElementById('abc').innerHTML=rows
}