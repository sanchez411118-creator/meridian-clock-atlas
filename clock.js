const icons={
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
  star:'<path d="m12 3 2.75 5.6 6.15.9-4.45 4.34 1.05 6.12L12 17.07l-5.5 2.89 1.05-6.12L3.1 9.5l6.15-.9Z"/>',
  pin:'<path d="M19.5 10c0 5-7.5 11-7.5 11S4.5 15 4.5 10a7.5 7.5 0 1 1 15 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.6 1.6m10.8 10.8L19 19M5 19l1.6-1.6M17.4 6.6 19 5"/>',
  moon:'<path d="M20.5 14a8.8 8.8 0 0 1-10.6-11 9 9 0 1 0 10.6 11Z"/>',
  date:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 10h18"/>',
  down:'<path d="m6.5 9 5.5 5 5.5-5"/>'
};
const icon=k=>'<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+icons[k]+'</svg>';
document.querySelectorAll("[data-ico]").forEach(el=>el.innerHTML=icon(el.dataset.ico));
const places=[
  ["sa","沙特阿拉伯","利雅得","Riyadh","Asia/Riyadh","亚洲"],
  ["dubai","迪拜","迪拜","Dubai","Asia/Dubai","亚洲"],
  ["ae","阿联酋","阿布扎比","Abu Dhabi","Asia/Dubai","亚洲"],
  ["vn","越南","河内","Hanoi","Asia/Ho_Chi_Minh","亚洲"],
  ["th","泰国","曼谷","Bangkok","Asia/Bangkok","亚洲"],
  ["gb","英国","伦敦","London","Europe/London","欧洲"],
  ["ar","阿根廷","布宜诺斯艾利斯","Buenos Aires","America/Argentina/Buenos_Aires","南美洲"],
  ["in","印度","新德里","New Delhi","Asia/Kolkata","亚洲"],
  ["pk","巴基斯坦","伊斯兰堡","Islamabad","Asia/Karachi","亚洲"],
  ["kz","哈萨克斯坦","阿斯塔纳","Astana","Asia/Almaty","亚洲"],
  ["ru","俄罗斯","莫斯科","Moscow","Europe/Moscow","欧洲"]
];
const russianCities=[
  ["加里宁格勒","Kaliningrad","Europe/Kaliningrad"],["莫斯科","Moscow","Europe/Moscow"],["萨马拉","Samara","Europe/Samara"],["叶卡捷琳堡","Yekaterinburg","Asia/Yekaterinburg"],["鄂木斯克","Omsk","Asia/Omsk"],["新西伯利亚","Novosibirsk","Asia/Novosibirsk"],["伊尔库茨克","Irkutsk","Asia/Irkutsk"],["雅库茨克","Yakutsk","Asia/Yakutsk"],["符拉迪沃斯托克","Vladivostok","Asia/Vladivostok"],["马加丹","Magadan","Asia/Magadan"],["彼得罗巴甫洛夫斯克","Petropavlovsk","Asia/Kamchatka"]
];
function read(key,def){try{return JSON.parse(localStorage.getItem("time-atlas:"+key))??def}catch{return def}}
function save(key,value){try{localStorage.setItem("time-atlas:"+key,JSON.stringify(value))}catch{}}
const saved=read("stars",[]),stars=new Set(Array.isArray(saved)?saved:[]);
let use12=read("12h",false)===true,area="全部",view="",active=[],russian=russianCities.find(c=>c[2]===read("russia","Europe/Moscow"))||russianCities[1];
const byId=id=>document.getElementById(id);
const weekdays=["周日","周一","周二","周三","周四","周五","周六"];
const formatters=new Map();
function parts(instant,zone){
  if(!formatters.has(zone))formatters.set(zone,new Intl.DateTimeFormat("en-GB",{timeZone:zone,hourCycle:"h23",hour:"2-digit",minute:"2-digit",second:"2-digit",year:"numeric",month:"numeric",day:"numeric",timeZoneName:"shortOffset"}));
  return Object.fromEntries(formatters.get(zone).formatToParts(instant).map(v=>[v.type,v.value]));
}
const localZone=Intl.DateTimeFormat().resolvedOptions().timeZone;
function stamp(p){return Date.UTC(+p.year,+p.month-1,+p.day)}
function dayName(p){return weekdays[new Date(stamp(p)).getUTCDay()]}
function time(p){return (use12?String(+p.hour%12||12).padStart(2,"0"):p.hour)+":"+p.minute}
function period(p){return use12?(+p.hour<12?"AM":"PM"):""}
function set(el,value){if(el.textContent!==value)el.textContent=value}
function draw(){
  const now=new Date(),local=parts(now,localZone);
  set(byId("local-hm"),time(local));set(byId("local-sec"),":"+local.second);set(byId("local-period"),period(local));
  set(byId("local-date"),local.year+"年"+local.month+"月"+local.day+"日  "+dayName(local));
  for(const card of active){
    const p=parts(now,card.zone),h=+p.hour,label=h<6?"凌晨":h<12?"上午":h<18?"下午":"晚间";
    set(card.hm,time(p));set(card.sec,":"+p.second);set(card.ampm,period(p));
    const shift=(stamp(p)-stamp(local))/86400000;
    set(card.date,p.month+"月"+p.day+"日 "+dayName(p));
    card.date.title=shift===0?"与本地同一天":shift>0?"比本地早进入新的一天":"当地日期比本地晚一天";
    set(card.offset,p.timeZoneName.replace("GMT","UTC").replace(/^UTC$/,"UTC+0"));
    if(card.chip.dataset.label!==label){card.chip.dataset.label=label;card.chip.innerHTML="<i>"+icon(h>=6&&h<18?"sun":"moon")+"</i>"+label}
  }
}
function refresh(){
  view=location.hash==="#favorites"?"favorites":"all";
  for(const key of ["all","favorites"]){const a=byId("nav-"+key);if(view===key)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")}
  byId("f12").setAttribute("aria-pressed",use12);byId("f24").setAttribute("aria-pressed",!use12);
  document.querySelectorAll("[data-area]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.area===area));
  const rows=places.map(p=>p[0]==="ru"?[p[0],p[1],...russian,russian[2].startsWith("Asia/")?"亚洲":"欧洲"]:p).filter(p=>(view==="all"||stars.has(p[0]))&&(area==="全部"||p[5]===area));
  byId("section-title").textContent=view==="all"?"地区时钟":"我的收藏";byId("count").textContent=rows.length;
  byId("clocks").replaceChildren();active=[];
  for(const [key,name,city,en,zone] of rows){
    const el=document.createElement("article");el.className="clock";
    const cityMarkup=key==="ru"?'<span class="pick-city"><select class="city-select" aria-label="俄罗斯城市">'+russianCities.map(c=>'<option value="'+c[2]+'" '+(zone===c[2]?"selected":"")+'>'+c[0]+' · '+c[1]+'</option>').join("")+'</select><i>'+icon("down")+'</i></span>':city+" · "+en;
    const starred=stars.has(key),action=(starred?"取消收藏":"收藏")+name;
    el.innerHTML='<div class="art"><img alt="" src="./art/'+key+'.svg"><span class="period-chip"></span></div><div class="card-body"><div class="title-row"><h3>'+name+'</h3><button type="button" class="fav" aria-label="'+action+'" title="'+action+'" aria-pressed="'+starred+'">'+icon("star")+'</button></div><div class="city-line">'+cityMarkup+'</div><div class="card-time"><strong></strong><small></small><em></em></div><div class="card-foot"><span class="date"><i>'+icon("date")+'</i><span></span></span><span class="offset"></span></div></div>';
    const q=selector=>el.querySelector(selector),fav=q(".fav");
    fav.addEventListener("click",()=>{
      if(stars.has(key))stars.delete(key);else stars.add(key);
      save("stars",[...stars]);byId("notice").textContent=name+(stars.has(key)?"已收藏":"已取消收藏");
      if(view==="favorites"){refresh();(byId("clocks").querySelector(".fav")||byId("empty").querySelector("button")).focus()}else{
        const text=(stars.has(key)?"取消收藏":"收藏")+name;fav.setAttribute("aria-pressed",stars.has(key));fav.setAttribute("aria-label",text);fav.title=text;
      }
    });
    q("select")?.addEventListener("change",event=>{russian=russianCities.find(c=>c[2]===event.target.value);save("russia",russian[2]);refresh();(document.querySelector(".city-select")||document.querySelector('[data-area][aria-pressed=true]')).focus()});
    byId("clocks").append(el);active.push({zone,hm:q(".card-time strong"),sec:q(".card-time small"),ampm:q(".card-time em"),date:q(".date span"),offset:q(".offset"),chip:q(".period-chip")});
  }
  const empty=byId("empty");empty.hidden=rows.length>0;
  if(!rows.length){
    const noStars=view==="favorites"&&stars.size===0;
    empty.querySelector("h3").textContent=noStars?"还没有收藏的地区":"这里暂时没有时钟";
    empty.querySelector("p").textContent=noStars?"在地区时钟上点亮星标，这里就会显示它的当地时间。":"切换到全部地区，查看其他时钟。";
    const button=empty.querySelector("button");button.textContent=noStars?"查看地区时钟":"显示全部地区";button.onclick=()=>{area="全部";if(noStars)location.hash="all";refresh()};
  }
  draw();
}
for(const [id,value] of [["f12",true],["f24",false]])byId(id).addEventListener("click",()=>{use12=value;save("12h",use12);refresh()});
document.querySelectorAll("[data-area]").forEach(b=>b.addEventListener("click",()=>{area=b.dataset.area;refresh()}));
addEventListener("hashchange",()=>{area="全部";refresh()});document.addEventListener("visibilitychange",()=>{if(!document.hidden)draw()});
refresh();setInterval(()=>{if(!document.hidden)draw()},500);
