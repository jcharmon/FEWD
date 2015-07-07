Element.prototype.Contact = function() {

var contact = this,
    form = document.getElementById('c_form'),
    submit = document.getElementById('contact-submit')
    wrapper = document.getElementById('form-wrapper')


this.send = function() {
  //collect all the forms information
  var link = 'mailto:jcharmon15@gmail.com?subject=Message from ' +
              form.children[0].value+
              '&body='+
              form.children[3].value;

  console.log(link);
  window.location.href = link;
  wrapper.innterHTML = '<div class="center"><h2>Thanks!</h2></div>';

  //send the content via email
  //leave some feedback that the form has been submited
};

this.init = function() {
  submit.addEventListener('click', function(ev){
  ev.preventDefault();
  contact.send();
});


};

this.init();

};
