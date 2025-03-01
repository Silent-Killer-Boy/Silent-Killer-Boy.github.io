function toggleContent(id) {
  var content = document.getElementById(id);
  content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Contact form is disabled. Please email amitredhu670@gmail.com");
    });
  }
});
