"use strict";
const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const icon=hex=>String.fromCodePoint(parseInt(hex,16));
const nav=document.getElementById("navigation");
nav.innerHTML=navigation.map(item=>'<button type="button" class="nav-item '+(item.name==="Конструктор"?"group":item.name==="Сайты"?"current":"")+'" '+(item.name==="Сайты"?'aria-current="page"':'')+'><i aria-hidden="true" class="icon">'+icon(item.icon)+'</i><span class="caption">'+esc(item.name)+'</span></button>').join("");
// Для остальных разделов макеты пока не заданы; они остаются без переходов.
document.getElementById("regions").innerHTML=regions.map((region,i)=>'<button type="button" class="region '+(i===0?"all selected":"")+'" data-region="'+i+'" aria-pressed="'+(i===0)+'">'+(i===0?'':'<span class="arrow" aria-hidden="true">'+icon("E96E")+'</span>')+'<span class="region-name">'+esc(region.name)+'</span><span class="count">'+esc(region.count)+'</span></button>').join("");

let selected=0, region=0, multi=false, selectedSites=new Set(), currentSite=null, cardTab="Страницы", cardPage=0;
let filters={template:"",company:"",verified:null,published:null}, draft={...filters}, filterOpen=false;
const rows=document.getElementById("rows"), stage=document.getElementById("stage");
const filterButton=document.querySelector('[aria-label="Фильтр"]');
const multiButton=document.querySelector('.toolbar [aria-label="Панель"]');
multiButton.setAttribute("aria-label","Множественный выбор");multiButton.title="Множественный выбор";
sites.forEach(site=>{site.published=!site.muted;site.settings={indexing:true,title:"Главная",description:"Разработка биллинговых систем для IT SaaS-сервисов.",access:"Без авторизации",domain:"s-billing.saby.ws",yandex:"7997d0c96385c573",google:"G8gPa3dRkLmNoPqRsTuVwXyZ1234567890AbCdEf",metrika:"25980874",vk:"5674532",gtm:"GTM-N842GS"}});
const iconHtml=(hex,size="icon")=>'<i aria-hidden="true" class="'+size+'">'+icon(hex)+'</i>';
function visibleSites(){
const query=document.getElementById("search").value.trim().toLocaleLowerCase("ru");
return sites.filter(site=>region<2&&[site.name,site.address,site.company,site.inn].join(" ").toLocaleLowerCase("ru").includes(query)&&(!filters.template||site.template===filters.template)&&(!filters.company||(site.company||"")===filters.company)&&(filters.verified===null||Boolean(site.verified)===filters.verified)&&(filters.published===null||site.published===filters.published));
}
function render(){
const visible=visibleSites();rows.setAttribute("aria-multiselectable",String(multi));stage.classList.toggle("multi-mode",multi);
let bar=document.getElementById("operations");if(!bar){bar=document.createElement("div");bar.id="operations";document.querySelector(".columns").before(bar);}
bar.hidden=!multi;
bar.innerHTML='<label class="mark-all"><input id="mark-all" type="checkbox" '+(visible.length&&visible.every(s=>selectedSites.has(s.id))?'checked':'')+'> <span>'+(selectedSites.size?'Отмечено '+selectedSites.size:'Отметить')+'</span></label><button data-operation="publish">'+iconHtml("E631")+'Опубликовать</button><button data-operation="unpublish">'+iconHtml("E62F")+'Снять с публикации</button><button class="operations-close" aria-label="Закрыть множественный выбор">'+iconHtml("E66C","icon24")+'</button>';
const all=document.getElementById("mark-all");all.indeterminate=visible.some(s=>selectedSites.has(s.id))&&!visible.every(s=>selectedSites.has(s.id));
rows.innerHTML=visible.map(site=>'<div class="site-row" role="option" tabindex="0" aria-selected="'+(multi?selectedSites.has(site.id):site.id===selected)+'" data-site="'+site.id+'"><span class="site-main"><label class="check"><input class="row-check" type="checkbox" aria-label="Выбрать '+esc(site.name)+'" '+(selectedSites.has(site.id)?'checked':'')+'></label><span class="site-text"><span class="site-line"><span class="site-name '+(!site.published?'muted':'')+'">'+esc(site.name)+'</span>'+(site.address?'<span class="address">'+esc(site.address)+'</span>':'')+'</span>'+(site.company?'<span class="company-line"><span class="company">'+esc(site.company)+'</span><span class="inn">'+esc(site.inn)+'</span></span>':'')+'</span></span><span class="site-status"><i class="icon" aria-label="'+(site.verified?'Проверено админом':'')+'">'+(site.verified?icon("EB4D"):'')+'</i></span><span class="metrics"><span>'+esc(site.date)+'</span><span>'+esc(site.visitors)+'</span><span>'+esc(site.responses)+'</span><span>'+esc(site.template)+'</span></span></div>').join("");
filterButton.classList.toggle("has-filters",Object.values(filters).some(v=>v!==""&&v!==null));multiButton.setAttribute("aria-pressed",String(multi));
}
function toggleSite(id){if(selectedSites.has(id))selectedSites.delete(id);else selectedSites.add(id);render()}
rows.addEventListener("click",event=>{
const row=event.target.closest("[data-site]");if(!row)return;const id=Number(row.dataset.site);
if(event.target.closest(".check")){event.preventDefault();multi=true;toggleSite(id);return}
if(multi){toggleSite(id);return}selected=id;render();openCard(id);
});
rows.addEventListener("keydown",event=>{if(event.target.matches("input"))return;if(event.key==="Enter"||event.key===" "){event.preventDefault();event.target.closest("[data-site]")?.click()}});
document.addEventListener("change",event=>{if(event.target.id==="mark-all"){for(const s of visibleSites()){if(event.target.checked)selectedSites.add(s.id);else selectedSites.delete(s.id)}render()}});
document.addEventListener("click",event=>{
if(event.target.closest(".operations-close")){multi=false;selectedSites.clear();render()}
const operation=event.target.closest("[data-operation]");if(operation&&selectedSites.size){for(const site of sites)if(selectedSites.has(site.id))site.published=operation.dataset.operation==="publish";selectedSites.clear();render()}
});
multiButton.addEventListener("click",()=>{multi=!multi;if(!multi)selectedSites.clear();render()});
document.getElementById("search").addEventListener("input",render);
document.getElementById("regions").addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;region=Number(button.dataset.region);document.querySelectorAll("[data-region]").forEach(node=>{const active=Number(node.dataset.region)===region;node.classList.toggle("selected",active);node.setAttribute("aria-pressed",String(active))});render()});
function closeFilter(){document.getElementById("filter-panel")?.remove();filterOpen=false;filterButton.setAttribute("aria-expanded","false")}
function drawFilter(){
let panel=document.getElementById("filter-panel");if(!panel){panel=document.createElement("section");panel.id="filter-panel";panel.setAttribute("role","dialog");panel.setAttribute("aria-label","Фильтр сайтов");stage.append(panel)}
const dirty=JSON.stringify(draft)!==JSON.stringify({template:"",company:"",verified:null,published:null});
const options=(values,selected,placeholder)=>'<option value="">'+placeholder+'</option>'+values.map(value=>'<option '+(value===selected?'selected':'')+' value="'+esc(value)+'">'+esc(value)+'</option>').join("");
panel.innerHTML='<div class="filter-title"><img src="assets/6d0b9.svg" width="14" height="14" alt=""><span>ФИЛЬТР</span><div class="filter-actions" '+(!dirty?'hidden':'')+'><button id="filter-reset">Сбросить</button><button id="filter-apply" aria-label="Применить фильтр">'+iconHtml("E75E")+'</button></div><button id="filter-close" aria-label="Закрыть фильтр"><img src="assets/cf100.svg" width="12" height="12" alt=""></button></div><div class="filter-fields"><label>Шаблон<span><select id="filter-template" aria-label="Шаблон">'+options([...new Set(sites.map(s=>s.template))],draft.template,"Выберите шаблон")+'</select><img src="assets/e1112.svg" width="16" height="16" alt=""></span></label><label>Организация<span><select id="filter-company" aria-label="Организация">'+options([...new Set(sites.map(s=>s.company).filter(Boolean))],draft.company,"Выберите организацию")+'</select><img src="assets/e1112.svg" width="16" height="16" alt=""></span></label></div><div class="filter-extra"><div>МОЖНО ОТОБРАТЬ</div><div class="filter-flags">'+[["verified","Проверенные"],["published","Опубликованные"]].map(([field,label])=>'<span><button data-flag="'+field+'" data-value="true" aria-pressed="'+(draft[field]===true)+'">'+label+'</button><b>•</b><button data-flag="'+field+'" data-value="false" aria-pressed="'+(draft[field]===false)+'">Нет</button></span>').join("")+'</div></div>';
}
filterButton.setAttribute("aria-haspopup","dialog");filterButton.addEventListener("click",()=>{if(filterOpen){closeFilter();return}draft={...filters};filterOpen=true;filterButton.setAttribute("aria-expanded","true");drawFilter()});
document.addEventListener("change",event=>{if(event.target.id==="filter-template"||event.target.id==="filter-company"){draft[event.target.id==="filter-template"?"template":"company"]=event.target.value;drawFilter()}});
document.addEventListener("click",event=>{
const wasInsideFilter=Boolean(event.target.closest("#filter-panel"));
if(event.target.closest("#filter-close"))closeFilter();
if(event.target.closest("#filter-reset")){draft={template:"",company:"",verified:null,published:null};filters={...draft};drawFilter();render()}
if(event.target.closest("#filter-apply")){filters={...draft};render();closeFilter()}
const flag=event.target.closest("[data-flag]");if(flag){const field=flag.dataset.flag,value=flag.dataset.value==="true";draft[field]=draft[field]===value?null:value;drawFilter()}
if(filterOpen&&!wasInsideFilter&&!event.target.closest('[aria-label="Фильтр"]'))closeFilter();
});
const pages=[["Всего","1 667 626"],["Главная","851 546"],["Цена","601 245"],["Контакты","575 893"]];
function openCard(id){closeFilter();currentSite=sites.find(s=>s.id===id);cardTab="Страницы";cardPage=0;drawCard();document.getElementById("card-close").focus()}
function closeCard(){document.getElementById("site-card")?.remove();currentSite=null;rows.querySelector('[data-site="'+selected+'"]')?.focus()}
function cardParameters(){
const settings=currentSite.settings;
if(cardPage)return '<div class="parameter-sheet"><h3>'+esc(pages[cardPage][0])+'</h3><label class="access">Доступ <select data-setting="access" aria-label="Доступ"><option '+(settings.access==="Без авторизации"?"selected":"")+'>Без авторизации</option><option '+(settings.access==="Только авторизованным"?"selected":"")+'>Только авторизованным</option></select></label>'+indexingSwitch(settings)+'<h3>SEO</h3><label class="stacked-field">Заголовок<input data-setting="title" value="'+esc(settings.title)+'"></label><label class="stacked-field">Описание<textarea data-setting="description">'+esc(settings.description)+'</textarea></label></div>';
return '<div class="parameter-sheet"><div class="domain-line"><input aria-label="Адрес сайта" data-setting="domain" value="'+esc(settings.domain)+'"><button class="muted-action">Сменить</button></div><label class="favicon-field">Иконка сайта (favicon)<img src="assets/cf5b2.png" width="28" height="28" alt="Иконка сайта"></label>'+indexingSwitch(settings)+'<label class="stacked-field">HTML-код<div class="code-preview"><code>&lt;<span>script type</span>=<em>\'text/javascript\'</em>&gt;<br>(<b>function</b>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>function</b> onload() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>var</b> s = document.createElement(<em>\'script\'</em>);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.type = <em>\'text/javascript\'</em>;</code></div></label><h3>Поисковая оптимизация</h3>'+[["Яндекс.Вебмастер","yandex"],["Google Search Console","google"]].map(([label,key])=>settingField(label,key,settings)).join("")+'<h3>Внешняя аналитика</h3>'+[["Яндекс.Метрика","metrika"],["VK Пиксель","vk"],["Google Tag Manager","gtm"]].map(([label,key])=>settingField(label,key,settings)).join("")+'</div>';
}
function settingField(label,key,settings){return '<label class="inline-field"><span>'+label+'</span><input data-setting="'+key+'" aria-label="'+label+'" value="'+esc(settings[key])+'"></label>'}
function indexingSwitch(settings){return '<label class="indexing">Поисковая индексация<button role="switch" aria-label="Поисковая индексация" aria-checked="'+settings.indexing+'" id="indexing-switch"><img src="assets/5759b.svg" width="24" height="16" alt=""></button></label>'}
function cardPreview(){return '<div class="card-link">s-billing.saby.ws</div><div class="site-preview" id="site-preview"><img src="assets/206b5.png" alt="Предпросмотр сайта: Разработка биллинговых систем для IT SaaS-сервисов"></div><div class="device-switch"><button aria-label="Компьютер" aria-pressed="true" data-device="desktop"><img src="assets/56aee.svg" width="16" height="16" alt=""></button><button aria-label="Телефон" aria-pressed="false" data-device="mobile"><img src="assets/7074e.svg" width="16" height="16" alt=""></button></div><div class="visit-chart"><strong>ТЫС</strong><div class="chart-body"><div class="y-axis"><span>15</span><span>10</span><span>5</span><span>0</span></div><div class="chart-grid"><div class="graph-slot"><img src="assets/51bde.svg" alt="Посещения за месяц"></div><div class="x-axis">'+Array.from({length:16},(_,i)=>'<span class="'+([7,13,21,27].includes(1+i*2)?'weekend':'')+'">'+(1+i*2)+'</span>').join("")+'</div></div></div></div><div class="card-statistics"><img src="assets/6342e.png" alt="Посетители: 781. test.saby.ru: 717; test-online.saby.ru: 85; test-sso.sbis.ru: 28. Отклики: 8. Продажи: 95 871, 18."></div>'}
function drawCard(){
let panel=document.getElementById("site-card");if(!panel){panel=document.createElement("section");panel.id="site-card";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label","Карточка сайта");stage.append(panel)}
panel.innerHTML='<div class="card-main"><div class="card-header"><div class="card-heading"><h2>'+esc(currentSite.name)+'</h2><button aria-label="Название сайта" class="rename">'+iconHtml("E660","icon24")+'</button><button class="appearance">Оформление'+iconHtml("E747","icon24")+'</button><span class="heading-spacer"></span><button class="card-chip">'+iconHtml("E978")+'Посетители 12</button><button class="card-chip">'+iconHtml("EB5E")+'Заказы</button></div><nav class="card-tabs" aria-label="Вкладки карточки">'+["Страницы","Параметры","Статистика","Источники","Посетители","Отклики"].map(name=>'<button '+(!["Страницы","Параметры"].includes(name)?'disabled':'')+' data-card-tab="'+name+'" aria-selected="'+(cardTab===name)+'">'+name+'</button>').join("")+'</nav></div><div class="card-body"><aside class="card-pages"><div class="visitor-summary"><label><input type="checkbox">Новые за период<span>886</span></label><label><input type="checkbox">Больше 1 визита<span>656</span></label></div><div class="page-count-label">Посетители</div>'+pages.map(([name,count],i)=>'<button class="card-page '+(cardPage===i?'selected':'')+'" data-card-page="'+i+'"><span>'+name+'</span><span>'+count+'</span></button>').join("")+'</aside><div class="card-content">'+(cardTab==="Параметры"?cardParameters():cardPreview())+'</div></div></div><aside class="card-tools"><div class="card-top-tools"><button id="card-close" aria-label="Закрыть карточку"><img src="assets/d52a1.svg" width="28" height="28" alt=""></button>'+[["E61B","Параметры"],["EB5E","Заказы"],["E6A7","Ссылка"],["EAB9","Просмотр"],["E62F","Снять с публикации"]].map(([hex,label])=>'<button aria-label="'+label+'" '+(label==="Параметры"?'data-card-tab="Параметры"':'')+'>'+iconHtml(hex,"icon24")+'</button>').join("")+'</div><div class="informers"><button class="date"><span>16</span><small>чт</small></button><button class="round icon"></button><button class="round icon"></button><button class="help"><img src="assets/56b4e.svg" width="12" height="16" alt="Помощь"></button></div></aside>';
const graph=panel.querySelector('.graph-slot');if(graph)graph.style.setProperty('--graph-scale',String(graph.clientWidth/515.828));
}
document.addEventListener("click",event=>{
if(event.target.closest("#card-close"))closeCard();
const tab=event.target.closest("[data-card-tab]");if(tab&&currentSite){cardTab=tab.dataset.cardTab;drawCard()}
const page=event.target.closest("[data-card-page]");if(page){cardPage=Number(page.dataset.cardPage);drawCard()}
if(event.target.closest("#indexing-switch")){currentSite.settings.indexing=!currentSite.settings.indexing;drawCard()}
const device=event.target.closest("[data-device]");if(device){document.querySelectorAll("[data-device]").forEach(btn=>btn.setAttribute("aria-pressed",String(btn===device)));document.getElementById("site-preview").classList.toggle("mobile",device.dataset.device==="mobile")}
});
document.addEventListener("input",event=>{if(currentSite&&event.target.dataset.setting)currentSite.settings[event.target.dataset.setting]=event.target.value});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){if(filterOpen)closeFilter();else if(currentSite)closeCard();else if(multi){multi=false;selectedSites.clear();render()}}});
function fit(){const scale=Math.min(innerWidth/1600,innerHeight/900);stage.style.transform="scale("+scale+")"}addEventListener("resize",fit);fit();render();

