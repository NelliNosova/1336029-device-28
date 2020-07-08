(function () {
  var writeUs = document.querySelector(".write-us");
  var writeUsOpen = document.querySelector(".write-us-open");
  var writeUsClose = document.querySelector(".write-us-close");
  var map = document.querySelector(".map");
  var mapOpen = document.querySelector(".map-open");
  var mapClose = document.querySelector(".map-close");
  var writeUsForm = document.querySelector(".write-us-form");
  var login = document.querySelector("#name");
  var eMail = document.querySelector("#e-mail");
  var mailContent = document.querySelector("#mail-content");
  var one = document.querySelector(".one");
  var two = document.querySelector(".two");
  var three = document.querySelector(".three");
  var selfieStick = document.querySelector(".selfie-stick");
  var smartBand = document.querySelector(".smart-band");
  var quadcopter = document.querySelector(".quadcopter");
  var btnDelivery = document.querySelector(".btn-delivery");
  var btnGuarantee = document.querySelector(".btn-guarantee");
  var btnCredit = document.querySelector(".btn-credit"); 
  var serviceDelivery = document.querySelector(".service-delivery"); 
  var servicGuarantee = document.querySelector(".service-guarantee"); 
  var servicCredit = document.querySelector(".service-credit"); 

  var isStorageSupport = true;
  var loginItem = "";
  var eMailItem, childrenItem;

  try {
    loginItem = localStorage.getItem("login");
    eMailItem = localStorage.getItem("eMail");
    } catch (err) {
    isStorageSupport = false;
  }

  writeUsOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("none");
    login.value = loginItem;
    eMail.value = eMailItem;
    login.focus();
  });

  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.add("none");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    if (!writeUs.classList.contains("none")) {
      evt.preventDefault();
      writeUs.classList.add("none");
    }

    if (!map.classList.contains("none")) {
      evt.preventDefault();
      map.classList.add("none");
    }
    }
  });


  writeUsForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("eMail", eMail.value);
    }

    if (!login.value || !eMail.value || !mailContent.value) {
      writeUsForm.classList.add("write-us-error");
      setTimeout(function () {
        writeUsForm.classList.remove("write-us-error");
      }, 600)
    } else {
      writeUsForm.submit();
    }

    if (!login.value) {
      login.classList.add("input-error");
      login.focus();
    } else {
      login.classList.remove("input-error");
      eMail.focus();
    }

    if (!eMail.value) {
      eMail.classList.add("input-error");
    } else {
      eMail.classList.remove("input-error");
      mailContent.focus();
    }

    if (!mailContent.value) {
      mailContent.classList.add("input-error");
    } else {
      mailContent.classList.remove("input-error");
    }

  });

  mapOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("none");
    });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("none");
  });

  one.addEventListener("click", function (evt) {
    if (!one.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      one.classList.add("promo-slider-active");
      selfieStick.classList.remove("none");
    }

    if (two.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      two.classList.remove("promo-slider-active");
      smartBand.classList.add("none");
    }

    if (three.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      three.classList.remove("promo-slider-active");
      quadcopter.classList.add("none");
    }

  });

  two.addEventListener("click", function (evt) {
    if (!two.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      two.classList.add("promo-slider-active");
      smartBand.classList.remove("none");
    }

    if (one.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      one.classList.remove("promo-slider-active");
      selfieStick.classList.add("none");
    }

    if (three.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      three.classList.remove("promo-slider-active");
      quadcopter.classList.add("none");
    }

  }); 

  three.addEventListener("click", function (evt) {
    if (!three.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      three.classList.add("promo-slider-active");
      quadcopter.classList.remove("none");
      }

    if (one.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      one.classList.remove("promo-slider-active");
      selfieStick.classList.add("none");
    }

    if (two.classList.contains("promo-slider-active")) {
      evt.preventDefault();
      two.classList.remove("promo-slider-active");
      smartBand.classList.add("none");
    }

  });


  btnDelivery.addEventListener("click", function (evt) {
    if (!btnDelivery.classList.contains("services-active")) {
      evt.preventDefault();
      btnDelivery.classList.add("services-active");
      serviceDelivery.classList.remove("none");
    }

    if (btnGuarantee.classList.contains("services-active")) {
      evt.preventDefault();
      btnGuarantee.classList.remove("services-active");
      servicGuarantee.classList.add("none");
    }

    if (btnCredit.classList.contains("services-active")) {
      evt.preventDefault();
      btnCredit.classList.remove("services-active");
      servicCredit.classList.add("none");
    }

  });

  btnGuarantee.addEventListener("click", function (evt) {
    if (!btnGuarantee.classList.contains("services-active")) {
      evt.preventDefault();
      btnGuarantee.classList.add("services-active");
      servicGuarantee.classList.remove("none");
    }

    if (btnDelivery.classList.contains("services-active")) {
      evt.preventDefault();
      btnDelivery.classList.remove("services-active");
      serviceDelivery.classList.add("none");
    }

    if (btnCredit.classList.contains("services-active")) {
      evt.preventDefault();
      btnCredit.classList.remove("services-active");
      servicCredit.classList.add("none");
    }

  }); 

  btnCredit.addEventListener("click", function (evt) {
    if (!btnCredit.classList.contains("services-active")) {
      evt.preventDefault();
      btnCredit.classList.add("services-active");
      servicCredit.classList.remove("none");
    }

    if (btnDelivery.classList.contains("services-active")) {
      evt.preventDefault();
      btnDelivery.classList.remove("services-active");
      serviceDelivery.classList.add("none");
    }

    if (btnGuarantee.classList.contains("services-active")) {
      evt.preventDefault();
      btnGuarantee.classList.remove("services-active");
      servicGuarantee.classList.add("none");
    }

  });

})();
