let mouseCursor = document.querySelector(".cursor");

// console.log(mouseCursor);

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}