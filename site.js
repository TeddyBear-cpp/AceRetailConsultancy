const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.primary-nav');
if(menuButton&&menu){
  const closeMenu=()=>{menu.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu')};
  menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';menu.classList.toggle('is-open',!isOpen);menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Open menu':'Close menu')});
  menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
}

const contactForm=document.querySelector('#contact-form');
if(contactForm){
  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!contactForm.reportValidity())return;
    const data=new FormData(contactForm);
    const name=String(data.get('name')||'').trim();
    const company=String(data.get('company')||'').trim();
    const email=String(data.get('email')||'').trim();
    const message=String(data.get('message')||'').trim();
    const subject=`Retail consultancy enquiry${company?` — ${company}`:''}`;
    const body=`Hello Ace Retail Consultancy,\n\n${message}\n\nName: ${name}\nCompany: ${company||'Not provided'}\nEmail: ${email}`;
    window.location.href=`mailto:aceretailconsultancyzambia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
