let form = document.querySelector('form');
if (form){
  form.addEventListener('submit', function() {
    window.location.href = '/submit-success.html';
  });
}

