const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// CLICK
// clearBtn.addEventListener("click", runEvent);
// DOUBLE CLICK
// clearBtn.addEventListener("dblclick", runEvent);
// MOUSEDOWN
// clearBtn.addEventListener("mousedown", runEvent);
// MOUSEUP
// clearBtn.addEventListener("mouseup", runEvent);
// MOUSEENTER
// card.addEventListener("mouseenter", runEvent);
// MOUSELEAVE
// card.addEventListener("mouseleave", runEvent);
// MOUSEOVER
// card.addEventListener("mouseover", runEvent);
// MOUSEOUT
// card.addEventListener("mouseout", runEvent);
// MOUSEMOVE
card.addEventListener("mousemove", runEvent);



// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);


    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}