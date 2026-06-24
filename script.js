/* =========================================================
   دبلومة الحياة الجديدة — غاليات | script.js
   ========================================================= */

/* ---------- 1) NAVIGATION ---------- */
function showPage(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
  });
  document.querySelector('.main-nav')?.classList.remove('open');
  window.scrollTo({top:0, behavior:'smooth'});
}
window.addEventListener('hashchange', () => {
  showPage(location.hash.replace('#','') || 'home');
});
document.addEventListener('DOMContentLoaded', () => {
  showPage(location.hash.replace('#','') || 'home');
  renderWeeks();
  renderPlaylists();
  renderVideos();
  renderAudio();
  renderForms();
  renderDrive();
  renderBox();
});

/* ---------- 2) WEEKLY PROGRAM (7 weeks) ---------- */
/* columns: [workshops, video lecture, audio lesson, articles] */
const weeks = [
  {
    title:"المقدمة وأنتِ غالية",
    workshop:"مدارسة: تعاملي مع الأسئلة الثلاثة (الوجود، الغاية، المصير)",
    video:{ id:"5zOTUuukDTw", title:"مقدمة السلسلة — أنتِ غالية" },
    audio:null,
    article:"مقالة: أنتِ غالية — أساس الرحلة"
  },
  {
    title:"أنتِ غالية — وجود الله والاستقامة",
    workshop:"ورشة: الغيب، وجود الله، الاستقامة، العاطفة",
    video:{ id:"jZCQYc7ny3s", title:"محور أنتِ غالية" },
    audio:null,
    article:"مقالة: أرجوكِ لا تكشِفها — بين التحفيظ والتنفيذ"
  },
  {
    title:"محور الصلاة",
    workshop:"مدارسة: الخلاص في الإخلاص — صياغة العقل الباطن",
    video:{ id:"2OL8TAYpSIs", title:"محور الصلاة — الحلال أحلى" },
    audio:{ url:"https://soundcloud.com/user-738639575/1-20", title:"تسجيل تكميلي: درس الصلاة" },
    article:"مقالة: المُصلّي الذي ليس من أهل الصلاة + أخلِص تتخلّص"
  },
  {
    title:"محور الأم — العاطفة والوصايا",
    workshop:"ورشة: الأم والوصايا والمحبة",
    video:{ id:"ptZNwWPNWDk", title:"محور الأم — الوصايا والمحبة" },
    audio:{ url:"https://soundcloud.com/user-738639575/cgwjqhnyio1o", title:"تسجيل تكميلي: محور الأم" },
    article:"مقالة: الجرعات الثلاث — الأمر يستحق"
  },
  {
    title:"محور الأب والمعلم",
    workshop:"مدارسة: سمات المعلم والمتعلم — البيئة التربوية",
    video:{ id:"zhNHtGDF3Pw", title:"محور الأب والمعلم" },
    audio:{ url:"https://soundcloud.com/user-738639575/kltobq0hnry0", title:"تسجيل تكميلي: التربية والمعلم" },
    article:"مقالة: المشهور غير المذكور — في التربية"
  },
  {
    title:"أركان المنهج النبوي (1)",
    workshop:"مدارسة كتاب «أركان المنهج النبوي» — الفصول الأولى",
    video:{ id:"rSRNWdJGDr8", title:"أركان المنهج النبوي — مدخل" },
    audio:null,
    article:"مقالة: حصوننا المنسية"
  },
  {
    title:"أركان المنهج النبوي (2) — الخاتمة",
    workshop:"مدارسة كتاب «أركان المنهج النبوي» — الفصول الختامية",
    video:{ id:"PNHDSnaGeJQ", title:"أركان المنهج النبوي — الخاتمة" },
    audio:null,
    article:"مقالة: العلم والعمل — ألم وأمل"
  },
];

function renderWeeks(){
  document.getElementById('weeks-list').innerHTML = weeks.map((w, i) => `
    <div class="week-card">
      <h3><span class="num">${i+1}</span> ${w.title}</h3>
      <div class="week-row"><span class="tag t1">ورشة</span><span>${w.workshop}</span></div>
      <div class="week-row"><span class="tag t2">محاضرة</span>
        <span>▶ <a href="#" onclick="openVideo('${w.video.id}');return false;">${w.video.title}</a></span>
      </div>
      ${w.audio ? `<div class="week-row"><span class="tag t3">صوتي</span>
        <span>♪ <a href="${w.audio.url}" target="_blank" rel="noopener">${w.audio.title}</a></span>
      </div>` : ''}
      <div class="week-row"><span class="tag t4">مقال</span><span>${w.article}</span></div>
    </div>`).join('');
}

/* ---------- 3) VIDEOS ---------- */
const playlists = [
  { id:"PL7_Jp3gcxeGl0KFAJIaF17f1FT5quY7qp", title:"قائمة تشغيل: محاضرات دبلومة غاليات" },
  { id:"PL7_Jp3gcxeGk3Jl9ykLKDFSA9dLcLgT0E", title:"قائمة تشغيل: السلسلة التعليمية الكاملة" },
];
const videos = [
  { id:"5zOTUuukDTw", title:"مقدمة الدبلومة" },
  { id:"hsMQrrfQF9g", title:"محاضرة: النظام والحدود" },
  { id:"jZCQYc7ny3s", title:"محاضرة: محور أنتِ غالية" },
  { id:"RMpadxLhd0g", title:"محاضرة: النبي ﷺ يحبني وهو أسوتي (1)" },
  { id:"ek2E4RJOSOc", title:"محاضرة: النبي ﷺ يحبني وهو أسوتي (2)" },
  { id:"AMdvrDtuiE0", title:"درس: العاطفة في حياة الفتاة" },
  { id:"RUirzmgZzpY", title:"درس: الغيب وأثره في الاستقامة" },
  { id:"DAV7SRdDMpk", title:"درس: وجود الله — اليقين" },
  { id:"2OL8TAYpSIs", title:"محاضرة: الحلال أحلى" },
  { id:"imwler_wYkU", title:"درس الصلاة (1) — السعادة في العبادة" },
  { id:"Z30Xb8yAmqU", title:"درس الصلاة (2) — اللذة في العبادة" },
  { id:"YHdZUwJF_dI", title:"درس الصلاة (3) — صياغة العقل الباطن" },
  { id:"ptZNwWPNWDk", title:"محاضرة: محور الأم — الوصايا والمحبة" },
  { id:"cI4_Nd5n2Z4", title:"درس: محور الأم (تكميلي)" },
  { id:"oS1PKCd7xhQ", title:"درس: أثر الأم في تربية البنت" },
  { id:"9W0ORPSgQnc", title:"درس: المحبة في التربية القرآنية" },
  { id:"5cBfcVqMsMw", title:"درس: الوصايا العشر للأم" },
  { id:"ms6yA4A6MM4", title:"درس: محور الأب والمعلم (1)" },
  { id:"XFwKnA8olG8", title:"درس: محور الأب والمعلم (2)" },
  { id:"zhNHtGDF3Pw", title:"محاضرة: سمات المعلم والمتعلم" },
  { id:"rSRNWdJGDr8", title:"محاضرة: أركان المنهج النبوي — مدخل" },
  { id:"bTDdgle0N3k", title:"درس: أركان المنهج النبوي (1)" },
  { id:"epl6wqKDnfM", title:"درس: أركان المنهج النبوي (2)" },
  { id:"Uc_0sHfn5Nc", title:"درس: أركان المنهج النبوي (3)" },
  { id:"PNHDSnaGeJQ", title:"محاضرة: خاتمة الدبلومة" },
];
function ytThumb(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }

function renderPlaylists(){
  document.getElementById('playlists').innerHTML = playlists.map(p => `
    <div class="card">
      <h3>📺 ${p.title}</h3>
      <p>قائمة تشغيل مرتبة على قناة الدبلومة في يوتيوب.</p>
      <a class="btn primary" target="_blank" rel="noopener"
         href="https://www.youtube.com/playlist?list=${p.id}">فتح قائمة التشغيل</a>
    </div>`).join('');
}
function renderVideos(){
  document.getElementById('videos-list').innerHTML = videos.map(v => `
    <div class="card">
      <div class="video-thumb" style="background-image:url('${ytThumb(v.id)}')"
           onclick="openVideo('${v.id}')"></div>
      <h3>${v.title}</h3>
      <div class="actions">
        <button class="btn primary" onclick="openVideo('${v.id}')">مشاهدة</button>
        <a class="btn ghost" target="_blank" rel="noopener" href="https://youtu.be/${v.id}">يوتيوب</a>
      </div>
    </div>`).join('');
}

/* ---------- 4) AUDIO (SoundCloud, each with a name) ---------- */
const audio = [
  { url:"https://soundcloud.com/user-738639575/sets/4xhyeixgvclc",
    title:"مجموعة تسجيلات الدبلومة الكاملة (Playlist)",
    desc:"مجموعة كاملة تجمع تسجيلات أسابيع الدبلومة." },
  { url:"https://soundcloud.com/user-738639575/1-20",
    title:"تسجيل 1 — مقدمة وأساسيات الصلاة",
    desc:"تسجيل صوتي تمهيدي للمحور الأول." },
  { url:"https://soundcloud.com/user-738639575/cgwjqhnyio1o",
    title:"تسجيل 2 — محور الأم والوصايا",
    desc:"درس صوتي مكمّل لمحاضرة الأم." },
  { url:"https://soundcloud.com/user-738639575/kltobq0hnry0",
    title:"تسجيل 3 — محور الأب والمعلم",
    desc:"درس صوتي مكمّل لمحور التربية." },
];
function renderAudio(){
  document.getElementById('audio-list').innerHTML = audio.map(a => `
    <div class="card">
      <h3>♪ ${a.title}</h3>
      <p>${a.desc}</p>
      <a class="btn primary" target="_blank" rel="noopener" href="${a.url}">استماع على SoundCloud</a>
    </div>`).join('');
}

/* ---------- 5) FORMS (each with a clear name) ---------- */
const forms = [
  { url:"https://docs.google.com/forms/d/e/1FAIpQLSd1ZzrtMkTZZowShkhWH4rCQbNq8ldkbEUk3-kEUOHlQecQgw/viewform",
    title:"نموذج التسجيل في الدبلومة" },
  { url:"https://docs.google.com/forms/d/e/1FAIpQLSe-UGv4bHJcPMrzwTWscFDraAkHvqOFyrCmkQALoCammTNaNA/viewform",
    title:"نموذج التسجيل (نسخة احتياطية)" },

  { url:"https://forms.gle/9C4RhMgsmSd4vu2u6", title:"تقييم محور أنتِ غالية (1)" },
  { url:"https://forms.gle/UndRggVadcSfiCRT6", title:"تقييم محور أنتِ غالية (2)" },
  { url:"https://forms.gle/WfwCkiAh5H8PTndJA", title:"تقييم محور أنتِ غالية (3)" },
  { url:"https://forms.gle/c4h2qA8V1waV9YDE6", title:"تقييم محور أنتِ غالية (4)" },
  { url:"https://forms.gle/mkipf5HKhqymBkKW8", title:"تقييم محور أنتِ غالية (5)" },

  { url:"https://forms.gle/KmCtU56ZBjZyteuY8", title:"تقييم محور الصلاة (1)" },
  { url:"https://forms.gle/d6KMtbkC9aQHV5uT8", title:"تقييم محور الصلاة (2)" },
  { url:"https://forms.gle/wX7hYNjv7Ak1drCb8", title:"تقييم محور الصلاة (3)" },
  { url:"https://forms.gle/DmtrtRP3PNzHcKTq8", title:"تقييم محور الصلاة (4)" },
  { url:"https://forms.gle/JpaN3PRzkdTnpJLJA", title:"تقييم محور الصلاة (5)" },

  { url:"https://forms.gle/omKymeqGXPvSYCo4A", title:"تقييم محور الأم والمعلم (1)" },
  { url:"https://forms.gle/ktvJp2e6a5zJNksKA", title:"تقييم محور الأم والمعلم (2)" },
  { url:"https://forms.gle/PLtNPGfn1LZCT6U88", title:"تقييم محور الأم والمعلم (3)" },
  { url:"https://forms.gle/7nqo6SH4BWK72vRf8", title:"تقييم محور الأم والمعلم (4)" },
  { url:"https://forms.gle/L8Urr4Vs1kJJr3Wx7", title:"تقييم محور الأم والمعلم (5)" },
  { url:"https://forms.gle/gWTa8vXEvVudSKZc9", title:"تقييم محور الأم والمعلم (6)" },

  { url:"https://forms.gle/wnvf6eM1Up337xFq9", title:"تقييم محور أركان المنهج النبوي (1)" },
  { url:"https://forms.gle/K3umtCc8DCPikrML7", title:"تقييم محور أركان المنهج النبوي (2)" },
  { url:"https://forms.gle/aR2x8txfGuLgxLuS8", title:"تقييم محور أركان المنهج النبوي (3)" },
  { url:"https://forms.gle/zryZBfZMxVq6HnuJ9", title:"تقييم محور أركان المنهج النبوي (4)" },
  { url:"https://forms.gle/tXPP73DaLgSZBFyY7", title:"تقييم محور أركان المنهج النبوي (5)" },
  { url:"https://forms.gle/j4e6MrfBS1SPaWWV9", title:"تقييم محور أركان المنهج النبوي (6)" },
];
function renderForms(){
  document.getElementById('forms-list').innerHTML = forms.map(f => `
    <div class="card">
      <h3>✎ ${f.title}</h3>
      <p>استمارة Google Forms لمتابعة الدارسات وتقييم المحور.</p>
      <a class="btn primary" target="_blank" rel="noopener" href="${f.url}">فتح الاستمارة</a>
    </div>`).join('');
}

/* ---------- 6) GOOGLE DRIVE (with names) ---------- */
const drive = [
  { id:"1AEzsPbcQdHo2DGn8dXxzdIjhOVWGjXAi", title:"كتاب «أنتِ غالية» — نسخة PDF" },
  { id:"1AFnupN7dfbJDg3knd8XcEu0P-wY5Xu6j", title:"كتاب «أركان المنهج النبوي» — نسخة PDF" },
];
function renderDrive(){
  document.getElementById('drive-list').innerHTML = drive.map(d => `
    <div class="card">
      <h3>📄 ${d.title}</h3>
      <p>ملف إضافي مستضاف على Google Drive.</p>
      <div class="actions">
        <a class="btn primary" target="_blank" rel="noopener"
           href="https://drive.google.com/file/d/${d.id}/view">معاينة</a>
        <a class="btn ghost"   target="_blank" rel="noopener"
           href="https://drive.google.com/uc?export=download&id=${d.id}">تحميل</a>
      </div>
    </div>`).join('');
}

/* ---------- 7) BOX FILES (each with a descriptive name) ---------- */
const boxFiles = [
  { url:"https://app.box.com/s/7bwhsje80z919iiknxbze1c4sihw1dw7", title:"كتاب: أنتِ غالية — المحور الأول" },
  { url:"https://app.box.com/s/7yk7a45wtxeg8ild13vz7t7vao8yj9w2", title:"مذكرة: محور الصلاة" },
  { url:"https://app.box.com/s/b0ub5ki92hwwp9wjayujcelp4rokvx39", title:"كتاب: السعادة واللذة في العبادة" },
  { url:"https://app.box.com/s/erpyoeffsiif1g1kgenbw8fff0qrm6cl", title:"مذكرة: محور الأم والوصايا" },
  { url:"https://app.box.com/s/rozja8aune13jnrurnbcs6kx7rsybnv8", title:"كتاب: المحبة في التربية القرآنية" },
  { url:"https://app.box.com/s/4xw5q0bfasbett84bak3n1sxjj3son6c", title:"مذكرة: محور الأب والمعلم" },
  { url:"https://app.box.com/s/3y3pss0b0tcwnumhtycnw1gp5i7vtw6w", title:"كتاب: أركان المنهج النبوي — كامل" },
  { url:"https://app.box.com/s/dghbzqonf0zgg3bi7cp7uliryvgt8npl", title:"ملخص: أركان المنهج النبوي" },
  { url:"https://app.box.com/s/03d7s8lzf10txsk1gehaum47t0qw04t7", title:"تطبيقات عملية للأسبوع الأول" },
  { url:"https://app.box.com/s/6zyjaw91e8th3staf02nvg315wbf2m3f", title:"تطبيقات عملية للأسبوع الرابع" },
  { url:"https://app.box.com/s/qb27lcec9l1ejulldkz98ga1r0a4ogvm", title:"مقالات مختارة — مجموعة كاملة" },
];
function renderBox(){
  document.getElementById('box-list').innerHTML = boxFiles.map(b => `
    <div class="card">
      <h3>📦 ${b.title}</h3>
      <p>ملف مرفق على Box.com — يمكن المعاينة والتحميل مباشرة.</p>
      <a class="btn primary" target="_blank" rel="noopener" href="${b.url}">فتح الملف</a>
    </div>`).join('');
}

/* ---------- 8) VIDEO MODAL ---------- */
function openVideo(id){
  const m = document.getElementById('video-modal');
  document.getElementById('video-frame-wrap').innerHTML =
    `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>`;
  m.classList.add('open');
}
function closeVideo(e){
  if (e && e.target.closest('.modal-inner')) return;
  document.getElementById('video-modal').classList.remove('open');
  document.getElementById('video-frame-wrap').innerHTML = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });
