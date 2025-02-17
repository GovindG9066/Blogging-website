

emailjs.init("T1j_ef6JPoC6Gp97O");
const btn = document.getElementById('Email-btn');

document.getElementById('form-contact').addEventListener('submit',function(event) {
    event.preventDefault(); 

    btn.value = 'Sending...';

    const serviceID = 'Blog-9066';
    const templateID = 'blogging-website'; 

    emailjs.sendForm(serviceID, templateID, this)
      .then((response) => {
        btn.value = 'Send Email';
        alert('Email sent successfully!',response);
      }, (error) => {
        btn.value = 'Send Email';
        console.log("error",error);
        
      });
      document.getElementById('form-contact').reset();
      
  });
