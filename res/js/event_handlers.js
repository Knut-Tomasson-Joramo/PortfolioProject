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
      }
      else if (project_section.style.height === "fit-content") {
         project_section.style.height = "";
        }
      
    });
}
