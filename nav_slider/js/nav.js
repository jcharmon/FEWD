Element.prototype.Nav = function(){

    var nav = this,
    position = 0,
    width = window.innerWidth,
    navIcon = document.createElement('div');

    this.createButtons = function(){

      navIcon.classList.add('hamburger')
      container.insertBefore(navIcon, document.getElementbyID('slider'));

    });


this.init = function(){
  nav.createButtons();
};

this.init();

};
