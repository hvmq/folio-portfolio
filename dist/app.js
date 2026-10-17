(() => {
  'use strict';
  const {projects, contactEmail} = window.FOLIO;
  const grid = document.querySelector('#project-grid');
  const dialog = document.querySelector('#project-dialog');
  const contactDialog = document.querySelector('#contact-dialog');
  const previews = {
    objects: `<div class="mock-objects preview-inner"><div class="mock-nav"><strong>objects.</strong><span>Collection &nbsp; About &nbsp; Bag (0)</span></div><div class="object-copy"><h3>Less, but<br><i>better.</i></h3><p>Những đồ vật được chọn lọc.<br>Cho một không gian của riêng bạn.</p><span class="mock-button">Explore collection &nbsp; ↗</span></div><img src="assets/chair.jpg" alt="Ghế nội thất tối giản" loading="lazy" width="1000" height="1000"></div>`,
    orbit: `<div class="mock-orbit preview-inner"><div class="mock-nav"><strong>◉ orbit</strong><span>Product &nbsp; Pricing &nbsp; <b class="small-pill">Get started ↗</b></span></div><div class="orbit-eyebrow">LESS BUSYWORK. MORE GREAT WORK.</div><h3>Big ideas.<br><em>One shared space.</em></h3><p>Mọi ý tưởng. Mọi công việc. Cùng một quỹ đạo.</p><span class="orbit-cta">Start your journey &nbsp; ↗</span><div class="orbit-lines"></div><div class="orbit-tile left">YOUR PRODUCTIVITY<b>Make room.</b>For what matters most. ✦</div><div class="orbit-tile right">THIS WEEK<b>All in sync. ↗</b>Plan. Create. Collaborate.</div></div>`,
    journal: `<div class="mock-journal preview-inner"><div class="mock-nav"><strong>The Journal.</strong><span>Design &nbsp; Living &nbsp; Stories ↗</span></div><div class="journal-heading"><h3>Ở đây, mình<br><i>chậm lại một chút.</i></h3><span>ISSUE NO. 01 / 2026</span></div><div class="journal-feature"><img src="assets/architecture.jpg" alt="Kiến trúc hiện đại dưới ánh sáng tự nhiên" loading="lazy" width="1000" height="1000"><div><small>DESIGN & LIVING · 5 MIN READ</small><h4>Khoảng trống cũng<br>là một phần của<br>câu chuyện.</h4><p>Tìm cảm hứng từ những điều giản đơn, trong không gian ta sống mỗi ngày.</p></div></div></div>`,
    pulse: `<div class="mock-pulse preview-inner"><div class="pulse-sidebar"><strong>pulse<span style="color:#8faa5f">.</span></strong><span class="selected">◫ &nbsp; Tổng quan</span><span>⌁ &nbsp; Phân tích</span><span>▤ &nbsp; Đơn hàng</span><span>◈ &nbsp; Sản phẩm</span><span>⚙ &nbsp; Cài đặt</span></div><div class="pulse-main"><div class="pulse-top"><h3>Tổng quan</h3><span>Tháng này ⌄</span></div><div class="pulse-stats"><div class="pulse-stat">Doanh thu<b>128.4M</b><small>↗ 12.8%</small></div><div class="pulse-stat">Đơn hàng<b>1,284</b><small>↗ 8.2%</small></div><div class="pulse-stat">Khách hàng<b>856</b><small>↗ 6.4%</small></div></div><div class="pulse-chart">Phân tích doanh thu<div class="chart-bars">${[40,65,49,75,60,85,68,92,75,95,83,100].map(n=>`<i style="height:${n}%"></i>`).join('')}</div></div></div></div>`,
    escape: `<div class="mock-escape preview-inner"><img src="assets/coast.jpg" alt="Mặt hồ xanh giữa những dãy núi" loading="lazy" width="1200" height="800"><div class="mock-nav"><strong>escape.</strong><span>Destinations &nbsp; Our story &nbsp; Let's go ↗</span></div><div class="escape-copy"><small>GO SOMEWHERE THAT FEELS LIKE YOU.</small><h3>Somewhere<br><i>you belong.</i></h3><p>Rời những quen thuộc. Tìm những bình yên.</p></div><div class="escape-search"><span>Đi đâu? ⌄</span><span>Chọn ngày ⌄</span><span>2 khách ⌄</span><b>Khám phá ↗</b></div></div>`,
    moka: `<div class="mock-moka preview-inner"><div class="mock-nav"><strong>moka.</strong><span>Our story &nbsp; Menu &nbsp; Visit us ↗</span></div><div class="moka-copy"><small>COFFEE. COMFORT. GOOD COMPANY.</small><h3>Slow mornings.<br><i>Good coffee.</i></h3><p>Một chỗ ngồi quen.<br>Một hương vị khiến bạn muốn trở lại.</p><span class="mock-button">Khám phá thực đơn ↗</span></div><img src="assets/coffee.jpg" alt="Ly cà phê và những hạt cà phê rang" loading="lazy" width="1000" height="1000"></div>`
  };
  grid.innerHTML = projects.map(p => `<article class="project-card" data-category="${p.category}"><button class="project-preview preview-${p.id}" data-project="${p.id}" aria-label="Xem dự án ${p.name}">${previews[p.id]}<span class="preview-arrow" aria-hidden="true">↗</span></button><div class="card-info"><div><h3><button class="project-title" data-project="${p.id}">${p.name}</button></h3><p class="card-caption">${p.subtitle}</p></div><span class="card-category">${p.label}</span></div></article>`).join('');
  document.querySelectorAll('.card-info h3').forEach(h=>h.style.margin='0');

  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
    let count=0;
    document.querySelectorAll('.project-card').forEach(card=>{card.hidden=button.dataset.filter!=='all' && card.dataset.category!==button.dataset.filter;if(!card.hidden) count++;});
    document.querySelector('#filter-status').textContent=`Đang hiển thị ${count} dự án.`;
  }));
  const showDialog = el => {el.showModal(); document.body.classList.add('modal-open');};
  grid.addEventListener('click', e => {
    const button=e.target.closest('[data-project]');if(!button)return;
    const p=projects.find(p=>p.id===button.dataset.project);
    document.querySelector('#project-detail').innerHTML=`<div class="detail-preview" style="background:${p.color}"><div class="project-preview preview-${p.id}">${previews[p.id]}</div></div><p class="detail-meta">${p.label.toUpperCase()} · CONCEPT 2026</p><h2 id="dialog-title">${p.name}</h2><p class="detail-description">${p.description}</p><div class="detail-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><a class="button dark" href="demo/?project=${p.id}" target="_blank" rel="noopener">Trải nghiệm demo <span>↗</span></a><p class="detail-note">Dự án minh họa khả năng thiết kế và phát triển. Nội dung, dữ liệu và thương hiệu đều là concept.</p>`;
    showDialog(dialog);
  });
  document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>showDialog(contactDialog)));
  document.querySelectorAll('dialog').forEach(el=>{
    el.querySelector('[data-close]').addEventListener('click',()=>el.close());
    el.addEventListener('click',e=>{if(e.target===el){const r=el.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)el.close();}});
    el.addEventListener('close',()=>document.body.classList.remove('modal-open'));
  });
  document.querySelector('#contact-form').addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(e.target);
    const brief=`BRIEF DỰ ÁN WEBSITE\n\nTên: ${data.get('name')}\nEmail: ${data.get('email')}\nLoại website: ${data.get('type')}\n\nÝ tưởng:\n${data.get('message')}\n`;
    if(contactEmail){window.location.href=`mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent('Trao đổi dự án website — '+data.get('name'))}&body=${encodeURIComponent(brief)}`;document.querySelector('#contact-status').textContent='Đã mở ứng dụng email với nội dung brief. Bạn kiểm tra rồi bấm gửi trong ứng dụng email.';}
    else{const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='brief-du-an.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.querySelector('#contact-status').textContent='Đã tạo brief-du-an.txt. Thông tin chỉ được lưu trong file tải về, chưa được gửi đến người nhận.';}
  });
  if(contactEmail){document.querySelector('.form-note').textContent='Điền một vài thông tin để soạn email trao đổi dự án.';document.querySelector('#contact-form button').innerHTML='Soạn email trao đổi <span>↗</span>';}
  const toggle=document.querySelector('.menu-toggle');
  const navigation=document.querySelector('#navigation');
  const closeMenu=()=>{navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Mở menu');};
  toggle.addEventListener('click',()=>{const open=navigation.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu');});
  navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.querySelector('#year').textContent=new Date().getFullYear();
})();
