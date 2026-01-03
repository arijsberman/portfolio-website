// Timeline data - add your events here
const timelineData = [
    { year: 2025, title: "Current", description: "Present day" },
    { year: 2024, title: "Event Title", description: "Add your event description here" },
    { year: 2023, title: "Another Event", description: "Add your event description here" },
    { year: 2022, title: "Milestone", description: "Add your event description here" },
    { year: 2021, title: "Achievement", description: "Add your event description here" },
    { year: 2020, title: "Important Moment", description: "Add your event description here" },
    { year: 2019, title: "Event", description: "Add your event description here" },
    { year: 2018, title: "Another Event", description: "Add your event description here" },
];

// Generate timeline items
function generateTimeline() {
    const timelineEvents = document.getElementById('timeline-events');
    
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        timelineEvents.appendChild(timelineItem);
    });
}

// Initialize timeline
generateTimeline();

const imgContainer = document.querySelector('.img-container');
const timelineContainer = document.querySelector('.timeline-container');
const background = document.querySelector("#static-shield");

let timeout1;
let timeout2;
let enableWheelEvent = true;
let userInputEnabled = true;

function pauseUserInput(duration) {
    userInputEnabled = false;
    setTimeout(() => {
        userInputEnabled = true;
    }, duration);
}

const wheelFunc = function(event) {
    
    if (!userInputEnabled || !enableWheelEvent) return;

    pauseUserInput(1000);
    
    var wheel = event.deltaY;

    if (wheel > 0) {
        imgContainer.style.transform = 'translateX(0%)';
        timelineContainer.style.transform = 'translateY(0%)';
        background.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        background.style.zIndex = '0';

        clearTimeout(timeout2)
        timeout1 = setTimeout(function() {
            timelineContainer.classList.add('active');
        }, 1000);
        
    }
    else {
        imgContainer.style.transform = 'translateX(200%)';
        timelineContainer.style.transform = 'translateY(100vh)';
        background.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        timelineContainer.classList.remove('active');

        clearTimeout(timeout1)
        timeout2 = setTimeout(function() {
            background.style.zIndex = '-10';
        }, 1000);
        
    }
}

const checkScroll = function() {
    if (window.scrollY === 0) {
        enableWheelEvent = true;
    } else {
        enableWheelEvent = false;
    }
}
window.addEventListener('wheel', wheelFunc)

window.addEventListener('scroll', checkScroll)




