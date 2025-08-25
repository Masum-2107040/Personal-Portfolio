const navs = document.querySelectorAll('.nav-list li');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Function to handle section activation
function activateSection(targetSectionId) {
    sections.forEach(section => {
        if (section.id === targetSectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Navbar action and all section actions
navs.forEach(nav => {
    nav.addEventListener('click', () => {
        // Remove active class from the previously active list
        document.querySelector('.nav-list li.active')?.classList.remove('active');

        // Add active class to the clicked list
        nav.classList.add('active');

        const targetSectionId = nav.dataset.section;
        activateSection(targetSectionId);
    });
});

// Initially activate the home section when the page loads
document.addEventListener('DOMContentLoaded', () => {
    activateSection('home');
});


// Resume section when clicking tab-list
resumeLists.forEach(list => {
    list.addEventListener('click', () => {
        // Remove active class from the previously active list
        document.querySelector('.resume-list.active')?.classList.remove('active');

        // Add active class to the clicked list
        list.classList.add('active');

        // Remove active class from the previously active resume box
        document.querySelector('.resume-box.active')?.classList.remove('active');

        // Show the selected resume box based on data-tab attribute
        const targetTabId = list.dataset.tab;
        document.getElementById(targetTabId)?.classList.add('active');
    });
});

// Portfolio section when clicking tab-list
portfolioLists.forEach(list => {
    list.addEventListener('click', () => {
        // Remove active class from the previously active list
        document.querySelector('.portfolio-list.active')?.classList.remove('active');

        // Add active class to the clicked list
        list.classList.add('active');

        // Remove active class from the previously active portfolio box
        document.querySelector('.portfolio-box.active')?.classList.remove('active');

        // Show the selected portfolio box based on data-tab attribute
        const targetTabId = list.dataset.tab;
        document.getElementById(targetTabId)?.classList.add('active');
    });
});


// Contact Form Logic (SMTP.js - client-side)
// WARNING: Directly exposing SMTP credentials in client-side code is INSECURE for production.
// This is for demonstration/testing purposes only. For a live site, use a backend API.

const form = document.querySelector('#contact-form');
const Fullname = document.getElementById("name");
const mail = document.getElementById("email");
const Phone = document.getElementById("phone");
const Subject = document.getElementById("subject");
const Message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    const bodyMessage = `
        Full Name: ${Fullname.value}<br>
        Email: ${mail.value}<br>
        Phone Number: ${Phone.value}<br>
        Message: ${Message.value}
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mollamasum764@gmail.com", // Replace with your Elastic Email username/API key sender
        Password : "21EE740F8DA1899C6A9E14D04DC36B83A51B", // Replace with your Elastic Email API Key
        To : 'masummolla3787@gmail.com', // Recipient email
        From : "mollamasum764@gmail.com", // Sender email (must be verified in Elastic Email)
        Subject : Subject.value,
        Body : bodyMessage
    }).then(
        message => {
            alert("Message sent successfully!");
            form.reset(); // Clear the form on success
        }
    ).catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
    });
});


// Typed.js for typing effect on home section
const options = {
    strings: ["Cyber Security Enthusiast", "Bug Bounty Hunter", "Web Exploit Learner"],
    typeSpeed: 120,
    backSpeed: 80,
    backDelay: 1000,
    startDelay: 800,
    loop: true,
    smartBackspace: true,  // only erase what's different
    showCursor: true
};
const typed = new Typed(".typing", options);
