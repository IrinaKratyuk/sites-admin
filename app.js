"use strict";
const esc=value=>String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
const icon=hex=>String.fromCodePoint(parseInt(hex,16));
const nav=document.getElementById("navigation");
let registrySection='constructor';
const sectionMenus={constructor:['Сайты','Виджеты','Секции','Палитры','Шрифты','Шаблоны'],showcase:['Сайты','Заказы','Сертификаты','Бонусы']};
function drawNavigation(){
nav.innerHTML=navigation.map(item=>{
const section=item.name==='Конструктор'?'constructor':item.name==='Витрина'?'showcase':null,active=section===registrySection;
return '<button type="button" class="nav-item '+(active?'group':'')+'" '+(section?'data-section-menu="'+section+'" aria-haspopup="menu" aria-expanded="false"':'')+'><i aria-hidden="true" class="icon">'+icon(item.icon)+'</i><span class="caption">'+esc(item.name)+'</span>'+(section&&!active?'<span class="navigation-click-pin" aria-hidden="true"><img src="assets/navigation-click-pin.svg" width="15" height="15" alt=""></span>':'')+'</button>'+(active?'<button type="button" class="nav-item current" data-section-sites="'+section+'" aria-current="page"><span class="caption">Сайты</span></button>':'');
}).join('');
requestAnimationFrame(updateNavigationFade);
}
function updateNavigationFade(){
nav.querySelectorAll('.caption').forEach(caption=>caption.classList.toggle('is-overflowing',caption.scrollWidth>caption.clientWidth));
}
new ResizeObserver(updateNavigationFade).observe(nav);
function closeNavigationMenu(){document.getElementById('section-menu')?.remove();nav.querySelectorAll('[aria-expanded]').forEach(button=>button.setAttribute('aria-expanded','false'))}
function openNavigationMenu(section,origin){
const same=document.getElementById('section-menu')?.dataset.section===section;closeNavigationMenu();if(same)return;
const title=section==='constructor'?'Конструктор':'Витрина',item=navigation.find(item=>item.name===title);
const menu=createNavigationMenu({title,icon:item.icon,items:sectionMenus[section].map(label=>({id:label,label,disabled:label!=='Сайты'})),activeItem:section===registrySection?'Сайты':null,onSelect:()=>switchRegistry(section),onClose:()=>{closeNavigationMenu();origin.focus()}});
menu.id='section-menu';menu.dataset.section=section;
if(section!==registrySection){const sites=menu.querySelector('[data-menu-item="Сайты"]');if(sites)sites.insertAdjacentHTML('beforeend','<span class="navigation-click-pin" aria-hidden="true"><img src="assets/navigation-click-pin.svg" width="15" height="15" alt=""></span>')}
stage.append(menu);const rect=origin.getBoundingClientRect(),bounds=stage.getBoundingClientRect();menu.style.top=Math.max(0,Math.min(rect.top-bounds.top-5,stage.clientHeight-menu.offsetHeight))+'px';origin.setAttribute('aria-expanded','true');
}
function switchRegistry(section){
closeNavigationMenu();if(section===registrySection)return;
closeFilter();closeSort();closeCard();closeShowcaseCard();registrySection=section;stage.classList.toggle('showcase-mode',section==='showcase');
document.querySelectorAll('main>header .add, main>header .tool, .toolbar .top-tools>.tool').forEach(button=>button.disabled=section==='showcase');
const input=document.getElementById('search');input.readOnly=false;input.closest('.search-control').hidden=false;input.value='';
drawNavigation();registryDetail.scrollTop=0;render();
}
document.addEventListener('click',event=>{
const link=event.target.closest('[data-section-sites]');if(link){switchRegistry(link.dataset.sectionSites);return}
const origin=event.target.closest('[data-section-menu]');if(origin){openNavigationMenu(origin.dataset.sectionMenu,origin);return}
if(event.target.closest('.section-menu-close')||!event.target.closest('#section-menu'))closeNavigationMenu();
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('section-menu')){event.stopImmediatePropagation();closeNavigationMenu()}});
drawNavigation();
document.getElementById("regions").innerHTML=regions.map((region,i)=>'<button type="button" class="region '+(i===0?"all selected":"")+'" data-region="'+i+'" aria-pressed="'+(i===0)+'">'+(i===0?'':'<span class="arrow" aria-hidden="true">'+icon("E96E")+'</span>')+'<span class="region-name">'+esc(region.name)+'</span><span class="count">'+esc(region.count)+'</span></button>').join("");

let selected=0, region=0, multi=false, selectedSites=new Set(), currentSite=null, cardTab="Страницы", cardPage=0;
const emptyFilters=()=>({templates:[],companies:[],verified:null,published:null});
const copyFilters=value=>({...value,templates:[...value.templates],companies:[...value.companies]});
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
function highlightMatch(value, query=document.getElementById("search").value.trim()){
const text=String(value??"");
if(!query)return esc(text);
const lower=text.toLocaleLowerCase("ru"), needle=query.toLocaleLowerCase("ru");let result="",start=0,index;
while((index=lower.indexOf(needle,start))!==-1){result+=esc(text.slice(start,index))+'<mark>'+esc(text.slice(index,index+query.length))+'</mark>';start=index+query.length}
return result+esc(text.slice(start));
}
function visibleSites(){
const query=document.getElementById("search").value.trim().toLocaleLowerCase("ru");
const result=sites.filter(site=>(region===0||site.regionId===region)&&(!selectedOnly||selectedSites.has(site.id))&&[site.name,site.address,site.company,site.inn].join(" ").toLocaleLowerCase("ru").includes(query)&&(!filters.templates.length||filters.templates.includes(site.template))&&(!filters.companies.length||filters.companies.includes(site.company||""))&&(filters.verified===null||Boolean(site.verified)===filters.verified)&&(filters.published===null||site.published===filters.published));
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
if(registrySection==='showcase'){renderShowcase();return}
document.querySelector('.columns').innerHTML='<span>Последний визит</span><span>Посетители</span><span>Отклики</span><span>Шаблон</span>';
document.getElementById('showcase-search-placeholder')?.remove();
document.querySelectorAll('[data-region]').forEach(button=>{button.disabled=false;const active=Number(button.dataset.region)===region;button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active))});
closeMarksMenu();
syncRegistryScroll();
syncSearchField(document.getElementById("search"));
// Folder counters describe the full dataset, independently of search and filters.
rows.setAttribute("aria-label","Список сайтов");
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
drawFilterChips();multiButton.setAttribute("aria-pressed",String(multi));multiButton.innerHTML=iconHtml("E644","icon24");
}

function drawFilterChips(){
let chips=document.getElementById('filter-chips');if(!chips){chips=document.createElement('div');chips.id='filter-chips';chips.setAttribute('aria-label','Применённые фильтры');filterButton.before(chips)}
const entries=[...filters.templates.map(value=>({field:'templates',value,label:value})),...filters.companies.map(value=>({field:'companies',value,label:value})),...['verified','published'].filter(field=>filters[field]!==null).map(field=>({field,label:field==='verified'?(filters[field]?'Проверенные':'Непроверенные'):(filters[field]?'Опубликованные':'Неопубликованные')}))];
chips.innerHTML=entries.map(({field,value,label})=>'<div class="filter-chip"><button class="filter-chip-label" data-edit-filter title="'+esc(label)+'">'+esc(label)+'</button><button class="filter-chip-clear" data-remove-filter="'+field+'" '+(value!==undefined?'data-value="'+esc(value)+'"':'')+' aria-label="Убрать фильтр '+esc(label)+'">'+iconHtml('E66C')+'</button></div>').join('');
}
document.addEventListener('click',event=>{
const remove=event.target.closest('[data-remove-filter]');if(remove){const field=remove.dataset.removeFilter;if(Array.isArray(filters[field]))filters[field]=filters[field].filter(value=>value!==remove.dataset.value);else filters[field]=null;render();if(filterOpen){draft=copyFilters(filters);drawFilter()}return}
if(event.target.closest('[data-edit-filter]')&&!filterOpen)filterButton.click();
});

function renderShowcase(){
closeMarksMenu();stage.classList.remove('multi-mode');document.getElementById('operations')?.setAttribute('hidden','');document.getElementById('empty-result')?.setAttribute('hidden','');registryDetail.classList.remove('empty-registry');
document.querySelector('.columns').innerHTML='<span>Посетители</span><span>Заказы</span>';
const counts=showcaseSites.reduce((all,site)=>(all[site.regionId]=(all[site.regionId]||0)+1,all),{});
document.querySelectorAll('[data-region]').forEach(button=>{const id=Number(button.dataset.region);button.disabled=true;button.classList.toggle('selected',id===0);button.setAttribute('aria-pressed',String(id===0));button.querySelector('.count').textContent=String(id===0?showcaseSites.length:counts[id]||0)});
rows.setAttribute('aria-label','Сайты витрины');rows.setAttribute('aria-multiselectable','false');
const query=document.getElementById('search').value.trim().toLocaleLowerCase('ru');
rows.innerHTML=showcaseSites.filter(site=>[site.name,site.address,site.company,site.inn].join(' ').toLocaleLowerCase('ru').includes(query)).map(site=>'<div class="showcase-row" role="option" tabindex="0" data-showcase-site="'+site.id+'" aria-selected="false"><div class="showcase-site"><div class="site-line"><span class="site-name '+(site.published===false?'muted':'')+'">'+highlightMatch(site.name)+'</span><span class="address">'+highlightMatch(site.address)+'</span></div>'+(site.company?'<div class="company-line"><span class="company">'+highlightMatch(site.company)+'</span><span class="inn">'+esc(site.inn)+'</span></div>':'')+'</div><span class="showcase-type">'+iconHtml(site.kind.includes('shop')?'E9C1':'E984','showcase-accordion-icon')+'</span><span class="showcase-status '+(site.kind.startsWith('muted')?'is-muted':'')+'">'+(site.kind.startsWith('verified')?iconHtml('EB4D'):iconHtml('E9BC','icon24'))+'</span><span class="showcase-network"'+(site.network?' aria-label="Сетевое заведение" title="Сетевое заведение"':'')+'>'+(site.network?iconHtml('E92B','icon24'):'')+'</span><span class="showcase-date">'+esc(site.date)+'</span><span class="showcase-visitors">'+esc(site.visitors)+'</span><span class="showcase-orders">'+esc(site.orders)+'</span><span class="showcase-category">'+esc(site.category)+'</span></div>').join('');
document.getElementById('showcase-search-placeholder')?.remove();syncSearchField(document.getElementById('search'));
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
if(currentSite&&ids.includes(currentSite.id)){if(action==="delete"){closeCard();return}drawCard();document.querySelector('.card-top-tools [aria-label="'+(currentSite.published?"Снять с публикации":"Опубликовать")+'"]')?.focus()}
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
const bounds=document.getElementById('operations').getBoundingClientRect(), origin=stage.getBoundingClientRect(), scale=origin.width/stage.offsetWidth;
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


document.getElementById("regions").addEventListener("click",event=>{const button=event.target.closest("[data-region]");if(!button)return;region=Number(button.dataset.region);document.querySelectorAll("[data-region]").forEach(node=>{const active=Number(node.dataset.region)===region;node.classList.toggle("selected",active);node.setAttribute("aria-pressed",String(active))});render()});

const sortButton=document.querySelector('.toolbar [aria-label="Настроить"]');
sortButton.setAttribute("aria-label","Сортировать");sortButton.title="Сортировать";sortButton.setAttribute("aria-haspopup","menu");sortButton.setAttribute("aria-expanded","false");
const sortChoices=[["order","По порядку","EB66"],["visitors","По посещаемости","E632"],["responses","По количеству откликов","EA66"],["date","По дате посещения","E6C4"]];
function sortArrow(direction){return '<span class="sort-arrow ' +(direction===-1?'is-descending':'')+'" aria-hidden="true">'+iconHtml("EA66","icon24")+'</span>'}
function syncSortButton(){
const [,label,glyph]=sortChoices.find(([field])=>field===sortField);
sortButton.classList.remove("icon24");sortButton.classList.add("sort-trigger");sortButton.dataset.sortField=sortField;sortButton.dataset.sortDirection=String(sortDirection);
sortButton.innerHTML='<span class="sort-trigger-symbol" aria-hidden="true">'+iconHtml(glyph,"icon24")+'</span>'+(sortField!=="order"?sortArrow(sortDirection):'');
sortButton.title="Сортировать: "+label+(sortField!=="order"?(sortDirection===-1?", по убыванию":", по возрастанию"):"");
}
syncSortButton();
function closeSort(){document.getElementById("sort-menu")?.remove();sortButton.setAttribute("aria-expanded","false")}
function drawSort(){
let menu=document.getElementById("sort-menu");if(!menu){menu=document.createElement("section");menu.id="sort-menu";menu.setAttribute("role","menu");menu.setAttribute("aria-label","Сортировать");stage.append(menu)}
menu.innerHTML='<div class="sort-title">СОРТИРОВАТЬ<button aria-label="Закрыть сортировку" id="sort-close">'+iconHtml("E66C","icon24")+'</button></div>'+sortChoices.map(([field,label,glyph])=>'<div class="sort-option"><button role="menuitemradio" aria-checked="'+(sortField===field)+'" data-sort="'+field+'"><span class="sort-dot" aria-hidden="true"></span>'+'<span class="sort-menu-symbol" data-sort-symbol="'+field+'">'+iconHtml(glyph,'icon24')+'</span><span>'+label+'</span></button>'+(field!=="order"?'<button class="sort-direction" data-direction="'+field+'" aria-label="'+label+': '+(sortField===field&&sortDirection===-1?'по убыванию':'по возрастанию')+'">'+sortArrow(sortField===field?sortDirection:1)+'</button>':'')+'</div>').join('');
sortButton.setAttribute("aria-expanded","true");
}
sortButton.addEventListener("click",()=>{if(document.getElementById("sort-menu"))closeSort();else{closeFilter();drawSort()}});
document.addEventListener("click",event=>{
if(event.target.closest("#sort-close")){closeSort();return}
const direction=event.target.closest("[data-direction]");const option=event.target.closest("[data-sort]");
if(direction){const field=direction.dataset.direction;sortDirection=sortField===field?-sortDirection:-1;sortField=field;syncSortButton();render();drawSort();return}
if(option){sortField=option.dataset.sort;sortDirection=1;syncSortButton();render();closeSort();return}
if(!event.target.closest('#sort-menu, [aria-label="Сортировать"]'))closeSort();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeSort()});

let companyDraft=null;
function closeFilter(){closeCompanies();closeTemplates();draft=copyFilters(filters);document.getElementById("filter-panel")?.remove();filterOpen=false;filterButton.setAttribute("aria-expanded","false");document.getElementById("showcase-branch-filter")?.setAttribute("aria-expanded","false")}
function filterField(field,title,placeholder){
const values=draft[field];
return '<div class="lookup-field" data-lookup="'+field+'"><label for="filter-'+field+'">'+title+'</label><div class="lookup-line">'+(values.length?'<span class="lookup-value" title="'+esc(values[0])+'">'+esc(values[0])+'</span><button class="lookup-remove" data-remove-first="'+field+'" aria-label="Убрать '+esc(values[0])+'">'+iconHtml('E66C')+'</button>':'')+(values.length>1?'<button class="lookup-count" data-open-picker="'+field+'" aria-label="Выбрано: '+values.length+'">('+values.length+')</button>':'')+'<input id="filter-'+field+'" data-lookup-input="'+field+'" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="suggestions-'+field+'" placeholder="'+placeholder+'">'+(values.length>1?'<button class="lookup-clear" data-clear-lookup="'+field+'" aria-label="'+(field==='templates'?'Очистить шаблоны':'Очистить организации')+'">'+iconHtml('E66C')+'</button>':'')+'<button class="lookup-picker" data-open-picker="'+field+'" aria-label="'+(field==='templates'?'Выбрать шаблоны':'Выбрать организации')+'"><img src="assets/filter-field-picker.svg" width="16" height="16" alt=""></button></div><div id="suggestions-'+field+'" class="lookup-suggestions" aria-label="Подсказки: '+title+'" hidden></div></div>';
}
function drawFilter(){
let panel=document.getElementById("filter-panel");if(!panel){panel=document.createElement("section");panel.id="filter-panel";panel.setAttribute("role","dialog");panel.setAttribute("aria-label","Фильтр сайтов");stage.append(panel)}
const flagLabels=[['verified','Проверенные','Непроверенные'],['published','Опубликованные','Неопубликованные']];
const selectedFlags=flagLabels.filter(([field])=>draft[field]!==null).map(([field,yes,no])=>'<div class="filter-selected-condition"><button class="filter-condition-label">'+(draft[field]?yes:no)+'</button><button class="filter-condition-remove" data-remove-flag="'+field+'" aria-label="Убрать условие '+(draft[field]?yes:no)+'">'+iconHtml('E66C')+'</button></div>').join('');
const dirty=JSON.stringify(draft)!==JSON.stringify(emptyFilters())||JSON.stringify(draft)!==JSON.stringify(showcaseCurrent&&showcaseTab==='Филиалы'?showcaseBranchFilters:filters);
panel.innerHTML='<div class="filter-title"><img src="assets/6d0b9.svg" width="14" height="14" alt=""><span>ФИЛЬТР</span><div class="filter-actions" '+(!dirty?'hidden':'')+'><button id="filter-reset">Сбросить</button><button id="filter-apply" aria-label="Применить фильтр">'+iconHtml("E75E")+'</button></div>'+panelCloseButton('filter-close','Закрыть фильтр')+'</div><div class="filter-fields">'+(showcaseCurrent&&showcaseTab==='Филиалы'?'':filterField('templates','Шаблон','Выберите шаблон'))+filterField('companies','Организация','Выберите организацию')+selectedFlags+'</div><div class="filter-extra" '+(flagLabels.every(([field])=>draft[field]!==null)?'hidden':'')+'><div>МОЖНО ОТОБРАТЬ</div><div class="filter-flags">'+flagLabels.filter(([field])=>draft[field]===null).map(([field,label])=>'<span><button data-flag="'+field+'" data-value="true" aria-pressed="'+(draft[field]===true)+'">'+label+'</button><b aria-hidden="true"></b><button data-flag="'+field+'" data-value="false" aria-pressed="'+(draft[field]===false)+'">Нет</button></span>').join("")+'</div></div>';
}
const extraCompanies=['Вскрытие тары, Ярославль, ООО','Звезда Общепита, ООО','+КАТЮША PLUS+','СПК, АО','Шоколадка, ООО'];
function lookupValues(field){if(field==='companies'&&showcaseCurrent&&showcaseTab==='Филиалы')return [...new Set(showcaseBranches().map(site=>site.company).filter(Boolean))];return field==='templates'?templateCatalog.map(t=>t.name):[...new Set([...sites.map(s=>s.company).filter(Boolean),...extraCompanies])]}
function hideSuggestions(){document.querySelectorAll('.lookup-suggestions').forEach(list=>list.hidden=true);document.querySelectorAll('[data-lookup-input]').forEach(input=>input.setAttribute('aria-expanded','false'))}
function searchLookup(input,showAll=false){
const field=input.dataset.lookupInput,query=input.value.trim().toLocaleLowerCase('ru');hideSuggestions();
const list=document.getElementById('suggestions-'+field);
if(!query&&!showAll)return;
const values=lookupValues(field).filter(value=>!draft[field].includes(value)&&value.toLocaleLowerCase('ru').includes(query));
list.innerHTML='<button type="button" class="lookup-suggestions-close" data-close-suggestions aria-label="Закрыть подсказки"><img src="assets/navigation-menu-close.svg" width="12" height="12" alt=""></button><div class="lookup-suggestions-options" role="listbox">'+values.slice(0,4).map(value=>'<button type="button" role="option" aria-selected="false" data-lookup-option="'+field+'" data-value="'+esc(value)+'">'+esc(value)+'</button>').join('')+'</div><div class="lookup-suggestions-footer"><button type="button" data-open-picker="'+field+'">Показать все</button></div>';
list.hidden=!values.length;input.setAttribute('aria-expanded',String(values.length>0));
}
function selectLookup(field,value){if(!draft[field].includes(value))draft[field].push(value);drawFilter();document.getElementById('filter-'+field).focus()}
filterButton.setAttribute("aria-haspopup","dialog");filterButton.addEventListener("click",()=>{if(filterOpen){closeFilter();return}draft=copyFilters(filters);filterOpen=true;filterButton.setAttribute("aria-expanded","true");drawFilter()});
document.addEventListener('input',event=>{if(event.target.matches('[data-lookup-input]'))searchLookup(event.target)});
document.addEventListener('keydown',event=>{
const input=event.target.closest('[data-lookup-input]');if(!input)return;
const list=document.getElementById('suggestions-'+input.dataset.lookupInput),options=[...list.querySelectorAll('[role="option"]')];
if(event.key==='Escape'&&!list.hidden){event.preventDefault();event.stopImmediatePropagation();hideSuggestions();return}
if(event.key==='ArrowDown'||event.key==='ArrowUp'){
event.preventDefault();if(list.hidden){searchLookup(input,true);return}const current=options.findIndex(option=>option.getAttribute('aria-selected')==='true'),next=(current+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options.forEach((option,index)=>option.setAttribute('aria-selected',String(index===next)));options[next]?.scrollIntoView({block:'nearest'});
}else if(event.key==='Enter'){
event.preventDefault();const selected=options.find(option=>option.getAttribute('aria-selected')==='true')||options[0];if(!list.hidden&&selected)selectLookup(input.dataset.lookupInput,selected.dataset.value);
}else if(event.key==='Backspace'&&!input.value&&draft[input.dataset.lookupInput].length){draft[input.dataset.lookupInput].pop();drawFilter();document.getElementById(input.id).focus()}
});
document.addEventListener("click",event=>{
const wasInsideFilter=Boolean(event.target.closest("#filter-panel, #template-panel, #company-panel"));
if(event.target.closest('[data-close-suggestions]')){hideSuggestions();return}
const option=event.target.closest('[data-lookup-option]');if(option){selectLookup(option.dataset.lookupOption,option.dataset.value);return}
const remove=event.target.closest('[data-remove-first]');if(remove){draft[remove.dataset.removeFirst].shift();drawFilter();return}
const clear=event.target.closest('[data-clear-lookup]');if(clear){draft[clear.dataset.clearLookup]=[];drawFilter();return}
const picker=event.target.closest('[data-open-picker]');if(picker){hideSuggestions();if(picker.dataset.openPicker==='templates')openTemplates();else openCompanies();return}
const line=event.target.closest('.lookup-line');if(line&&!event.target.closest('button,input'))line.querySelector('input').focus();
if(!event.target.closest('.lookup-field'))hideSuggestions();
if(event.target.closest("#filter-close"))closeFilter();
if(event.target.closest("#filter-reset")){draft=emptyFilters();drawFilter()}
if(event.target.closest("#filter-apply")){if(showcaseCurrent&&showcaseTab==='Филиалы'){showcaseBranchFilters=copyFilters(draft);updateShowcaseBranchRows();closeFilter()}else{filters=copyFilters(draft);render();closeFilter()}}
const removeFlag=event.target.closest("[data-remove-flag]");if(removeFlag){draft[removeFlag.dataset.removeFlag]=null;drawFilter();return}
const flag=event.target.closest("[data-flag]");if(flag){const field=flag.dataset.flag,value=flag.dataset.value==="true";draft[field]=draft[field]===value?null:value;drawFilter()}
if(filterOpen&&!wasInsideFilter&&!event.target.closest('[aria-label="Фильтр"],#showcase-branch-filter'))closeFilter();
});
function closeCompanies(){document.getElementById('company-panel')?.remove();companyDraft=null;document.getElementById('filter-panel')?.removeAttribute('hidden')}
function openCompanies(){
companyDraft=[...draft.companies];document.getElementById('filter-panel').hidden=true;
const panel=document.createElement('section');panel.id='company-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Выбор организаций');
panel.innerHTML='<div class="template-main"><div class="template-header"><h2>Все заведения</h2><button id="company-save" '+(!companyDraft.length?'hidden':'')+'>Выбрать</button></div><div class="company-search-row"><input id="company-search" type="search" placeholder="Найти по названию, ИНН" aria-label="Найти организацию"></div><div class="company-list">'+lookupValues('companies').map(company=>{const site=(showcaseCurrent&&showcaseTab==='Филиалы'?showcaseBranches():sites).find(s=>s.company===company);return '<label class="company-option"><input type="checkbox" value="'+esc(company)+'" '+(companyDraft.includes(company)?'checked':'')+'><span class="company-option-text"><span class="company-option-line"><span class="company-option-name">'+esc(site?.name||company)+'</span><span class="company-option-address">'+esc(site?.address||'')+'</span></span><span class="company-option-details">'+esc(company)+(site?.inn?'　'+esc(site.inn):'')+'</span></span></label>'}).join('')+'</div></div><aside class="template-tools">'+panelCloseButton('company-close','Закрыть выбор организаций')+'<div class="template-informers">'+document.querySelector('.informers').innerHTML+'</div></aside>';
stage.append(panel);enhanceSearchFields(panel);
panel.querySelector('#company-search').addEventListener('input',event=>{const query=event.target.value.trim().toLocaleLowerCase('ru');panel.querySelectorAll('.company-option').forEach(row=>row.hidden=!row.textContent.toLocaleLowerCase('ru').includes(query))});
panel.addEventListener('change',event=>{if(event.target.matches('.company-option input')){const value=event.target.value;companyDraft=event.target.checked?[...new Set([...companyDraft,value])]:companyDraft.filter(company=>company!==value);panel.querySelector('#company-save').hidden=!companyDraft.length}});
panel.addEventListener('click',event=>{event.stopPropagation();if(event.target.closest('#company-save')){draft.companies=[...companyDraft];closeCompanies();drawFilter()}else if(event.target.closest('#company-close'))closeCompanies()});
}
const templateCatalog=[{name:"Доставка из ресторана",image:"7182c.png",color:"#d9dbc7"},{name:"Отель",image:"60285.png",color:"#eae1d7"},{name:"Услуги",image:"787d1.png",color:"#f7e2c5"}];
function closeTemplates(){document.getElementById('template-panel')?.remove();templateDraft=null;document.getElementById('filter-panel')?.removeAttribute('hidden')}
function openTemplates(){
templateDraft=[...draft.templates];document.getElementById('filter-panel').hidden=true;
const panel=document.createElement('section');panel.id='template-panel';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Выбор шаблонов');
panel.innerHTML='<div class="template-main"><div class="template-header"><h2>Шаблон</h2><input id="template-search" type="search" placeholder="Найти" aria-label="Найти шаблон"><button id="template-save" aria-label="Сохранить выбор шаблонов">'+iconHtml('E75E','icon24')+'</button></div><div id="template-selection" hidden><input id="template-all" type="checkbox" aria-label="Выбрать все шаблоны"><span></span><button id="template-clear" aria-label="Снять выделение шаблонов">'+iconHtml('E66C')+'</button></div><div class="template-grid">'+templateCatalog.map(t=>'<label class="template-tile" style="background:'+t.color+';--template-bg:'+t.color+'" data-template-name="'+esc(t.name)+'"><strong>'+esc(t.name)+'</strong><div class="template-image"><img src="assets/'+t.image+'" alt=""></div><input type="checkbox" data-template="'+esc(t.name)+'" aria-label="'+esc(t.name)+'"></label>').join('')+'</div></div><aside class="template-tools">'+panelCloseButton('template-close','Закрыть выбор шаблонов')+'<button id="template-multi" aria-label="Множественный выбор шаблонов">'+iconHtml('E644','icon24')+'</button><div class="template-informers">'+document.querySelector('.informers').innerHTML+'</div></aside>';
stage.append(panel);enhanceSearchFields(panel);syncTemplates();
panel.querySelector('#template-search').addEventListener('input',event=>{const query=event.target.value.trim().toLocaleLowerCase('ru');panel.querySelectorAll('[data-template-name]').forEach(tile=>tile.hidden=!tile.dataset.templateName.toLocaleLowerCase('ru').includes(query))});
panel.addEventListener('change',event=>{if(event.target.matches('[data-template]')){const value=event.target.dataset.template;templateDraft=event.target.checked?[...new Set([...templateDraft,value])]:templateDraft.filter(t=>t!==value)}if(event.target.id==='template-all')templateDraft=event.target.checked?templateCatalog.map(t=>t.name):[];syncTemplates()});
panel.addEventListener('click',event=>{event.stopPropagation();if(event.target.closest('#template-save')){draft.templates=[...templateDraft];closeTemplates();drawFilter()}else if(event.target.closest('#template-close'))closeTemplates();else if(event.target.closest('#template-clear')){templateDraft=[];syncTemplates()}else if(event.target.closest('#template-multi')){panel.querySelector('#template-selection').hidden=false}});
}
function syncTemplates(){const panel=document.getElementById('template-panel');panel.querySelectorAll('[data-template]').forEach(input=>input.checked=templateDraft.includes(input.dataset.template));const bar=panel.querySelector('#template-selection');bar.hidden=!templateDraft.length;bar.querySelector('span').textContent='Отмечено '+templateDraft.length;const all=panel.querySelector('#template-all');all.checked=templateCatalog.every(t=>templateDraft.includes(t.name));all.indeterminate=templateDraft.length>0&&!all.checked}
// Per-visitor demo records keep page totals, daily graph and both filters consistent.
const cardVisitsCache=new WeakMap();
let cardVisitFilters={newVisitors:false,repeatVisitors:false};
function cardVisitRecords(site){
if(cardVisitsCache.has(site))return cardVisitsCache.get(site);
const total=Number(String(site.visitors).replace(/\s/g,''))||0;
const analytics=site.analytics;
const pageCounts=analytics?.pages??[{name:'Главная',visitors:Math.round(total*.6),responses:Number(site.responses)||0},{name:'Цена',visitors:Math.round(total*.3),responses:0},{name:'Контакты',visitors:total-Math.round(total*.6)-Math.round(total*.3),responses:0}];
const newCount=analytics?.newVisitors??Math.round(total*.7),repeatCount=analytics?.repeatVisitors??Math.round(total*.3);
const days=analytics?.dailyVisitors??Array.from({length:31},(_,i)=>Math.floor((i+1)*total/31)-Math.floor(i*total/31));
const records=[],usedPages=pageCounts.map(()=>0),usedResponses=pageCounts.map(()=>0);
let day=0,dayUsed=0;
for(let i=0;i<total;i++){
while(day<days.length-1&&dayUsed>=days[day]){day++;dayUsed=0}
// Spread visits across pages while preserving the supplied page counters exactly.
let pageIndex=0,best=-Infinity;
pageCounts.forEach((page,index)=>{const remaining=page.visitors-usedPages[index];const score=remaining>0?(i+1)*page.visitors/Math.max(1,total)-usedPages[index]:-Infinity;if(score>best){best=score;pageIndex=index}});
usedPages[pageIndex]++;
const responses=usedResponses[pageIndex]<(Number(pageCounts[pageIndex].responses)||0)?1:0;usedResponses[pageIndex]+=responses;
// A new visitor can return during the period, so the two subsets may overlap.
records.push({pageIndex,day,durationSeconds:60+(i*37)%900,newVisitor:i<newCount,visits:Math.floor((i+1)*repeatCount/total+.5)>Math.floor(i*repeatCount/total+.5)?2:1,responses});dayUsed++;
}
cardVisitsCache.set(site,{records,pages:pageCounts.map(page=>page.name)});return cardVisitsCache.get(site);
}
function filteredCardVisits(ignorePage=false){
const records=cardVisitRecords(currentSite).records;
return records.filter(visit=>(!cardVisitFilters.newVisitors||visit.newVisitor)&&(!cardVisitFilters.repeatVisitors||visit.visits>1)&&(ignorePage||cardPage===0||visit.pageIndex===cardPage-1));
}
function cardPages(){
const {pages}=cardVisitRecords(currentSite),records=filteredCardVisits(true);
return [['Всего',records.length],...pages.map((name,index)=>[name,records.filter(visit=>visit.pageIndex===index).length])];
}
function cardVisitSummary(){
const records=cardVisitRecords(currentSite).records;
return {newVisitors:records.filter(visit=>visit.newVisitor).length,repeatVisitors:records.filter(visit=>visit.visits>1).length};
}
function cardStatistics(){const records=filteredCardVisits();return {visitors:records.length,responses:records.reduce((sum,visit)=>sum+visit.responses,0)}}
function visitorChart(){
const records=filteredCardVisits(),values=Array.from({length:31},(_,day)=>records.filter(visit=>visit.day===day).length),max=Math.max(3,...values),top=Math.ceil(max/3)*3;
const ys=values.map(value=>160-value/top*160),h=600/(ys.length-1),slopes=ys.slice(1).map((y,i)=>(y-ys[i])/h);
const tangents=ys.map((_,i)=>i===0?slopes[0]:i===ys.length-1?slopes[i-1]:slopes[i-1]*slopes[i]<=0?0:2*slopes[i-1]*slopes[i]/(slopes[i-1]+slopes[i]));
const f=value=>value.toFixed(2);
const curve='M0,'+f(ys[0])+ys.slice(1).map((y,i)=>' C'+f(i*h+h/3)+','+f(ys[i]+tangents[i]*h/3)+' '+f((i+1)*h-h/3)+','+f(y-tangents[i+1]*h/3)+' '+f((i+1)*h)+','+f(y)).join('');
return '<div class="visit-chart"><strong>ПОСЕТИТЕЛИ</strong><div class="chart-body"><div class="y-axis">'+[top,top*2/3,top/3,0].map(value=>'<span>'+value+'</span>').join('')+'</div><div class="chart-grid"><div class="graph-slot"><svg class="visitor-graph" viewBox="0 0 600 160" preserveAspectRatio="none" role="img" aria-label="Посетители за месяц: '+esc(records.length)+'"><path d="'+curve+' L600,160 L0,160 Z" fill="#dceafa"/><path d="'+curve+'" fill="none" stroke="#8ab6e3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/></svg></div><div class="x-axis">'+Array.from({length:16},(_,i)=>'<span>'+ (1+i*2)+'</span>').join('')+'</div></div></div></div>';
}
let cardNameDraft=null;
function openCard(id){cardNameDraft=null;cardVisitFilters={newVisitors:false,repeatVisitors:false};closeFilter();currentSite=sites.find(s=>s.id===id);cardTab="Страницы";cardPage=0;drawCard();document.getElementById("card-close").focus()}
function closeCard(){cardNameDraft=null;document.getElementById("card-command-panel")?.remove();document.getElementById("site-card")?.remove();currentSite=null;rows.querySelector('[data-site="'+selected+'"]')?.focus()}
function cardParameters(){
const settings=currentSite.settings;
if(cardPage)return '<div class="parameter-sheet"><h3>'+esc(cardPages()[cardPage][0])+'</h3><label class="access">Доступ <select data-setting="access" aria-label="Доступ"><option '+(settings.access==="Без авторизации"?"selected":"")+'>Без авторизации</option><option '+(settings.access==="Только авторизованным"?"selected":"")+'>Только авторизованным</option></select></label>'+indexingSwitch(settings)+'<h3>SEO</h3><label class="stacked-field">Заголовок<input data-setting="title" value="'+esc(settings.title)+'"></label><label class="stacked-field">Описание<textarea data-setting="description">'+esc(settings.description)+'</textarea></label></div>';
return '<div class="parameter-sheet"><div class="domain-line"><input aria-label="Адрес сайта" data-setting="domain" style="width:'+Math.max(1,settings.domain.length)+'ch" value="'+esc(settings.domain)+'"><button class="muted-action">Сменить</button></div><label class="favicon-field">Иконка сайта (favicon)<img src="assets/cf5b2.png" width="28" height="28" alt="Иконка сайта"></label>'+indexingSwitch(settings)+'<label class="stacked-field">HTML-код<div class="code-preview"><code>&lt;<span>script type</span>=<em>\'text/javascript\'</em>&gt;<br>(<b>function</b>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>function</b> onload() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>var</b> s = document.createElement(<em>\'script\'</em>);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.type = <em>\'text/javascript\'</em>;</code></div></label><h3>Поисковая оптимизация</h3>'+[["Яндекс.Вебмастер","yandex"],["Google Search Console","google"]].map(([label,key])=>settingField(label,key,settings)).join("")+'<h3>Внешняя аналитика</h3>'+[["Яндекс.Метрика","metrika"],["VK Пиксель","vk"],["Google Tag Manager","gtm"]].map(([label,key])=>settingField(label,key,settings)).join("")+'</div>';
}
function settingField(label,key,settings){return '<label class="inline-field"><span>'+label+'</span><input data-setting="'+key+'" aria-label="'+label+'" value="'+esc(settings[key])+'"></label>'}
function indexingSwitch(settings){return '<label class="indexing">Поисковая индексация<button role="switch" aria-label="Поисковая индексация" aria-checked="'+settings.indexing+'" id="indexing-switch"><img src="assets/5759b.svg" width="24" height="16" alt=""></button></label>'}
const sitePagePreviews=[
{name:'Главная',path:'',image:'site-page-main.png',variant:'main'},
{name:'Цена',path:'/price',image:'site-page-price.png',variant:'price'},
{name:'Контакты',path:'/contacts',image:'site-page-contacts.png',variant:'contacts'}
];
function previewDomain(site){return site.id!==2&&site.settings.domain==='s-billing.saby.ws'?'site-'+(site.id+1)+'.saby.ws':site.settings.domain}
function demoSitePreview(site,pageIndex){
// These are fictional site screenshots. Text is rendered from the registry data.
const hue=(site.id*47+19)%360,accent='hsl('+hue+',46%,36%)',pale='hsl('+hue+',45%,95%)',name=esc(site.name),page=sitePagePreviews[pageIndex];
const text=(x,y,value,size=28,weight=400,color='#263238')=>'<text x="'+x+'" y="'+y+'" font-family="Arial,sans-serif" font-size="'+size+'" font-weight="'+weight+'" fill="'+color+'">'+esc(value)+'</text>';
const nav=sitePagePreviews.map((item,index)=>text(1040+index*170,64,item.name,24,index===pageIndex?600:400,index===pageIndex?accent:'#677378')).join('');
let body='';
if(pageIndex===0){
body='<rect y="110" width="1600" height="570" fill="'+pale+'"/>'+text(80,225,site.name,58,600,accent)+text(80,285,site.template,30)+text(80,350,site.company||'Добро пожаловать на наш сайт',24)+text(80,410,site.address||'Услуги для вас и вашего бизнеса',23,400,'#677378')+'<rect x="80" y="460" width="255" height="62" rx="10" fill="'+accent+'"/>'+text(112,501,'Подробнее',26,400,'white');
const variant=site.id%3;
if(variant===0)body+='<rect x="1020" y="180" width="400" height="365" rx="28" fill="'+accent+'" opacity=".12"/><circle cx="1220" cy="320" r="100" fill="'+accent+'" opacity=".18"/>'+text(1085,475,site.template,28,600,accent);
else if(variant===1)body+='<circle cx="1220" cy="350" r="200" fill="'+accent+'" opacity=".1"/><rect x="1060" y="220" width="310" height="260" rx="24" fill="white"/>'+text(1090,305,site.name.slice(0,18),28,600,accent)+text(1090,370,'Качество и забота',23);
else body+='<rect x="1010" y="170" width="190" height="355" rx="20" fill="'+accent+'" opacity=".15"/><rect x="1220" y="230" width="190" height="355" rx="20" fill="'+accent+'" opacity=".25"/>'+text(1040,350,site.name.slice(0,12),24,600,accent);
body+=text(80,760,'Наши предложения',40,600)+[0,1,2].map((v)=>'<rect x="'+(80+v*480)+'" y="800" width="440" height="155" rx="16" fill="'+pale+'"/>'+text(110+v*480,858,['Индивидуальный подход','Удобный сервис','Всегда на связи'][v],25,600,accent)).join('');
}else if(pageIndex===1){
body=text(80,215,'Цена',58,600,accent)+text(80,280,site.name,30)+[0,1,2].map((v)=>'<rect x="'+(80+v*480)+'" y="345" width="440" height="390" rx="20" fill="'+pale+'"/>'+text(112+v*480,410,['Базовый','Стандартный','Индивидуальный'][v],31,600,accent)+text(112+v*480,480,['Основные возможности','Расширенный набор услуг','Под ваши задачи'][v],23)+text(112+v*480,650,v===2?'По запросу':'от '+((site.id+1)*(v+1)*100)+' ₽',38,600,accent)).join('');
}else{
body=text(80,215,'Контакты',58,600,accent)+text(80,280,site.name,32,600)+text(80,350,site.company||site.template,25)+text(80,410,site.address||'Адрес уточняйте у администратора',25)+text(80,470,previewDomain(site),25,400,accent)+'<rect x="80" y="530" width="1440" height="400" rx="20" fill="'+pale+'"/><path d="M100 620L1480 830M300 540L900 920M1300 540L600 920M80 790L1520 600" stroke="white" stroke-width="30"/><circle cx="800" cy="690" r="34" fill="'+accent+'"/>'+text(848,700,site.name,28,600,accent);
}
return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="white"/><circle cx="102" cy="52" r="24" fill="'+accent+'"/>'+text(144,62,site.name.slice(0,25),28,600,accent)+nav+body+'</svg>');
}
function cardPreview(){
const pageIndex=cardPage===0?0:cardPage-1,page=sitePagePreviews[pageIndex],domain=previewDomain(currentSite),stats=cardStatistics();
const preview=currentSite.id===2?'<div class="site-page-image site-page-image--'+page.variant+'"><img src="assets/'+page.image+'" alt="'+page.name+' — '+esc(currentSite.name)+'"></div>':'<img src="'+esc(demoSitePreview(currentSite,pageIndex))+'" alt="'+page.name+' — '+esc(currentSite.name)+'">';
return '<div class="card-link"><button class="btn btn--link btn--style-link btn--size-m" data-open-preview><span class="btn__caption">'+esc(domain+page.path)+'</span></button></div><div class="site-preview" id="site-preview" aria-label="Превью: '+page.name+'">'+preview+'</div><div class="device-switch"><button aria-label="Компьютер" aria-pressed="true" data-device="desktop"><img src="assets/56aee.svg" width="16" height="16" alt=""></button><button aria-label="Телефон" aria-pressed="false" data-device="mobile"><img src="assets/7074e.svg" width="16" height="16" alt=""></button></div>'+visitorChart()+'<div class="card-statistics live-statistics"><div><span>Посетители</span><strong>'+esc(stats.visitors)+'</strong></div><div><span>Отклики</span><strong>'+esc(stats.responses)+'</strong></div><div><span>Продажи</span><strong>—</strong></div></div>';
}
function designerVerification(){

return '<button id="designer-verification" class="verification-icon '+(currentSite.verified?'is-verified':'')+'" aria-label="Проверка дизайнером: '+(currentSite.verified?'Проверено':'Не проверено')+'" aria-haspopup="menu" aria-expanded="false">'+iconHtml("EB4D")+'</button>';
}
// Card popovers are mutually exclusive; nested command submenus belong to their parent.
function closeCardMenus(exceptId=null){
 for(const [menuId,triggerIds] of [['verification-menu',['designer-verification','showcase-verification']],['card-more-menu',['card-more']],['showcase-more-menu',['showcase-more']]]){
  if(menuId===exceptId)continue;
  document.getElementById(menuId)?.remove();
  for(const triggerId of triggerIds)document.getElementById(triggerId)?.setAttribute('aria-expanded','false');
 }
}
function toggleVerificationMenu(site=currentSite, host=document.getElementById("site-card"), trigger=document.getElementById("designer-verification"), attribute="data-verification"){
const existing=document.getElementById("verification-menu");
if(existing){closeCardMenus();return}
closeCardMenus();
const menu=document.createElement("div");menu.id="verification-menu";menu.setAttribute("role","menu");menu.setAttribute("aria-label","Проверка дизайнером");
menu.innerHTML='<button class="verification-dismiss" aria-label="Закрыть меню проверки">'+iconHtml("E66C","icon24")+'</button>'+[true,false].map(value=>'<button role="menuitemradio" aria-checked="'+(Boolean(site.verified)===value)+'" '+attribute+'="'+value+'"><span class="verification-icon '+(value?'is-verified':'')+'">'+iconHtml("EB4D")+'</span>'+(value?'Проверено':'Не проверено')+'</button>').join("");
host.append(menu);trigger.setAttribute("aria-expanded","true");menu.querySelector('[role=menuitemradio]').focus();
}
// Shared panel close: exact 28px functionalButton SVG from Figma 19062:34148.
function panelCloseButton(id,label){
if(id==='filter-close')return '<button id="'+id+'" class="panel-close" aria-label="'+label+'"><img src="assets/d52a1.svg" width="28" height="28" alt=""></button>';
return '<button id="'+id+'" class="panel-close panel-close--sliding" aria-label="'+label+'">'+['default','hover','active'].map(state=>'<img class="panel-close__'+state+'" src="assets/panel-close-'+state+'.svg" width="28" height="28" alt="">').join('')+'</button>';
}
const appearancePrototypeUrl='https://www.figma.com/proto/DBmmGUNJ5Pwg8BsFOI5Kuv/Создание--параметры-и-публикация-макета-сайта?page-id=7113%3A98771%3Fnode-id%3D7113-98909&p=f&viewport=147%2C-778%2C0.02&t=J1oMAC3fYUOZxb8s-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7113%3A98909&node-id=7113-102688&hide-ui=1';
function cardHeadingContent(){
const appearance='<a class="appearance btn btn--same-outlined btn--style-brand btn--size-m" href="'+appearancePrototypeUrl+'" target="_blank" rel="noopener noreferrer"><span class="btn__caption">Оформление</span><span class="btn__icon">'+iconHtml('E747','icon24')+'</span></a>';
if(cardNameDraft!==null)return '<form class="card-name-editor" id="card-name-editor"><input id="card-name-input" aria-label="Заголовок сайта" value="'+esc(cardNameDraft)+'" required autocomplete="off"><button type="submit" class="card-name-save" aria-label="Сохранить заголовок">'+iconHtml('E75E','icon24')+'</button><button type="button" id="card-name-cancel" aria-label="Отменить редактирование заголовка">'+iconHtml('E66C')+'</button></form>'+appearance+'<span class="heading-spacer"></span>';
return '<h2>'+esc(currentSite.name)+'</h2><button aria-label="Название сайта" class="rename">'+iconHtml('E660','icon24')+'</button><a class="appearance btn btn--same-outlined btn--style-brand btn--size-m" href="'+appearancePrototypeUrl+'" target="_blank" rel="noopener noreferrer"><span class="btn__caption">Оформление</span><span class="btn__icon">'+iconHtml('E747','icon24')+'</span></a><span class="heading-spacer"></span>';
}
function finishCardNameEdit(save){
if(!currentSite||cardNameDraft===null)return;
const input=document.getElementById('card-name-input');
if(save){const value=input.value.trim();if(!value){input.value='';input.reportValidity();return}currentSite.name=value;render()}
cardNameDraft=null;drawCard();document.querySelector('#site-card .rename')?.focus();
}
document.addEventListener('submit',event=>{if(event.target.id==='card-name-editor'){event.preventDefault();finishCardNameEdit(true)}});
document.addEventListener('input',event=>{if(event.target.id==='card-name-input')cardNameDraft=event.target.value});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&cardNameDraft!==null){event.preventDefault();event.stopImmediatePropagation();finishCardNameEdit(false)}},true);
function drawCard(){
let panel=document.getElementById("site-card");if(!panel){panel=document.createElement("section");panel.id="site-card";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label","Карточка сайта");stage.append(panel)}
panel.classList.toggle('is-statistics',cardTab==='Статистика');
panel.innerHTML='<div class="card-main"><div class="card-header"><div class="card-heading">'+cardHeadingContent()+'</div><nav class="card-tabs tabs tabs--no-border" role="tablist" aria-label="Вкладки карточки">'+["Страницы","Параметры","Статистика","Источники","Посетители","Отклики"].map(name=>'<button class="tabs__item" role="tab"  data-card-tab="'+name+'" aria-selected="'+(cardTab===name)+'"><span class="tabs__caption" data-caption="'+name+'">'+name+'</span></button>').join("")+'</nav></div><div class="card-body"><aside class="card-pages scroll-shadow"><div class="visitor-summary"><label class="checkbox checkbox--outlined"><input class="checkbox__input" type="checkbox" data-card-visit-filter="newVisitors" '+(cardVisitFilters.newVisitors?'checked':'')+'><span class="checkbox__box" aria-hidden="true"></span><span class="checkbox__caption">Новые за период</span><span class="visitor-summary-count">'+esc(cardVisitSummary().newVisitors)+'</span></label><label class="checkbox checkbox--outlined"><input class="checkbox__input" type="checkbox" data-card-visit-filter="repeatVisitors" '+(cardVisitFilters.repeatVisitors?'checked':'')+'><span class="checkbox__box" aria-hidden="true"></span><span class="checkbox__caption">Больше 1 визита</span><span class="visitor-summary-count">'+esc(cardVisitSummary().repeatVisitors)+'</span></label></div><div class="page-count-label">Посетители</div>'+cardPages().map(([name,count],i)=>'<button class="card-page '+(cardPage===i?'selected':'')+'" data-card-page="'+i+'"><span>'+name+'</span><span>'+count+'</span></button>').join("")+'</aside><div class="card-content scroll-shadow">'+(cardTab==="Параметры"?cardParameters():cardTab==="Страницы"?cardPreview():cardAnalytics())+'</div></div></div><aside class="card-tools"><div class="card-top-tools">'+panelCloseButton('card-close','Закрыть карточку')+''+designerVerification()+[["EAA9","Настройки"],["EB5E","SEO-аналитика"],["E6A7","Ссылка"],["EAB9","Просмотр"],[currentSite.published?"E62F":"E631",currentSite.published?"Снять с публикации":"Опубликовать"]].map(([hex,label])=>'<button aria-label="'+label+'" '+(label==="Параметры"?'data-card-tab="Параметры"':'')+'>'+iconHtml(hex,"icon24")+'</button>').join("")+'<button id="card-more" aria-label="Все команды" aria-haspopup="menu"><span class="more-dots">'+iconHtml('EAB4','icon24')+'</span></button></div><div class="informers"><button class="date"><span>16</span><small>чт</small></button><button class="round icon"></button><button class="round icon"></button><button class="help"><img src="assets/56b4e.svg" width="12" height="16" alt="Помощь"></button></div></aside>';
const graph=panel.querySelector('.graph-slot');if(graph)graph.style.setProperty('--graph-scale',String(graph.clientWidth/515.828));
}
document.addEventListener("click",event=>{
if(event.target.closest('#site-card .rename')){cardNameDraft=currentSite.name;document.querySelector('#site-card .card-heading').innerHTML=cardHeadingContent();const input=document.getElementById('card-name-input');input.focus();input.setSelectionRange(input.value.length,input.value.length);return}
if(event.target.closest('#card-name-cancel')){finishCardNameEdit(false);return}
if(event.target.closest("#card-command-close")){document.getElementById("card-command-panel")?.remove();return}
if(event.target.closest("#designer-verification")){toggleVerificationMenu();return}
const verification=event.target.closest("[data-verification]");
if(verification&&currentSite){currentSite.verified=verification.dataset.verification==="true";render();drawCard();document.getElementById("designer-verification").focus();return}
if(event.target.closest(".verification-dismiss")&&!showcaseCurrent){toggleVerificationMenu();document.getElementById("designer-verification").focus();return}
if(document.getElementById("verification-menu")&&!showcaseCurrent&&!event.target.closest("#verification-menu"))toggleVerificationMenu();
if(event.target.closest('#card-more')){toggleCardMore();return}
if(event.target.closest('#card-more-close')){document.getElementById('card-more-menu')?.remove();return}
const extra=event.target.closest('[data-card-extra]');
if(extra){const action=extra.dataset.cardExtra;document.getElementById('card-more-menu')?.remove();if(action==='history')openCardHistory();if(action==='cache')showCacheNotice();if(action==='edit')window.open(appearancePrototypeUrl,'_blank','noopener,noreferrer');if(action==='delete')confirmRegistryAction('delete',[currentSite.id]);return}
if(document.getElementById('card-more-menu')&&!event.target.closest('#card-more-menu'))document.getElementById('card-more-menu').remove();
const command=event.target.closest(".card-top-tools button, [data-card-command]");
if(command&&currentSite){
const label=command.getAttribute("aria-label");
if(label==="Настройки"||label==="SEO-аналитика"){openCardCommandPanel(label);return}
if(label==="Просмотр"){openCurrentSitePreview();return}
if(label==="Ссылка"){copyCardLink();return}
if(label==="Опубликовать"||label==="Снять с публикации"){confirmRegistryAction(currentSite.published?"unpublish":"publish",[currentSite.id]);return}
}
if(event.target.closest("[data-open-preview]")){openCurrentSitePreview();return}
if(event.target.closest("#card-close"))closeCard();
const tab=event.target.closest("[data-card-tab]");if(tab&&currentSite){cardTab=tab.dataset.cardTab;drawCard()}
const page=event.target.closest("[data-card-page]");if(page){cardPage=Number(page.dataset.cardPage);drawCard();document.querySelector('#site-card .card-content').scrollTop=0}
if(event.target.closest("#indexing-switch")){currentSite.settings.indexing=!currentSite.settings.indexing;drawCard()}
const device=event.target.closest("[data-device]");if(device){document.querySelectorAll("[data-device]").forEach(btn=>btn.setAttribute("aria-pressed",String(btn===device)));document.getElementById("site-preview").classList.toggle("mobile",device.dataset.device==="mobile")}
});
document.addEventListener('change',event=>{
const field=event.target.dataset.cardVisitFilter;if(!field||!currentSite)return;
cardVisitFilters[field]=event.target.checked;drawCard();document.querySelector('[data-card-visit-filter="'+field+'"]').focus();
});
document.addEventListener("input",event=>{if(currentSite&&event.target.dataset.setting)currentSite.settings[event.target.dataset.setting]=event.target.value});
document.addEventListener("keydown",event=>{if(showcaseCurrent)return;if(event.key==="Escape"){if(document.getElementById("card-command-panel")){document.getElementById("card-command-panel").remove()}else if(document.getElementById("verification-menu")){toggleVerificationMenu();document.getElementById("designer-verification").focus()}else if(companyDraft!==null)closeCompanies();else if(templateDraft!==null)closeTemplates();else if(filterOpen)closeFilter();else if(currentSite)closeCard();else if(multi){multi=false;selectedOnly=false;selectedSites.clear();render()}}});
// Shared contrast search: Figma fLpLW1vBm7H88TenFl0GCv, 20067:12311.
function syncSearchField(input){
const wrapper=input?.closest('.search-control');if(!wrapper)return;
const filled=input.value.length>0;wrapper.classList.toggle('is-filled',filled);
wrapper.querySelectorAll('[data-search-action]').forEach(button=>button.hidden=!filled);
}
function enhanceSearchFields(root=document){
root.querySelectorAll('input[type="search"]').forEach(input=>{
if(input.closest('.search-control'))return;
let wrapper=input.closest('.registry-search');
if(!wrapper){wrapper=document.createElement('div');input.before(wrapper);wrapper.append(input)}
wrapper.classList.add('search-control');
// Reuse the registry controls; dynamic selectors receive the same controls.
wrapper.querySelectorAll('button').forEach(button=>button.remove());
wrapper.insertAdjacentHTML('beforeend','<button type="button" data-search-action="clear" aria-label="Очистить поиск"'+(input.id==='search'?' id="search-clear"':'')+' hidden>'+iconHtml('E66C')+'</button><button type="button" data-search-action="submit" aria-label="Поиск"'+(input.id==='search'?' id="search-submit"':'')+' hidden>'+iconHtml('E662')+'</button>');
input.autocomplete='off';input.spellcheck=false;
input.addEventListener('input',()=>syncSearchField(input));
input.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();input.dispatchEvent(new Event('input',{bubbles:true}))}});
wrapper.addEventListener('mousedown',event=>{if(event.target.closest('[data-search-action]'))event.preventDefault()});
wrapper.addEventListener('click',event=>{
const button=event.target.closest('[data-search-action]');if(!button)return;
if(button.dataset.searchAction==='clear')input.value='';
input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();
});
syncSearchField(input);
});
}
enhanceSearchFields();
function fit(){closeMarksMenu();const graph=document.querySelector(".graph-slot");if(graph)graph.style.setProperty("--graph-scale",String(graph.clientWidth/515.828))}addEventListener("resize",fit);fit();render();


async function copyCardLink(){
const url="https://"+currentSite.settings.domain.replace(/^https?:\/\//i,"");
try{await navigator.clipboard.writeText(url);showCopiedToast()}
catch{const field=document.createElement("textarea");field.value=url;field.style.cssText="position:fixed;opacity:0";stage.append(field);field.select();const copied=document.execCommand("copy");field.remove();if(copied)showCopiedToast()}
}
function openCardCommandPanel(name){
document.getElementById("card-command-panel")?.remove();
const panel=document.createElement("section");panel.id="card-command-panel";panel.className=name==="Настройки"?"command-settings":"command-seo";panel.setAttribute("role","dialog");panel.setAttribute("aria-modal","true");panel.setAttribute("aria-label",name);
const content=name==="Настройки"?'<header class="command-heading"><h2>Настройки</h2></header><div class="settings-layout"><div class="settings-content scroll-shadow">'+settingsIntegrationContent()+'</div><nav class="settings-sections" aria-label="Разделы настроек"><button data-settings-section="integrations" aria-current="page">Интеграции</button><button data-settings-section="access">Кто имеет доступ</button></nav></div>':'<header class="command-heading"><h2>SEO-аналитика</h2><button class="seo-run" aria-disabled="true">Запустить</button></header><div class="seo-site">'+esc(currentSite.name)+'<span class="seo-site-clear" aria-hidden="true">'+iconHtml("E66C","icon24")+'</span><span class="seo-site-menu" aria-hidden="true">'+iconHtml("EA90","icon24")+'</span></div><div class="seo-content"><div class="seo-progress"><span>5 шагов</span><div></div></div><ol class="seo-steps">'+["Безопасность сайта","Индексация","Мета-теги","Анализ юзабилити и поведения пользователей","Локальные факторы ранжирования"].map(label=>'<li>'+label+'</li>').join("")+'</ol><div class="seo-hint"><p class="seo-explanation">Saby поможет определить  соответствие сайта и его страниц требованиям поисковых систем и покажет проблемы, влияющие на позиции в выдаче, быстродействии, полноты наполнения и адаптивности сайта.</p><img src="assets/seo-hint.svg" width="200" height="200" alt=""></div></div>';
panel.innerHTML='<div class="command-main">'+content+'</div><aside class="command-tools">'+panelCloseButton('card-command-close','Закрыть '+name)+(name==='Настройки'?'<button id="settings-history" aria-label="История изменений">'+iconHtml('E658','icon24')+'</button>':'')+document.querySelector('#site-card .informers').outerHTML+'</aside>';stage.append(panel);panel.querySelector("#card-command-close").focus();
}

// Меню добавления сайта — согласованный состав, без новых сценариев.
const addSiteButton=document.querySelector('main>header>.add');
addSiteButton.setAttribute('aria-haspopup','menu');
addSiteButton.setAttribute('aria-expanded','false');
function closeAddSiteMenu(restoreFocus=false){
const menu=document.getElementById('add-site-menu');if(!menu)return;
menu.remove();addSiteButton.setAttribute('aria-expanded','false');
if(restoreFocus)addSiteButton.focus();
}
function toggleAddSiteMenu(){
if(document.getElementById('add-site-menu')){closeAddSiteMenu(true);return}
const menu=document.createElement('div');menu.id='add-site-menu';menu.setAttribute('role','menu');menu.setAttribute('aria-label','Добавить сайт');
menu.innerHTML='<div class="add-site-menu-heading"><span>ДОБАВИТЬ САЙТ</span><button type="button" aria-label="Закрыть меню добавления сайта">'+iconHtml('E66C','icon24')+'</button></div><button type="button" role="menuitem">Подключить</button><button type="button" role="menuitem">Создать новый</button>';
stage.append(menu);
const anchor=addSiteButton.getBoundingClientRect(),bounds=stage.getBoundingClientRect();
menu.style.left=Math.max(4,Math.min(anchor.left-bounds.left,bounds.width-menu.offsetWidth-4))+'px';
menu.style.top=anchor.top-bounds.top+'px';
addSiteButton.setAttribute('aria-expanded','true');menu.querySelector('[role="menuitem"]').focus();
menu.querySelector('.add-site-menu-heading button').addEventListener('click',()=>closeAddSiteMenu(true));
}
addSiteButton.addEventListener('click',toggleAddSiteMenu);
document.addEventListener('click',event=>{if(!event.target.closest('#add-site-menu,main>header>.add'))closeAddSiteMenu()});
document.addEventListener('keydown',event=>{
const menu=document.getElementById('add-site-menu');if(!menu)return;
if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();closeAddSiteMenu(true);return}
if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){
event.preventDefault();const items=[...menu.querySelectorAll('[role="menuitem"]')],index=items.indexOf(document.activeElement);
items[event.key==='Home'?0:event.key==='End'?items.length-1:(index+(event.key==='ArrowDown'?1:items.length-1))%items.length].focus();
}
},true);
addEventListener('resize',()=>closeAddSiteMenu());

function toggleCardMore(){
const old=document.getElementById('card-more-menu');if(old){closeCardMenus();return}
closeCardMenus();
const menu=document.createElement('div');menu.id='card-more-menu';menu.setAttribute('role','menu');
const row=(hex,label,attrs='')=>'<button role="menuitem" '+attrs+'>'+iconHtml(hex,'icon24')+'<span>'+label+'</span></button>';
menu.innerHTML='<button id="card-more-close" aria-label="Закрыть меню">'+iconHtml('E66C','icon24')+'</button>'+'<div class="card-check-submenu">'+row('EB4D','Проверка карточки','aria-haspopup="menu"')+'<div role="menu">'+[true,false].map(value=>row('EB4D',value?'Проверено':'Не проверено','data-verification="'+value+'" class="'+(value?'verified':'')+'"')).join('')+'</div></div>'+[['EAA9','Настройки'],['EB5E','SEO-аналитика'],['E6A7','Ссылка'],['EAB9','Открыть сайт'],[currentSite.published?'E62F':'E631',currentSite.published?'Снять с публикации':'Опубликовать']].map(([hex,label])=>row(hex,label,'data-card-command aria-label="'+(label==='Открыть сайт'?'Просмотр':label)+'"')).join('')+row('E658','Показать историю','data-card-extra="history"')+row('E663','Очистить кэш','data-card-extra="cache"')+row('E65C','Удалить','data-card-extra="delete" class="delete-command"');
document.getElementById('site-card').append(menu);document.getElementById('card-more').setAttribute('aria-expanded','true');menu.querySelector('[data-card-extra]').focus();
}
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.getElementById('card-more-menu')){event.preventDefault();event.stopImmediatePropagation();document.getElementById('card-more-menu').remove();document.getElementById('card-more').focus()}},true);

const cardHistoryEntries=[
['13 ноя','10:26','Изменены привязки сайта'],['4 ноя','17:56','Изменены привязки сайта'],['23 окт','11:09',"Фрейм 'Раскладка' изменен"],['14 авг','13:17',"Фрейм 'Раскладка' изменен"],['','',"Фрейм 'Карточка товара' изменен"],['','',"Фрейм 'Филиалы' изменен"],['','',"Фрейм 'Профиль' изменен"],['','',"Фрейм 'О нас' изменен"],['','',"Фрейм 'Заказы' изменен"],['','',"Фрейм 'Каталог' изменен"],['7 июл','10:26',"Задана новая тема сайта: 'b0770084-38c8-4be7-a92a-455bf2f1941b'"],['25 июн','18:29','Изменены привязки сайта'],['16 июн','11:37',"Фрейм 'О нас' изменен"]];
function drawCardHistory(query=''){
const list=document.getElementById('card-history-list');
const entries=cardHistoryEntries.filter(entry=>entry.join(' ').toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
list.innerHTML=entries.map(([date,time,description])=>'<div class="history-row"><div class="history-date">'+esc(date)+'<small>'+esc(time)+'</small></div><div>'+esc(description)+'</div><div>Изменение</div><div class="history-author"><span class="history-avatar">АВ</span><div><span>Авдеева Васили...</span><small>Аврора ТУР, ООО (...</small></div></div></div>').join('')||'<p class="history-empty">Ничего не найдено</p>';
}
function openCardHistory(){
document.getElementById('card-command-panel')?.remove();
const panel=document.createElement('section');panel.id='card-command-panel';panel.className='command-history';panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','История изменений');
panel.innerHTML='<div class="command-main"><header class="command-heading"><h2>История изменений</h2></header><div class="history-search"><input type="search" placeholder="Найти" aria-label="Найти в истории"><span class="history-filter" aria-hidden="true">'+iconHtml('E94C','icon24')+'</span></div><div id="card-history-list" aria-label="Изменения сайта"></div></div><aside class="command-tools">'+panelCloseButton('card-command-close','Закрыть историю изменений')+'</aside>';
stage.append(panel);drawCardHistory();panel.querySelector('input').addEventListener('input',event=>drawCardHistory(event.target.value));panel.querySelector('input').focus();
}
function showCacheNotice(){
document.getElementById('registry-toast')?.remove();clearTimeout(toastTimer);
const toast=document.createElement('div');toast.id='registry-toast';toast.className='cache-notice';toast.setAttribute('role','status');toast.innerHTML='<div><strong>Сброс кеша по сайтам</strong><p><span class="copied-check">✓</span><span>00:00&nbsp; Выполнено успешно</span></p></div><button aria-label="Закрыть уведомление">'+iconHtml('E66C','icon24')+'</button>';toast.querySelector('button').onclick=()=>toast.remove();stage.append(toast);toastTimer=setTimeout(()=>toast.remove(),5000);
}

function openCurrentSitePreview(){
 const host=document.createElement('div');host.innerHTML=cardPreview();
 const preview=host.querySelector('.site-preview').innerHTML;
 const page=sitePagePreviews[cardPage===0?0:cardPage-1];
 const win=window.open('', '_blank');if(!win)return;
 win.opener=null;win.document.open();
 win.document.write('<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="'+esc(document.baseURI)+'"><title>'+esc(currentSite.name)+' — '+esc(page.name)+'</title><link rel="stylesheet" href="styles.css"><style>html,body{height:auto;overflow:auto;background:#fff;margin:0}.standalone-site{max-width:1600px;margin:auto}.standalone-site>img{display:block;width:100%;height:auto}.standalone-site .site-page-image{height:auto;overflow:visible}</style></head><body><div class="standalone-site">'+preview+'</div></body></html>');
 win.document.close();
}

// Access panel content supplied in the user's reference screenshot.
const siteAccessPeople=[
['Александр','Ал','#dcd0e9','Полный с настройками'],
['Анисья','Ан','#c4e0e2','Полный доступ'],
['Диман','Ди','#e7c2d0','Полный доступ'],
['Иван','Ив','#d8dac2','Полный с настройками'],
['Легион','','','Полный доступ','Техподдержка','access-legion.png'],
['Пригл','Пр','#dcd0e9','Просмотр'],
['Сосиска','','','Полный доступ','Верховный друид','access-sosiska.png'],
['Тимур Фларидович','Ти','#dcd0e9','Полный доступ'],
['. Человек','','','Полный доступ','Художник','access-person.png'],
['689 689','','','Полный доступ','Заклинатель туалета','access-689.png'],
['Abramovs Viktor','Ab','#dcd0e9','Полный с настройками'],
['assembly fix','As','#c4e0e2','Полный доступ'],
['asssaas','As','#c4e0e2','Полный доступ'],
['auto sil84','Au','#d8dac2','Полный доступ'],
['bas cust-basic-account','Ba','#dcd0e9','Полный доступ'],
['Bell Mary','Be','#d8dac2','Полный доступ','Подмышка Горькая']
];
const accessDepartments=[['Администрация',3],['Отдел продаж',7],['Отдел маркетинга',4],['Служба поддержки',6],['Бухгалтерия',3],['Отдел разработки',5],['Отдел кадров',2],['Отдел закупок',4],['Юридический отдел',2],['Отдел логистики',5],['Региональный офис',4],['Проектный офис',3],['Отдел аналитики',2],['Учебный центр',3],['Отдел качества',2],['Склад',4],['Сервисный центр',3],['Отдел сопровождения',5],['Управление персоналом',2]];
const accessRoles=[['Администратор сайта','Полный с настройками'],['Редактор сайта','Просмотр и изменение'],['Контент-менеджер','Просмотр и изменение'],['Маркетолог','Просмотр и изменение'],['Руководитель отдела','Полный с настройками'],['Аналитик','Просмотр'],['Специалист поддержки','Просмотр и изменение'],['Менеджер по продажам','Просмотр'],['Дизайнер','Просмотр и изменение'],['Разработчик','Полный с настройками'],['Администратор системы','Полный с настройками'],['Директор','Просмотр и изменение'],['Бухгалтер','Просмотр'],['Специалист по рекламе','Просмотр и изменение'],['Аудитор','Просмотр'],['Наблюдатель','Просмотр']];
let accessCategory='Сотрудники',accessMulti=false;
const accessMarked=new Set();
function settingsIntegrationContent(){return '<div class="integrations-list">'+[
['metrika','Яндекс Метрика и Директ','Объединяет данные поведения пользователей на сайте и расходы на рекламу. Позволяет автоматически собирать статистику по заданным сайтам и рекламным кампаниям для сквозной аналитики'],
['webmaster','Яндекс Вебмастер','Сервис поможет провести оптимизацию сайта для поисковых систем'],
['topvisor','Топвизор','Инструментальный сервис для аналитики сайта в поисковиках и нейросетях']
].map(([key,title,description])=>'<div class="integration-card'+(key==='topvisor'?' is-disabled':'')+'"'+(key==='topvisor'?' aria-disabled="true"':' tabindex="0"')+'><img src="assets/integration-'+key+'.png" width="52" height="52" alt=""><div><h3>'+title+'</h3><p>'+description+'</p></div></div>').join('')+'</div>'}
function settingsAccessContent(){return '<section class="settings-access" aria-label="Кто имеет доступ"><div class="access-heading"><h3>Кто имеет доступ</h3><nav class="access-tabs tabs tabs--no-border tabs--style-unaccented tabs--padding-null" role="tablist" aria-label="Категории доступа">'+['Сотрудники','Отделы','Роли'].map(label=>'<button class="tabs__item" role="tab" data-access-tab="'+label+'" aria-selected="'+(label===accessCategory)+'"><span class="tabs__caption">'+label+'</span></button>').join('')+'</nav></div><div class="access-toolbar"><input id="access-search" type="search" placeholder="Найти" aria-label="Найти запись доступа"><button class="btn btn--link btn--style-secondary btn--size-m btn--icon access-multi" aria-label="Множественный выбор записей" aria-pressed="'+accessMulti+'"><span class="btn__icon">'+iconHtml(accessMulti?'EB8E':'E644','icon24')+'</span></button><button class="access-allowed">Разрешено</button><button class="tool access-filter" aria-label="Фильтр доступа" aria-disabled="true">'+iconHtml('E94C','icon24')+'</button></div><div class="access-operations" hidden></div><div class="access-people scroll-shadow" role="list"></div><div class="access-scrollbar" aria-hidden="true"><span class="access-scrollbar-thumb"></span></div></section>'}
function accessRecords(){return accessCategory==='Сотрудники'?siteAccessPeople:accessCategory==='Отделы'?accessDepartments:accessRoles}
function accessCheckbox(label,index,checked){return '<label class="checkbox checkbox--outlined access-check"><input class="checkbox__input" type="checkbox" aria-label="'+esc(label)+'" '+(index==='all'?'data-access-all':'data-access-check="'+index+'"')+(checked?' checked':'')+'><span class="checkbox__box" aria-hidden="true"></span></label>'}
function renderAccessPeople(query=document.getElementById('access-search')?.value||''){
const list=document.querySelector('.access-people');if(!list)return;
const matched=accessRecords().map((record,index)=>({record,index})).filter(({record})=>record[0].toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
list.closest('.settings-access').classList.toggle('is-multi',accessMulti);
const multiButton=document.querySelector('.access-multi');multiButton.setAttribute('aria-pressed',accessMulti);multiButton.querySelector('.btn__icon').innerHTML=iconHtml(accessMulti?'EB8E':'E644','icon24');
list.innerHTML=matched.map(({record,index})=>{
const [name,initials,color,permission,subtitle,photo]=record;
const checked=accessMarked.has(accessCategory+':'+index);
let content='';
if(accessCategory==='Сотрудники')content=(photo?'<img class="access-avatar" src="assets/'+photo+'" width="40" height="40" alt="">':'<span class="access-avatar" style="background:'+color+'">'+esc(initials)+'</span>')+'<div class="access-person-name">'+esc(name)+(subtitle?'<small>'+esc(subtitle)+'</small>':'')+'</div><span class="access-permission">'+esc(permission)+'</span>';
else if(accessCategory==='Отделы')content='<span class="access-department-arrow" aria-hidden="true">'+iconHtml('EA8B')+'</span><span class="access-person-name">'+esc(name)+' <span class="access-department-count">('+initials+')</span></span>';
else content='<span class="access-person-name">'+esc(name)+'</span><span class="access-permission">'+esc(initials)+'</span>';
return '<div class="access-person access-person--'+(accessCategory==='Сотрудники'?'employee':accessCategory==='Отделы'?'department':'role')+(checked?' is-marked':'')+'" role="listitem">'+accessCheckbox('Отметить '+name,index,checked)+content+'</div>';
}).join('')||'<p class="access-empty">Ничего не найдено</p>';
const bar=document.querySelector('.access-operations');const count=[...accessMarked].filter(key=>key.startsWith(accessCategory+':')).length;
bar.hidden=!accessMulti;bar.innerHTML=accessCheckbox('Отметить все записи','all',!!matched.length&&matched.every(({index})=>accessMarked.has(accessCategory+':'+index)))+'<span>'+(count?'Отмечено '+count:'Отметить')+'</span><button class="btn btn--link btn--style-default btn--size-m" aria-disabled="true"><span class="btn__icon">'+iconHtml('E604','icon24')+'</span><span class="btn__caption">Выгрузить</span></button>'+(count?'<button class="btn btn--link btn--style-default btn--size-m" aria-disabled="true"><span class="btn__icon access-reset-icon">'+iconHtml('E663','icon24')+'</span><span class="btn__caption">Сбросить индивидуальные настройки</span></button>':'')+'<button class="access-operations-close" aria-label="Закрыть множественный выбор">'+iconHtml('E66C','icon24')+'</button>';
const all=bar.querySelector('input');all.indeterminate=count>0&&!all.checked;
requestAnimationFrame(syncAccessScrollbar);
}
stage.addEventListener('click',event=>{
 const tab=event.target.closest('[data-access-tab]');
 if(tab){accessCategory=tab.dataset.accessTab;accessMulti=false;accessMarked.clear();document.querySelectorAll('[data-access-tab]').forEach(button=>button.setAttribute('aria-selected',button===tab));document.getElementById('access-search').value='';renderAccessPeople();return}
 if(event.target.closest('.access-multi,.access-operations-close')){accessMulti=event.target.closest('.access-operations-close')?false:!accessMulti;if(!accessMulti)accessMarked.clear();const button=document.querySelector('.access-multi');button.setAttribute('aria-pressed',accessMulti);button.querySelector('.btn__icon').innerHTML=iconHtml(accessMulti?'EB8E':'E644','icon24');renderAccessPeople()}
});
stage.addEventListener('change',event=>{
 if(event.target.matches('[data-access-check]')){accessMulti=true;const key=accessCategory+':'+event.target.dataset.accessCheck;if(event.target.checked)accessMarked.add(key);else accessMarked.delete(key);document.querySelector('.access-multi').setAttribute('aria-pressed','true');renderAccessPeople()}
 if(event.target.matches('[data-access-all]')){const checked=event.target.checked;const query=document.getElementById('access-search').value.toLocaleLowerCase('ru');accessRecords().forEach((record,index)=>{if(record[0].toLocaleLowerCase('ru').includes(query)){const key=accessCategory+':'+index;if(checked)accessMarked.add(key);else accessMarked.delete(key)}});renderAccessPeople()}
});
stage.addEventListener('click',event=>{
const button=event.target.closest('[data-settings-section]');if(!button)return;
const panel=button.closest('.command-settings');const content=panel.querySelector('.settings-content');
if(!panel._integrationContent)panel._integrationContent=content.innerHTML;
panel.querySelectorAll('[data-settings-section]').forEach(item=>{if(item===button)item.setAttribute('aria-current','page');else item.removeAttribute('aria-current')});
content.innerHTML=button.dataset.settingsSection==='access'?settingsAccessContent():panel._integrationContent;
if(button.dataset.settingsSection==='access'){accessCategory='Сотрудники';accessMulti=false;accessMarked.clear();content.innerHTML=settingsAccessContent();renderAccessPeople()}
});
stage.addEventListener('input',event=>{if(event.target.id==='access-search')renderAccessPeople(event.target.value)});

stage.addEventListener('click',event=>{if(event.target.closest('#settings-history'))openCardHistory()});

function syncAccessScrollbar(){
 const surface=document.querySelector('.settings-access');if(!surface)return;
 const list=surface.querySelector('.access-people'),track=surface.querySelector('.access-scrollbar');
 const height=list.clientHeight,range=list.scrollHeight-height;
 track.hidden=range<=1;track.style.top=(list.getBoundingClientRect().top-surface.getBoundingClientRect().top)+'px';
 const thumbHeight=Math.max(24,height*height/list.scrollHeight);
 const thumb=track.firstElementChild;thumb.style.height=thumbHeight+'px';thumb.style.transform='translateY('+(range>0?list.scrollTop/range*(height-thumbHeight):0)+'px)';
}
stage.addEventListener('scroll',event=>{if(event.target.matches?.('.access-people'))syncAccessScrollbar()},true);
window.addEventListener('resize',syncAccessScrollbar);
let accessScrollDrag=null;
stage.addEventListener('pointerdown',event=>{
 const track=event.target.closest('.access-scrollbar');if(!track)return;
 const list=track.closest('.settings-access').querySelector('.access-people'),thumb=track.firstElementChild;
 const travel=track.clientHeight-thumb.getBoundingClientRect().height,range=list.scrollHeight-list.clientHeight;
 if(event.target===track){list.scrollTop=(event.clientY-track.getBoundingClientRect().top-thumb.getBoundingClientRect().height/2)/travel*range;syncAccessScrollbar()}
 accessScrollDrag={target:event.target,y:event.clientY,scroll:list.scrollTop,list,travel,range};event.target.setPointerCapture(event.pointerId);event.preventDefault();
});
stage.addEventListener('pointermove',event=>{if(!accessScrollDrag)return;const d=accessScrollDrag;if(d.travel>0)d.list.scrollTop=d.scroll+(event.clientY-d.y)*d.range/d.travel;syncAccessScrollbar()});
stage.addEventListener('pointerup',()=>{accessScrollDrag=null});
stage.addEventListener('pointercancel',()=>{accessScrollDrag=null});
