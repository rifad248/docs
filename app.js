const d=document;
const c=d.getElementById('countdown');
if(c){let target=Date.now()+5*24*60*60*1000;setInterval(()=>{let ms=target-Date.now();if(ms<0)ms=0;let D=Math.floor(ms/86400000),H=Math.floor(ms%86400000/3600000),M=Math.floor(ms%3600000/60000),S=Math.floor(ms%60000/1000);c.textContent=`${D}d ${H}h ${M}m ${S}s`;},1000)}
let shown=false;d.addEventListener('mouseout',e=>{if(e.clientY<=0&&!shown){shown=true;const m=d.getElementById('exitModal');if(m)m.style.display='grid';}});
d.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').style.display='none');
function renderCert(){const n=d.getElementById('certName');const out=d.getElementById('certOut');if(n&&out){d.getElementById('genCert').onclick=()=>out.innerHTML=`<h2>Certificate of Completion</h2><p>This certifies <b>${n.value||'Student Name'}</b> completed <b>MVP Course</b>.</p><p>${new Date().toDateString()}</p>`;}}
renderCert();
