function loadFooter() {
  fetch('../Views/footer.html') 
      .then(response => response.text())
      .then(content => {
        console.log('done')
          document.getElementById('content-container').innerHTML = content;
      })
      .catch(error => {
          console.error('Error loading page:', error);
      });
}
loadFooter();
