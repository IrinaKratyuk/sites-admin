"use strict";
/**
 * Shared navigation menu, Figma KFXZ9M8t7V7ME3FGrdEFA3 / 19791:40142.
 * Click variant: 240 px, one column, 30 px rows, 16 px labels.
 * Usage: createNavigationMenu({title, icon, items:[{id,label,disabled,counter}],
 *   activeItem, closeIcon, onSelect, onClose}). Returns a detached HTMLElement.
 * The caller owns positioning and dismissal outside the menu.
 */
function createNavigationMenu({title,icon,items,activeItem=null,closeIcon='assets/navigation-menu-close.svg',onSelect=()=>{},onClose=()=>{}}){
 const root=document.createElement('div');root.className='navigation-menu';root.setAttribute('role','menu');root.setAttribute('aria-label',title);
 const surface=document.createElement('div');surface.className='navigation-menu__surface';
 const heading=document.createElement('div');heading.className='navigation-menu__heading';
 const headingRow=document.createElement('div');headingRow.className='navigation-menu__heading-row';
 const glyph=document.createElement('i');glyph.className='navigation-menu__icon';glyph.setAttribute('aria-hidden','true');glyph.textContent=String.fromCodePoint(parseInt(icon,16));
 const caption=document.createElement('span');caption.className='navigation-menu__caption';caption.textContent=title;
 headingRow.append(glyph,caption);heading.append(headingRow);
 const list=document.createElement('div');list.className='navigation-menu__items';
 for(const item of items){
  const button=document.createElement('button');button.type='button';button.className='navigation-menu__item';button.setAttribute('role','menuitem');button.dataset.menuItem=item.id;
  if(item.id===activeItem){button.classList.add('is-current');button.setAttribute('aria-current','page')}
  if(item.disabled)button.setAttribute('aria-disabled','true');
  const label=document.createElement('span');label.className='navigation-menu__label';label.textContent=item.label;button.append(label);
  if(item.counter!==undefined&&item.counter!==null){const counter=document.createElement('span');counter.className='navigation-menu__counter';counter.textContent=String(item.counter);button.append(counter)}
  button.addEventListener('click',()=>{if(!item.disabled)onSelect(item.id)});list.append(button);
 }
 surface.append(heading,list);
 const close=document.createElement('button');close.type='button';close.className='navigation-menu__close';close.setAttribute('aria-label','Закрыть меню раздела');
 const image=document.createElement('img');image.src=closeIcon;image.width=12;image.height=12;image.alt='';close.append(image);close.addEventListener('click',onClose);
 root.append(surface,close);
 root.addEventListener('keydown',event=>{
  if(event.key==='Escape'){event.preventDefault();event.stopPropagation();onClose();return}
  const keys=['ArrowDown','ArrowUp','Home','End'];if(!keys.includes(event.key))return;
  event.preventDefault();const enabled=[...list.querySelectorAll('button:not([aria-disabled="true"])')];if(!enabled.length)return;
  const current=enabled.indexOf(document.activeElement),index=event.key==='Home'?0:event.key==='End'?enabled.length-1:event.key==='ArrowDown'?(current+1)%enabled.length:(current-1+enabled.length)%enabled.length;enabled[index].focus();
 });
 return root;
}
