let employees=
    [{"id":1,"name":"Betti","email":"bkellard0@icio.us","gender":"Female"},
    {"id":2,"name":"Stacia","email":"sskedge1@amazon.com","gender":"Female"},
    {"id":3,"name":"Walliw","email":"wcharlot2@sphinn.com","gender":"Female"},
    {"id":4,"name":"Amelina","email":"amalt3@amazon.de","gender":"Female"},
    {"id":5,"name":"Clementina","email":"castman4@cisco.com","gender":"Female"},
    {"id":6,"name":"Myrwyn","email":"mdimitrov5@opensource.org","gender":"Male"},
    {"id":7,"name":"Bo","email":"bbroddle6@patch.com","gender":"Male"},
    {"id":8,"name":"Malva","email":"mjakoubec7@pinterest.com","gender":"Bigender"},
    {"id":9,"name":"Sherm","email":"swhitechurch8@ovh.net","gender":"Male"},
    {"id":10,"name":"Helenelizabeth","email":"hwalder9@berkeley.edu","gender":"Female"},
    {"id":11,"name":"Ashly","email":"amaffinia@networksolutions.com","gender":"Bigender"},
    {"id":12,"name":"Ambrosi","email":"aposthillb@pen.io","gender":"Male"},
    {"id":13,"name":"Charlotta","email":"csalazarc@cbsnews.com","gender":"Female"},
    {"id":14,"name":"Mac","email":"mbenged@google.it","gender":"Male"},
    {"id":15,"name":"Batholomew","email":"bdevenishe@archive.org","gender":"Male"},
    {"id":16,"name":"Abbot","email":"avaulsf@diigo.com","gender":"Male"},
    {"id":17,"name":"Costa","email":"cronaldsong@indiegogo.com","gender":"Male"},
    {"id":18,"name":"Fred","email":"fgorvetteh@artisteer.com","gender":"Male"},
    {"id":19,"name":"Nevins","email":"nflindersi@techcrunch.com","gender":"Male"},
    {"id":20,"name":"Ryan","email":"rmoyesj@ning.com","gender":"Male"},
    {"id":21,"name":"Mallissa","email":"mogradak@buzzfeed.com","gender":"Female"},
    {"id":22,"name":"Baird","email":"bdavidescol@shop-pro.jp","gender":"Genderqueer"},
    {"id":23,"name":"Saraann","email":"svirrm@hao123.com","gender":"Female"},
    {"id":24,"name":"Gail","email":"ggantzn@biglobe.ne.jp","gender":"Male"},
    {"id":25,"name":"Aksel","email":"acaughto@mlb.com","gender":"Male"},
    {"id":26,"name":"Cirstoforo","email":"ctellenbrokerp@kickstarter.com","gender":"Male"},
    {"id":27,"name":"Papagena","email":"pdesseineq@youtube.com","gender":"Female"},
    {"id":28,"name":"Joyann","email":"jledsterr@comsenz.com","gender":"Female"},
    {"id":29,"name":"Cherilyn","email":"ccawtes@pen.io","gender":"Female"},
    {"id":30,"name":"Dallas","email":"dlesurft@cpanel.net","gender":"Male"},
    {"id":31,"name":"Wendall","email":"wvanderkruiu@cbslocal.com","gender":"Male"},
    {"id":32,"name":"Odessa","email":"obelfittv@jimdo.com","gender":"Female"},
    {"id":33,"name":"Cathi","email":"cgyorgyw@altervista.org","gender":"Non-binary"},
    {"id":34,"name":"Guido","email":"glegravex@squarespace.com","gender":"Genderfluid"},
    {"id":35,"name":"Balduin","email":"bbearny@twitter.com","gender":"Male"},
    {"id":36,"name":"Dianne","email":"dmcconigalz@adobe.com","gender":"Female"},
    {"id":37,"name":"Durant","email":"dcowlishaw10@quantcast.com","gender":"Male"},
    {"id":38,"name":"Quentin","email":"qmanjin11@wikia.com","gender":"Female"},
    {"id":39,"name":"Lurline","email":"lillingsworth12@mozilla.com","gender":"Female"},
    {"id":40,"name":"Morry","email":"mtwine13@ftc.gov","gender":"Male"},
    {"id":41,"name":"Porty","email":"pmarrian14@youku.com","gender":"Male"},
    {"id":42,"name":"Whitby","email":"wkroger15@biglobe.ne.jp","gender":"Male"},
    {"id":43,"name":"Krishnah","email":"kpotier16@utexas.edu","gender":"Non-binary"},
    {"id":44,"name":"Fletch","email":"fblackler17@fema.gov","gender":"Bigender"},
    {"id":45,"name":"Rand","email":"rsantostefano18@thetimes.co.uk","gender":"Male"},
    {"id":46,"name":"Izak","email":"igritten19@bizjournals.com","gender":"Male"},
    {"id":47,"name":"Allina","email":"abaudoux1a@infoseek.co.jp","gender":"Female"},
    {"id":48,"name":"Myrtia","email":"mseine1b@bbb.org","gender":"Female"},
    {"id":49,"name":"Vannie","email":"vwasselin1c@prweb.com","gender":"Female"},
    {"id":50,"name":"Lorelei","email":"lfrosdick1d@linkedin.com","gender":"Polygender"}
]

function suman(){
    let rows=""
    for(emp of employees){
    rows = rows + `<tr>
                     <td> ${emp.id} </td>
                     <td> ${emp.name} </td>
                     <td> ${emp.email} </td>
                     <td> ${emp.gender} </td>
                   </tr>`
    }
    document.getElementById('abc').innerHTML=rows
}