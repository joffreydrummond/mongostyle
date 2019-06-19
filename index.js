const cheerio = require("cheerio"),
  axios = require("axios"),
  express = require("express"),
  logger = require("logger"),
  mongoose = require("mongoose");

console.log(
  "\n***********************************\n" +
    "Grabbing every thing important\n" +
    "from Katy Perry's website:" +
    "\n***********************************\n"
);

axios.get("https://www.katyperry.com/news/").then(function(response) {
  let $ = cheerio.load(response.data);
  let results = [];

  $("h5.section__title").each(function(i, element) {
    let title = $(element).text();
    // let summary = $(element).children().attr().text();
    let link = $(element)
      .attr("a.href");
    results.push({
      title: title,
      link: link
    });
  });

  // $("span.article-excerpt").each(function(i, element) {
  //   let summary = $(element).text();
  //   results.push({
  //     summary: summary,

  //   });
  // });

  console.log(results);
});
