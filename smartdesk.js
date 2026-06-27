//* SmartDesk Chatbot - 100+ FAQs | Case-insensitive | GPW Siddipet */
(function(){
  if (window.smartdeskInjected) return;
  window.smartdeskInjected = true;

  // --- Root Container ---
  const root = document.createElement('div');
  root.className = 'smartdesk-root';
  root.innerHTML = `
    <div class="smartdesk-icon" id="smartdeskIcon" title="SmartDesk">
      <div class="smartdesk-pulse"></div>
      <div class="smartdesk-face">
        <div class="smartdesk-eye left"></div>
        <div class="smartdesk-eye right"></div>
        <div class="smartdesk-antenna"></div>
      </div>
    </div>
    <div class="smartdesk-tooltip" id="smartdeskTooltip">SmartDesk 💬</div>
    <div class="smartdesk-popup" id="smartdeskPopup" role="dialog" aria-hidden="true">
      <div class="smartdesk-header">
        <div class="avatar"><svg width="40" height="40" viewBox="0 0 64 64"><circle cx="32" cy="22" r="8" fill="#ffd6e8"/><rect x="16" y="36" width="32" height="12" rx="6" fill="#ffe6f0"/></svg></div>
        <h3>SmartDesk</h3>
        <button class="close-btn" id="smartdeskClose">✕</button>
      </div>
      <div class="smartdesk-body" id="smartdeskBody">
        <div class="sd-bubble sd-bot">Hello 👋 I’m <strong>SmartDesk</strong>! Ask me about courses, admissions, placements, or college facilities.</div>
      </div>
      <div class="smartdesk-input">
        <input id="smartdeskInput" placeholder="Type your question here..." />
        <button id="smartdeskSend">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  // --- Style Loader ---
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'smartdesk.css';
  document.head.appendChild(link);

  // --- Elements ---
  const icon = document.getElementById('smartdeskIcon');
  const popup = document.getElementById('smartdeskPopup');
  const tooltip = document.getElementById('smartdeskTooltip');
  const closeBtn = document.getElementById('smartdeskClose');
  const body = document.getElementById('smartdeskBody');
  const input = document.getElementById('smartdeskInput');
  const sendBtn = document.getElementById('smartdeskSend');

  // --- Tooltip & Popup ---
  icon.addEventListener('mouseenter', ()=> tooltip.classList.add('hover-show'));
  icon.addEventListener('mouseleave', ()=> tooltip.classList.remove('hover-show'));
  icon.addEventListener('click', ()=> {
    popup.style.display = 'flex';
    popup.setAttribute('aria-hidden','false');
    icon.style.display = 'none';
    input.focus();
  });
  closeBtn.addEventListener('click', ()=> {
    popup.style.display = 'none';
    popup.setAttribute('aria-hidden','true');
    icon.style.display = 'flex';
  });

  // --- Message Handlers ---
  function appendMessage(text, who) {
    const div = document.createElement('div');
    div.className = `sd-bubble ${who === 'bot' ? 'sd-bot' : 'sd-user'}`;
    div.innerHTML = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }
  function appendTyping() {
    const t = document.createElement('div');
    t.className = 'sd-typing';
    t.id = 'smartdeskTyping';
    t.textContent = 'SmartDesk is typing...';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }
  function removeTyping() {
    const t = document.getElementById('smartdeskTyping');
    if (t) t.remove();
  }

  // ==================================================
  // 🧠 100+ FAQs — GPW Siddipet Knowledge Base
  // ==================================================
// --- Enhanced FAQ Dataset (with multiple triggers & responses) ---
const faqs = [
  { triggers: ["hello", "helo", "hi", "hey", "hyy","hie"], responses: ["Hello! 👋 Welcome to GPW Siddipet. How can I help you today?", "Hey there! 😊 Ready to explore courses, admissions, or campus life?", "Hi! 👋 Glad to see you! What would you like to know about GPW Siddipet?"] },
  { triggers: ["how are you", "hru","hw r u"], responses: ["I’m feeling great 😄 Thanks for asking! How about you?", "Doing well! 😎 Ready to assist you with your queries.", "All good! How can I help you today?"] },
  { triggers: ["fine"], responses: ["Awesome! 😄 What would you like to know about next?", "Great! Do you want info about courses, admissions, or campus?", "Nice! You can ask me about college facilities, faculty, or placements."] },
  { triggers: ["thanks", "thank you", "tq","wow"], responses: ["You’re welcome! 💫", "Happy to help! 😊", "Anytime! Let me know if you have more questions."] },
  { triggers: ["ok", "yes", "kk","yeah","hmm"], responses: ["Do you want to know more?", "Tell me what you want to know about — admissions, courses, or campus life?", "Alright! You can ask about any department, hostel, or events."] },
   {
    triggers: ["tell me about gpw siddipet", "tell about college", "college info"],
    responses: [
      "🏫 GPW Siddipet, established in 2014, empowers women through quality technical education and hands-on learning.Our college focuses on holistic development and career-ready skills for students .Established in 2014, GPW Siddipet provides a vibrant, women-friendly campus environment.",
    ]
  },
  {
    triggers: ["where is our college located", "location", "address"],
    responses: [
      "📍 We're in Peddakodur Village, Chinnakodur Mandal, Siddipet District, Telangana.You can get a location from our site",
      "The college is located near Siddipet town center, Telangana.Check via location in the site.",
      "GPW Siddipet can be found at Peddakodur Village, Chinnakodur Mandal,siddipet dist."
    ]
  },
  {
    triggers:["who is the principal",],
    responses:[
      "😊 Our Principal, Mrs. Snehalatha ma'am, is supportive and encourages students in academics and beyond!",
    ]
  },
  {
    triggers: ["who runs the college", "principal", ],
    responses: [
      "It’s a government polytechnic exclusively for women, under the Department of Technical Education, Telangana.",
      "Our Principal, Mrs. Snehalatha ma'am, is very supportive and approachable, encouraging students academically and beyond!",
      "The college is government-run with guidance from the Department of Technical Education, Telangana."
    ]
  },
  {
    triggers: ["when was it started", "when established"],
    responses: [
      "It was established in 2014 and is affiliated to SBTET Telangana.",
      "Our college has been empowering women since 2014.",
      "Established in 2014, GPW Siddipet is affiliated to SBTET Telangana."
    ]
  },
  {
    triggers: ["how do i join gpw siddipet", "admission", "eligibility", "admission process"],
    responses: [
      "Admissions happen through TS POLYCET counseling under DTE Telangana. Bring your documents for verification.",
      "You’re eligible if you’ve passed 10th (SSC) and appeared for TS POLYCET. Simple and straightforward! 😊",
      "Check the official DTE Telangana site or TS POLYCET portal for counseling and seat allocation."
    ]
  },
  {
    triggers: ["admission documents","documents", "what documents do i need", "documents required"],
    responses: [
      "You’ll need SSC memo, TC, caste, income, Aadhaar, and POLYCET rank card& pass-photos with extra xerox copies.",
      "Bring your SSC marks memo, TC, caste and income certificates, pass-photos,Aadhaar, and POLYCET rank card — plus 3–4 xerox copies.",
      "SSC memo, TC, caste doc, income doc, Aadhaar copy, POLYCET rank card required for admission verification."
    ]
  },

  // --- Courses ---
  {
    triggers: ["courses", "courses offered", "branch", "available branches"],
    responses: [
      "📚 We offer 3-year diploma programs in Computer Science (CSE), Electrical (EEE), Civil.",
      "Diploma programs: CSE, EEE, Civil— focusing on theory and practical learning.",
      "Our college offers courses in CSE, EEE, Civil for career-ready skills."
    ]
  },
  {
    triggers: ["duration", "course duration"],
    responses: [
      "Each diploma course runs for 3 years (6 semesters).",
      "3-year diploma program divided into 6 semesters.",
      "Duration of each course is 3 years with both theory and practical labs.",

    ]
  },
  {
     triggers: ["can i chage my course"],
     responses: ["Yes, with proper approval and within the first month of admission 🔄.By the sliding option you can shift from current branch tot the selected branch."],
  },
  {
    triggers: ["syllabus", "subjects"],
    responses: [
      "Syllabus is as prescribed by SBTET Telangana including core engineering and lab work.",
      "Subjects include programming, applied sciences, circuits, and drawing depending on your paarticular department.",
      "Syllabus is updated by SBTET with focus on practical and theoretical skills."
    ]
  },
  {
    triggers: ["cse syllabus", " cse subjects","subjects for cse"],
    responses:["The subjects are differnt for each semester","You can check the syllabus page in the website department."],
  },

  // --- Fees & Scholarships ---
  {
    triggers: ["how much is the college fee", "fees", "fee details for clg"],
    responses: [
      "The tuition fee follows government norms and is very affordable 💰",
      "Tuition fee as per government norms, with reimbursement available for eligible students.",
      "Fees are minimal and subsidized by the government. Scholarship options are also available."
    ]
  },
    { triggers: ["scholarships", "any scholarships", "financial aid for students"], 
    response: ["Yes! We have merit-based & need-based scholarships 💰. Check the website for details." 
]
},
  
  {
    triggers: ["scholarship", "scholarships", "can i get fee reimbursement", "how do i apply for scholarships"],
    responses: [
      "Yes! Scholarships are available for SC/ST/BC/EBC students through ePASS.",
      "Eligible students get reimbursement through Telangana ePASS.",
      "You can apply for scholarships online via the ePASS portal during admission time."
    ]
  },
  //-----admissions---
  {
     triggers:["documents for admission"],
  
      response: ["10th/12th mark sheet, ID proof, passport size photo & other course-specific docs 📝."],
  },
  // --- Departments ---
  {
    triggers: ["cse department", "computer science", "computer department","cse"],
    responses: [
      "CSE covers programming, networking, databases, and web development.",
      "Our Computer Science program includes programming, databases, networking, and web development.",
      "CSE department focuses on coding, software, and IT skills for real-world applications."
    ]
  },
  {
    triggers: ["eee department", "electrical ","eee"],
    responses: [
      "EEE covers power systems, circuits, and automation.",
      "Electrical & Electronics department focuses on circuits, power, and control systems.",
      "EEE includes theory and lab work for electrical systems and automation."
    ]
  },
  {
    triggers: ["civil department", "civil","ce","civil engineering"],
    responses: [
      "Civil includes CAD, surveying, and construction technology.",
      "Our Civil Engineering course teaches construction, design, and surveying.The student will get a basic knowledge on the construction",
      "Civil focuses on real-world construction projects and lab-based learning."
    ]
  },

  // --- Hostel & Facilities ---
  {
    triggers: ["hostel", "hostel availability", "hostel fees", "warden", "hostel rules"],
    responses: [
      "Yes! 🏡 GPW Siddipet provides a safe and clean hostel for girls, with 24/7 security.",
      "The hostel has basic facilities like beds, study tables, Wi-Fi, and a warden for assistance.",
      "Hostel rules include timings, visitor guidelines, and discipline. Safety is ensured via CCTV and lady warden."
    ]
  },
  { triggers: ["hostel facility", "hostel details", "hostel"], 
    response: ["Safe & comfortable hostels available 🏠. Separate for  girls." ]},
  { triggers: ["cafeteria", "food", "canteen"], 
    response:[ "Our cafeteria offers tasty & hygienic food 🍔🍕."
 ] },
  { triggers: ["sports facilities", "sports", "playground"], 
    response: "Football ⚽, cricket 🏏, badminton 🏸, volleyball 🏐 & indoor gym 🏋️ are available." },
  { triggers: ["library", "books", "digital library"], 
    response: "Our library has thousands of books 📚 & well equipped resources 💻.you can find magazines,newspapers,and motivational books and course related books ,and especially the library has various ecet books..📚" },
  { triggers: ["wifi availability", "wifi", "internet"], 
    response: "High-speed Wi-Fi is available across campus 🌐." },
  {
    triggers: ["library", "computer lab", "internet", "facilities"],
    responses: [
      "Library and computer labs are well-equipped. Wi-Fi is available across campus.",
      "Campus facilities include classrooms, labs, library, sports, hostel, and a hygienic canteen.",
      "Students can access the library, computer labs, and high-speed internet for studies and projects."
    ]
  },

  // --- Placements & Career ---
  {
    triggers: ["placements", "placement officer", "companies visiting", "average packages", "internship", "training", "career guidance"],
    responses: [
      "Placement Cell organizes drives, internships, and resume workshops.",
      "Average placement packages are attractive and final-year students get internship opportunities."
    ]
  },

  // --- Events & Campus Life ---
  
    {
      triggers: ["campus timings", "college hours", "opening hours","timings"], 
    response: ["Campus opens at 9:30 AM ⏰ and closes at 4:00 PM 🕕."]
    },
    {
    triggers: ["workshops", "tech fest", "sports day","student clubs"],
    responses: [
      "Students can participate in various activities like workshops, and tech/cultural fests for overall development.",
      "Annual events include TechFest, cultural day, sports day, and seminars.",
      "Campus life is vibrant with cultural, technical, and sports activities throughout the year."
    ]
  },
  {
    triggers:[ "cultural fest", "freshers day", "farewell", "celebrations" ],
    response:[
      "The celebrations are the most curious thing for every student.The events are her fresher party to welcome the freshers 🎭 & the farewell partywith a full of joy. ",
      "🎭 Students shine in cultural fests full of dance, art, and fun!"
    ]
  },
  { triggers: ["sports events", "tournaments", "competitions"], 
    response: "We organize inter-college & intra-college sports events 🏆." },
  { triggers: ["tech competitions", "hackathons", "coding contests"], 
    response: "Participate in hackathons & coding competitions 💻." },
  { triggers: ["cultural fests", "fests", "events"], 
    response: "Annual cultural fest is full of fun & talent 🌟." },
  { triggers: ["music & dance", "dance club", "music club"], 
    response: "Music & dance clubs welcome everyone 🎶💃." },
  { triggers: ["debates & quizzes", "debate club", "quiz"], 
    response: "Debate & quiz competitions enhance knowledge & confidence 🗣️." },

  // --- Exams & Results ---
  {
   triggers: ["exam fee", "fee", "is their any fees for exam"],
    responses: ["The fee should needed only during the semester examinations.","The fee might charge per semester is 650 to get hallticket."],
    },
  {
  
    triggers: ["exam", "exams", "exams date",  "internal exam"],
    responses: [
      "Semester exams are conducted as per SBTET schedule. & The Results are posted on sbtet portal online.",
      "You need at least 75% attendance to appear for exams.",
    ],
  },
    { triggers: ["exam survival tips", "exam week tips", "exam help"], 
    response: ["Plan 📅, take breaks 🛌, and fuel up 🍫 for energy!"] },
    // fun //
     { 
      triggers: ["nap in library", "sleep in library", "nap"], 
    response:[ "Shhh! 😴 Quiet corners are available for study & short naps 😉." ]},
  { 
    triggers: ["make friends", "friendship", "how to make friends"], 
    response: ["speak politely with every one.That really make you good friends","study by groups .","Talk with all the classmates and students without any attitude.That makes you a best friends without any quarrels." ]},
  
  // ================== MISCELLANEOUS ==================
  { triggers: ["transport facility", "bus", "college transport"], 
    response: ["We have College bus facility from the siddipet bus stop  🚌."] },
  { triggers: [ "online resources", "e-library"], 
    response: [" we have library facility, there no e-library & learning platforms like computer labs accessible during lab hours🌐."] },
  { triggers: ["campus safety", "security", "safety measures"], 
    response: ["24/7 security & CCTV surveillance ensures safety 🔒."] },
  { triggers: ["lost and found", "lost item", "found item"], 
    response: ["Visit the student office for lost & found items 🔍." ]},
  { triggers: ["printing facilities", "printer", "photocopy"], 
    response: ["Printers & photocopy machines are available in the canteen 🖨️ or you can check in your concerned department ."] },

  // --- Default response ---
  {
    triggers: ["default"],
    responses: [
      "I'm sorry 😅, I didn't understand. Try asking about 'courses', 'admissions', 'contact', 'fees', 'hostel', 'faculty', or 'labs'.",
      "Hmm, I didn't catch that 😅. You can ask about admissions, courses, or campus facilities.",
      "Oops! I’m not sure about that. Try asking about college, departments, or placements."
    ]
  },
  { triggers: ["default"], responses: ["I'm sorry 😅, I didn't understand. Try asking about 'courses', 'admissions', 'contact', 'fees', 'hostel', 'faculty', or 'labs'.", "Hmm, I didn't catch that 😅. You can ask about admissions, courses, or campus facilities.", "Oops! I’m not sure about that. Try asking about college, departments, or placements."] }
];

// --- Utility: Calculate similarity score between two strings ---
function similarity(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  const editDist = editDistance(longer, shorter);
  return (longerLength - editDist) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// --- Get Response (with fuzzy matching) ---
function getResponse(inputText) {
  const text = inputText.toLowerCase().trim();
  let bestMatch = { score: 0, faq: null };

  faqs.forEach(faq => {
    faq.triggers.forEach(trigger => {
      const score = similarity(text, trigger);
      if (score > bestMatch.score) {
        bestMatch = { score, faq };
      }
    });
  });

  // If best match is reasonable, pick random response
  if (bestMatch.score >= 0.4) {
    const responses = bestMatch.faq.responses;
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Default fallback
  const defaultResponses = faqs.find(f => f.triggers.includes("default")).responses;
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// --- Send Message ---
function sendMessage() {
  const txt = input.value.trim();
  if (!txt) return;
  appendMessage(txt, 'user');
  input.value = '';
  setTimeout(() => {
    appendTyping();
    setTimeout(() => {
      removeTyping();
      const reply = getResponse(txt);
      appendMessage(reply, 'bot');
    }, 800 + Math.random() * 500);
  }, 250);
}


  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e)=> { if (e.key === 'Enter') sendMessage(); });
 
  
})();
