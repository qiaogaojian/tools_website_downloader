// import scrape from "website-scraper"; // only as ESM, no CommonJS

var scrape = require("website-scraper");

let website = "https://www.baidu.com/";

var arg = process.argv[2];
if (arg) {
  console.log("有参数,地址是:" + arg);
  website = arg;
} else {
  console.log("没有参数,默认地址是:" + website);
}

const options = {
  urls: [website],
  urlFilter: function (url) {
    if (!url) {
      return true;
    }
    return url.indexOf(website) === 0;
  },
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: "bySiteStructure",
  directory: "./download/",
  request: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19",
    },
  },
};

// with promise
scrape(options).then(() => {
  console.log("打包下载完成!");
});
