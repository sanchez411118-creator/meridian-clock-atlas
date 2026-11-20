// City keys are also used for saved favorites and should stay stable.
// Columns: key, country or region, city, English city, IANA zone, latitude, longitude.
const atlasRegions = {
  亚洲: [
    ["cn","中国","北京","Beijing","Asia/Shanghai",39.90,116.41],
    ["cn-shanghai","中国","上海","Shanghai","Asia/Shanghai",31.23,121.47],
    ["hk","中国香港","香港","Hong Kong","Asia/Hong_Kong",22.32,114.17],
    ["tw","中国台湾","台北","Taipei","Asia/Taipei",25.03,121.57],
    ["jp","日本","东京","Tokyo","Asia/Tokyo",35.68,139.69],
    ["kr","韩国","首尔","Seoul","Asia/Seoul",37.57,126.98],
    ["sg","新加坡","新加坡","Singapore","Asia/Singapore",1.35,103.82],
    ["my","马来西亚","吉隆坡","Kuala Lumpur","Asia/Kuala_Lumpur",3.14,101.69],
    ["id","印度尼西亚","雅加达","Jakarta","Asia/Jakarta",-6.21,106.85],
    ["ph","菲律宾","马尼拉","Manila","Asia/Manila",14.60,120.98],
    ["bd","孟加拉国","达卡","Dhaka","Asia/Dhaka",23.81,90.41],
    ["lk","斯里兰卡","科伦坡","Colombo","Asia/Colombo",6.93,79.86],
    ["np","尼泊尔","加德满都","Kathmandu","Asia/Kathmandu",27.72,85.32],
    ["mm","缅甸","仰光","Yangon","Asia/Yangon",16.84,96.17],
    ["kh","柬埔寨","金边","Phnom Penh","Asia/Phnom_Penh",11.56,104.93],
    ["la","老挝","万象","Vientiane","Asia/Vientiane",17.98,102.63],
    ["qa","卡塔尔","多哈","Doha","Asia/Qatar",25.29,51.53],
    ["kw","科威特","科威特城","Kuwait City","Asia/Kuwait",29.38,47.98],
    ["om","阿曼","马斯喀特","Muscat","Asia/Muscat",23.59,58.41],
    ["bh","巴林","麦纳麦","Manama","Asia/Bahrain",26.23,50.59],
    ["iq","伊拉克","巴格达","Baghdad","Asia/Baghdad",33.31,44.37],
    ["ir","伊朗","德黑兰","Tehran","Asia/Tehran",35.69,51.39],
    ["uz","乌兹别克斯坦","塔什干","Tashkent","Asia/Tashkent",41.30,69.24]
  ],
  欧洲: [
    ["de","德国","柏林","Berlin","Europe/Berlin",52.52,13.41],
    ["fr","法国","巴黎","Paris","Europe/Paris",48.86,2.35],
    ["it","意大利","罗马","Rome","Europe/Rome",41.90,12.50],
    ["es","西班牙","马德里","Madrid","Europe/Madrid",40.42,-3.70],
    ["nl","荷兰","阿姆斯特丹","Amsterdam","Europe/Amsterdam",52.37,4.90],
    ["be","比利时","布鲁塞尔","Brussels","Europe/Brussels",50.85,4.35],
    ["ch","瑞士","苏黎世","Zurich","Europe/Zurich",47.38,8.54],
    ["at","奥地利","维也纳","Vienna","Europe/Vienna",48.21,16.37],
    ["pl","波兰","华沙","Warsaw","Europe/Warsaw",52.23,21.01],
    ["cz","捷克","布拉格","Prague","Europe/Prague",50.08,14.44],
    ["se","瑞典","斯德哥尔摩","Stockholm","Europe/Stockholm",59.33,18.07],
    ["no","挪威","奥斯陆","Oslo","Europe/Oslo",59.91,10.75],
    ["fi","芬兰","赫尔辛基","Helsinki","Europe/Helsinki",60.17,24.94],
    ["pt","葡萄牙","里斯本","Lisbon","Europe/Lisbon",38.72,-9.14],
    ["tr","土耳其","伊斯坦布尔","Istanbul","Europe/Istanbul",41.01,28.98]
  ],
  北美洲: [
    ["us-ny","美国","纽约","New York","America/New_York",40.71,-74.01],
    ["us-chi","美国","芝加哥","Chicago","America/Chicago",41.88,-87.63],
    ["us-den","美国","丹佛","Denver","America/Denver",39.74,-104.99],
    ["us-la","美国","洛杉矶","Los Angeles","America/Los_Angeles",34.05,-118.24],
    ["ca-tor","加拿大","多伦多","Toronto","America/Toronto",43.65,-79.38],
    ["ca-van","加拿大","温哥华","Vancouver","America/Vancouver",49.28,-123.12],
    ["mx","墨西哥","墨西哥城","Mexico City","America/Mexico_City",19.43,-99.13],
    ["pa","巴拿马","巴拿马城","Panama City","America/Panama",8.98,-79.52]
  ],
  南美洲: [
    ["br","巴西","圣保罗","São Paulo","America/Sao_Paulo",-23.55,-46.63],
    ["cl","智利","圣地亚哥","Santiago","America/Santiago",-33.45,-70.67],
    ["pe","秘鲁","利马","Lima","America/Lima",-12.05,-77.04],
    ["co","哥伦比亚","波哥大","Bogotá","America/Bogota",4.71,-74.07],
    ["ec","厄瓜多尔","基多","Quito","America/Guayaquil",-0.18,-78.47]
  ],
  非洲: [
    ["eg","埃及","开罗","Cairo","Africa/Cairo",30.04,31.24],
    ["za","南非","约翰内斯堡","Johannesburg","Africa/Johannesburg",-26.20,28.05],
    ["ma","摩洛哥","卡萨布兰卡","Casablanca","Africa/Casablanca",33.57,-7.59],
    ["ng","尼日利亚","拉各斯","Lagos","Africa/Lagos",6.52,3.38],
    ["ke","肯尼亚","内罗毕","Nairobi","Africa/Nairobi",-1.29,36.82],
    ["gh","加纳","阿克拉","Accra","Africa/Accra",5.56,-0.19],
    ["dz","阿尔及利亚","阿尔及尔","Algiers","Africa/Algiers",36.75,3.06],
    ["et","埃塞俄比亚","亚的斯亚贝巴","Addis Ababa","Africa/Addis_Ababa",8.98,38.76]
  ],
  大洋洲: [
    ["au-syd","澳大利亚","悉尼","Sydney","Australia/Sydney",-33.87,151.21],
    ["au-per","澳大利亚","珀斯","Perth","Australia/Perth",-31.95,115.86],
    ["au-adl","澳大利亚","阿德莱德","Adelaide","Australia/Adelaide",-34.93,138.60],
    ["au-bne","澳大利亚","布里斯班","Brisbane","Australia/Brisbane",-27.47,153.03],
    ["nz","新西兰","奥克兰","Auckland","Pacific/Auckland",-36.85,174.76]
  ]
};

const mapColors = {
  亚洲:["#513b45","#324354","#bb8e80","#ffd3a3"],
  欧洲:["#324457","#40415b","#95a4bf","#ffcfaa"],
  北美洲:["#2b4754","#404658","#8eafad","#ffd49b"],
  南美洲:["#51404c","#51483d","#c2a28a","#ffe2ab"],
  非洲:["#4d403d","#644b44","#cba080","#ffdc98"],
  大洋洲:["#304856","#354f55","#99b7ad","#ffe1b0"]
};
const mapPlaces = [];
const mapCoords = new Map();
for (const [region, cities] of Object.entries(atlasRegions)) {
  for (const [key, country, city, english, zone, lat, lon] of cities) {
    mapPlaces.push([key, country, city, english, zone, region]);
    mapCoords.set(key, {lat, lon, region});
  }
}

const coastShapes = coasts.map(ring => "M" + ring.map(pair=>pair.join(",")).join("L") + "Z").join("");
const bannerCache = new Map();
function bannerFor(key) {
  if (!mapCoords.has(key)) return "./art/" + key + ".svg";
  if (bannerCache.has(key)) return bannerCache.get(key);
  const {lat,lon,region} = mapCoords.get(key);
  const [start,end,land,accent] = mapColors[region];
  const xScale = 2.9 * Math.cos(lat * Math.PI / 180);
  const transform = "translate(236 44) scale(" + xScale + " -2.9) translate(" + (-lon) + " " + (-lat) + ")";
  const coords = Math.abs(lat).toFixed(2) + "°" + (lat<0?"S":"N") + "   " + Math.abs(lon).toFixed(2) + "°" + (lon<0?"W":"E");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100">
    <defs><linearGradient id="sea"><stop stop-color="${start}"/><stop offset="1" stop-color="${end}"/></linearGradient>
    <path id="land" d="${coastShapes}"/>
    <pattern id="grid" width="32" height="24" patternUnits="userSpaceOnUse"><path d="M32 0H0V24" fill="none" stroke="#fff" opacity=".15" stroke-width=".7"/></pattern></defs>
    <path fill="url(#sea)" d="M0 0h400v100H0z"/>
    <g transform="${transform}" fill="${land}" fill-opacity=".48" stroke="${land}" stroke-width=".35">
    <use href="#land"/><use href="#land" transform="translate(360 0)"/><use href="#land" transform="translate(-360 0)"/></g>
    <path fill="url(#grid)" d="M0 0h400v100H0z"/>
    <g fill="none" stroke="${accent}"><circle cx="236" cy="44" r="31" opacity=".18" stroke-dasharray="2 4"/><circle cx="236" cy="44" r="12" opacity=".55"/>
    <path d="M218 44h7m22 0h7m-18-18v7m0 22v7" opacity=".75"/></g>
    <circle cx="236" cy="44" r="4" fill="${accent}"/><text x="206" y="86" fill="#f9e7ce" font-family="monospace" font-size="9" stroke="#30333b" stroke-width="1.8" paint-order="stroke">${coords}</text></svg>`;
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  bannerCache.set(key,url);
  return url;
}
