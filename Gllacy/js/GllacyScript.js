function fieldValue(e,a){e.addEventListener("change",function(){e.value&&(a.classList.add("display-label"),e.classList.add("input-field-value")),e.value||(a.classList.remove
("display-label"),e.classList.remove("input-field-value"))})}var searchField=document.querySelector(".search-form__search-field"),searchLabel=document.querySelector
(".search-form__search-label"),loginEmail=document.querySelector(".login-form__email"),loginEmailLabel=document.querySelector(".login-form__email-label"),
loginPass=document.querySelector(".login-form__password"),loginPassLabel=document.querySelector(".login-form__password-label"),mailingEmail=document.querySelector
(".mailing-block__email"),mailingEmailLabel=document.querySelector(".mailing-block__email-label"),modalName=document.querySelector(".modal-feedback__input--name"),
modalNameLabel=document.querySelector(".modal-feedback__label--name"),modalEmail=document.querySelector(".modal-feedback__input--email"),modalEmailLabel=document.querySelector
(".modal-feedback__label--email"),modalExtra=document.querySelector(".modal-feedback__textarea"),modalExtraLabel=document.querySelector(".modal-feedback__label--extra"),
modalOpen=document.querySelector(".btn--feedback"),modalContent=document.querySelector(".modal-feedback"),overlay=document.querySelector(".overlay"),ymaps;if(modalContent)var 
modalClose=modalContent.querySelector(".modal-feedback__close");
modalOpen&&modalOpen.addEventListener("click",function(e){e.preventDefault(),modalContent.classList.add("modal-content-show"),modalContent.classList.add("bounceInDown"),
overlay.classList.add("modal-content-show")}),overlay&&overlay.addEventListener("click",function(e){e.preventDefault(),modalContent.classList.remove("modal-content-show"),
modalContent.classList.remove("bounceInDown"),overlay.classList.remove("modal-content-show")}),modalClose&&modalClose.addEventListener("click",function(e){e.preventDefault(),
modalContent.classList.remove("modal-content-show"),modalContent.classList.remove("bounceInDown"),overlay.classList.remove("modal-content-show")}),searchField&&searchLabel&&fieldValue
(searchField,searchLabel),loginEmail&&loginEmailLabel&&fieldValue(loginEmail,loginEmailLabel),loginPass&&loginPassLabel&&fieldValue(loginPass,loginPassLabel),mailingEmail&&
mailingEmailLabel&&fieldValue(mailingEmail,mailingEmailLabel),modalName&&modalNameLabel&&fieldValue(modalName,modalNameLabel),modalEmail&&modalEmailLabel&&fieldValue(modalEmail,
modalEmailLabel),modalExtra&&modalExtraLabel&&fieldValue(modalExtra,modalExtraLabel),ymaps&&ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.939581230440595,
30.330457396881112],zoom:16},{searchControlProvider:"yandex#search"}),a=new ymaps.Placemark([59.93865528971432,30.32290429629516],{hintContent:"Gllacy",balloonContent:"Gllacy здесь"},
{iconLayout:"default#image",iconImageHref:"img/icon-pin.png",iconImageSize:[218,142],iconImageOffset:[-50,-132]});e.geoObjects.add(a)});
