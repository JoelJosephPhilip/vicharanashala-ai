(function() {
  var txLines = [
    "...the relationship between these two variables becomes clearer when we consider what happens at the boundary. Notice how the behaviour shifts as we approach the threshold—this is the key insight.",
    "So what we're seeing here is a pattern that repeats at every level of abstraction. The underlying mechanism stays the same. What changes is how we interpret the result.",
    "And this is precisely where most implementations diverge. The assumption is that initial conditions are irrelevant. But as we've seen, they determine everything that follows."
  ];
  var qs = [
    "What determines the system's behaviour as it approaches the threshold?",
    "What remains consistent across different levels of abstraction?",
    "Which factor determines everything that follows in the implementation?"
  ];
  var rs = [[54,28,12,6],[18,52,24,6],[42,30,20,8]];
  var scores = [[120,95,85,70],[215,180,162,140],[335,265,245,210]];

  var round = 0, lineIdx = 0, charIdx = 0, displayedLines = [], txTimer, stateTimer, didApprove;

  function el(id) { return document.getElementById(id); }

  function typeChar() {
    var line = txLines[lineIdx];
    if (charIdx <= line.length) {
      var cur = displayedLines.concat([line.slice(0, charIdx)]);
      el('sdl-tx').innerHTML = cur.slice(-3).join('<br>') + '<span class="sdl-cursor">|</span>';
      charIdx++;
      txTimer = setTimeout(typeChar, 32 + Math.random() * 18);
    } else {
      displayedLines.push(line);
      if (displayedLines.length > 2) displayedLines = displayedLines.slice(-2);
      lineIdx = (lineIdx + 1) % txLines.length;
      charIdx = 0;
      txTimer = setTimeout(typeChar, 900);
    }
  }

  function setStatus(t) { el('sdl-status').textContent = t; }

  function showGen() {
    el('sdl-gen').style.display = 'block';
    el('sdl-q').style.display = 'none';
    el('sdl-res').style.display = 'none';
    setStatus('Generating...');
    didApprove = false;
    stateTimer = setTimeout(showQuestion, 2800);
  }

  function showQuestion() {
    el('sdl-gen').style.display = 'none';
    el('sdl-q').style.display = 'block';
    el('sdl-qtext').textContent = qs[round % qs.length];
    setStatus('Question ready');
    stateTimer = setTimeout(function() { if (!didApprove) sdlApprove(); }, 4000);
  }

  window.sdlApprove = function() {
    didApprove = true;
    clearTimeout(stateTimer);
    el('sdl-gen').style.display = 'none';
    el('sdl-q').style.display = 'none';
    el('sdl-res').style.display = 'block';
    setStatus('Sent to 24 students');
    var r = rs[round % rs.length], sc = scores[round % scores.length];
    setTimeout(function() {
      for (var i = 0; i < 4; i++) {
        el('sdl-f' + i).style.width = r[i] + '%';
        el('sdl-p' + i).textContent = r[i] + '%';
      }
      for (var j = 0; j < 4; j++) { el('sdl-sc' + j).textContent = sc[j]; }
    }, 80);
    stateTimer = setTimeout(nextRound, 5000);
  };

  window.sdlSkip = function() { clearTimeout(stateTimer); nextRound(); };

  function nextRound() {
    round++;
    for (var i = 0; i < 4; i++) {
      el('sdl-f' + i).style.width = '0%';
      el('sdl-p' + i).textContent = '';
    }
    showGen();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { typeChar(); stateTimer = setTimeout(showQuestion, 2800); });
  } else {
    typeChar();
    stateTimer = setTimeout(showQuestion, 2800);
  }
})();
