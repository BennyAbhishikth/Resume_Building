// Skills Section
let skillCount = 1; // Initial skill count
function addSkill() 
{
    skillCount++;
    const skillsContainer = document.getElementById('skills-container');

    // Create a new skill input field
    const skillInput = document.createElement('div');
    skillInput.className = 'skill-input';
    skillInput.innerHTML = `
        <label for="skill_${skillCount}">Skill:</label>
        <input type="text" name="skills[]" id="skill_${skillCount}" required>
        <!-- Delete button for the new skill -->
        <button type="button" class="delete-button" onclick="deleteSkill(this)"><i class="fas fa-trash"></i></button>
    `;

    // Append the new skill input field
    skillsContainer.appendChild(skillInput);
}

function deleteSkill(button) 
{
    const skillsContainer = document.getElementById('skills-container');
    const skillInput = button.parentNode;

    // Check if it's not the last skill field before removing
    if (skillsContainer.childElementCount > 1) 
    {
        skillsContainer.removeChild(skillInput);
    }
}



function validateFile() 
{
    const fileInput = document.getElementById('profile_photo');

    // Check if a file is selected
    if (fileInput.files.length > 0) 
    {
        const fileType = fileInput.files[0].type;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        // Validate file type
        if (!allowedTypes.includes(fileType)) 
        {
            alert('Please upload a valid image file (JPEG, PNG, GIF).');
            fileInput.value = ''; // Clear the file input
            return;
        }

        // Validate file size (limit to 1MB in this example)
        const maxSizeInBytes = 1048576; // 1MB
        const fileSize = fileInput.files[0].size;
        if (fileSize > maxSizeInBytes) 
        {
            alert('Please upload an image file with a size less than 1MB.');
            fileInput.value = ''; // Clear the file input
            return;
        }
    }
}






function addCertificationSet() 
{
    const certificationsContainer = document.getElementById('certifications-container');

    // Create a new certification set
    const certificationSet = document.createElement('div');
    certificationSet.className = 'certification-set';

    // Create input fields for the new certification set
    const certificationNameInput = createCertificationInput('Certification Name:', 'certification_name[]');
    const certifiedByInput = createCertificationInput('Certified By:', 'certified_by[]');
    const certificationYearInput = createCertificationInput('Year:', 'certification_year[]');

    // Append input fields to the certification set
    certificationSet.appendChild(certificationNameInput);
    certificationSet.appendChild(certifiedByInput);
    certificationSet.appendChild(certificationYearInput);

    // Create delete button for the new certification set
    const deleteButton = document.createElement('div');
    deleteButton.className = 'section-input';
    deleteButton.innerHTML = `
        <button type="button" class="delete-button" onclick="deleteCertificationSet(this)"><i class="fas fa-trash"></i></button>
    `;

    // Append the delete button to the certification set
    certificationSet.appendChild(deleteButton);

    // Append the new certification set to the certifications container
    certificationsContainer.appendChild(certificationSet);
}

function createCertificationInput(labelText, inputName) 
{
    const inputContainer = document.createElement('div');
    inputContainer.className = 'section-input';

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.required = true;

    // Append label and input to the input container
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function deleteCertificationSet(button) 
{
    const certificationSet = button.closest('.certification-set');
    certificationSet.remove();
}

function addProjectSet() 
{
    const projectsContainer = document.getElementById('projects-container');

    // Create a new project set
    const projectSet = document.createElement('div');
    projectSet.className = 'project-set';

    // Create input fields for the new project set
    const projectNameInput = createProjectInput('Project Name:', 'project_name[]');
    const tasksInput = createProjectInput('Tasks:', 'tasks[]');
    const projectLinkInput = createProjectInput('Link:', 'project_link[]');

    // Append input fields to the project set
    projectSet.appendChild(projectNameInput);
    projectSet.appendChild(tasksInput);
    projectSet.appendChild(projectLinkInput);

    // Create delete button for the new project set
    const deleteButton = document.createElement('div');
    deleteButton.className = 'section-input';
    deleteButton.innerHTML = `
        <button type="button" class="delete-button" onclick="deleteProjectSet(this)"><i class="fas fa-trash"></i></button>
    `;

    // Append the delete button to the project set
    projectSet.appendChild(deleteButton);

    // Append the new project set to the projects container
    projectsContainer.appendChild(projectSet);
}

function createProjectInput(labelText, inputName) 
{
    const inputContainer = document.createElement('div');
    inputContainer.className = 'section-input';

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.required = true;

    // Append label and input to the input container
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function deleteProjectSet(button) 
{
    const projectSet = button.closest('.project-set');
    projectSet.remove();
}

function addAchievementSet() 
{
    const achievementsContainer = document.getElementById('achievements-container');

    // Create a new achievement set
    const achievementSet = document.createElement('div');
    achievementSet.className = 'achievement-set';

    // Create input fields for the new achievement set
    const achievementInput = createAchievementInput('Achievement:', 'achievement[]');

    // Append input fields to the achievement set
    achievementSet.appendChild(achievementInput);

    // Create delete button for the new achievement set
    const deleteButton = document.createElement('div');
    deleteButton.className = 'section-input';
    deleteButton.innerHTML = `
        <button type="button" class="delete-button" onclick="deleteAchievementSet(this)"><i class="fas fa-trash"></i></button>
    `;

    // Append the delete button to the achievement set
    achievementSet.appendChild(deleteButton);

    // Append the new achievement set to the achievements container
    achievementsContainer.appendChild(achievementSet);
}

function createAchievementInput(labelText, inputName) 
{
    const inputContainer = document.createElement('div');
    inputContainer.className = 'section-input';

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.required = true;

    // Append label and input to the input container
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function deleteAchievementSet(button) 
{
    const achievementSet = button.closest('.achievement-set');
    achievementSet.remove();
}


function addExperienceSet() 
{
    const experienceContainer = document.getElementById('experience-container');

    // Create a new experience set
    const experienceSet = document.createElement('div');
    experienceSet.className = 'experience-set';

    // Create input fields for the new experience set
    const roleInput = createExperienceInput('Role:', 'role[]');
    const companyInput = createExperienceInput('Company:', 'company[]');
    const durationInput = createExperienceInput('Duration:', 'duration[]');
    const descriptionInput = createExperienceTextarea('Description:', 'description[]');

    // Append input fields to the experience set
    experienceSet.appendChild(roleInput);
    experienceSet.appendChild(companyInput);
    experienceSet.appendChild(durationInput);
    experienceSet.appendChild(descriptionInput);

    // Create delete button for the new experience set
    const deleteButton = document.createElement('div');
    deleteButton.className = 'section-input';
    deleteButton.innerHTML = `
        <button type="button" class="delete-button" onclick="deleteExperienceSet(this)"><i class="fas fa-trash"></i></button>
    `;

    // Append the delete button to the experience set
    experienceSet.appendChild(deleteButton);

    // Append the new experience set to the experience container
    experienceContainer.appendChild(experienceSet);
}

function createExperienceInput(labelText, inputName) 
{
    const inputContainer = document.createElement('div');
    inputContainer.className = 'section-input';

    const label = document.createElement('label');
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = 'text';
    input.name = inputName;
    input.required = true;

    // Append label and input to the input container
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);

    return inputContainer;
}

function createExperienceTextarea(labelText, inputName) 
{
    const inputContainer = document.createElement('div');
    inputContainer.className = 'section-input';

    const label = document.createElement('label');
    label.textContent = labelText;

    const textarea = document.createElement('textarea');
    textarea.name = inputName;
    textarea.rows = 4;
    textarea.cols = 50;
    textarea.placeholder = 'Enter job description';
    textarea.required = true;

    // Append label and textarea to the input container
    inputContainer.appendChild(label);
    inputContainer.appendChild(textarea);

    return inputContainer;
}

function deleteExperienceSet(button) 
{
    const experienceSet = button.closest('.experience-set');
    experienceSet.remove();
}


function deleteSection(section) 
{
    const sectionContainer = document.getElementById(`${section}-container`);
    sectionContainer.innerHTML = ''; // Remove all section sets
}


function updateCharacterCount(inputId, countId) 
{
    const input = document.getElementById(inputId);
    const countSpan = document.getElementById(countId);
    const maxLength = input.maxLength;
    const remainingCharacters = maxLength - input.value.length;
    countSpan.textContent = `${remainingCharacters} characters remaining`;
}