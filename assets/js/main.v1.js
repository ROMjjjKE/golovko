
(function () {
  'use strict';
  var WA = 'https://wa.me/375445716781';
  var T = {
    section: { name: 'Секционные ворота', code: 'SEC' },
    slide: { name: 'Откатные ворота', code: 'SLD' },
    swing: { name: 'Распашные ворота', code: 'SWG' },
    barrier: { name: 'Шлагбаум', code: 'BAR' },
    shutter: { name: 'Роллеты', code: 'SHU' }
  };
  var ITEMS = {"section": {"name": "Секционные ворота", "symptoms": {"ne_open": {"t": "Не открывается или не закрывается", "c": "Пружины, привод, обрыв троса или сработавший концевик. Часто дело не в моторе, а в разбалансировке полотна.", "w": "Проверка пружин и натяжения тросов, концевиков, усилия привода, состояния роликов и направляющих.", "time": "1–2 часа", "part": "пружина, трос, ролик", "risk": "Не разбирайте торсион самостоятельно: он под большим натяжением."}, "wild": {"t": "Открывается криво, клинит", "c": "Разное натяжение тросов, износ роликов или деформация полотна после удара.", "w": "Выравнивание полотна, регулировка тросов и роликов, проверка горизонтальности направляющих.", "time": "1–2 часа", "part": "ролик, трос, кронштейн", "risk": "Перекос тросов видно по полотну: дальше начнёт рвать крепёж."}, "revers": {"t": "Закрывается и сразу открывается", "c": "Срабатывает фотоэлемент, сбит концевик или привод упирается в препятствие и уходит в реверс.", "w": "Проверка оптики и её юстировки, концевиков, усилия привода, регулировка нижнего положения.", "time": "30–60 мин", "part": "фотоэлемент, концевик", "risk": "Если реверс не работает — такую автоматику лучше не оставлять включённой."}, "noise": {"t": "Шумит, скрипит, дёргается", "c": "Сухие ролики и петли, выработка направляющих, ослабший крепёж. Реже — износ подшипника привода.", "w": "Смазка механизма, протяжка крепежа, замена изношенных роликов, проверка привода.", "time": "40–90 мин", "part": "ролики, смазка", "risk": "Скрип — это сухое трение, которое стачивает металл быстрее."}}}, "slide": {"name": "Откатные ворота", "symptoms": {"ne_open": {"t": "Не откатываются", "c": "Ослаб рельс, слетели ролики с опоры, сработал концевик или привод не видит рейку.", "w": "Проверка рельса и роликов, концевиков, зацепления рейки, питания и платы.", "time": "1–2 часа", "part": "ролик, рейка, концевик", "risk": "Не толкайте створку силой: можно уронить её с опоры."}, "wild": {"t": "Идёт рывками, останавливается", "c": "Загрязнённый рельс, износ роликов, люфт опоры или сбитая настройка усилия.", "w": "Чистка и смазка рельса, регулировка роликов, настройка усилия и крайних положений.", "time": "40–90 мин", "part": "ролики, смазка", "risk": "Рывки перегружают привод: он греется и уходит в защиту."}, "revers": {"t": "Останавливается и едет обратно", "c": "Фотоэлементы ловят препятствие (ветка, снег, сдвинутый датчик) или сбит концевик.", "w": "Юстировка фотоэлементов, чистка оптики, проверка концевиков и стопоров.", "time": "30–60 мин", "part": "фотоэлемент, кронштейн", "risk": "Зимой причина часто в наледи на рельсе."}, "remote": {"t": "Не реагирует на пульт", "c": "Севшая батарейка, сбитый код приёмника, помеха или неисправный приёмник.", "w": "Проверка батарейки и пульта, перепрошивка кода, проверка приёмника и антенны.", "time": "20–40 мин", "part": "пульт, батарейка, приёмник", "risk": "Если пульт пропал из памяти, код восстанавливается за минуту, но нужен доступ к блоку."}}}, "swing": {"name": "Распашные ворота", "symptoms": {"ne_open": {"t": "Створка не открывается", "c": "Провисла на петлях, заклинил привод или сработала защита по усилию.", "w": "Регулировка петель и створки, проверка привода и концевых, настройка усилия.", "time": "1–2 часа", "part": "привод, петля, рычаг", "risk": "Провисшая створка даёт нагрузку на привод и на столб."}, "wild": {"t": "Створки не совпадают, цепляют", "c": "Геометрия створок и столбов, сезонная просадка грунта, износ петель.", "w": "Регулировка положения створок, петель и упоров, настройка синхронизации двух приводов.", "time": "1–3 часа", "part": "петли, упоры", "risk": "Если створки задевают друг друга, привод быстро выйдет из строя."}, "remote": {"t": "Пульт не работает, привод молчит", "c": "Питание привода, предохранитель, приёмник или сбитые настройки.", "w": "Проверка питания и предохранителя, диагностика платы, привязка пульта.", "time": "30–60 мин", "part": "предохранитель, приёмник", "risk": "После грозы часто выгорает плата: лучше сразу проверить."}}}, "barrier": {"name": "Шлагбаум", "symptoms": {"ne_open": {"t": "Стрела не поднимается", "c": "Ослабла пружина баланса, сработал концевик, сбит привод или нет питания.", "w": "Проверка баланса стрелы пружиной, концевиков, привода и питания.", "time": "1–2 часа", "part": "пружина, концевик", "risk": "Разбалансированная стрела может упасть на автомобиль."}, "wild": {"t": "Стрела падает или дёргается", "c": "Износ пружины баланса, ослабший крепёж, износ редуктора.", "w": "Регулировка и замена пружины, протяжка крепежа, проверка редуктора и шарнира.", "time": "1–2 часа", "part": "пружина, шарнир", "risk": "Не стойте под стрелой при проверке."}, "loop": {"t": "Не реагирует на машину, закрывается на авто", "c": "Петля индукции, фотоэлементы или настройки автоматики. Опасно, если стрела идёт вниз при машине.", "w": "Проверка петли и фотоэлементов, юстировка, настройка задержки и реверса.", "time": "1–2 часа", "part": "фотоэлемент, петля", "risk": "Не оставляйте шлагбаум включённым, если он бьёт по машинам."}, "hit": {"t": "После наезда или удара", "c": "Погнутая стрела, срезанный шарнир, смещённая станина, треснувший редуктор.", "w": "Правка или замена стрелы, восстановление шарнира и крепления, проверка привода.", "time": "2–4 часа", "part": "стрела, шарнир, станина", "risk": "Со смещённой станиной шлагбаум будет работать рывками и снова упадёт."}}}, "shutter": {"name": "Роллеты", "symptoms": {"ne_open": {"t": "Полотно не поднимается", "c": "Оборвался трос или пружина, слетело полотно с направляющих, неисправен привод.", "w": "Разборка короба, проверка вала, троса и пружины, регулировка привода.", "time": "1–3 часа", "part": "трос, пружина, вал", "risk": "Полотно под натяжением: не пытайтесь снять его без фиксации."}, "wild": {"t": "Перекашивает, заедает в направляющих", "c": "Деформация ламелей, грязь в боковых направляющих, износ подшипников вала.", "w": "Правка или замена ламелей, чистка направляющих, регулировка вала.", "time": "1–2 часа", "part": "ламели, направляющие", "risk": "Перекос быстро рвёт трос."}, "remote": {"t": "Не работает привод или пульт", "c": "Питание, концевики, приёмник или настройки крайних положений.", "w": "Проверка питание и платы, настройка концевиков, привязка пульта.", "time": "40–90 мин", "part": "приёмник, концевик", "risk": "После настройки проверяю полный цикл и остановку в крайних точках."}}}};
  var ICONS = {"section": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"#1B1E20\" stroke-width=\"1.7\"><rect x=\"5\" y=\"5\" width=\"22\" height=\"18\"/><path d=\"M5 11h22M5 17h22\"/><path d=\"M11 23v4M21 23v4\"/></svg>", "slide": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"#1B1E20\" stroke-width=\"1.7\"><rect x=\"4\" y=\"8\" width=\"24\" height=\"16\"/><path d=\"M9 8v16M15 8v16M21 8v16\"/><circle cx=\"6\" cy=\"27\" r=\"2\"/><circle cx=\"26\" cy=\"27\" r=\"2\"/></svg>", "swing": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"#1B1E20\" stroke-width=\"1.7\"><path d=\"M4 6v22M12 6v22\"/><path d=\"M4 10h8M4 22h8\"/><path d=\"M20 8v18M28 8v18\"/></svg>", "barrier": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"#1B1E20\" stroke-width=\"1.7\"><rect x=\"4\" y=\"18\" width=\"8\" height=\"10\"/><path d=\"M12 20 28 10\"/><path d=\"M14 18 30 8\" stroke-dasharray=\"3 3\"/></svg>", "shutter": "<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"#1B1E20\" stroke-width=\"1.7\"><rect x=\"6\" y=\"6\" width=\"20\" height=\"22\"/><path d=\"M6 12h20M6 18h20M6 24h20\"/></svg>"};

  function initDrawer() {
    var d = document.getElementById('drawer');
    var b = document.querySelector('.header .burger');
    if (!d || !b) return;
    var last = null;
    function open() {
      last = document.activeElement;
      d.hidden = false; d.setAttribute('data-open', '');
      b.setAttribute('aria-expanded', 'true');
      document.body.classList.add('is-locked');
      var f = d.querySelector('a, button'); if (f) f.focus({ preventScroll: true });
    }
    function close() {
      d.hidden = true; d.removeAttribute('data-open');
      b.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('is-locked');
      if (last) last.focus({ preventScroll: true });
    }
    b.addEventListener('click', function () { d.hidden ? open() : close(); });
    d.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]') || e.target.closest('a') || !e.target.closest('.drawer__in')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !d.hidden) close();
      if (e.key === 'Tab' && !d.hidden) {
        var it = d.querySelectorAll('a, button, input');
        if (!it.length) return;
        var f = it[0], l = it[it.length - 1];
        if (e.shiftKey && document.activeElement === f) { e.preventDefault(); l.focus(); }
        else if (!e.shiftKey && document.activeElement === l) { e.preventDefault(); f.focus(); }
      }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1024 && !d.hidden) close(); });
  }

  function initDiag() {
    var box = document.getElementById('equip');
    if (!box) return;
    var symBox = document.getElementById('sym');
    var panel = document.getElementById('panel');
    var cur = { eq: 'section', sy: null };

    box.innerHTML = Object.keys(T).map(function (k) {
      return '<button type="button" data-eq="' + k + '" aria-pressed="' + (k === 'section' ? 'true' : 'false') + '">' + (ICONS[k] || '') + '<span>' + T[k].name + '</span></button>';
    }).join('');

    function drawSym() {
      var sy = ITEMS[cur.eq].symptoms;
      var keys = Object.keys(sy);
      if (keys.indexOf(cur.sy) < 0) cur.sy = keys[0];
      symBox.innerHTML = keys.map(function (k) {
        return '<button type="button" data-sy="' + k + '" aria-pressed="' + (k === cur.sy ? 'true' : 'false') + '">' + sy[k].t + '</button>';
      }).join('');
      drawPanel();
    }

    function drawPanel() {
      var d = ITEMS[cur.eq].symptoms[cur.sy];
      var num = (Object.keys(ITEMS[cur.eq].symptoms).indexOf(cur.sy) + 1);
      panel.innerHTML = '<span class="panel__code">' + T[cur.eq].code + '-' + (num < 10 ? '0' + num : num) + '</span>' +
        '<h3>' + d.t + '</h3>' +
        '<div class="rl"><b>вероятная причина</b><p style="margin:0">' + d.c + '</p></div>' +
        '<div class="rl"><b>что проверю</b><p style="margin:0">' + d.w + '</p></div>' +
        '<div class="rl"><b>обычно занимает</b><p style="margin:0">' + d.time + '</p></div>' +
        '<div class="rl"><b>возможная деталь</b><p style="margin:0">' + d.part + '</p></div>' +
        '<div class="risk">' + d.risk + '</div>' +
        '<div class="acts"><a class="btn" href="tel:+375445716781">Позвонить</a>' +
        '<a class="btn btn--ghost" href="' + WA + '?text=' + encodeURIComponent('Заявка с сайта: ' + T[cur.eq].name + '.\nСимптом: ' + d.t + '\n\nОпишу подробнее и пришлю фото блока.') + '" target="_blank" rel="noopener">Написать про это</a></div>';
    }

    box.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-eq]'); if (!btn) return;
      cur.eq = btn.getAttribute('data-eq');
      [].forEach.call(box.children, function (c) { c.setAttribute('aria-pressed', c === btn ? 'true' : 'false'); });
      drawSym();
    });
    symBox.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-sy]'); if (!btn) return;
      cur.sy = btn.getAttribute('data-sy');
      [].forEach.call(symBox.children, function (c) { c.setAttribute('aria-pressed', c === btn ? 'true' : 'false'); });
      drawPanel();
    });
    drawSym();
  }

  function initLead() {
    var f = document.getElementById('lead');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var n = document.getElementById('lName'), t = document.getElementById('lTel');
      var eq = document.getElementById('lEq'), city = document.getElementById('lCity'), task = document.getElementById('lTask');
      var bad = false;
      [n, t].forEach(function (el) {
        if (!el.value.trim()) { el.style.borderColor = '#B03610'; bad = true; } else { el.style.borderColor = ''; }
      });
      if (bad) return;
      var msg = 'Заявка с сайта: ремонт ворот.\nИмя: ' + n.value.trim() + '\nТелефон: ' + t.value.trim() +
        (eq && eq.value.trim() ? '\nОборудование: ' + eq.value.trim() : '') +
        (city && city.value.trim() ? '\nАдрес: ' + city.value.trim() : '') +
        (task && task.value.trim() ? '\nЧто происходит: ' + task.value.trim() : '') +
        '\n\nФото прикреплю следом.';
      window.open(WA + '?text=' + encodeURIComponent(msg), '_blank');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initDrawer(); initDiag(); initLead();
    var y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
  });
})();
