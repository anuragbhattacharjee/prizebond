const scraper = require('table-scraper');

let uri= 'https://www.bb.org.bd/investfacility/prizebond/searchPbond.php?txtNumbers=';

module.exports = {
    home : function(req, res, next){
        res.render('index', { title: 'Prizebond' });
    },
    prizebonds : function(req, res){
        //0227046~0227050,0227049
        //1234708
        scraper
            .get( uri + '0227046~0227050,0227049')
            .then((tableData)=> {
                tableData.map( data => console.log(data.length))
                res.send(tableData)
            })
    } 
}