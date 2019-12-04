window.onload = function() {
    let education = document.getElementById('education-but');
    let educationContent = document.getElementById('education-content');
    let arrow = document.getElementById('arrow');
    education.addEventListener('click', function() {
        if (educationContent.classList.contains('hidden-content')) {
            educationContent.classList.remove('hidden-content');
            arrow.classList.remove('education__arrow');
            arrow.classList.add('education__arrow_rotate');
        }
        else {
            educationContent.classList.add('hidden-content');
            arrow.classList.add('education__arrow');
            arrow.classList.remove('education__arrow_rotate');
        }
    });

    let leftButton = document.getElementById('left-button');
    let rightButton = document.getElementById('right-button');
    leftButton.addEventListener('click', buttonClick);
    rightButton.addEventListener('click', buttonClick);
}

function buttonClick() {
    console.log('work')
    let allow = document.getElementById('theyallow');
    let project = document.getElementById('design-project');
    if (allow.classList.contains('project-hidden')) {
        allow.classList.remove('project-hidden');
        project.classList.add('project-hidden');
    }

    else if (project.classList.contains('project-hidden')) {
        allow.classList.add('project-hidden');
        project.classList.remove('project-hidden');
    }
}