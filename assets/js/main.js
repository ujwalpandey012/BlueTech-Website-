/*
=========================================================
 Blue Tech IT Solution - Global JavaScript File
 Author: Ujwal Pandey / Blue Tech IT Solution
 Works on: GitHub Pages, Replit, Netlify, Vercel
=========================================================
*/

console.log("Blue Tech IT Solution Website Loaded Successfully!");

// ------------------------------
// Contact Form Submission
// ------------------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent successfully! We will contact you soon.");
    });
}

// ------------------------------
// Job Application Form
// ------------------------------
const applyForm = document.getElementById("applyForm");

if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your job application has been submitted successfully!");
    });
}

// ------------------------------
// Auto-fill job title from URL
// ------------------------------
const params = new URLSearchParams(window.location.search);
const job = params.get("job");

if (document.getElementById("jobTitle")) {
    document.getElementById("jobTitle").value = job ? job : "General Application";
}

