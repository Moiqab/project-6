const togglemenu=document.getElementById('toggle');
const modal=document.getElementById('modal');
const open=document.getElementById('open');
const close=document.getElementById('close');

togglemenu.addEventListener('click' , ()=>{
    document.body.classList.toggle('show-nav')
});
open.addEventListener('click', ()=>modal.classList.add('show-model'));
close.addEventListener('click', ()=> modal.classList.remove('show-model'));
window.addEventListener('click', e=>
e.target === modal ? modal.classList.remove('show-model'):false
)

