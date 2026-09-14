(() => {
'use strict';
const root=document.documentElement;
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduced.matches,scheduled=false;
const button=document.querySelector('.motion-toggle');
const progress=document.querySelector('.progress');
const hero=document.querySelector('.hero');
const person=document.querySelector('.hero-person');
const heroType=document.querySelector('.hero-type');
const ritual=document.querySelector('.ritual-scroll');
const stage=document.querySelector('.ritual-stage');
const lines=[...document.querySelectorAll('.ritual-line')];
const meter=document.querySelector('.ritual-meter span');
const clamp=(v,min=0,max=1)=>Math.min(max,Math.max(min,v));
function render(){
 scheduled=false;
 const max=document.documentElement.scrollHeight-innerHeight;
 progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;
 if(paused){person.style.transform='';heroType.style.transform='';return;}
 const y=clamp(scrollY,0,hero.offsetHeight);
 person.style.transform=`translateY(${y*.10}px) scale(${1+y*.000045})`;
 heroType.style.transform=`translateY(${-y*.11}px)`;
 const rect=ritual.getBoundingClientRect();
 const p=clamp(-rect.top/Math.max(1,ritual.offsetHeight-stage.offsetHeight));
 lines.forEach((line,i)=>line.classList.toggle('active',i===Math.min(2,Math.floor(p*3))));
 meter.style.transform=`scaleX(${p})`;
}
function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(render);}}
function setMotion(value){paused=value;root.classList.toggle('motion-off',paused);button.setAttribute('aria-pressed',String(paused));button.setAttribute('aria-label',paused?'Activar animaciones':'Pausar animaciones');button.firstElementChild.textContent=paused?'▷':'Ⅱ';schedule();}
button.addEventListener('click',()=>setMotion(!paused));
reduced.addEventListener('change',e=>setMotion(e.matches));
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});
if('IntersectionObserver' in window){
 root.classList.add('js');
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.12});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
 const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  counterObserver.unobserve(entry.target);
  if(paused)return;
  const el=entry.target,end=Number(el.dataset.count),start=performance.now();
  const tick=time=>{const p=clamp((time-start)/1000);el.textContent=paused?end:Math.round(end*(1-Math.pow(1-p,3)));if(p<1&&!paused)requestAnimationFrame(tick);};requestAnimationFrame(tick);
 }),{threshold:.8});
 document.querySelectorAll('[data-count]').forEach(el=>counterObserver.observe(el));
}
setMotion(paused);
})();
