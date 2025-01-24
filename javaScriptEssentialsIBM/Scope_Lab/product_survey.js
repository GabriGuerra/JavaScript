const submitButton=document.getElementById('submitBtn');
let i = 1;
submitButton.onclick = submitFeedback;
let userId;
function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('uxText').value;

    const newDiv = document.createElement("div");
    newDiv.id = "userInfo" + i.toString();
    newDiv.innerHTML = `
        <h2>User Information:</h2> 
        <p>Name: <span id="userName">${username}</span></p>
        <p>Age: <span id="userAge">${age}</span></p>
        <p>Email: <span id="userEmail">${email}</span></p>
        <p>Job: <span id="userJob">${job}</span></p>
        <p>Designation: <span id="userDesignation">${designation}</span></p>
        <p>Feedback for <span id="userProductChoice">${productType}</span>: <span id="userFeedback">${feedback}</span></p>
        <p>User experience: <span id="userExperience">${experience}</span></p>
    `;
    if (userId) document.body.insertBefore(newDiv, document.getElementById(userId))
    else document.body.appendChild(newDiv);
    userId = newDiv.id;
    alert('Thank you for your valuable feedback and experience');
    i++;
    
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

 




