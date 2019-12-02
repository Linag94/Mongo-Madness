var router = require('express').Router();
var db = require('../models');
var axios = require('axios');
var cheerio = require('cheerio');

router.get("/scrape", function (req, res) {
    axios.get("https://www.nj.com/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("article").each(function (i, element) {

            var headline = $(this).find("a").text();
            var link = $(this).find("a").attr("href");
            var summary = $(this).find(".article__details--summary").text();

            var dataObj = { headline, link, summary }

            console.log(dataObj);
            // create Article model in model folder
            // then create new instance per article found
            // redirect to html route
            // html route get Articles from database
            // pass to Handlebars

        });
        res.send("BUILD SCRAPER HERE");
    })

});




module.exports = router;