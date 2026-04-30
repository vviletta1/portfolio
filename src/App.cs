/* Neon yellow theme inspired by clean, section-based developer portfolios.
   (Not a copy of any site — just similar structure.) */

:root{
  --bg: #070708;
  --bg2: #0d0d10;
  --card: rgba(255,255,255,0.06);
  --card2: rgba(255,255,255,0.08);
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.70);
  --line: rgba(255,255,255,0.14);
  --accent: #eaff00; /* neon yellow */
  --accent2: #b8ff00;
  --shadow: 0 12px 40px rgba(0,0,0,0.45);
  --radius: 18px;
  --radius2: 24px;
  --max: 1120px;
}

/* Base */
*{ box-sizing:border-box; }
html{ scroll-behavior:smooth; }
body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  color: var(--text);
  background: radial-gradient(1200px 600px at 70% -10%, rgba(234,255,0,0.12), transparent 55%),
              radial-gradient(900px 500px at 20% 10%, rgba(184,255,0,0.08), transparent 60%),
              linear-gradient(180deg, var(--bg), #050507);
}

a{ color: inherit; text-decoration:none; }
.container{ width: min(var(--max), calc(100% - 40px)); margin: 0 auto; }

/* Helpers */
.accent{ color: var(--accent); }
.muted{ color: var(--muted); }
.text{ line-height: 1.7; color: var(--muted); }
.stack{ display:flex; gap:12px; flex-wrap: wrap; align-items:center; }
.badge{
  display:inline-flex; align-items:center; gap:8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(234,255,0,0.35);
  background: rgba(234,255,0,0.08);
  color: var(--text);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius: 999px;
  padding: 12px 18px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  transition: transform .15s ease, border-color .15s ease, background .15s ease, box-shadow .15s ease;
  cursor:pointer;
  user-select:none;
}
.btn:hover{
  transform: translateY(-1px);
  border-color: rgba(234,255,0,0.40);
}
.btn--primary{
  background: linear-gradient(180deg, rgba(234,255,0,0.95), rgba(184,255,0,0.88));
  color: #0b0b0b;
  border-color: rgba(234,255,0,0.6);
  box-shadow: 0 10px 30px rgba(234,255,0,0.12);
}
.btn--primary:hover{ box-shadow: 0 14px 36px rgba(234,255,0,0.16); }
.btn--ghost{
  background: rgba(255,255,255,0.04);
}
.btn--small{ padding: 10px 14px; font-size: 14px; }

/* Navbar */
.nav{
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(7,7,8,0.72);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.10);
}
.nav__inner{
  display:flex;
  align-items:center;
  justify-content: space-between;
  min-height: 72px;
}
.nav__brand{
  display:flex;
  align-items:center;
  gap:10px;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.nav__dot{
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent);
  box-shadow: 0 0 0 6px rgba(234,255,0,0.12);
}
.nav__links{
  display:flex;
  gap: 18px;
  align-items:center;
}
.nav__link{
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  padding: 10px 10px;
  border-radius: 12px;
  transition: background .15s ease, color .15s ease;
}
.nav__link:hover{
  background: rgba(234,255,0,0.08);
  color: rgba(255,255,255,0.95);
}
.nav__burger{
  display:none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.04);
}
.nav__burger span{
  display:block;
  height: 2px;
  width: 18px;
  background: rgba(255,255,255,0.85);
  margin: 4px auto;
  border-radius: 8px;
}

/* Mobile menu */
.nav__overlay{ position: fixed; inset: 0; display:grid; place-items: center; }
.nav__backdrop{ position: absolute; inset:0; background: rgba(0,0,0,0.55); border:0; }
.nav__panel{
  position: relative;
  width: min(480px, calc(100% - 28px));
  border-radius: var(--radius2);
  background: rgba(14,14,18,0.90);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: var(--shadow);
  padding: 18px;
}
.nav__panelTop{ display:flex; align-items:center; justify-content: space-between; margin-bottom: 10px; }
.nav__panelTitle{ font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; font-size: 12px; color: rgba(255,255,255,0.75); }
.nav__close{
  width: 40px; height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.9);
  font-size: 20px;
}
.nav__panelLinks{ display:flex; flex-direction:column; gap: 8px; padding: 6px 0 10px; }
.nav__panelLinks .nav__link{ padding: 12px 12px; }
.nav__panelHint{ padding-top: 6px; border-top: 1px solid rgba(255,255,255,0.10); }

/* Sections */
.section{ padding: 84px 0; }
.section--alt{
  background: linear-gradient(180deg, transparent, rgba(255,255,255,0.02), transparent);
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.sectionHeader{ margin-bottom: 34px; }
.sectionHeader--center{ text-align: center; }
.sectionHeader__title{
  margin: 0;
  font-size: clamp(26px, 4vw, 38px);
  letter-spacing: -0.02em;
}
.sectionHeader__subtitle{ margin: 10px auto 0; max-width: 68ch; color: var(--muted); line-height: 1.7; }
.sectionHeader__line{
  margin-top: 18px;
  height: 3px;
  width: 64px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--accent), rgba(234,255,0,0.15));
  margin-left: auto;
  margin-right: auto;
}

/* Hero */
.hero{
  position: relative;
  padding: 110px 0 70px;
  overflow: hidden;
}
.hero__inner{ position: relative; z-index: 1; text-align: center; }
.eyebrow{
  display:inline-block;
  margin: 0 0 14px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.75);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.hero__title{
  margin: 0;
  font-size: clamp(40px, 6vw, 68px);
  letter-spacing: -0.04em;
}
.hero__subtitle{
  margin: 14px auto 0;
  max-width: 70ch;
  color: var(--muted);
  font-size: clamp(16px, 2.2vw, 18px);
  line-height: 1.8;
}
.hero__cta{ margin-top: 26px; display:flex; gap: 12px; justify-content:center; flex-wrap: wrap; }
.hero__scroll{ margin-top: 40px; display:flex; justify-content:center; }
.scrollHint{ display:flex; gap: 10px; align-items:center; color: rgba(255,255,255,0.65); }
.scrollHint__mouse{
  width: 18px; height: 28px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.25);
  position: relative;
}
.scrollHint__mouse::after{
  content:"";
  width: 4px; height: 4px;
  border-radius: 999px;
  background: var(--accent);
  position: absolute;
  top: 6px; left: 50%;
  transform: translateX(-50%);
  animation: scrollDot 1.6s ease-in-out infinite;
}
@keyframes scrollDot{
  0%{ opacity: 0.2; transform: translate(-50%, 0); }
  40%{ opacity: 1; }
  70%{ opacity: 0.4; transform: translate(-50%, 10px); }
  100%{ opacity: 0.2; transform: translate(-50%, 0); }
}
.hero__glow{
  position:absolute;
  inset: -120px -120px auto -120px;
  height: 420px;
  background: radial-gradient(closest-side, rgba(234,255,0,0.25), transparent 60%);
  filter: blur(30px);
  opacity: 0.9;
}

/* Cards / layout */
.card{
  border-radius: var(--radius2);
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  box-shadow: 0 10px 26px rgba(0,0,0,0.25);
  padding: 22px;
}
.card--soft{ background: var(--card); }
.card--outline{ background: transparent; }
.card__title{ margin: 0 0 10px; letter-spacing: -0.01em; }
.grid2{ display:grid; grid-template-columns: 1.3fr 0.9fr; gap: 22px; align-items: start; }
.profile__frame{
  position: relative;
  border-radius: var(--radius2);
  overflow: hidden;
  border: 1px solid rgba(234,255,0,0.20);
  background: rgba(234,255,0,0.04);
}
.profile__img{ width: 100%; height: 340px; object-fit: cover; display:block; }
.profile__badge{ position:absolute; left: 14px; top: 14px; }
.profile__meta{
  margin-top: 12px;
  border-radius: var(--radius2);
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.03);
  padding: 16px;
}
.metaRow{ display:flex; justify-content: space-between; gap: 10px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
.metaRow:last-child{ border-bottom: 0; }
.metaLabel{ color: rgba(255,255,255,0.70); font-weight: 700; }
.metaValue{ color: rgba(255,255,255,0.90); font-weight: 600; }

/* Projects */
.cards{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.projectCard{
  border-radius: var(--radius2);
  border: 1px solid rgba(255,255,255,0.12);
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
  padding: 22px;
  transition: transform .15s ease, border-color .15s ease, background .15s ease;
}
.projectCard:hover{
  transform: translateY(-2px);
  border-color: rgba(234,255,0,0.30);
  background: linear-gradient(180deg, rgba(234,255,0,0.06), rgba(255,255,255,0.03));
}
.projectCard__title{ margin: 0 0 10px; letter-spacing: -0.02em; }
.projectCard__desc{ margin: 0; color: var(--muted); line-height: 1.7; }
.projectCard__tags{ display:flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 14px; }
.projectCard__actions{ display:flex; gap: 10px; flex-wrap: wrap; }

/* Pills */
.pill{
  display:inline-flex;
  align-items:center;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.03);
  color: rgba(255,255,255,0.78);
  font-size: 12px;
  font-weight: 700;
}
.pill--big{ padding: 10px 14px; font-size: 13px; }
.pillGrid{
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* Contact */
.contactGrid{ display:grid; grid-template-columns: 1.2fr 0.8fr; gap: 18px; }
.form{ display:grid; gap: 14px; }
.field{ display:grid; gap: 8px; }
.field__label{ font-weight: 700; color: rgba(255,255,255,0.80); }
.field__input{
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  padding: 12px 12px;
  outline: none;
}
.field__input:focus{
  border-color: rgba(234,255,0,0.45);
  box-shadow: 0 0 0 4px rgba(234,255,0,0.10);
}
.field__textarea{ resize: vertical; min-height: 140px; }
.contactSide{ display:grid; gap: 18px; }
.linkList{ display:grid; gap: 10px; margin-top: 10px; }
.linkList__item{
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.03);
  transition: border-color .15s ease, background .15s ease;
}
.linkList__item:hover{
  border-color: rgba(234,255,0,0.30);
  background: rgba(234,255,0,0.06);
}

/* Footer */
.footer{
  padding: 38px 0;
  border-top: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.18);
}
.footer__inner{ display:flex; gap: 16px; align-items:center; justify-content: space-between; flex-wrap: wrap; }
.footer__brand{ display:flex; align-items:center; gap: 10px; font-weight: 900; }
.footer__right{ display:flex; gap: 14px; flex-wrap: wrap; }
.footer__link{ color: rgba(255,255,255,0.78); padding: 8px 10px; border-radius: 12px; }
.footer__link:hover{ background: rgba(234,255,0,0.08); color: rgba(255,255,255,0.92); }

/* Responsive */
@media (max-width: 920px){
  .grid2{ grid-template-columns: 1fr; }
  .profile__img{ height: 300px; }
  .cards{ grid-template-columns: 1fr; }
  .contactGrid{ grid-template-columns: 1fr; }
}
@media (max-width: 720px){
  .nav__links{ display:none; }
  .nav__burger{ display:block; }
  .section{ padding: 68px 0; }
  .hero{ padding-top: 92px; }
}
