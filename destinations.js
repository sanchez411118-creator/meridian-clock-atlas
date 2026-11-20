// City keys are also used for saved favorites and should stay stable.
// Columns: key, country or region, city, English city, IANA zone.
const atlasRegions = {
  亚洲: [
    ["cn","中国","北京","Beijing","Asia/Shanghai"],
    ["cn-shanghai","中国","上海","Shanghai","Asia/Shanghai"],
    ["hk","中国香港","香港","Hong Kong","Asia/Hong_Kong"],
    ["tw","中国台湾","台北","Taipei","Asia/Taipei"],
    ["jp","日本","东京","Tokyo","Asia/Tokyo"],
    ["kr","韩国","首尔","Seoul","Asia/Seoul"],
    ["sg","新加坡","新加坡","Singapore","Asia/Singapore"],
    ["my","马来西亚","吉隆坡","Kuala Lumpur","Asia/Kuala_Lumpur"],
    ["id","印度尼西亚","雅加达","Jakarta","Asia/Jakarta"],
    ["ph","菲律宾","马尼拉","Manila","Asia/Manila"],
    ["bd","孟加拉国","达卡","Dhaka","Asia/Dhaka"],
    ["lk","斯里兰卡","科伦坡","Colombo","Asia/Colombo"],
    ["np","尼泊尔","加德满都","Kathmandu","Asia/Kathmandu"],
    ["mm","缅甸","仰光","Yangon","Asia/Yangon"],
    ["kh","柬埔寨","金边","Phnom Penh","Asia/Phnom_Penh"],
    ["la","老挝","万象","Vientiane","Asia/Vientiane"],
    ["qa","卡塔尔","多哈","Doha","Asia/Qatar"],
    ["kw","科威特","科威特城","Kuwait City","Asia/Kuwait"],
    ["om","阿曼","马斯喀特","Muscat","Asia/Muscat"],
    ["bh","巴林","麦纳麦","Manama","Asia/Bahrain"],
    ["iq","伊拉克","巴格达","Baghdad","Asia/Baghdad"],
    ["ir","伊朗","德黑兰","Tehran","Asia/Tehran"],
    ["uz","乌兹别克斯坦","塔什干","Tashkent","Asia/Tashkent"]
  ],
  欧洲: [
    ["de","德国","柏林","Berlin","Europe/Berlin"],
    ["fr","法国","巴黎","Paris","Europe/Paris"],
    ["it","意大利","罗马","Rome","Europe/Rome"],
    ["es","西班牙","马德里","Madrid","Europe/Madrid"],
    ["nl","荷兰","阿姆斯特丹","Amsterdam","Europe/Amsterdam"],
    ["be","比利时","布鲁塞尔","Brussels","Europe/Brussels"],
    ["ch","瑞士","苏黎世","Zurich","Europe/Zurich"],
    ["at","奥地利","维也纳","Vienna","Europe/Vienna"],
    ["pl","波兰","华沙","Warsaw","Europe/Warsaw"],
    ["cz","捷克","布拉格","Prague","Europe/Prague"],
    ["se","瑞典","斯德哥尔摩","Stockholm","Europe/Stockholm"],
    ["no","挪威","奥斯陆","Oslo","Europe/Oslo"],
    ["fi","芬兰","赫尔辛基","Helsinki","Europe/Helsinki"],
    ["pt","葡萄牙","里斯本","Lisbon","Europe/Lisbon"],
    ["tr","土耳其","伊斯坦布尔","Istanbul","Europe/Istanbul"]
  ],
  北美洲: [
    ["us-ny","美国","纽约","New York","America/New_York"],
    ["us-chi","美国","芝加哥","Chicago","America/Chicago"],
    ["us-den","美国","丹佛","Denver","America/Denver"],
    ["us-la","美国","洛杉矶","Los Angeles","America/Los_Angeles"],
    ["ca-tor","加拿大","多伦多","Toronto","America/Toronto"],
    ["ca-van","加拿大","温哥华","Vancouver","America/Vancouver"],
    ["mx","墨西哥","墨西哥城","Mexico City","America/Mexico_City"],
    ["pa","巴拿马","巴拿马城","Panama City","America/Panama"]
  ],
  南美洲: [
    ["br","巴西","圣保罗","São Paulo","America/Sao_Paulo"],
    ["cl","智利","圣地亚哥","Santiago","America/Santiago"],
    ["pe","秘鲁","利马","Lima","America/Lima"],
    ["co","哥伦比亚","波哥大","Bogotá","America/Bogota"],
    ["ec","厄瓜多尔","基多","Quito","America/Guayaquil"]
  ],
  非洲: [
    ["eg","埃及","开罗","Cairo","Africa/Cairo"],
    ["za","南非","约翰内斯堡","Johannesburg","Africa/Johannesburg"],
    ["ma","摩洛哥","卡萨布兰卡","Casablanca","Africa/Casablanca"],
    ["ng","尼日利亚","拉各斯","Lagos","Africa/Lagos"],
    ["ke","肯尼亚","内罗毕","Nairobi","Africa/Nairobi"],
    ["gh","加纳","阿克拉","Accra","Africa/Accra"],
    ["dz","阿尔及利亚","阿尔及尔","Algiers","Africa/Algiers"],
    ["et","埃塞俄比亚","亚的斯亚贝巴","Addis Ababa","Africa/Addis_Ababa"]
  ],
  大洋洲: [
    ["au-syd","澳大利亚","悉尼","Sydney","Australia/Sydney"],
    ["au-per","澳大利亚","珀斯","Perth","Australia/Perth"],
    ["au-adl","澳大利亚","阿德莱德","Adelaide","Australia/Adelaide"],
    ["au-bne","澳大利亚","布里斯班","Brisbane","Australia/Brisbane"],
    ["nz","新西兰","奥克兰","Auckland","Pacific/Auckland"]
  ]
};

const additionalPlaces = Object.entries(atlasRegions).flatMap(([region, cities]) =>
  cities.map(city => [...city, region])
);
