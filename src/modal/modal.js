/**
 * Script for modal - make it visible, hidden and show in case of privacy-popup in url.
 */
var popupContent = document.getElementById('short-privacy');
var popupOverlay = document.querySelector('.ui-widget-overlay');
var hiddenClass = 'bs--hidden';

function hidePopup() {
  popupContent.classList.add(hiddenClass);
  popupOverlay.classList.add(hiddenClass);

  document.body.style.overflow = 'inherit';
};

function showPopup() {
  popupContent.classList.remove(hiddenClass);
  popupOverlay.classList.remove(hiddenClass);

  document.body.style.overflow = 'hidden';
};

document.querySelector('.ui-dialog-titlebar-close').addEventListener('click', function () {
  hidePopup();
});

document.querySelector('.ui-widget-overlay').addEventListener('click', function () {
  hidePopup();
});

document.getElementById('short-privacy').addEventListener('click', function (e) {
  if (e.target.id === 'short-privacy') {
    hidePopup();
  }
});

var anchor = window.location.hash.substr(1);

if (anchor && anchor === 'privacy-popup') {
  setTimeout(function () {
    showPopup();
  }, 600);
}