// activate menu

// get menu button and menu
const menu_button = document.querySelector(".menu-button");
const menu = document.querySelector("#site-link-list");

// make function to do the event
function toggleMenu() {
    menu.classList.toggle("active-menu");
        for (let i = 0; i < 3; i++) {
            menu_button.children[i].classList.toggle("change");
         }
}

menu_button.addEventListener('click', () => {
     toggleMenu();
});

// remove change from menubutton when menu item is clicked
const menu_children = document.getElementsByClassName("nav-link");
for (let j = 0; j < menu_children.length; j++) {
    menu_children[j].addEventListener('click', () => {
        toggleMenu();
    })
}


/**
 * Make button show the description of a project
 */

// get array of all the buttons
const show_buttons = document.getElementsByClassName("show-project");


for (let i = 0; i < show_buttons.length; i++) {
    const button = show_buttons[i];
    button.addEventListener('click', function(target) {
      let project_section = target.currentTarget.parentNode.parentNode;
   
      if (project_section.style.height === "") {
         console.log(target.currentTarget);
         project_section.style.height = "fit-content";
         button.innerHTML = "Hide";
      }
      else if (project_section.style.height === "fit-content") {
         project_section.style.height = "";
         button.innerHTML = "Show";
        }
      
    });
}


// Insert text into skills section

// c++ text
const cpp_text = `
When studing computer sience at MIUN university Sweeden, we mostly used C++ for our tasks
`;

// python text
const python_text = `
When I startet to look in to computer sience again in 2019, I decided to try and learn a new language.
Python seemed like the perfekt alternative and I realy enjoy how straight forward it is.
`;

// android text
const android_text = `
During my years at MIUN university we did some android programing with java. After that I have dipped my toes into
some newer stuff with Kotlin.
`;

// java text
const java_text = `
In the computer sience program we used java for some courses, however this is not current knowledge for me, so some
refreshment at required before using this language to something meaningfull.
`;

// js text
const js_text = `
Currently I am studing at CodeCademy and learning about full-stack development. JavaScript is a big part of the program.
`;

// kotlin text
const kotlin_text = `
I regulary check in to developer.google.com and read about the newest on the android front. This made me dipp my toes into Kotlin.
I have alsoe studied kotlin on hyperskill to learn more about the language.
`;

// create function to insert childElement
function insertPChild(parent, content) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = content;
    parent.appendChild(paragraph);
}

// locate skills_description div
const skills_description = document.getElementById("skills_description");


// set up eventhandlers for skills images
const cpp_img = document.getElementById("cpp_img");
const python_img = document.getElementById("python_img");
const android_img = document.getElementById("android_img");
const java_img = document.getElementById("java_img");
const js_img = document.getElementById("js_img");
const kotlin_img = document.getElementById("kotlin_img");

let last_des = "";
const cpp_des = "cpp";
const py_des = "py";
const and_des = "and";
const java_des = "java";
const js_des = "js";
const kot_des = "kot";

function addDescriptionListener(des_img, des_text, des_const) {
    des_img.addEventListener("click", function() {
        if (skills_description.hasChildNodes()) {
            skills_description.removeChild(skills_description.childNodes[0]);
            skills_description.style.display = "";
        }
        if (last_des !== des_const) {
           insertPChild(skills_description, des_text); 
           last_des = des_const;
           skills_description.style.display = "block";
        }
        else {
            last_des = "";
        }
        
    });
}

addDescriptionListener(cpp_img, cpp_text, cpp_des);
addDescriptionListener(python_img, python_text, py_des);
addDescriptionListener(android_img, android_text, and_des);
addDescriptionListener(java_img, java_text, java_des);
addDescriptionListener(js_img, js_text, js_des);
addDescriptionListener(kotlin_img, kotlin_text, kot_des);
