function toggleContent(id) {
  var content = document.getElementById(id);
  content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var formData = new FormData(form);
      // Add your AJAX request here
      fetch('your-server-endpoint', {
        method: 'POST',
        body: formData
      }).then(response => response.json())
        .then(data => {
          // Handle successful response
          console.log('Success:', data);
        }).catch(error => {
          // Handle error
          console.error('Error:', error);
        });
    });
  }
});
