
fetch("https://scores.nbcsports.com/ticker/data/gamesNEW.js.asp?sport=MLB&period=20220509&jsonp=true&random=1652230716683")
.then(response => response.text())
.then(function(html) {
  // Initialize the DOM parser
  var parser = new DOMParser();

  // Parse the text
  var doc = parser.parseFromString(html, "text/html");

  // You can now even select part of that html as you would in the regular DOM 
  // Example:
  var docArticle = doc.querySelectorAll('ticker-entry')[10].innerHTML;

  console.log(doc);
  console.log(docArticle);

})

