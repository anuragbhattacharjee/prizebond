const request = require('request');
const scraper = require('table-scraper');

function extractContent(s, space) {
    var span= document.createElement('span');
    span.innerHTML= s;
    if(space) {
        var children= span.querySelectorAll('*');
        for(var i = 0 ; i < children.length ; i++) {
        if(children[i].textContent)
            children[i].textContent+= ' ';
        else
            children[i].innerText+= ' ';
        }
    }
    return [span.textContent || span.innerText].toString().replace(/ +/g,' ');
};

let clientServerOptions = {
    uri: 'https://www.bb.org.bd/investfacility/prizebond/searchPbond.php?txtNumbers=' + '0227049',
    // body: JSON.stringify(postData),
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json'
    // }
}

module.exports = {
    home : function(req, res, next){
        res.render('index', { title: 'Prizebond' });
    },
    prizebonds : function(req, res){
        scraper
            .get('https://www.bb.org.bd/investfacility/prizebond/searchPbond.php?txtNumbers=0013308,0013807')
            .then((tableData)=> {
                console.log(tableData)
                res.send(tableData)
            })
        // request(clientServerOptions, function (error, response) {
        //     // str = response.body.replace(/<[^>]+>/g, '');
        //     // str = str.replace(/\t/g, '');
        //     // str = str.replace(/\n/g, '');
        //     // str = str.replace(/\r/g, '');
        //     // arr = str.trim().split(' ')

        //     // console.log(arr);
        //     // res.send(arr);
        //     // res.render('result', { result : html2json(response.body)});
        // });
    } 
}