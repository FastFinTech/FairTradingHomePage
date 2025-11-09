// Small interactions: smooth scroll and demo signup (dark-theme only)
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const href = anchor.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });

  // Demo signup (no backend) — show a friendly toast
  const form = document.getElementById('signup');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const role = document.getElementById('role').value;
      if(!email) return alert('Please enter a valid email address.');
      // Simple success state
      showToast(`Thanks — we'll be in touch. (${role})`);
      form.reset();
    });
  }

  function showToast(msg){
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.right = '20px';
    t.style.bottom = '20px';
    t.style.background = 'linear-gradient(90deg,#00b894,#7f8cff)';
    t.style.color = '#031';
    t.style.padding = '12px 16px';
    t.style.borderRadius = '10px';
    t.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
    t.style.fontWeight = '600';
    document.body.appendChild(t);
    setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity 400ms';setTimeout(()=>t.remove(),450)},2200);
  }
});
