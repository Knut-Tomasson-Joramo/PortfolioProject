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
When studiing computer sience at MIUN university Sweeden, we mostly used C++ for our tasks
`;

// python text
const python_text = `
When I startet to look in to computer sience again in 2019, I decided to try and learn a new language.
Python seemed like the perfekt alternative and I realy enjoy how straight forward it is.
`;

// android text
const android_text = `
During my years at MIUN university we did some android programing. bla bla bla
`;

// java text
const java_text = `
something about java..
`;

// js text
const js_text = `
something about js..
`;

// kotlin text
const kotlin_text = `
some kotlin text..
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
        }
        if (last_des !== des_const) {
           insertPChild(skills_description, des_text); 
           last_des = des_const;
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
