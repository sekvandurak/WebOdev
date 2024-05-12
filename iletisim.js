


    function checkForm() {
        var nameInput = document.getElementById('pwd');
        var emailInput = document.getElementById('email');
      
        if (nameInput.value === '' || emailInput.value === '') {
          alert('Lütfen tüm alanları doldurun!');
          return;
        }
      
        alert('Form geçerlidir.');
      }
      
      function checkEmail() {
        var emailInput = document.getElementById('email');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailPattern.test(emailInput.value)) {
            alert('Geçerli bir e-posta adresi girin!');
            return;
        }
    
        alert('E-posta geçerlidir.');
    }
 




  