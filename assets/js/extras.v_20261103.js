/* Bumble Series home extras: screen reactions + "pull a ticket" movie picker */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reactions that float up over the preview screen
  var bar = document.getElementById('reactions');
  var stage = bar && bar.closest('.stage');
  if (bar && stage) {
    bar.addEventListener('click', function(e){
      var btn = e.target.closest('button');
      if (!btn) return;
      var el = document.createElement('span');
      el.className = 'float-reaction';
      el.textContent = btn.textContent;
      var rect = stage.getBoundingClientRect();
      var x = rect.width - 60 - Math.random() * Math.min(260, rect.width * .5);
      el.style.left = x + 'px';
      el.style.setProperty('--drift', (Math.random() * 80 - 40).toFixed(0) + 'px');
      stage.appendChild(el);
      setTimeout(function(){ el.remove(); }, reduce ? 300 : 2300);
    });
  }

  // Pull a random movie from the catalog the page already loaded
  var spin = document.getElementById('spin-pick');
  var ticket = document.getElementById('pick-ticket');
  var title = document.getElementById('pick-title');
  var art = document.getElementById('pick-art');
  var note = document.getElementById('pick-note');
  if (!spin || !ticket) return;

  var lines = ['No complaints allowed.', 'Popcorn is mandatory.', 'Phones face down.', 'Whoever picks snacks, picks the next one.', 'Subtitles on, no arguing.'];
  var last = -1;

  function movies(){
    return Array.prototype.slice.call(document.querySelectorAll('#movie-catalog .movie-tile')).map(function(t){
      var img = t.querySelector('img');
      var name = t.querySelector('strong');
      return { title: name ? name.textContent : '', src: img ? img.currentSrc || img.src : '' };
    }).filter(function(m){ return m.title; });
  }

  function show(m){
    title.textContent = m.title;
    art.innerHTML = '';
    if (m.src) {
      var img = document.createElement('img');
      img.alt = m.title + ' poster';
      img.onerror = function(){ art.innerHTML = '<span>🎟️</span>'; };
      img.src = m.src;
      art.appendChild(img);
    }
  }

  spin.addEventListener('click', function(){
    var list = movies();
    if (!list.length) { title.textContent = 'The catalog is still loading'; note.textContent = 'Try again in a second.'; return; }
    spin.disabled = true;
    ticket.classList.add('spinning');
    var steps = reduce ? 1 : 14, n = 0;
    (function tick(){
      var i;
      do { i = Math.floor(Math.random() * list.length); } while (list.length > 1 && i === last);
      last = i;
      title.textContent = list[i].title;
      n++;
      if (n < steps) { setTimeout(tick, 50 + n * 12); return; }
      show(list[i]);
      ticket.classList.remove('spinning');
      note.textContent = lines[Math.floor(Math.random() * lines.length)];
      spin.textContent = 'Pull another';
      spin.disabled = false;
    })();
  });
})();
