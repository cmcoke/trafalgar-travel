import $ from 'jquery';

class DestinationTabs {
  constructor() {
    this.DestinationContent = $('.tab__content');
    this.DestinationNav = $(".tab__nav");
    this.events();
  }

  events() {
    this.DestinationContent.hide();
    this.DestinationNav.find('a').on('click', function(e) {
      e.preventDefault();
      $('.tab__nav').find('.current').removeClass('current');
      $(this).addClass('current');

      var newTab = $(this.hash);
      var newHeight = newTab.height();
      var container = $(".tab__container");

      newTab.siblings(":visible").fadeOut('fast');
      container.animate({'height' : newHeight}, 500, function(){
        newTab.fadeIn('fast');
      });







    }).first().click();
  }

}

export default DestinationTabs;
