new Vue({
  el: '#app',
  data: {
    email: '',
    password: ''
  },
  methods: {
    checkForm() {
      if (!this.email || !this.password) {
        alert('Lütfen tüm alanları doldurun!');
      } else if (!this.isValidEmail(this.email)) { // Call the new isValidEmail function
        alert('Lütfen geçerli bir e-posta adresi girin.');
      } else {
        // Additional form validation logic (optional)
        // For example, checking password length or complexity
        alert('Form geçerlidir.');
      }
    },
    
    isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    ,
    checkEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Lütfen geçerli bir e-posta adresi girin (örnek: kullanici.adi@ornek.com)');
      } else {
        alert('E-posta geçerlidir.');
      }
    }
    
  }
});
