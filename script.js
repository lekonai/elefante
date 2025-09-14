// const serpAPIGI = 'https://serpapi.com/search.json?q=Apple&engine=google_images&ijn=0' // this is for the google images API, in which there is no official API. odd
// Thank you SerpApi!

const { getJson } = require("https://serpapi.com/search.json?q=Apple&engine=google_images&ijn=0"); // this is just a copy and paste. its also a bit strange how the implementation is within the brackets???

getJson({
  q: "Elephant",
  engine: "google_images",
  ijn: "0",
  api_key: "" // don't commit this
}, (json) => {
  console.log(json["images_results"]);
});

// if you're forking this (whether it be me or some random that wants to join in), don't forget your API key