const A = "assets/extracted/";
const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image });

const sections = [
  {
    "letter": "A",
    "title": "Listen and circle the correct words.",
    "note": "Nghe audio và chọn đúng từ em nghe được.",
    "points": 3,
    "audio": "assets/audio/Listening-A.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. There's a gray ... in that tree.",
        "options": [
          "squirrel",
          "mouse"
        ],
        "answers": [
          "squirrel"
        ],
        "explanation": "Squirrel là con sóc. Câu nghe được là There's a gray squirrel in that tree.",
        "image": ""
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. A lot of animals live in this ...",
        "options": [
          "pond",
          "field"
        ],
        "answers": [
          "field"
        ],
        "explanation": "Field là cánh đồng. Câu nghe được là A lot of animals live in this field.",
        "image": ""
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. ... live in trees.",
        "options": [
          "Lizards",
          "Honeybees"
        ],
        "answers": [
          "Lizards"
        ],
        "explanation": "Bản đáp án gốc khoanh Lizards cho câu nghe Lizards live in trees.",
        "image": ""
      }
    ]
  },
  {
    "letter": "B",
    "title": "Look and read. Write True or False.",
    "note": "Quan sát toàn bộ bức tranh rồi xác định mỗi câu đúng hay sai.",
    "points": 5,
    "sectionImage": "assets/extracted/page1-img2-1205x446.png",
    "questions": [
      {
        "id": "B1",
        "type": "choice",
        "prompt": "1. There are honeybees outside the hive.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Có những con ong ở bên ngoài tổ ong, nên câu này đúng.",
        "image": ""
      },
      {
        "id": "B2",
        "type": "choice",
        "prompt": "2. There is an opossum in the nest.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Opossum ở trong hốc cây, không ở trong tổ chim.",
        "image": ""
      },
      {
        "id": "B3",
        "type": "choice",
        "prompt": "3. There's a chick on the rocks.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Chick ở trong tổ trên cây, không ở trên những tảng đá.",
        "image": ""
      },
      {
        "id": "B4",
        "type": "choice",
        "prompt": "4. The frogs are next to the pond.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Những con ếch ở trong ao, không phải ở cạnh ao.",
        "image": ""
      },
      {
        "id": "B5",
        "type": "choice",
        "prompt": "5. There are a lot of mice in the woods.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Trong khu rừng có nhiều con chuột, nên câu này đúng.",
        "image": ""
      }
    ]
  },
  {
    "letter": "C",
    "title": "Look and complete the words.",
    "note": "Quan sát hình và điền đủ các chữ cái còn thiếu.",
    "points": 3,
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. Fo_ _s",
        "answers": [
          "foxes"
        ],
        "explanation": "Hình có nhiều con cáo. Fox số nhiều là foxes.",
        "image": "assets/extracted/page1-img5-195x139.png"
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. Go_ _f_ _ _",
        "answers": [
          "goldfish"
        ],
        "explanation": "Từ hoàn chỉnh là goldfish - cá vàng.",
        "image": "assets/extracted/page1-img6-195x139.png"
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. E_ _l_ _",
        "answers": [
          "eagles"
        ],
        "explanation": "Hình có nhiều con đại bàng. Eagle số nhiều là eagles.",
        "image": "assets/extracted/page1-img7-194x139.png"
      }
    ]
  },
  {
    "letter": "D",
    "title": "Look and circle the correct words.",
    "note": "Mỗi hình có hai ý cần chọn: từ hỏi và câu trả lời phù hợp.",
    "points": 6,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1a. Where ___ the eagles?",
        "options": [
          "is",
          "are"
        ],
        "answers": [
          "are"
        ],
        "explanation": "Eagles là số nhiều nên dùng Where are the eagles?",
        "image": "assets/extracted/page2-img1-469x262.png"
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "1b. They're in the ...",
        "options": [
          "sky",
          "nest"
        ],
        "answers": [
          "nest"
        ],
        "explanation": "Hai con đại bàng đang ở trong tổ: They're in the nest.",
        "image": ""
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "2a. Where ___ the squirrel?",
        "options": [
          "is",
          "are"
        ],
        "answers": [
          "is"
        ],
        "explanation": "The squirrel là một con sóc nên dùng Where is ...?",
        "image": "assets/extracted/page2-img2-464x335.png"
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "2b. It's ...",
        "options": [
          "on the grass",
          "in the tree"
        ],
        "answers": [
          "on the grass"
        ],
        "explanation": "Con sóc ở trên cỏ dưới gốc cây. Đề gốc khoanh on the grass, không phải in the tree.",
        "image": ""
      },
      {
        "id": "D5",
        "type": "choice",
        "prompt": "3a. ___ the honeybees in the hive?",
        "options": [
          "Is",
          "Are"
        ],
        "answers": [
          "Are"
        ],
        "explanation": "Honeybees là số nhiều nên câu hỏi bắt đầu bằng Are.",
        "image": "assets/extracted/page2-img3-456x316.png"
      },
      {
        "id": "D6",
        "type": "choice",
        "prompt": "3b. No, ...",
        "options": [
          "it isn't",
          "they aren't"
        ],
        "answers": [
          "they aren't"
        ],
        "explanation": "Honeybees được thay bằng they, nên trả lời No, they aren't.",
        "image": ""
      }
    ]
  },
  {
    "letter": "E",
    "title": "Write the questions. Look and answer.",
    "note": "Sắp xếp thành câu hỏi, sau đó quan sát hình để viết câu trả lời.",
    "points": 8,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1a. the field / the honeybees / in / Are",
        "answers": [
          "are the honeybees in the field"
        ],
        "explanation": "Câu hỏi Yes/No với honeybees số nhiều bắt đầu bằng Are.",
        "image": "assets/extracted/page2-img4-487x301.png"
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "1b. Answer the question.",
        "answers": [
          "no they aren't",
          "no they are not"
        ],
        "explanation": "Ong ở cạnh tổ trên cây, không ở trong cánh đồng: No, they aren't.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "2a. is / the chick / Where",
        "answers": [
          "where is the chick"
        ],
        "explanation": "The chick là số ít nên dùng Where is the chick?",
        "image": "assets/extracted/page2-img5-373x346.png"
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "2b. Answer the question.",
        "answers": [
          "it's in the nest",
          "it is in the nest"
        ],
        "explanation": "Chú chim non ở trong tổ: It's in the nest.",
        "image": ""
      },
      {
        "id": "E5",
        "type": "input",
        "prompt": "3a. in / the tree hollow / the opossum / Is",
        "answers": [
          "is the opossum in the tree hollow"
        ],
        "explanation": "The opossum là số ít nên câu hỏi bắt đầu bằng Is.",
        "image": "assets/extracted/page2-img6-525x375.png"
      },
      {
        "id": "E6",
        "type": "input",
        "prompt": "3b. Answer the question.",
        "answers": [
          "yes it is"
        ],
        "explanation": "Con opossum ở trong hốc cây: Yes, it is.",
        "image": ""
      },
      {
        "id": "E7",
        "type": "input",
        "prompt": "4a. are / the crabs / Where",
        "answers": [
          "where are the crabs"
        ],
        "explanation": "The crabs là số nhiều nên dùng Where are the crabs?",
        "image": "assets/extracted/page2-img7-349x249.png"
      },
      {
        "id": "E8",
        "type": "input",
        "prompt": "4b. Answer the question.",
        "answers": [
          "they're on the sand",
          "they are on the sand",
          "they're on the beach",
          "they are on the beach"
        ],
        "explanation": "Những con cua ở trên cát/bãi biển: They're on the sand.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Match the words to the pictures.",
    "note": "Quan sát bốn hình a-d và chọn chữ cái đúng cho mỗi từ/cụm từ.",
    "points": 4,
    "imageGallery": [
      {
        "label": "a",
        "src": "assets/extracted/page3-img4-581x292.png"
      },
      {
        "label": "b",
        "src": "assets/extracted/page3-img5-601x301.png"
      },
      {
        "label": "c",
        "src": "assets/extracted/page3-img6-600x300.png"
      },
      {
        "label": "d",
        "src": "assets/extracted/page3-img7-587x294.png"
      }
    ],
    "questions": [
      {
        "id": "F1",
        "type": "choice",
        "prompt": "1. take a nap",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "d"
        ],
        "explanation": "Hình d có một bạn đang ngủ trưa - take a nap.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "choice",
        "prompt": "2. rainforest",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Hình a là rừng mưa nhiệt đới - rainforest.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "choice",
        "prompt": "3. put out",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Hình b có bạn đang đặt thức ăn ra ngoài - put out.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "choice",
        "prompt": "4. orangutan",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Hình c là một con orangutan - đười ươi.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Look and circle the correct words.",
    "note": "Quan sát dấu hiệu thời gian trong từng hình và chọn đúng buổi trong ngày.",
    "points": 3,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. Choose the correct time of day.",
        "options": [
          "evening",
          "morning"
        ],
        "answers": [
          "morning"
        ],
        "explanation": "Bạn nhỏ đeo ba lô đi học, đây là morning - buổi sáng.",
        "image": "assets/extracted/page3-img1-546x374.png"
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. Choose the correct time of day.",
        "options": [
          "afternoon",
          "night"
        ],
        "answers": [
          "night"
        ],
        "explanation": "Ngoài cửa sổ có trăng và trời tối, đây là night - ban đêm.",
        "image": "assets/extracted/page3-img2-523x374.png"
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. Choose the correct time of day.",
        "options": [
          "evening",
          "midday"
        ],
        "answers": [
          "midday"
        ],
        "explanation": "Hai bạn đang ăn bữa trưa, đây là midday - giữa trưa.",
        "image": "assets/extracted/page3-img8-526x375.png"
      }
    ]
  },
  {
    "letter": "H",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio và điền đúng từ hoặc cụm từ còn thiếu.",
    "points": 4,
    "audio": "assets/audio/Listening-H.mp3",
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. There are baby ___ at the Happy House Reserve.",
        "answers": [
          "orangutans"
        ],
        "explanation": "Audio nói baby orangutans - những chú đười ươi con.",
        "image": ""
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. My grandparents ___ me at home.",
        "answers": [
          "take care of"
        ],
        "explanation": "Take care of nghĩa là chăm sóc.",
        "image": ""
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. Our teachers ___ us about animals.",
        "answers": [
          "teach"
        ],
        "explanation": "Teachers là giáo viên; teach us nghĩa là dạy chúng ta.",
        "image": ""
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. I ___ my best friend.",
        "answers": [
          "miss"
        ],
        "explanation": "Miss someone nghĩa là nhớ một người.",
        "image": ""
      }
    ]
  },
  {
    "letter": "I",
    "title": "Look and complete the questions.",
    "note": "Dùng What's, Who's, What are hoặc Who are.",
    "points": 6,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. ___ that?",
        "answers": [
          "what's",
          "what is"
        ],
        "explanation": "Hình là một vật/con vật số ít ở xa nên hỏi What's that?",
        "image": "assets/extracted/page4-img4-479x292.png"
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. ___ this?",
        "answers": [
          "who's",
          "who is"
        ],
        "explanation": "Hình là một người ở gần nên hỏi Who's this?",
        "image": "assets/extracted/page4-img7-165x255.png"
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. ___ these?",
        "answers": [
          "what are"
        ],
        "explanation": "Hình là nhiều đồ vật ở gần nên hỏi What are these?",
        "image": "assets/extracted/page4-img2-253x240.png"
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "4. ___ they?",
        "answers": [
          "who are"
        ],
        "explanation": "Hình là nhiều người nên hỏi Who are they?",
        "image": "assets/extracted/page4-img1-504x300.png"
      },
      {
        "id": "I5",
        "type": "input",
        "prompt": "5. ___ that?",
        "answers": [
          "what's",
          "what is"
        ],
        "explanation": "Hình là một con vật số ít ở xa nên hỏi What's that?",
        "image": "assets/extracted/page4-img3-407x239.png"
      },
      {
        "id": "I6",
        "type": "input",
        "prompt": "6. ___ these?",
        "answers": [
          "what are"
        ],
        "explanation": "Hình là nhiều con vật ở gần nên hỏi What are these?",
        "image": "assets/extracted/page4-img10-582x300.png"
      }
    ]
  },
  {
    "letter": "J",
    "title": "Look and complete the questions and answers.",
    "note": "Viết từ hỏi phù hợp; trong câu trả lời dùng It's hoặc They're.",
    "points": 8,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1a. ___ this?",
        "answers": [
          "who's",
          "who is"
        ],
        "explanation": "Hỏi về một người ở gần: Who's this?",
        "image": "assets/extracted/page4-img5-183x263.png"
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "1b. ___ Eric, my brother.",
        "answers": [
          "it's",
          "it is"
        ],
        "explanation": "Câu trả lời trong mẫu là It's Eric, my brother.",
        "image": ""
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "2a. ___ these?",
        "answers": [
          "what are"
        ],
        "explanation": "Hỏi về nhiều con vật ở gần: What are these?",
        "image": "assets/extracted/page4-img8-540x243.png"
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "2b. ___ jellyfish.",
        "answers": [
          "they're",
          "they are"
        ],
        "explanation": "Jellyfish trong hình là số nhiều nên dùng They're.",
        "image": ""
      },
      {
        "id": "J5",
        "type": "input",
        "prompt": "3a. ___ that?",
        "answers": [
          "what's",
          "what is"
        ],
        "explanation": "Hỏi về một nơi ở xa: What's that?",
        "image": "assets/extracted/page4-img6-600x300.png"
      },
      {
        "id": "J6",
        "type": "input",
        "prompt": "3b. ___ a rainforest.",
        "answers": [
          "it's",
          "it is"
        ],
        "explanation": "A rainforest là số ít nên dùng It's.",
        "image": ""
      },
      {
        "id": "J7",
        "type": "input",
        "prompt": "4a. ___ they?",
        "answers": [
          "who are"
        ],
        "explanation": "Hỏi về nhiều người: Who are they?",
        "image": "assets/extracted/page4-img9-420x260.png"
      },
      {
        "id": "J8",
        "type": "input",
        "prompt": "4b. ___ my cousins.",
        "answers": [
          "they're",
          "they are"
        ],
        "explanation": "My cousins là số nhiều nên dùng They're.",
        "image": ""
      }
    ]
  }
];

const form = document.querySelector("#testForm"), root = document.querySelector("#sections"), jumpRoot = document.querySelector("#sectionJump"), progressText = document.querySelector("#progressText"), progressBar = document.querySelector("#progressBar"), results = document.querySelector("#results"), answerReview = document.querySelector("#answerReview"), scoreValue = document.querySelector("#scoreValue"), scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test3-v1-source-audit-v2";
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
function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function missing() { const out=[]; sections.forEach(s => s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`); if(q.type==="choice"){if(!el.dataset.value) out.push(el.querySelector(".choice"));} else {const f=el.querySelector("input"); if(!f.value.trim()) out.push(f);} })); return out; }
function grade() { let score=0, reviews=[]; sections.forEach(s => s.questions.forEach((q,i) => { const el=document.querySelector(`[data-id="${q.id}"]`), value=q.type==="choice" ? el.dataset.value||"" : el.querySelector("input").value, correct=matches(value,q.answers); if(correct) score++; reviews.push({q,label:s.letter+(i+1),value,correct}); })); scoreValue.textContent=score; scoreMessage.textContent=score===50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50-score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML=reviews.map(r => `<article class="review-card ${r.correct?"":"is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct?"1/1":"0/1"} điểm</span></div><p class="review-question">${r.q.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${html(r.value||"(trống)")}</b></span><span>Đáp án: <b>${html(DiscoverAnswerDisplay.formatAnswer(r.q.answers[0]))}</b></span></div><p class="explanation"><b>Giải thích:</b> ${html(DiscoverAnswerDisplay.formatExplanation(r.q.explanation))}</p></article>`).join(""); results.hidden=false; form.hidden=true; document.querySelector("#stickyProgress").hidden=true; results.scrollIntoView({behavior:"smooth"}); }
function update() { let total=0; sections.forEach(s => { let c=0; s.questions.forEach(q => { const el=document.querySelector(`[data-id="${q.id}"]`), done=q.type==="choice" ? !!el.dataset.value : !!el.querySelector("input").value.trim(); if(done){total++;c++;} }); const j=document.querySelector(`[data-jump="${s.letter}"]`); j.classList.toggle("has-progress",c>0); j.classList.toggle("is-complete",c===s.points); }); progressText.textContent=`${total} / 50`; progressBar.style.width=`${total*2}%`; }
function save(){const d={};sections.forEach(s=>s.questions.forEach(q=>{const el=document.querySelector(`[data-id="${q.id}"]`);d[q.id]=q.type==="choice"?el.dataset.value||"":el.querySelector("input").value;}));localStorage.setItem(STORAGE_KEY,JSON.stringify(d));}
function restore(){let d={};try{d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");}catch{}sections.forEach(s=>s.questions.forEach(q=>{const v=d[q.id];if(!v)return;const el=document.querySelector(`[data-id="${q.id}"]`);if(q.type==="choice"){el.dataset.value=v;el.querySelectorAll("[data-choice]").forEach(b=>{const on=b.dataset.value===v;b.classList.toggle("is-selected",on);b.setAttribute("aria-pressed",on?"true":"false");});}else el.querySelector("input").value=v;}));}
function html(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));} function esc(v){return html(v);}
