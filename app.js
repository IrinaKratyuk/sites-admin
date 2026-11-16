"use strict";
const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const icon=hex=>String.fromCodePoint(parseInt(hex,16));
const nav=document.getElementById("navigation");
nav.innerHTML=navigation.map(item=>'<button type="button" class="nav-item '+(item.name==="Конструктор"?"group":item.name==="Сайты"?"current":"")+'" '+(item.name==="Сайты"?'aria-current="page"':'')+'><i aria-hidden="true" class="icon">'+icon(item.icon)+'</i><span class="caption">'+esc(item.name)+'</span></button>').join("");
// Для остальных разделов макеты пока не заданы; они остаются без переходов.
document.getElementById("regions").innerHTML=regions.map((region,i)=>'<button type="button" class="region '+(i===0?"all selected":"")+'" data-region="'+i+'" aria-pressed="'+(i===0)+'">'+(i===0?'':'<span class="arrow" aria-hidden="true">'+icon("E96E")+'</span>')+'<span class="region-name">'+esc(region.name)+'</span><span class="count">'+esc(region.count)+'</span></button>').join("");

let selected=0, region=0, multi=false, selectedSites=new Set(), currentSite=null, cardTab="Страницы", cardPage=0;
const emptyFilters=()=>({templates:[],company:"",verified:null,published:null});
const copyFilters=value=>({...value,templates:[...value.templates]});
let filters=emptyFilters(), draft=copyFilters(filters), filterOpen=false, templateDraft=null;
let sortField="order", sortDirection=1, selectedOnly=false;
const rows=document.getElementById("rows"), stage=document.getElementById("stage");
const registryDetail=document.querySelector(".detail");
function syncRegistryScroll(){registryDetail.classList.toggle("is-scrolled",registryDetail.scrollTop>0)}
registryDetail.addEventListener("scroll",syncRegistryScroll,{passive:true});
const filterButton=document.querySelector('[aria-label="Фильтр"]');
const multiButton=document.querySelector('.toolbar [aria-label="Панель"]');
multiButton.setAttribute("aria-label","Множественный выбор");multiButton.title="Множественный выбор";
sites.forEach(site=>{site.regionId ??= 1;site.published=!site.muted;site.settings={indexing:true,title:"Главная",description:"Разработка биллинговых систем для IT SaaS-сервисов.",access:"Без авторизации",domain:"s-billing.saby.ws",yandex:"7997d0c96385c573",google:"G8gPa3dRkLmNoPqRsTuVwXyZ1234567890AbCdEf",metrika:"25980874",vk:"5674532",gtm:"GTM-N842GS"}});
const iconHtml=(hex,size="icon")=>'<i aria-hidden="true" class="'+size+'">'+icon(hex)+'</i>';
function highlightMatch(value){
const text=String(value??""), query=document.getElementById("search").value.trim();
if(!query)return esc(text);
const lower=text.toLocaleLowerCase("ru"), needle=query.toLocaleLowerCase("ru");let result="",start=0,index;
while((index=lower.indexOf(needle,start))!==-1){result+=esc(text.slice(start,index))+'<mark>'+esc(text.slice(index,index+query.length))+'</mark>';start=index+query.length}
return result+esc(text.slice(start));
}
function visibleSites(){
const query=document.getElementById("search").value.trim().toLocaleLowerCase("ru");
const result=sites.filter(site=>(region===0||site.regionId===region)&&(!selectedOnly||selectedSites.has(site.id))&&[site.name,site.address,site.company,site.inn].join(" ").toLocaleLowerCase("ru").includes(query)&&(!filters.templates.length||filters.templates.includes(site.template))&&(!filters.company||(site.company||"")===filters.company)&&(filters.verified===null||Boolean(site.verified)===filters.verified)&&(filters.published===null||site.published===filters.published));
if(sortField!=="order")result.sort((a,b)=>sortValue(a,sortField)-sortValue(b,sortField)||a.id-b.id);
return sortField!=="order"&&sortDirection===-1?result.reverse():result;
}
function sortValue(site,field){
if(field!=="date")return Number(String(site[field]||0).replace(/\s/g,""))||0;
const months=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
const [day,month]=String(site.date||"").trim().split(/\s+/);
return site.date?(months.indexOf(month)+1)*32+Number(day):0;
}
function render(){
closeMarksMenu();
syncRegistryScroll();
document.getElementById("search-clear").hidden=!document.getElementById("search").value;
// Folder counters describe the full dataset, independently of search and filters.
const counts=sites.reduce((totals,site)=>{totals[site.regionId]=(totals[site.regionId]||0)+1;return totals},{});
document.querySelectorAll('[data-region]').forEach(button=>{const id=Number(button.dataset.region);button.querySelector('.count').textContent=String(id===0?sites.length:counts[id]||0)});
const visible=visibleSites();rows.setAttribute("aria-multiselectable",String(multi));stage.classList.toggle("multi-mode",multi);
let bar=document.getElementById("operations");if(!bar){bar=document.createElement("div");bar.id="operations";document.querySelector(".columns").before(bar);}
bar.hidden=!multi;
bar.innerHTML='<div class="mark-all"><input aria-label="Отметить все сайты" id="mark-all" type="checkbox" '+(visible.length&&visible.every(s=>selectedSites.has(s.id))?'checked':'')+'> <button id="marks-toggle" aria-haspopup="menu" aria-expanded="false">'+(selectedSites.size?'Отмечено '+selectedSites.size:'Отметить')+'</button></div><button data-operation="publish">'+iconHtml("E631")+'<span>Опубликовать</span></button><button data-operation="unpublish">'+iconHtml("E62F")+'<span>Снять с публикации</span></button><button class="operations-close" aria-label="Закрыть множественный выбор">'+iconHtml("E66C","icon24")+'</button>';
const all=document.getElementById("mark-all");all.indeterminate=visible.some(s=>selectedSites.has(s.id))&&!visible.every(s=>selectedSites.has(s.id));
rows.innerHTML=visible.map(site=>'<div class="site-row" role="option" tabindex="0" aria-selected="'+(multi?selectedSites.has(site.id):site.id===selected)+'" data-current="'+(site.id===selected)+'" data-site="'+site.id+'"><span class="site-main"><label class="check"><input class="row-check" type="checkbox" aria-label="Выбрать '+esc(site.name)+'" '+(selectedSites.has(site.id)?'checked':'')+'></label><span class="site-text"><span class="site-line"><span title="'+esc(site.name)+'" class="site-name '+(!site.published?'muted':'')+'">'+highlightMatch(site.name)+'</span>'+(site.address?'<span class="address">'+highlightMatch(site.address)+'</span>':'')+'</span>'+(site.company?'<span class="company-line"><span class="company">'+highlightMatch(site.company)+'</span><span class="inn">'+highlightMatch(site.inn)+'</span></span>':'')+'</span></span><span class="site-status"><i class="icon" aria-label="'+(site.verified?'Проверено дизайнером':'')+'">'+(site.verified?icon("EB4D"):'')+'</i></span><span class="metrics"><span>'+esc(site.date)+'</span><span>'+esc(site.visitors)+'</span><span>'+esc(site.responses)+'</span><span>'+esc(site.template)+'</span></span><span class="row-commands"><button data-row-action="publication" aria-label="'+(site.published?'Снять с публикации':'Опубликовать')+'" title="'+(site.published?'Снять с публикации':'Опубликовать')+'">'+iconHtml(site.published?'E62F':'E631')+'</button><button data-row-action="delete" aria-label="Удалить сайт" title="Удалить">'+iconHtml('E65C')+'</button></span></div>').join("");
document.querySelector('.detail').classList.toggle('empty-registry',!visible.length);
let empty=document.getElementById('empty-result');if(!empty){empty=document.createElement('div');empty.id='empty-result';empty.setAttribute('role','status');empty.innerHTML='<div>Не найдено ни одной записи</div><img src="assets/bf295.svg" width="200" height="200" alt="">';rows.after(empty)}empty.hidden=!!visible.length;
filterButton.classList.toggle("has-filters",(filters.templates.length||filters.company||filters.verified!==null||filters.published!==null));multiButton.setAttribute("aria-pressed",String(multi));multiButton.innerHTML=iconHtml("E644","icon24");
}

let pendingRegistryAction=null, confirmationOrigin=null, toastTimer;
function closeRegistryConfirmation(){document.getElementById("registry-confirmation")?.remove();pendingRegistryAction=null;confirmationOrigin?.focus();confirmationOrigin=null}
function confirmRegistryAction(action,ids,bulk=false){
if(pendingRegistryAction)return;
closeMarksMenu();closeSort();confirmationOrigin=document.activeElement;pendingRegistryAction={action,ids:[...ids],bulk};
const messages={publish:"Опубликовать сайт?",unpublish:"Снять сайт с публикации?",delete:"Уверены, что хотите удалить<br>сайт?"};
const overlay=document.createElement("div");overlay.id="registry-confirmation";
overlay.innerHTML='<section class="registry-confirm-box" role="alertdialog" aria-modal="true" aria-labelledby="registry-confirm-text"><span class="confirm-accent"></span><p id="registry-confirm-text">'+messages[action]+'</p><div class="confirm-actions"><button id="registry-confirm-yes">Да</button><button id="registry-confirm-no">Нет</button></div></section>';
stage.append(overlay);overlay.querySelector('#registry-confirm-no').focus({preventScroll:true});
}
document.addEventListener("click",event=>{
if(event.target.closest("#registry-confirm-no")){closeRegistryConfirmation();return}
if(!event.target.closest("#registry-confirm-yes")||!pendingRegistryAction)return;
const {action,ids,bulk}=pendingRegistryAction;closeRegistryConfirmation();
if(action==="delete"){for(let i=sites.length-1;i>=0;i--)if(ids.includes(sites[i].id)){selectedSites.delete(sites[i].id);sites.splice(i,1)}}
else for(const site of sites)if(ids.includes(site.id))site.published=action==="publish";
if(bulk){selectedSites.clear();selectedOnly=false}render();
});
document.addEventListener("keydown",event=>{
if(!pendingRegistryAction)return;
if(event.key==="Escape"){event.preventDefault();event.stopImmediatePropagation();closeRegistryConfirmation()}
if(event.key==="Tab"){event.preventDefault();document.getElementById(document.activeElement.id==="registry-confirm-no"?"registry-confirm-yes":"registry-confirm-no").focus()}
},true);
function closeMarksMenu(){document.getElementById("marks-menu")?.remove();document.getElementById("marks-toggle")?.setAttribute("aria-expanded","false")}
function openMarksMenu(){
if(document.getElementById("marks-menu")){closeMarksMenu();return}
closeSort();const menu=document.createElement("section");menu.id="marks-menu";menu.setAttribute("role","menu");menu.setAttribute("aria-label","Отметки сайтов");
menu.innerHTML='<div class="marks-title">ОТМЕЧЕНО '+selectedSites.size+'<button id="marks-close" aria-label="Закрыть меню отметок">'+iconHtml("E66C","icon24")+'</button></div>'+[["all","Отметить все"],["clear","Снять"],["invert","Инвертировать"],["only","Отобрать отмеченные"]].map(([value,label])=>'<button role="menuitem" data-marks="'+value+'">'+label+'</button>').join('');
const bounds=document.getElementById('operations').getBoundingClientRect(), origin=stage.getBoundingClientRect(), scale=origin.width/1600;
menu.style.left=(bounds.left-origin.left)/scale+'px';menu.style.top=(bounds.top-origin.top)/scale-4+'px';stage.append(menu);document.getElementById("marks-toggle").setAttribute("aria-expanded","true");
}
document.addEventListener("click",event=>{
if(event.target.closest('#marks-toggle')){openMarksMenu();return}
if(event.target.closest('#marks-close')){closeMarksMenu();return}
const command=event.target.closest('[data-marks]');
if(command){const action=command.dataset.marks;const visible=visibleSites();
if(action==="all")visible.forEach(site=>selectedSites.add(site.id));
if(action==="clear"){selectedSites.clear();selectedOnly=false}
if(action==="invert")visible.forEach(site=>{if(selectedSites.has(site.id))selectedSites.delete(site.id);else selectedSites.add(site.id)});
if(action==="only"){selectedOnly=true;registryDetail.scrollTop=0}render();return}
if(!event.target.closest('#marks-menu'))closeMarksMenu();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMarksMenu()});
function showCopiedToast(){
document.getElementById('registry-toast')?.remove();clearTimeout(toastTimer);
const toast=document.createElement('div');toast.id='registry-toast';toast.setAttribute('role','status');toast.innerHTML='<span class="copied-check">✓</span><span>Скопировано в буфер обмена</span><button aria-label="Закрыть уведомление">'+iconHtml('E66C','icon24')+'</button>';toast.querySelector('button').onclick=()=>toast.remove();stage.append(toast);toastTimer=setTimeout(()=>toast.remove(),4000);
}
document.querySelector('.toolbar [aria-label="Ссылка"]').addEventListener('click',async()=>{
try{await navigator.clipboard.writeText(location.href);showCopiedToast()}
catch{const field=document.createElement('textarea');field.value=location.href;field.style.position='fixed';field.style.opacity='0';stage.append(field);field.select();const copied=document.execCommand('copy');field.remove();if(copied)showCopiedToast()}
});

function toggleSite(id){if(selectedSites.has(id))selectedSites.delete(id);else selectedSites.add(id);render()}
rows.addEventListener("click",event=>{
const row=event.target.closest("[data-site]");if(!row)return;const id=Number(row.dataset.site);
const action=event.target.closest("[data-row-action]");
if(action){const site=sites.find(s=>s.id===id);confirmRegistryAction(action.dataset.rowAction==="delete"?"delete":site.published?"unpublish":"publish",[id]);return}
if(event.target.closest(".check"))return;
if(multi){selected=id;toggleSite(id);return}selected=id;render();openCard(id);
});
rows.addEventListener("keydown",event=>{if(event.target.closest("input,button"))return;if(event.key==="Enter"||event.key===" "){event.preventDefault();event.target.closest("[data-site]")?.click()}});
document.addEventListener("change",event=>{if(event.target.matches(".row-check")){multi=true;selected=Number(event.target.closest("[data-site]").dataset.site);toggleSite(selected);return}if(event.target.id==="mark-all"){for(const s of visibleSites()){if(event.target.checked)selectedSites.add(s.id);else selectedSites.delete(s.id)}render()}});
document.addEventListener("click",event=>{
if(event.target.closest(".operations-close")){multi=false;selectedOnly=false;selectedSites.clear();render()}
const operation=event.target.closest("[data-operation]");if(operation&&selectedSites.size)confirmRegistryAction(operation.dataset.operation,[...selectedSites],true)
});
multiButton.addEventListener("click",()=>{multi=!multi;if(!multi){selectedOnly=false;selectedSites.clear()}render()});
document.getElementById("search").addEventListener("input",()=>{registryDetail.scrollTop=0;render()});
document.getElementById("search-clear").addEventListener("click",()=>{const input=document.getElementById("search");input.value="";registryDetail.scrollTop=0;render();input.focus()});
document.getElementById("search-submit").addEventListener("click",()=>{render();document.getElementById("search").focus()});
document.getElementById("regions").addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;region=Number(button.dataset.region);document.querySelectorAll("[data-region]").forEach(node=>{const active=Number(node.dataset.region)===region;node.classList.toggle("selected",active);node.setAttribute("aria-pressed",String(active))});render()});

const sortButton=document.querySelector('.toolbar [aria-label="Настроить"]');
sortButton.setAttribute("aria-label","Сортировать");sortButton.title="Сортировать";sortButton.setAttribute("aria-haspopup","menu");sortButton.setAttribute("aria-expanded","false");
function closeSort(){document.getElementById("sort-menu")?.remove();sortButton.setAttribute("aria-expanded","false")}
function drawSort(){
let menu=document.getElementById("sort-menu");if(!menu){menu=document.createElement("section");menu.id="sort-menu";menu.setAttribute("role","menu");menu.setAttribute("aria-label","Сортировать");stage.append(menu)}
menu.innerHTML='<div class="sort-title">СОРТИРОВАТЬ<button aria-label="Закрыть сортировку" id="sort-close">'+iconHtml("E66C","icon24")+'</button></div>'+[["order","По порядку","EB66"],["visitors","По посещаемости","E632"],["responses","По количеству откликов","EA66"],["date","По дате посещения","E6C4"]].map(([field,label,glyph])=>'<div class="sort-option"><button role="menuitemradio" aria-checked="'+(sortField===field)+'" data-sort="'+field+'"><span class="sort-dot" aria-hidden="true"></span>'+iconHtml(glyph)+'<span>'+label+'</span></button>'+(field!=="order"?'<button class="sort-direction" data-direction="'+field+'" aria-label="'+label+': '+(sortField===field&&sortDirection===-1?'по убыванию':'по возрастанию')+'">'+(sortField===field&&sortDirection===-1?'↓':'↑')+'</button>':'')+'</div>').join('');
sortButton.setAttribute("aria-expanded","true");
}
sortButton.addEventListener("click",()=>{if(document.getElementById("sort-menu"))closeSort();else{closeFilter();drawSort()}});
document.addEventListener("click",event=>{
if(event.target.closest("#sort-close")){closeSort();return}
const direction=event.target.closest("[data-direction]");const option=event.target.closest("[data-sort]");
if(direction){const field=direction.dataset.direction;sortDirection=sortField===field?-sortDirection:-1;sortField=field;render();drawSort();return}
if(option){sortField=option.dataset.sort;sortDirection=1;render();closeSort();return}
if(!event.target.closest('#sort-menu, [aria-label="Сортировать"]'))closeSort();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeSort()});

function closeFilter(){closeTemplates();draft=copyFilters(filters);document.getElementById("filter-panel")?.remove();filterOpen=false;filterButton.setAttribute("aria-expanded","false")}
function drawFilter(){
let panel=document.getElementById("filter-panel");if(!panel){panel=document.createElement("section");panel.id="filter-panel";panel.setAttribute("role","dialog");panel.setAttribute("aria-label","Фильтр сайтов");stage.append(panel)}
const dirty=JSON.stringify(draft)!==JSON.stringify(emptyFilters())||JSON.stringify(draft)!==JSON.stringify(filters);
const options=(values,selected,placeholder)=>'<option value="">'+placeholder+'</option>'+values.map(value=>'<option '+(value===selected?'selected':'')+' value="'+esc(value)+'">'+esc(value)+'</option>').join("");
panel.innerHTML='<div class="filter-title"><img src="assets/6d0b9.svg" width="14" height="14" alt=""><span>ФИЛЬТР</span><div class="filter-actions" '+(!dirty?'hidden':'')+'><button id="filter-reset">Сбросить</button><button id="filter-apply" aria-label="Применить фильтр">'+iconHtml("E75E")+'</button></div><button id="filter-close" aria-label="Закрыть фильтр"><img src="assets/cf100.svg" width="12" height="12" alt=""></button></div><div class="filter-fields"><label>Шаблон<span><button id="filter-template" aria-label="Выбрать шаблоны" class="'+(draft.templates.length?'filled':'')+'">'+esc(draft.templates.join(', ')||'Выберите шаблон')+'</button>'+(draft.templates.length?'<button id="filter-template-clear" aria-label="Очистить шаблоны">'+iconHtml('E66C')+'</button>':'')+'<img src="assets/filter-picker.svg" width="16" height="16" alt=""></span></label><label>Организация<span><select id="filter-company" aria-label="Организация">'+options([...new Set(sites.map(s=>s.company).filter(Boolean))],draft.company,"Выберите организацию")+'</select><img src="assets/filter-picker.svg" width="16" height="16" alt=""></span></label></div><div class="filter-extra"><div>МОЖНО ОТОБРАТЬ</div><div class="filter-flags">'+[["verified","Проверенные"],["published","Опубликованные"]].map(([field,label])=>'<span><button data-flag="'+field+'" data-value="true" aria-pressed="'+(draft[field]===true)+'">'+label+'</button><b>•</b><button data-flag="'+field+'" data-value="false" aria-pressed="'+(draft[field]===false)+'">Нет</button></span>').join("")+'</div></div>';
}
filterButton.setAttribute("aria-haspopup","dialog");filterButton.addEventListener("click",()=>{if(filterOpen){closeFilter();return}draft=copyFilters(filters);filterOpen=true;filterButton.setAttribute("aria-expanded","true");drawFilter()});
document.addEventListener("change",event=>{if(event.target.id==="filter-company"){draft.company=event.target.value;drawFilter()}});
document.addEventListener("click",event=>{
const wasInsideFilter=Boolean(event.target.closest("#filter-panel, #template-panel"));
if(event.target.closest("#filter-template-clear")){draft.templates=[];drawFilter();return}
if(event.target.closest("#filter-template")){openTemplates();return}
if(event.target.closest("#filter-close"))closeFilter();
if(event.target.closest("#filter-reset")){draft=emptyFilters();drawFilter()}
if(event.target.closest("#filter-apply")){filters=copyFilters(draft);render();closeFilter()}
const flag=event.target.closest("[data-flag]");if(flag){const field=flag.dataset.flag,value=flag.dataset.value==="true";draft[field]=draft[field]===value?null:value;drawFilter()}
if(filterOpen&&!wasInsideFilter&&!event.target.closest('[aria-label="Фильтр"]'))closeFilter();
});
const templateCatalog=[{name:"Доставка из ресторана",image:"7182c.png",color:"#d9dbc7"},{name:"Отель",image:"60285.png",color:"#eae1d7"},{name:"Услуги",image:"787d1.png",color:"#f7e2c5"}];
function closeTemplates(){document.getElementById('template-panel')?.remove();templateDraft=null;document.getElementById('filter-panel')?.removeAttribute('hidden')}
function openTemplates(){
templateDraft=[...draft.templates];document.getElementById('filter-panel').hidden=true;
const panel=document.createElement('section');panel.id='template-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Выбор шаблонов');
panel.innerHTML='<div class="template-main"><div class="template-header"><h2>Шаблон</h2><input id="template-search" type="search" placeholder="Найти" aria-label="Найти шаблон"><button id="template-save" aria-label="Сохранить выбор шаблонов">'+iconHtml('E75E','icon24')+'</button></div><div id="template-selection" hidden><input id="template-all" type="checkbox" aria-label="Выбрать все шаблоны"><span></span><button id="template-clear" aria-label="Снять выделение шаблонов">'+iconHtml('E66C')+'</button></div><div class="template-grid">'+templateCatalog.map(t=>'<label class="template-tile" style="background:'+t.color+';--template-bg:'+t.color+'" data-template-name="'+esc(t.name)+'"><strong>'+esc(t.name)+'</strong><div class="template-image"><img src="assets/'+t.image+'" alt=""></div><input type="checkbox" data-template="'+esc(t.name)+'" aria-label="'+esc(t.name)+'"></label>').join('')+'</div></div><aside class="template-tools"><button id="template-close" aria-label="Закрыть выбор шаблонов"><img src="assets/cf100.svg" width="12" height="12" alt=""></button><button id="template-multi" aria-label="Множественный выбор шаблонов">'+iconHtml('E644','icon24')+'</button><div class="template-informers">'+document.querySelector('.informers').innerHTML+'</div></aside>';
stage.append(panel);syncTemplates();
panel.querySelector('#template-search').addEventListener('input',event=>{const query=event.target.value.trim().toLocaleLowerCase('ru');panel.querySelectorAll('[data-template-name]').forEach(tile=>tile.hidden=!tile.dataset.templateName.toLocaleLowerCase('ru').includes(query))});
panel.addEventListener('change',event=>{if(event.target.matches('[data-template]')){const value=event.target.dataset.template;templateDraft=event.target.checked?[...new Set([...templateDraft,value])]:templateDraft.filter(t=>t!==value)}if(event.target.id==='template-all')templateDraft=event.target.checked?templateCatalog.map(t=>t.name):[];syncTemplates()});
panel.addEventListener('click',event=>{event.stopPropagation();if(event.target.closest('#template-save')){draft.templates=[...templateDraft];closeTemplates();drawFilter()}else if(event.target.closest('#template-close'))closeTemplates();else if(event.target.closest('#template-clear')){templateDraft=[];syncTemplates()}else if(event.target.closest('#template-multi')){panel.querySelector('#template-selection').hidden=false}});
}
function syncTemplates(){const panel=document.getElementById('template-panel');panel.querySelectorAll('[data-template]').forEach(input=>input.checked=templateDraft.includes(input.dataset.template));const bar=panel.querySelector('#template-selection');bar.hidden=!templateDraft.length;bar.querySelector('span').textContent='Отмечено '+templateDraft.length;const all=panel.querySelector('#template-all');all.checked=templateCatalog.every(t=>templateDraft.includes(t.name));all.indeterminate=templateDraft.length>0&&!all.checked}
const pages=[["Всего","1 667 626"],["Главная","851 546"],["Цена","601 245"],["Контакты","575 893"]];
function cardPages(){
return currentSite.analytics?[["Всего",currentSite.visitors],...currentSite.analytics.pages.map(page=>[page.name,page.visitors])]:pages;
}
function visitorChart(){
const values=currentSite.analytics.dailyVisitors,max=Math.max(3,...values),top=Math.ceil(max/3)*3;
const points=values.map((value,index)=>(index*600/(values.length-1)).toFixed(2)+","+(160-value/top*160).toFixed(2)).join(" ");
return '<div class="visit-chart"><strong>ПОСЕТИТЕЛИ</strong><div class="chart-body"><div class="y-axis">'+[top,top*2/3,top/3,0].map(value=>'<span>'+value+'</span>').join('')+'</div><div class="chart-grid"><div class="graph-slot"><svg class="visitor-graph" viewBox="0 0 600 160" preserveAspectRatio="none" role="img" aria-label="Посетители за месяц: '+esc(currentSite.visitors)+'"><polygon points="0,160 '+points+' 600,160" fill="#dceafa"/><polyline points="'+points+'" fill="none" stroke="#8ab6e3" stroke-width="2" vector-effect="non-scaling-stroke"/></svg></div><div class="x-axis">'+Array.from({length:16},(_,i)=>'<span>'+ (1+i*2)+'</span>').join('')+'</div></div></div></div>';
}
function openCard(id){closeFilter();currentSite=sites.find(s=>s.id===id);cardTab="Страницы";cardPage=0;drawCard();document.getElementById("card-close").focus()}
function closeCard(){document.getElementById("site-card")?.remove();currentSite=null;rows.querySelector('[data-site="'+selected+'"]')?.focus()}
function cardParameters(){
const settings=currentSite.settings;
if(cardPage)return '<div class="parameter-sheet"><h3>'+esc(cardPages()[cardPage][0])+'</h3><label class="access">Доступ <select data-setting="access" aria-label="Доступ"><option '+(settings.access==="Без авторизации"?"selected":"")+'>Без авторизации</option><option '+(settings.access==="Только авторизованным"?"selected":"")+'>Только авторизованным</option></select></label>'+indexingSwitch(settings)+'<h3>SEO</h3><label class="stacked-field">Заголовок<input data-setting="title" value="'+esc(settings.title)+'"></label><label class="stacked-field">Описание<textarea data-setting="description">'+esc(settings.description)+'</textarea></label></div>';
return '<div class="parameter-sheet"><div class="domain-line"><input aria-label="Адрес сайта" data-setting="domain" value="'+esc(settings.domain)+'"><button class="muted-action">Сменить</button></div><label class="favicon-field">Иконка сайта (favicon)<img src="assets/cf5b2.png" width="28" height="28" alt="Иконка сайта"></label>'+indexingSwitch(settings)+'<label class="stacked-field">HTML-код<div class="code-preview"><code>&lt;<span>script type</span>=<em>\'text/javascript\'</em>&gt;<br>(<b>function</b>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>function</b> onload() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>var</b> s = document.createElement(<em>\'script\'</em>);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.type = <em>\'text/javascript\'</em>;</code></div></label><h3>Поисковая оптимизация</h3>'+[["Яндекс.Вебмастер","yandex"],["Google Search Console","google"]].map(([label,key])=>settingField(label,key,settings)).join("")+'<h3>Внешняя аналитика</h3>'+[["Яндекс.Метрика","metrika"],["VK Пиксель","vk"],["Google Tag Manager","gtm"]].map(([label,key])=>settingField(label,key,settings)).join("")+'</div>';
}
function settingField(label,key,settings){return '<label class="inline-field"><span>'+label+'</span><input data-setting="'+key+'" aria-label="'+label+'" value="'+esc(settings[key])+'"></label>'}
function indexingSwitch(settings){return '<label class="indexing">Поисковая индексация<button role="switch" aria-label="Поисковая индексация" aria-checked="'+settings.indexing+'" id="indexing-switch"><img src="assets/5759b.svg" width="24" height="16" alt=""></button></label>'}
function cardPreview(){return '<div class="card-link">s-billing.saby.ws</div><div class="site-preview" id="site-preview"><img src="assets/206b5.png" alt="Предпросмотр сайта: Разработка биллинговых систем для IT SaaS-сервисов"></div><div class="device-switch"><button aria-label="Компьютер" aria-pressed="true" data-device="desktop"><img src="assets/56aee.svg" width="16" height="16" alt=""></button><button aria-label="Телефон" aria-pressed="false" data-device="mobile"><img src="assets/7074e.svg" width="16" height="16" alt=""></button></div>'+(currentSite.analytics?visitorChart():'<div class="visit-chart"><strong>ТЫС</strong><div class="chart-body"><div class="y-axis"><span>15</span><span>10</span><span>5</span><span>0</span></div><div class="chart-grid"><div class="graph-slot"><img src="assets/51bde.svg" alt="Посещения за месяц"></div><div class="x-axis">'+Array.from({length:16},(_,i)=>'<span class="'+([7,13,21,27].includes(1+i*2)?'weekend':'')+'">'+(1+i*2)+'</span>').join("")+'</div></div></div></div>')+(currentSite.id===2?'<div class="card-statistics live-statistics"><div><span>Посетители</span><strong>'+esc(currentSite.visitors)+'</strong></div><div><span>Отклики</span><strong>'+esc(currentSite.responses||'—')+'</strong></div><div><span>Продажи</span><strong>—</strong></div></div>':'<div class="card-statistics"><img src="assets/6342e.png" alt="Посетители: 781. test.saby.ru: 717; test-online.saby.ru: 85; test-sso.sbis.ru: 28. Отклики: 8. Продажи: 95 871, 18."></div>')}
function designerVerification(){
if(currentSite.id!==2)return "";
return '<button id="designer-verification" class="verification-icon '+(currentSite.verified?'is-verified':'')+'" aria-label="Проверка дизайнером: '+(currentSite.verified?'Проверено':'Не проверено')+'" aria-haspopup="menu" aria-expanded="false">'+iconHtml("EB4D")+'</button>';
}
function toggleVerificationMenu(){
const existing=document.getElementById("verification-menu");
if(existing){existing.remove();document.getElementById("designer-verification")?.setAttribute("aria-expanded","false");return}
const menu=document.createElement("div");menu.id="verification-menu";menu.setAttribute("role","menu");menu.setAttribute("aria-label","Проверка дизайнером");
menu.innerHTML='<button class="verification-dismiss" aria-label="Закрыть меню проверки">'+iconHtml("E66C","icon24")+'</button>'+[true,false].map(value=>'<button role="menuitemradio" aria-checked="'+(Boolean(currentSite.verified)===value)+'" data-verification="'+value+'"><span class="verification-icon '+(value?'is-verified':'')+'">'+iconHtml("EB4D")+'</span>'+(value?'Проверено':'Не проверено')+'</button>').join("");
document.getElementById("site-card").append(menu);document.getElementById("designer-verification").setAttribute("aria-expanded","true");menu.querySelector('[data-verification]').focus();
}
function drawCard(){
let panel=document.getElementById("site-card");if(!panel){panel=document.createElement("section");panel.id="site-card";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label","Карточка сайта");stage.append(panel)}
panel.innerHTML='<div class="card-main"><div class="card-header"><div class="card-heading"><h2>'+esc(currentSite.name)+'</h2><button aria-label="Название сайта" class="rename">'+iconHtml("E660","icon24")+'</button><button class="appearance">Оформление'+iconHtml("E747","icon24")+'</button><span class="heading-spacer"></span></div><nav class="card-tabs" aria-label="Вкладки карточки">'+["Страницы","Параметры","Статистика","Источники","Посетители","Отклики"].map(name=>'<button '+(!["Страницы","Параметры"].includes(name)?'disabled':'')+' data-card-tab="'+name+'" aria-selected="'+(cardTab===name)+'">'+name+'</button>').join("")+'</nav></div><div class="card-body"><aside class="card-pages"><div class="visitor-summary"><label><input type="checkbox">Новые за период<span>'+esc(currentSite.analytics?.newVisitors??886)+'</span></label><label><input type="checkbox">Больше 1 визита<span>'+esc(currentSite.analytics?.repeatVisitors??656)+'</span></label></div><div class="page-count-label">Посетители</div>'+cardPages().map(([name,count],i)=>'<button class="card-page '+(cardPage===i?'selected':'')+'" data-card-page="'+i+'"><span>'+name+'</span><span>'+count+'</span></button>').join("")+'</aside><div class="card-content">'+(cardTab==="Параметры"?cardParameters():cardPreview())+'</div></div></div><aside class="card-tools"><div class="card-top-tools"><button id="card-close" aria-label="Закрыть карточку"><img src="assets/d52a1.svg" width="28" height="28" alt=""></button>'+designerVerification()+[["E61B","Параметры"],["EB5E","Заказы"],["E6A7","Ссылка"],["EAB9","Просмотр"],[currentSite.published?"E62F":"E631",currentSite.published?"Снять с публикации":"Опубликовать"]].map(([hex,label])=>'<button aria-label="'+label+'" '+(label==="Параметры"?'data-card-tab="Параметры"':'')+'>'+iconHtml(hex,"icon24")+'</button>').join("")+'</div><div class="informers"><button class="date"><span>16</span><small>чт</small></button><button class="round icon"></button><button class="round icon"></button><button class="help"><img src="assets/56b4e.svg" width="12" height="16" alt="Помощь"></button></div></aside>';
const graph=panel.querySelector('.graph-slot');if(graph)graph.style.setProperty('--graph-scale',String(graph.clientWidth/515.828));
}
document.addEventListener("click",event=>{
if(event.target.closest("#designer-verification")){toggleVerificationMenu();return}
const verification=event.target.closest("[data-verification]");
if(verification&&currentSite?.id===2){currentSite.verified=verification.dataset.verification==="true";render();drawCard();document.getElementById("designer-verification").focus();return}
if(event.target.closest(".verification-dismiss")){toggleVerificationMenu();document.getElementById("designer-verification").focus();return}
if(document.getElementById("verification-menu")&&!event.target.closest("#verification-menu"))toggleVerificationMenu();
if(event.target.closest("#card-close"))closeCard();
const tab=event.target.closest("[data-card-tab]");if(tab&&currentSite){cardTab=tab.dataset.cardTab;drawCard()}
const page=event.target.closest("[data-card-page]");if(page){cardPage=Number(page.dataset.cardPage);drawCard()}
if(event.target.closest("#indexing-switch")){currentSite.settings.indexing=!currentSite.settings.indexing;drawCard()}
const device=event.target.closest("[data-device]");if(device){document.querySelectorAll("[data-device]").forEach(btn=>btn.setAttribute("aria-pressed",String(btn===device)));document.getElementById("site-preview").classList.toggle("mobile",device.dataset.device==="mobile")}
});
document.addEventListener("input",event=>{if(currentSite&&event.target.dataset.setting)currentSite.settings[event.target.dataset.setting]=event.target.value});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){if(document.getElementById("verification-menu")){toggleVerificationMenu();document.getElementById("designer-verification").focus()}else if(templateDraft!==null)closeTemplates();else if(filterOpen)closeFilter();else if(currentSite)closeCard();else if(multi){multi=false;selectedOnly=false;selectedSites.clear();render()}}});
function fit(){const scale=Math.min(innerWidth/1600,innerHeight/900);stage.style.transform="none";stage.style.zoom=String(scale)}addEventListener("resize",fit);fit();render();

