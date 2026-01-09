
// const jobs = [
//   { title: "Frontend Developer", location: "Pune", status: "Apply" },
//   { title: "Backend Developer", location: "Mumbai", status: "Apply" },
//   { title: "Web Developer Intern", location: "Remote", status: "Apply" },
//   { title: "UI Designer", location: "Delhi", status: "Apply" },
//   { title: "React Developer", location: "Bangalore", status: "Apply" },
//   { title: "Node.js Developer", location: "Hyderabad", status: "Apply" },
//   { title: "Full Stack Developer", location: "Chennai", status: "Apply" },
//   { title: "Software Tester", location: "Noida", status: "Apply" },
//   { title: "Data Analyst", location: "Gurgaon", status: "Apply" },
//   { title: "Python Developer", location: "Remote", status: "Apply" }
// ];

// // DOM
// const jobsDiv = document.getElementById("jobs");
// const search = document.getElementById("search");
// const modal = document.getElementById("applyModal");
// const submitBtn = document.getElementById("submitApply");

// let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
// let selectedJob = "";

// // DISPLAY JOBS
// function displayJobs(list) {
//   jobsDiv.innerHTML = "";
//   list.forEach(job => {
//     const isApplied = appliedJobs.some(j => j.title === job.title);

//     const div = document.createElement("div");
//     div.className = "job";
//     div.innerHTML = `
//       <h3>${job.title}</h3>
//       <p>Location: ${job.location}</p>
//       <p>Status: ${isApplied ? "Applied ✅" : "Open"}</p>
//       <button ${isApplied ? "disabled" : ""} onclick="openModal('${job.title}')">
//         ${isApplied ? "Applied" : "Apply"}
//       </button>
//     `;
//     jobsDiv.appendChild(div);
//   });
// }






// // OPEN MODAL
// function openModal(title) {
//   selectedJob = title;
//   modal.style.display = "block";
// }

// // CLOSE MODAL
// function closeModal() {
//   modal.style.display = "none";
// }

// // APPLY SUBMIT
// submitBtn.addEventListener("click", () => {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const exp = document.getElementById("experience").value;

//   if (!name || !email || !exp) {
//     alert("Please fill all details");
//     return;
//   }



//   appliedJobs.push({
//     title: selectedJob,
//     name,
//     email,
//     experience: exp,
//     date: new Date().toLocaleDateString(),
//     status: "Applied"
//   });

//   localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
//   closeModal();
//   displayJobs(jobs);
//   alert("Application Submitted Successfully!");
// });



//   function cancelApplication(title) {
//   const confirmCancel = confirm(
//     "Are you sure you want to cancel this application?"
//   );

//   if (!confirmCancel) return;

//   // remove from appliedJobs
//   appliedJobs = appliedJobs.filter(job => job.title !== title);

//   // update localStorage
//   localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

//   alert("Application Cancelled ❌");

//   // refresh UI
//   displayJobs(jobs);
// }




// // SEARCH
// search.addEventListener("input", () => {
//   const value = search.value.toLowerCase();
//   const filtered = jobs.filter(job =>
//     job.title.toLowerCase().includes(value)
//   );
//   displayJobs(filtered);
// });

// // INITIAL LOAD
// displayJobs(jobs);


const jobs = [
  { title: "Frontend Developer", location: "Pune" },
  { title: "Backend Developer", location: "Mumbai" },
  { title: "Web Developer Intern", location: "Remote" },
  { title: "UI Designer", location: "Delhi" },
  { title: "React Developer", location: "Bangalore" },
  { title: "Node.js Developer", location: "Hyderabad" },
  { title: "Full Stack Developer", location: "Chennai" },
  { title: "Software Tester", location: "Noida" },
  { title: "Data Analyst", location: "Gurgaon" },
  { title: "Python Developer", location: "Remote" }
];

// DOM
const jobsDiv = document.getElementById("jobs");
const search = document.getElementById("search");
const modal = document.getElementById("applyModal");
const submitBtn = document.getElementById("submitApply");

let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
let selectedJob = "";

/* DISPLAY JOBS */
function displayJobs(list) {
  jobsDiv.innerHTML = "";

  list.forEach(job => {
    const isApplied = appliedJobs.some(j => j.title === job.title);

    const div = document.createElement("div");
    div.className = "job";

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>Location: ${job.location}</p>
      <p>Status: ${isApplied ? "Applied ✅" : "Open"}</p>

      ${
        isApplied
          ? `<button class="cancel-btn" onclick="cancelApplication('${job.title}')">
               Cancel Application
             </button>`
          : `<button onclick="openModal('${job.title}')">Apply</button>`
      }
    `;

    jobsDiv.appendChild(div);
  });
}

/* OPEN MODAL */
function openModal(title) {
  selectedJob = title;
  modal.style.display = "block";
}

/* CLOSE MODAL */
function closeModal() {
  modal.style.display = "none";
}

/* SUBMIT APPLICATION */
submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const exp = document.getElementById("experience").value;

  if (!name || !email || !exp) {
    alert("Please fill all details");
    return;
  }

  appliedJobs.push({
    title: selectedJob,
    name,
    email,
    experience: exp,
    date: new Date().toLocaleDateString(),
    status: "Applied"
  });

  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

  closeModal();
  displayJobs(jobs);
  alert("Application Submitted Successfully!");
});

/* CANCEL APPLICATION */
function cancelApplication(title) {
  const confirmCancel = confirm(
    "Are you sure you want to cancel this application?"
  );

  if (!confirmCancel) return;

  appliedJobs = appliedJobs.filter(job => job.title !== title);
  localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

  alert("Application Cancelled ❌");
  displayJobs(jobs);
}

/* SEARCH */
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value)
  );
  displayJobs(filtered);
});

/* INITIAL LOAD */
displayJobs(jobs);
