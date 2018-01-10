import $ from 'jquery';

class Tabs{
  constructor(){
    this.tabContent = $(".modal__tab-content");
    this.tabNav = $(".modal__tab-nav, .modal__signin");
    this.events();
  }

  events(){
    this.tabContent.hide();
    this.tabNav.find('a').on('click', function(e){
      e.preventDefault();
      $(".modal__tab-nav").find(".current").removeClass('current');
      $(this).addClass('current');

      var newTab = $(this.hash);
      var newHeight = newTab.height();
      var container = $(".modal__tab-container");

      newTab.siblings(":visible").fadeOut('fast');
      container.animate({'height' : newHeight}, 300, function(){
        newTab.fadeIn('fast');
      });

    }).first().click();
  }

}

export default Tabs;
