import $ from 'jquery';

class Modal{
  constructor(){
    this.openLoginModal = $(".open-modal");
    this.loginModal = $(".modal");
    this.closeLoginModal = $(".modal__close");
    this.events();
  }

  events(){
    // clicking the open modal button
    this.openLoginModal.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeLoginModal.click(this.closeModal.bind(this));

    // pushes esc key to close
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if (e.keyCode == 27){
      this.closeModal();
    }
  }


  openModal(){
    this.loginModal.addClass("modal--is-visible");
    return false;
  }

  closeModal(){
    this.loginModal.removeClass("modal--is-visible");
  }

}

export default Modal;
