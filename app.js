"use strict";
const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const icon=hex=>String.fromCodePoint(parseInt(hex,16));
const nav=document.getElementById("navigation");
nav.innerHTML=navigation.map(item=>'<button type="button" class="nav-item '+(item.name==="Конструктор"?"group":item.name==="Сайты"?"current":"")+'" '+(item.name==="Сайты"?'aria-current="page"':'')+'><i aria-hidden="true" class="icon">'+icon(item.icon)+'</i><span class="caption">'+esc(item.name)+'</span></button>').join("");
// Для остальных разделов макеты пока не заданы; они остаются без переходов.
document.getElementById("regions").innerHTML=regions.map((region,i)=>'<button type="button" class="region '+(i===0?"all selected":"")+'" data-region="'+i+'" aria-pressed="'+(i===0)+'">'+(i===0?'':'<span class="arrow" aria-hidden="true">'+icon("E96E")+'</span>')+'<span class="region-name">'+esc(region.name)+'</span><span class="count">'+esc(region.count)+'</span></button>').join("");
let selected=0, region=0;
const rows=document.getElementById("rows");
function render(){
const query=document.getElementById("search").value.trim().toLocaleLowerCase("ru");
const visible=sites.filter(site=>(region<2)&&[site.name,site.address,site.company,site.inn].join(" ").toLocaleLowerCase("ru").includes(query));
rows.innerHTML=visible.map(site=>'<button type="button" class="site-row" role="option" aria-selected="'+(site.id===selected)+'" data-site="'+site.id+'"><span class="site-main"><span class="check" aria-hidden="true"><img src="assets/11596.svg" width="13" height="13" alt=""></span><span class="site-text"><span class="site-line"><span class="site-name '+(site.muted?'muted':'')+'">'+esc(site.name)+'</span>'+(site.address?'<span class="address">'+esc(site.address)+'</span>':'')+'</span>'+(site.company?'<span class="company-line"><span class="company">'+esc(site.company)+'</span><span class="inn">'+esc(site.inn)+'</span></span>':'')+'</span></span><span class="site-status"><i class="icon" aria-label="'+(site.verified?'Проверено админом':'')+'">'+(site.verified?icon("EB4D"):'')+'</i></span><span class="metrics"><span>'+esc(site.date)+'</span><span>'+esc(site.visitors)+'</span><span>'+esc(site.responses)+'</span><span>'+esc(site.template)+'</span></span></button>').join("");
}
document.getElementById("search").addEventListener("input",render);
rows.addEventListener("click",event=>{const row=event.target.closest("[data-site]");if(!row)return;selected=Number(row.dataset.site);rows.querySelectorAll("[data-site]").forEach(node=>node.setAttribute("aria-selected",String(Number(node.dataset.site)===selected)))});
document.getElementById("regions").addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;region=Number(button.dataset.region);document.querySelectorAll("[data-region]").forEach(node=>{const active=Number(node.dataset.region)===region;node.classList.toggle("selected",active);node.setAttribute("aria-pressed",String(active))});render()});
function fit(){const scale=Math.min(innerWidth/1600,innerHeight/900);document.getElementById("stage").style.transform="scale("+scale+")"}addEventListener("resize",fit);fit();render();

