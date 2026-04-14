
    const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
    menuBtn?.addEventListener('click',()=>navLinks.classList.toggle('open'));
    document.getElementById('adminOpen').onclick=()=>document.getElementById('adminModal').classList.add('active');
    document.getElementById('adminClose').onclick=()=>document.getElementById('adminModal').classList.remove('active');
    window.addEventListener('click',e=>{const modal=document.getElementById('adminModal');if(e.target===modal)modal.classList.remove('active')});
    document.getElementById('adminForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('adminDashboard').classList.add('active');document.getElementById('adminModal').classList.remove('active')});
    document.getElementById('logoutBtn').onclick=()=>document.getElementById('adminDashboard').classList.remove('active');
    document.querySelectorAll('.side button[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.side button[data-tab]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.admin-section').forEach(s=>s.classList.remove('active'));document.getElementById(btn.dataset.tab).classList.add('active')}));
    document.getElementById('contactForm').addEventListener('submit',async e=>{e.preventDefault();await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:e.target[0].value,email:e.target[1].value,subject:e.target[2].value,message:e.target[3].value})});alert('Thank you. We will respond within 24–48 hours.');e.target.reset()});
    document.getElementById('paypalBtn').addEventListener('click',e=>{e.preventDefault();location.href='mailto:+447474740252?subject=PayPal%20Donation%20Inquiry'});
  