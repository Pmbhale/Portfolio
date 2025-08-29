// document.getElementById('darkModeToggle').addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// Project Filter
function filterProjects(stack) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (stack === 'all' || project.classList.contains(stack)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function showDetails(project) {
    let message = "";

    switch (project) {
        case 'quiz':
            message = "🧠 Quiz App:\nA simple web-based quiz app with multiple-choice questions, timer, and scoring.";
            break;
        case 'task':
            message = "🗓️ Task Scheduler:\nOrganize and manage your daily tasks with reminders and a clean UI.";
            break;
        case 'chat':
            message = "💬 Chatting App:\nA real-time chat app built using WebSockets, supports multiple users and channels.";
            break;
        default:
            message = "Project details not found.";
    }

    alert(message);
}

function getDetails() {
    let Name = document.getElementById("12");
    let name = Name.value;




}
// style.js
function getDetails() {
    alert("Thank you for reaching out, Parth will contact you soon!");
}