const buttonShowProjects = document.querySelector('.btn-show-projects');
const inactiveProjects = document.querySelectorAll('.project:not(.active)')



function showAllProjects() {
  inactiveProjects.forEach(inactiveProject => {
  inactiveProject.classList.add('active');
  });
  removeButton();
}

function removeButton() {
  buttonShowProjects.classList.add('remove')
}


buttonShowProjects.addEventListener('click',showAllProjects);