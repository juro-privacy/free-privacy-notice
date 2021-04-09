/**
 * For privacy page to make sidebar sticky and to scroll after clicking on links.
 */
new StickySidebar('.sidebar');

var sidebarLinks = document.querySelectorAll('.js-scroll-to'),
  i;

for (i = 0; i < sidebarLinks.length; ++i) {
  sidebarLinks[i].addEventListener('click', function (event) {
    var targetLink = event.target;
    var targetAnchor = document.querySelector('#' + targetLink.dataset.anchor);

    event.preventDefault();

    for (var j = 0; j < sidebarLinks.length; ++j) {
      sidebarLinks[j].classList.remove('highlighted');
    }

    targetLink.classList.add('highlighted');

    targetAnchor.scrollIntoView({ behavior: 'smooth' });
  });
}

if (sidebarLinks.length > 0) {
  var anchor = window.location.hash.substr(1);

  if (anchor) {
    var targetAnchor = document.querySelector('#' + anchor);

    if (targetAnchor) {
      targetAnchor.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

var tags = document.querySelectorAll('.js-tags');

for (j = 0; j < tags.length; ++j) {
  tags[j].addEventListener('click', function (event) {
    var targetTag = event.target;
    var targetAnchor = document.getElementById(targetTag.dataset.anchor);

    document.getElementById('act-togle-4').checked = true;
    targetAnchor.scrollIntoView({ behavior: 'smooth' });
  })
}

var checkers = document.querySelectorAll('.act-checker');
var openAllLink = document.querySelector('.js-open-all');
var closeAllLink = document.querySelector('.js-close-all');

openAllLink.addEventListener('click', function () {
  openAllLink.classList.add('bs--hidden');
  closeAllLink.classList.add('bs--visible');

  for (var i = 0; i < checkers.length; i++) {
    checkers[i].checked = true;
  }
});

closeAllLink.addEventListener('click', function () {
  closeAllLink.classList.remove('bs--visible');
  openAllLink.classList.remove('bs--hidden');

  for (var i = 0; i < checkers.length; i++) {
    checkers[i].checked = false;
  }
});