import $ from 'jquery';

class Accordian{
  constructor(){
     this.accordian = $('.accordian');
     this.events();
  }

  events(){
    $('body').removeClass('jsOff').addClass('jsOn');

    this.accordian.find('dd').hide();

    this.accordian.find('dt').on('click', function(){
      $(this).toggleClass('open').next('dd').slideToggle().siblings('dd:visible').slideUp().prev('dt').removeClass('open');

    });

  }

}


export default Accordian;
