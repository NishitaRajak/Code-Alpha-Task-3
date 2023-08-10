// JavaScript code for generating the resume copy and handling the print functionality
document.getElementById('generate-resume').addEventListener('click', function() {
    // Retrieve form data and generate resume preview
    var firstName = document.getElementById('first-name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var summary = document.getElementById('summary-text').value;
    var degree = document.getElementById('degree').value;
    var jobTitle = document.getElementById('job-title').value;
    var skill = document.getElementById('skill').value;
  
    // Generate the resume content based on the form data
    var resumeContent = `
      <h3>Personal Information</h3>
      <p>First Name: ${firstName}</p>
      <p>Surname: ${surname}</p>
      <p>Phone: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Address: ${address}</p>
  
      <h3>Summary</h3>
      <p>${summary}</p>
  
      <h3>Education</h3>
      <p>Degree: ${degree}</p>
  
      <h3>Experience</h3>
      <p>Job Title: ${jobTitle}</p>
  
      <h3>Skills</h3>
      <p>${skill}</p>
    `;
  
    // Display the generated resume content
    document.getElementById('preview-content').innerHTML = resumeContent;
  });
  
  document.getElementById('print-cv').addEventListener('click', function() {
    window.print();
  });
// JavaScript code for handling image upload
document.getElementById('upload-button').addEventListener('click', function() {
    var fileInput = document.getElementById('image-upload');
    var file = fileInput.files[0];
  
    if (file) {
      // Display the uploaded image
      var reader = new FileReader();
      reader.onload = function(e) {
        var image = document.createElement('img');
        image.src = e.target.result;
        document.body.appendChild(image);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image to upload.');
    }
  });
    