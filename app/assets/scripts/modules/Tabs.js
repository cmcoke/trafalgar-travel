import $ from 'jquery';

class Tabs{
  constructor(){
    this.tabContent = $(".tab__content");
    this.tabLink = $(".tab__nav");
    this.events();
  }

  events(){
    this.tabContent.hide();
    this.tabLink.find('a').on('click', function(e){
      e.preventDefault();
      $(".tab__nav").find(".current").removeClass('current');
      $(this).addClass('current');
      $(this.hash).show().siblings().hide();
    }).first().click();
  }

}

export default Tabs;
