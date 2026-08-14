const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  { letter: "A", title: "Listen and circle the correct words.", note: "Nghe audio và chọn đúng từ em nghe được.", points: 3, audio: "assets/audio/Listening-A.mp3", questions: [
    choice("A1", "1. There's a gray ... in that tree.", ["squirrel", "mouse"], "squirrel", "Squirrel là con sóc. Câu nghe được là There's a gray squirrel in that tree."),
    choice("A2", "2. A lot of animals live in this ...", ["pond", "field"], "field", "Field là cánh đồng. Câu nghe được là A lot of animals live in this field."),
    choice("A3", "3. ... live in trees.", ["Lizards", "Honeybees"], "Honeybees", "Honeybees là những con ong mật. Câu nghe được là Honeybees live in trees.") ] },
  { letter: "B", title: "Look and read. Write True or False.", note: "Quan sát toàn bộ bức tranh rồi xác định mỗi câu đúng hay sai.", points: 5, sectionImage: A + "page1-img2-1205x446.png", questions: [
    choice("B1", "1. There are honeybees outside the hive.", ["True", "False"], "True", "Có những con ong ở bên ngoài tổ ong, nên câu này đúng."),
    choice("B2", "2. There is an opossum in the nest.", ["True", "False"], "False", "Opossum ở trong hốc cây, không ở trong tổ chim."),
    choice("B3", "3. There's a chick on the rocks.", ["True", "False"], "False", "Chick ở trong tổ trên cây, không ở trên những tảng đá."),
    choice("B4", "4. The frogs are next to the pond.", ["True", "False"], "False", "Những con ếch ở trong ao, không phải ở cạnh ao."),
    choice("B5", "5. There are a lot of mice in the woods.", ["True", "False"], "True", "Trong khu rừng có nhiều con chuột, nên câu này đúng.") ] },
  { letter: "C", title: "Look and complete the words.", note: "Quan sát hình và điền đủ các chữ cái còn thiếu.", points: 3, questions: [
    input("C1", "1. Fo_ _s", ["foxes"], "Hình có nhiều con cáo. Fox số nhiều là foxes.", A + "page1-img5-195x139.png"),
    input("C2", "2. Go_ _f_ _ _", ["goldfish"], "Từ hoàn chỉnh là goldfish - cá vàng.", A + "page1-img6-195x139.png"),
    input("C3", "3. E_ _l_ _", ["eagles"], "Hình có nhiều con đại bàng. Eagle số nhiều là eagles.", A + "page1-img7-194x139.png") ] },
  { letter: "D", title: "Look and circle the correct words.", note: "Mỗi hình có hai ý cần chọn: từ hỏi và câu trả lời phù hợp.", points: 6, questions: [
    choice("D1", "1a. Where ___ the eagles?", ["is", "are"], "are", "Eagles là số nhiều nên dùng Where are the eagles?", A + "page2-img1-469x262.png"),
    choice("D2", "1b. They're in the ...", ["sky", "nest"], "nest", "Hai con đại bàng đang ở trong tổ: They're in the nest."),
    choice("D3", "2a. Where ___ the squirrel?", ["is", "are"], "is", "The squirrel là một con sóc nên dùng Where is ...?", A + "page2-img2-464x335.png"),
    choice("D4", "2b. It's ...", ["on the grass", "in the tree"], "in the tree", "Con sóc ở trong cây: It's in the tree."),
    choice("D5", "3a. ___ the honeybees in the hive?", ["Is", "Are"], "Are", "Honeybees là số nhiều nên câu hỏi bắt đầu bằng Are.", A + "page2-img3-456x316.png"),
    choice("D6", "3b. No, ...", ["it isn't", "they aren't"], "they aren't", "Honeybees được thay bằng they, nên trả lời No, they aren't.") ] },
  { letter: "E", title: "Write the questions. Look and answer.", note: "Sắp xếp thành câu hỏi, sau đó quan sát hình để viết câu trả lời.", points: 8, questions: [
    input("E1", "1a. the field / the honeybees / in / Are", ["are the honeybees in the field"], "Câu hỏi Yes/No với honeybees số nhiều bắt đầu bằng Are.", A + "page2-img4-487x301.png"),
    input("E2", "1b. Answer the question.", ["no they aren't", "no they are not"], "Ong ở cạnh tổ trên cây, không ở trong cánh đồng: No, they aren't."),
    input("E3", "2a. is / the chick / Where", ["where is the chick"], "The chick là số ít nên dùng Where is the chick?", A + "page2-img5-373x346.png"),
    input("E4", "2b. Answer the question.", ["it's in the nest", "it is in the nest"], "Chú chim non ở trong tổ: It's in the nest."),
    input("E5", "3a. in / the tree hollow / the opossum / Is", ["is the opossum in the tree hollow"], "The opossum là số ít nên câu hỏi bắt đầu bằng Is.", A + "page2-img6-525x375.png"),
    input("E6", "3b. Answer the question.", ["yes it is"], "Con opossum ở trong hốc cây: Yes, it is."),
    input("E7", "4a. are / the crabs / Where", ["where are the crabs"], "The crabs là số nhiều nên dùng Where are the crabs?", A + "page2-img7-349x249.png"),
    input("E8", "4b. Answer the question.", ["they're on the sand", "they are on the sand", "they're on the beach", "they are on the beach"], "Những con cua ở trên cát/bãi biển: They're on the sand.") ] },
  { letter: "F", title: "Match the words to the pictures.", note: "Quan sát bốn hình a-d và chọn chữ cái đúng cho mỗi từ/cụm từ.", points: 4, imageGallery: [
    { label: "a", src: A + "page3-img4-581x292.png" }, { label: "b", src: A + "page3-img5-601x301.png" }, { label: "c", src: A + "page3-img6-600x300.png" }, { label: "d", src: A + "page3-img7-587x294.png" } ], questions: [
    choice("F1", "1. take a nap", ["a", "b", "c", "d"], "d", "Hình d có một bạn đang ngủ trưa - take a nap."),
    choice("F2", "2. rainforest", ["a", "b", "c", "d"], "a", "Hình a là rừng mưa nhiệt đới - rainforest."),
    choice("F3", "3. put out", ["a", "b", "c", "d"], "b", "Hình b có bạn đang đặt thức ăn ra ngoài - put out."),
    choice("F4", "4. orangutan", ["a", "b", "c", "d"], "c", "Hình c là một con orangutan - đười ươi.") ] },
  { letter: "G", title: "Look and circle the correct words.", note: "Quan sát dấu hiệu thời gian trong từng hình và chọn đúng buổi trong ngày.", points: 3, questions: [
    choice("G1", "1. Choose the correct time of day.", ["evening", "morning"], "morning", "Bạn nhỏ đeo ba lô đi học, đây là morning - buổi sáng.", A + "page3-img1-546x374.png"),
    choice("G2", "2. Choose the correct time of day.", ["afternoon", "night"], "night", "Ngoài cửa sổ có trăng và trời tối, đây là night - ban đêm.", A + "page3-img2-523x374.png"),
    choice("G3", "3. Choose the correct time of day.", ["evening", "midday"], "midday", "Hai bạn đang ăn bữa trưa, đây là midday - giữa trưa.", A + "page3-img8-526x375.png") ] },
  { letter: "H", title: "Listen and complete the sentences.", note: "Nghe audio và điền đúng từ hoặc cụm từ còn thiếu.", points: 4, audio: "assets/audio/Listening-H.mp3", questions: [
    input("H1", "1. There are baby ___ at the Happy House Reserve.", ["orangutans"], "Audio nói baby orangutans - những chú đười ươi con."),
    input("H2", "2. My grandparents ___ me at home.", ["take care of"], "Take care of nghĩa là chăm sóc."),
    input("H3", "3. Our teachers ___ us about animals.", ["teach"], "Teachers là giáo viên; teach us nghĩa là dạy chúng ta."),
    input("H4", "4. I ___ my best friend.", ["miss"], "Miss someone nghĩa là nhớ một người.") ] },
  { letter: "I", title: "Look and complete the questions.", note: "Dùng What's, Who's, What are hoặc Who are.", points: 6, questions: [
    input("I1", "1. ___ that?", ["what's", "what is"], "Hình là một vật/con vật số ít ở xa nên hỏi What's that?", A + "page4-img4-479x292.png"),
    input("I2", "2. ___ this?", ["who's", "who is"], "Hình là một người ở gần nên hỏi Who's this?", A + "page4-img7-165x255.png"),
    input("I3", "3. ___ these?", ["what are"], "Hình là nhiều đồ vật ở gần nên hỏi What are these?", A + "page4-img2-253x240.png"),
    input("I4", "4. ___ they?", ["who are"], "Hình là nhiều người nên hỏi Who are they?", A + "page4-img1-504x300.png"),
    input("I5", "5. ___ that?", ["what's", "what is"], "Hình là một con vật số ít ở xa nên hỏi What's that?", A + "page4-img3-407x239.png"),
    input("I6", "6. ___ these?", ["what are"], "Hình là nhiều con vật ở gần nên hỏi What are these?", A + "page4-img10-582x300.png") ] },
  { letter: "J", title: "Look and complete the questions and answers.", note: "Viết từ hỏi phù hợp; trong câu trả lời dùng It's hoặc They're.", points: 8, questions: [
    input("J1", "1a. ___ this?", ["who's", "who is"], "Hỏi về một người ở gần: Who's this?", A + "page4-img5-183x263.png"),
    input("J2", "1b. ___ Eric, my brother.", ["it's", "it is"], "Câu trả lời trong mẫu là It's Eric, my brother."),
    input("J3", "2a. ___ these?", ["what are"], "Hỏi về nhiều con vật ở gần: What are these?", A + "page4-img8-540x243.png"),
    input("J4", "2b. ___ jellyfish.", ["they're", "they are"], "Jellyfish trong hình là số nhiều nên dùng They're."),
    input("J5", "3a. ___ that?", ["what's", "what is"], "Hỏi về một nơi ở xa: What's that?", A + "page4-img6-600x300.png"),
    input("J6", "3b. ___ a rainforest.", ["it's", "it is"], "A rainforest là số ít nên dùng It's."),
    input("J7", "4a. ___ they?", ["who are"], "Hỏi về nhiều người: Who are they?", A + "page4-img9-420x260.png"),
    input("J8", "4b. ___ my cousins.", ["they're", "they are"], "My cousins là số nhiều nên dùng They're.") ] }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test3-v1";
render(); restore(); update();

form.addEventListener("click", e => { const b = e.target.closest("[data-choice]"); if (!b) return; const q = b.closest(".question"); q.querySelectorAll("[data-choice]").forEach(x => { x.classList.toggle("is-selected", x === b); x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); q.dataset.value = b.dataset.value; q.classList.remove("is-missing"); save(); update(); });
form.addEventListener("input", e => { if (!e.target.matches("input")) return; e.target.closest(".question")?.classList.remove("is-missing"); save(); update(); });
form.addEventListener("submit", e => { e.preventDefault(); document.querySelectorAll(".is-missing").forEach(x => x.classList.remove("is-missing")); const m = missing(); if (m.length) { m.forEach(x => x.closest(".question").classList.add("is-missing")); document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${m.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`; m[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" }); return; } grade(); });
document.querySelector("#restartTest").onclick = () => { if (confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) { localStorage.removeItem(STORAGE_KEY); location.reload(); } };
document.querySelector("#reviewMistakes").onclick = () => (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth" });

function render() { sections.forEach(s => { const j = document.createElement("button"); j.type = "button"; j.textContent = s.letter; j.dataset.jump = s.letter; j.onclick = () => document.querySelector("#section-" + s.letter).scrollIntoView({ behavior: "smooth" }); jumpRoot.appendChild(j); const el = document.createElement("section"); el.className = "test-section"; el.id = "section-" + s.letter; el.innerHTML = `<header class="section-heading"><span class="section-letter">${s.letter}</span><div><h2>${s.title}</h2><p>${s.note}</p></div><span class="section-points">/${s.points}</span></header>${s.audio ? `<div class="audio-panel"><p>Audio phần ${s.letter}</p><audio controls preload="metadata" src="${s.audio}"></audio></div>` : ""}${gallery(s)}${sectionImage(s)}<div class="question-list">${s.questions.map((q,i) => question(s,q,i)).join("")}</div>`; root.appendChild(el); }); }
function question(s,q,i) { const label = s.letter + (i + 1); const control = q.type === "choice" ? `<div class="choice-grid">${q.options.map((o,n) => `<button type="button" class="choice" data-choice data-value="${esc(o)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65+n)}</span><span>${o}</span></button>`).join("")}</div>` : `<input class="answer-input" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`; return `<article class="question" data-id="${q.id}"><span class="question-number">${label}</span><div class="question-copy">${q.image ? `<img class="question-image" src="${q.image}" alt="Hình minh hoạ câu ${label}">` : ""}<p class="question-prompt">${q.prompt}</p>${control}</div></article>`; }
function gallery(s) { return s.imageGallery ? `<div class="source-gallery picture-grid">${s.imageGallery.map(x => `<figure><img src="${x.src}" alt="Hình ${x.label}"><figcaption>${x.label}</figcaption></figure>`).join("")}</div>` : ""; }
function sectionImage(s) { return s.sectionImage ? `<img class="source-image" src="${s.sectionImage}" alt="Hình minh hoạ phần ${s.letter}">` : ""; }
function norm(v) { return String(v||"").toLowerCase().replace(/[’‘`]/g,"'").replace(/[?.!,]/g,"").replace(/-/g," ").replace(/\s+/g," ").trim(); }
function matches(v,a) { const n = norm(v).replace(/is not/g,"isn't").replace(/are not/g,"aren't"); return a.some(x => norm(x).replace(/is not/g,"isn't").replace(/are not/g,"aren't") === n); }
function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(r.q.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.q.explanation}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.points); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
