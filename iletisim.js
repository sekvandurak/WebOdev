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
      } else {
        // Form submission logic here
        alert('Form geçerlidir.');
      }
    },
    checkEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Geçerli bir e-posta adresi girin!');
      } else {
        alert('E-posta geçerlidir.');
      }
    }
  }
});
