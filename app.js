const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header?.classList.toggle('scrolled',scrollY>30));
const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
const revealAll=()=>document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
revealAll();
const dot=document.querySelector('.cursor-dot'); addEventListener('pointermove',e=>{if(dot){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px'}});
const PHOTOS={
  'gemstone-sourcing.html':['Gemstones, sourcing and material detail','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'diamonds.html':['Diamond and gemstone detail','https://images.unsplash.com/photo-1643229064899-d5f7fbdb1e1f?auto=format&fit=crop&w=1500&q=85'],
  'fancy-colour-diamonds.html':['Colour, cut and light','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'fancy-shaped-diamonds.html':['Gemstone forms and faceting','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'precious-semi-precious-gemstones.html':['Precious and semi-precious stones','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'request-a-stone.html':['A stone sourcing request','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'designer-partnerships.html':['Jewellery and collection exploration','https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'],
  'collection-development.html':['Collection and material studies','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'sampling-prototyping.html':['A close study of gemstone form','https://images.unsplash.com/photo-1643229064899-d5f7fbdb1e1f?auto=format&fit=crop&w=1500&q=85'],
  'collaboration-enquiry.html':['Creative collaboration and material','https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'],
  'custom-brass-components.html':['Fashion hardware and metal detail','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'fashion-hardware.html':['Hardware as a design detail','https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1500&q=85'],
  'jewellery-components.html':['Component form and finish','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'garment-metal-trims.html':['Metal trim and fashion detail','https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1500&q=85'],
  'surface-finishes-plating.html':['Reflective surfaces and finish','https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1500&q=85'],
  'product-development-process.html':['From material to component','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'bulk-manufacturing.html':['A closer look at hardware detail','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'request-a-quote.html':['Start with the component requirement','https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1500&q=85'],
  'luxury-gifting.html':['Objects, materials and presentation','https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'],
  'bespoke-gemstone-objects.html':['Gemstone-led object inspiration','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'corporate-executive-gifting.html':['Considered objects and gifting','https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'],
  'commission-a-piece.html':['A bespoke brief begins with material','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'selected-works.html':['Material studies and visual references','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'material-library.html':['A material atlas of stones and surfaces','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'quality-compliance.html':['Detail, specification and review','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'philosophy.html':['Materials as the start of possibility','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'expertise.html':['A connected approach to materials','https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'],
  'process.html':['The path from brief to development','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'],
  'journal.html':['Material notes and visual research','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'gemstone-buying-guides.html':['Gemstone sourcing knowledge','https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'],
  'fashion-hardware-guides.html':['Fashion hardware and finish detail','https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1500&q=85'],
  'faqs.html':['Questions before a project begins','https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'],
  'project-brief.html':['Bring a reference, drawing or idea','https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85']
};
const file=location.pathname.split('/').pop()||'index.html';
const hero=document.querySelector('.page-hero');
if(hero){
 const container=hero.querySelector('.container');
 if(container){
   const kicker=container.querySelector('.kicker'), h1=container.querySelector('h1'), lead=container.querySelector('.lead');
   if(kicker&&h1&&lead){
    const copy=document.createElement('div');copy.className='page-hero-copy';copy.append(kicker,h1,lead);
    const data=PHOTOS[file]||['Material, design and development', 'https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'];
    const visual=document.createElement('figure');visual.className='page-hero-visual';
    visual.innerHTML=`<img src="${data[1]}" alt="${data[0]} — illustrative editorial photography" loading="eager"><figcaption><span>FACETTE&CO / MATERIAL STUDY</span><span>VISUAL REFERENCE · NOT CLIENT PROJECT WORK</span></figcaption><i class="photo-spark"></i>`;
    container.replaceChildren(copy,visual);container.classList.add('page-hero-layout');
   }
 }
}
const materialData={source:{title:'Gemstones & diamonds',text:'Requirement-led sourcing for professional buyers, with a focus on diamonds, precious gemstones, semi-precious gemstones, fancy-colour diamonds and fancy-shaped diamonds.',img:'https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1500&q=85'},collaborate:{title:'Jewellery design & collections',text:'Material sourcing, jewellery development, collection support, sampling and prototyping for designers and brands.',img:'https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1500&q=85'},develop:{title:'Fashion metal components',text:'Custom brass components, fashion hardware, jewellery components, garment trims, finishes, plating, sampling and development.',img:'https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1500&q=85'},commission:{title:'Luxury objects & gifting',text:'Bespoke gemstone-led objects and executive or corporate gifting developed around a specific brief.',img:'https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1500&q=85'}};
document.querySelectorAll('.material-btn').forEach(btn=>btn.addEventListener('mouseenter',()=>{document.querySelectorAll('.material-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=materialData[btn.dataset.material],img=document.querySelector('.material-image');if(img&&d){img.style.backgroundImage=`linear-gradient(180deg,rgba(7,28,22,.02),rgba(7,28,22,.08)),url("${d.img}")`;document.querySelector('.material-title').textContent=d.title;document.querySelector('.material-text').textContent=d.text}}));
// Add real editorial photography to every former placeholder panel.
const imageCards=[
 ['https://images.unsplash.com/photo-1705575567619-c9774a05852d?auto=format&fit=crop&w=1000&q=85','Material / gemstones'],
 ['https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1000&q=85','Sample / component'],
 ['https://images.unsplash.com/photo-1758297679787-12524226e30f?auto=format&fit=crop&w=1000&q=85','Surface / finish'],
 ['https://images.unsplash.com/photo-1774504347264-bee34edfd8aa?auto=format&fit=crop&w=1000&q=85','Colour / material study'],
 ['https://images.unsplash.com/photo-1708513167783-f151d0ac2a46?auto=format&fit=crop&w=1000&q=85','Prototype / visual reference'],
 ['https://images.unsplash.com/photo-1643229064899-d5f7fbdb1e1f?auto=format&fit=crop&w=1000&q=85','Finished expression']
];
document.querySelectorAll('.evidence-card').forEach((card,i)=>{const d=imageCards[i%imageCards.length];card.style.backgroundImage=`linear-gradient(180deg,rgba(6,26,20,.02) 20%,rgba(6,26,20,.68) 100%),url("${d[0]}")`;card.style.backgroundSize='cover';card.style.backgroundPosition='center';const span=card.querySelector('span');if(span)span.textContent=d[1];card.setAttribute('aria-label',d[1]+' — illustrative editorial image');});
const metalVisual=document.querySelector('.metal-visual');if(metalVisual){metalVisual.style.backgroundImage='linear-gradient(180deg,rgba(0,30,22,.04),rgba(0,30,22,.18)),url("https://images.unsplash.com/photo-1758296985914-72a38db20c4d?auto=format&fit=crop&w=1400&q=85")';metalVisual.style.backgroundSize='cover';metalVisual.style.backgroundPosition='center';const disc=metalVisual.querySelector('.metal-disc');if(disc)disc.style.display='none';}
document.querySelectorAll('.js-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const s=form.querySelector('.success');if(s)s.style.display='block';form.querySelector('button')?.setAttribute('disabled','true')}));
const ring=document.querySelector('.ring-photo');if(ring){let targetX=0,targetY=0;addEventListener('pointermove',e=>{targetX=(e.clientX/innerWidth-.5)*9;targetY=(e.clientY/innerHeight-.5)*-8;ring.style.setProperty('--rx',targetX+'deg');ring.style.setProperty('--ry',targetY+'deg')});}
const menu=document.querySelector('.menu');if(menu){menu.addEventListener('click',()=>{let panel=document.querySelector('.mobile-nav');if(!panel){panel=document.createElement('nav');panel.className='mobile-nav';panel.innerHTML='<a href="gemstone-sourcing.html">Materials</a><a href="designer-partnerships.html">Collaborate</a><a href="custom-brass-components.html">Metalworks</a><a href="luxury-gifting.html">Luxury Objects</a><a href="journal.html">Journal</a><a href="project-brief.html">Start a Project ↗</a>';document.body.append(panel)}panel.classList.toggle('open');menu.setAttribute('aria-expanded',panel.classList.contains('open')?'true':'false')});}
