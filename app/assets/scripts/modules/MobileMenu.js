import $ from 'jquery';
import 'jquery-ui/ui/effect';

class MobileMenu {
  constructor() {
    this.events();
  }

  events() {
    $('.site-nav__menu-toggle').click(function() {

      $('.site-nav').toggleClass('site-nav--open', 500);
      $(this).toggleClass('open');

    })
  }
}


export default MobileMenu;
