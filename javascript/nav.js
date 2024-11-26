document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent link navigation
      
      const flagCode = this.getAttribute('data-flag'); // Get flag code
      const countryName = this.getAttribute('data-name'); // Get country name

      // Update button text and flag icon
      const button = document.getElementById('flagDropdown');
      button.innerHTML = `<span class="flag-icon flag-icon-${flagCode}"></span>`;
    });
  });
  const market = document.getElementById('markets');
  const market_pannel = document.getElementById('market-pannel');
  
  // Initially hide the panel
  market_pannel.style.display = "none";
  
  // Show the panel on mouseenter over the markets element
  market.addEventListener('mouseenter', () => {
    market_pannel.style.display = "block";
  });
  
  // Hide the panel on mouseleave from the market_pannel element
  market_pannel.addEventListener('mouseleave', () => {
    market_pannel.style.display = "none";
  });
  const dialog_box=document.getElementById('dialog-box')
  dialog_box.style.display='none'

  function dialog_visiable(){
    dialog_box.style.display='block'
  }
  const closeButton = document.getElementById('close');
  
  // Add a click event listener to the close button
  closeButton.addEventListener('click', function() {
    dialog_box.style.display = 'none'; // Hide the dialog box
  });