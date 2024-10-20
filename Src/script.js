// GSAP Animation Function
function gsapAnimation() {
  gsap.from(".nav", {
    opacity: 0,
    y: "-80px",
    duration: 1,
  });

  gsap.to("footer", {
    opacity: 1,
    duration: 1,
  });

  gsap.to(".text", {
    opacity: 1,
    delay: 1,
  });

  gsap.to(".progress-bar", {
    opacity: 1,
    delay: 1,
  });

  gsap.to(".sidebar", {
    opacity: 1,
    delay: 7,
  });

  gsap.to(".box", {
    opacity: 1,
    delay: 3,
    stagger: 0.2,
    duration: 1,
  });
}

// Call the animation function
gsapAnimation();

// Get all boxes
const boxes = document.getElementsByClassName("box");
let clickTimeout;

// Function to manage button state changes
function buttonStateChange() {
  let completedTask = 0;
  const totalTasks = parseInt(boxes.length);
  console.log(totalTasks);

  // Load the completion state from local storage
  const storedStates = JSON.parse(localStorage.getItem("taskStates")) || {};

  for (let i = 0; i < boxes.length; i++) {
    let isComplete = storedStates[i] || false; // Get the stored state or default to false

    // Update the UI based on the stored state
    if (isComplete) {
      boxes[i].style.backgroundColor = `#4CAF50`;
      boxes[i].style.textDecoration = `line-through`;
      completedTask++;
    }

    boxes[i].addEventListener("click", () => {
      // Clear the timeout if it exists
      clearTimeout(clickTimeout);

      // Set a new timeout to execute the single click event
      clickTimeout = setTimeout(() => {
        isComplete = !isComplete; // Toggle completion state

        // Update the UI
        if (isComplete) {
          boxes[i].style.backgroundColor = `#4CAF50`;
          boxes[i].style.textDecoration = `line-through`;
          completedTask++;
        } else {
          boxes[i].style.backgroundColor = `#8892B0`;
          boxes[i].style.textDecoration = `none`;
          completedTask--;
        }

        // Update local storage
        storedStates[i] = isComplete;
        localStorage.setItem("taskStates", JSON.stringify(storedStates));

        // Calculate and update progress
        const progressPercent = Math.ceil((completedTask / totalTasks) * 100);
        updateProgress(progressPercent);
      }, 300); // Delay for single click action
    });

    boxes[i].addEventListener("dblclick", (event) => {
      // Prevent the single click event from executing
      clearTimeout(clickTimeout);
      const modalId = boxes[i].getAttribute("data-modal");
      openModal(modalId);
    });
  }

  // Calculate and set initial progress
  const initialProgressPercent = Math.ceil((completedTask / totalTasks) * 100);
  updateProgress(initialProgressPercent);
}

// Call the function to initialize the button states and progress
buttonStateChange();

// Modal functionality
let blur = document.getElementById("blur");

// Get all modals
let modals = {
  html: document.getElementById("html"),
  css: document.getElementById("css"),
  tailwind: document.getElementById("tailwind"),
  project1: document.getElementById("project1"),
  project2: document.getElementById("project2"),
  project3: document.getElementById("project3"),
  project4: document.getElementById("project4"),
  project5: document.getElementById("project5"),
  github: document.getElementById("github"),
  revise: document.getElementById("revise"),
  mongodb: document.getElementById("mongodb"),
  mongoose: document.getElementById("mongoose"),
  hosting: document.getElementById("hosting"),
  deploy: document.getElementById("deploy"),
  testing: document.getElementById("testing"),
  git: document.getElementById("git"),
  reactjs: document.getElementById("reactjs"),
  expressjs: document.getElementById("expressjs"),
  userauth: document.getElementById("userauth"),
  nodejs: document.getElementById("nodejs"),
  rrouter: document.getElementById("rrouter"),
  statemanage: document.getElementById("statemanage"),
  securitymanage: document.getElementById("securitymanage"),
  javascript: document.getElementById("javascript"),
};

// Close buttons
let closeButtons = {
  html: document.getElementById("html-close"),
  css: document.getElementById("css-close"),
  tailwind: document.getElementById("tailwind-close"),
  project1: document.getElementById("project1-close"),
  project2: document.getElementById("project2-close"),
  project3: document.getElementById("project3-close"),
  project4: document.getElementById("project4-close"),
  project5: document.getElementById("project5-close"),
  github: document.getElementById("github-close"),
  revise: document.getElementById("revise-close"),
  mongodb: document.getElementById("mongodb-close"),
  mongoose: document.getElementById("mongoose-close"),
  hosting: document.getElementById("hosting-close"),
  deploy: document.getElementById("deploy-close"),
  testing: document.getElementById("testing-close"),
  git: document.getElementById("git-close"),
  reactjs: document.getElementById("reactjs-close"),
  expressjs: document.getElementById("expressjs-close"),
  userauth: document.getElementById("userauth-close"),
  nodejs: document.getElementById("nodejs-close"),
  rrouter: document.getElementById("rrouter-close"),
  statemanage: document.getElementById("statemanage-close"),
  securitymanage: document.getElementById("securitymanage-close"),
  javascript: document.getElementById("javascript-close"),
};

// Open modal function
function openModal(modalId) {
  blur.classList.add("active");
  modals[modalId].style.display = "block";
}

// Close modal function
function closeModal(modalId) {
  blur.classList.remove("active");
  modals[modalId].style.display = "none";
}

// Event listener for boxes
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("dblclick", () => {
    const modalId = box.getAttribute("data-modal");
    openModal(modalId);
  });
});

// Event listener for close buttons
for (let modalId in closeButtons) {
  closeButtons[modalId].addEventListener("click", () => {
    closeModal(modalId);
  });
}

// Update progress function
function updateProgress(progress) {
  let progressbar = document.querySelector(".progress");
  console.log(progress);
  progressbar.style.width = `${progress}%`;
  if (progress !== 0) {
    progressbar.innerText = `${progress}%`;
  } else {
    progressbar.innerText = "";
  }
}
