import $ from 'jquery';

class Modal{
  constructor(){
    this.openRegistrationModal = $(".open-registration");
    this.registrationModal = $(".registration");
    this.closeRegistrationModal = $(".registration__close");
    this.events();
  }

  events(){
    // clicking the open modal button
    this.openRegistrationModal.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeRegistrationModal.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.registrationModal.addClass("registration--is-visible");
    return false;
  }

  closeModal(){
    this.registrationModal.removeClass("registration--is-visible");
  }

}

export default Modal;
