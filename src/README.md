# Technical description

## Folder structure

- *privacy* - contains scripts, styles and layout for part of your privacy page.
- *modal* - contains scripts, styles and layout for privacy modal.
- *res* - contains js, styles and other resources required by both modal or privacy page.
- *libs* - same as res, but 3rd party.

## Modal

Simply put content of modal.html to your pages, where modal is going to appear. Include content of modal.js to your script file, and content of modal.css to your styles file. Resources from *res* folder also must be presented on all the pages where modal appears. Please note that having **#privacy-popup** in the url will open popup automatically after opening the page (if you include modal.js, of course).

Besides this please
- replace **/policy.html** with the link to your privacy page.
- replace **`support@juro.com`** with the email address you need.
- adjust text of modal so it reflects your company.

## Privacy

Privacy is part of whole privacy page - in fact it's a piece of layout which contains all the privacy data. Simply put content of privacy.html to your privacy page. Include content of privacy.js to your script file, and content of modal.css to your styles file. Resources from *res* folder also must be presented on the privacy page.

## Demo

Demo page contains both privacy and modal layout as well as the simplest page structure. To see a proper demo page you need to open with local server, since because of browser's security settings you won't see svg icons if sprite.svg is stored locally. But with no local server you will see everything else properly except the icons. To open popup simply add **#privacy-popup** to the url.