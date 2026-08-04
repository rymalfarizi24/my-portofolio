// Contact Form
const contactForm = document.getElementById("contact-form");
const inputForm = contactForm.querySelectorAll("input, textarea");
const validationMessage = contactForm.getElementsByTagName("span");

const submission = document.getElementById("submission");

const validationModal = submission.querySelector("#validation");
const submitButton = validationModal.querySelector("#submit-button");
const successionModal = submission.querySelector("#succession");

const closeButton = submission.querySelectorAll(".close-button");
closeButton.forEach((button) => {
  button.addEventListener("click", function () {
    submission.classList.add("hidden");
  });
});

const loadingGif = submission.querySelector("#loading");
const successionIcon = successionModal.getElementsByTagName("svg");
const messageSuccession = successionModal.querySelector("h4");
const informationSuccession = successionModal.querySelector("p");

contactForm.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  // Check if input is empty
  for (let index = 0; index < inputForm.length; index++) {
    if (inputForm[index].value.trim() == "") {
      validationMessage[index].classList.remove("hidden");
      validationMessage[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    } else validationMessage[index].classList.add("hidden");

    // Check email validity
    if (index == 1) {
      if (!isValidEmail(inputForm[1].value)) {
        validationMessage[1].classList.remove("hidden");
        validationMessage[1].textContent = "Email is invalid";
        validationMessage[1].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      } else if (inputForm[1].value.trim() == "") {
        validationMessage[1].textContent = "Please enter your email!";
        validationMessage[1].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }

  // Show Modal
  submission.classList.remove("hidden");
  validationModal.classList.remove("hidden");
  successionModal.classList.add("hidden");
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Import Firestore Module
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "IzaSyBiLRIhF20eUP4GpMsQlT5WV5cmasScAFY",
  authDomain: "myportofolio-65aed.firebaseapp.com",
  projectId: "myportofolio-65aed",
  storageBucket: "myportofolio-65aed.firebasestorage.app",
  messagingSenderId: "234953842468",
  appId: "1:234953842468:web:893cca114458d487141db1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Post Data to Firestore
async function setNewData(event) {
  event.preventDefault();

  showModal();

  const ref = collection(db, "MessagesList");
  const now = new Date();
  const timestamp = Timestamp.fromDate(now);

  await addDoc(ref, {
    Name: inputForm[0].value,
    Email: inputForm[1].value,
    Message: inputForm[2].value,
    CreatedAt: timestamp,
  })
    .then(() => successMessage())
    .catch((error) => errorMessage(error))
    .finally(() => finallyMessage());
}

const showModal = () => {
  validationModal.classList.add("hidden");
  loadingGif.classList.remove("hidden");
};

const errorMessage = (error) => {
  messageSuccession.textContent = "Your message failed to send";
  informationSuccession.textContent = error;
  successionIcon[0].classList.add("hidden");
  successionIcon[1].classList.remove("hidden");
};

const successMessage = () => {
  inputForm[2].value = "";
  messageSuccession.textContent = "Your message has been sent";
  informationSuccession.textContent = "Thank you for contacting us!";
  successionIcon[0].classList.remove("hidden");
  successionIcon[1].classList.add("hidden");
};

const finallyMessage = () => {
  successionModal.classList.remove("hidden");
  loadingGif.classList.add("hidden");
};

submitButton.addEventListener("click", setNewData);

// Scroll to Top
function scrollIntoView(tag) {
  const yOffset = -250;
  const y = tag.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

// Skills Section
const skills = [
  { name: "Laravel", slug: "laravel" },
  { name: "Livewire", slug: "livewire" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Python", slug: "python" },
  { name: "PHP", slug: "php" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "TensorFlow", slug: "tensorflow" },
];

const grid = document.getElementById("grid");

grid.innerHTML = skills
  .map(
    (s) => `
  <div class="skill-card flex flex-col items-center gap-3">
    <div class="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
      <img
        src="https://cdn.simpleicons.org/${s.slug}"
        alt="${s.name}"
        class="w-9 h-9 object-contain"
        loading="lazy"
        onerror="this.parentElement.innerHTML='<span class=\\'text-xs font-semibold text-slate-500\\'>${s.name}</span>'"
      >
    </div>
    <span class="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">${s.name}</span>
  </div>
`,
  )
  .join("");

// Experiences Section
const experiences = [
  {
    date: "Aug - Dec 2025",
    title: "Teaching Assistant for Electrical Circuit",
    org: "Diponegoro University",
    points: [
      "Assisted laboratory sessions for 20 undergraduate students in the Electrical Circuits Laboratory course.",
      "Guided students in circuit analysis, laboratory experiments, and the use of electrical measurement instruments.",
      "Evaluated and provided feedback on laboratory reports for 10 assigned students, ensuring accuracy and adherence to academic standards.",
    ],
    tags: [{ name: "Electrical Circuits" }],
  },
  {
    date: "Feb - Jun 2025",
    title: "Teaching Assistant for Algorithms and Programming",
    org: "Diponegoro University",
    points: [
      "Taught and assisted one class of 30 students in the Algorithms and Programming laboratory sessions.",
      "Covered fundamental programming concepts using Python and C++, including basic data structures, programming logic, and problem-solving techniques.",
    ],
    tags: [{ name: "Python" }, { name: "C++" }],
  },
  {
    date: "Jan - Feb 2025",
    title: "Web Development Intern",
    org: "PT DES Teknologi Informasi",
    description:
      "During my two-month internship, I worked in a team of two to develop a web-based guestbook application using CodeIgniter 4. I was primarily responsible for the backend development, but I also occasionally contributed to the frontend. The application covers the entire guest management process—from form submission to visit scheduling.",
    tags: [
      { name: "CodeIgniter 4", href: "https://codeigniter.com" },
      { name: "MySQL", href: "https://mysql.com" },
      { name: "REST API" },
    ],
  },
];

const timeline = document.getElementById("timeline");

timeline.innerHTML = experiences
  .map((exp, i) => {
    const isLast = i === experiences.length - 1;

    const body = exp.points
      ? `<ul class="space-y-2 mb-5 text-secondary dark:text-slate-400 text-sm sm:text-base list-disc list-inside">
        ${exp.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>`
      : `<p class="mb-5 text-secondary dark:text-slate-400 text-sm sm:text-base leading-relaxed">${exp.description}</p>`;

    const tags = exp.tags
      .map((t) => {
        const cls =
          "px-3 py-1 border border-slate-300 dark:border-slate-600 rounded-full inline-flex justify-center items-center text-slate-700 dark:text-slate-200 hover:border-primary hover:bg-primary hover:text-white text-xs sm:text-sm transition-colors";
        return t.href
          ? `<a href="${t.href}" target="_blank" class="${cls}">${t.name}</a>`
          : `<span class="${cls}">${t.name}</span>`;
      })
      .join("");

    return `
    <div class="exp-item flex gap-5 ${isLast ? "" : "pb-12"}">
      <div class="flex flex-col items-center w-8 shrink-0">
        <div class="exp-dot w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 mt-1.5"></div>
        ${isLast ? "" : '<div class="w-px flex-1 bg-slate-300 dark:bg-slate-700 mt-2"></div>'}
      </div>

      <div class="exp-card w-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-7">
        <span class="inline-block text-xs sm:text-sm font-semibold text-primary mb-3">${exp.date}</span>
        <h3 class="font-semibold text-dark text-lg sm:text-xl mb-1 dark:text-white">${exp.title}</h3>
        <h4 class="font-medium text-slate-500 dark:text-slate-400 mb-4 text-sm sm:text-base">${exp.org}</h4>
        ${body}
        <div class="flex flex-wrap gap-2">${tags}</div>
      </div>
    </div>
  `;
  })
  .join("");
