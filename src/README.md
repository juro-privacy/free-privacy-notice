# Technical description

## Folder structure

- *privacy* - contains scripts, styles and layout for part of your privacy page.
- *modal* - contains scripts, styles and layout for privacy modal.
- *res* - contains js, styles and other resources required by both modal or privacy page.
- *libs* - same as res, but 3rd party.

## Modal

Simply put the content of modal.html to your pages, where modal is going to appear. Include content of modal.js to your script file and content of modal.css to your styles file. Resources from the *res* folder also must be presented on all the pages where modal appears. Please note that having **#privacy-popup** in the URL will open popup automatically after opening the page (if you include modal.js, of course).

Besides this please
- replace **/policy.html** with the link to your privacy page.
- replace **`support@juro.com`** with the email address you need.
- adjust the text of the modal so it reflects your company.

## Privacy

Privacy is part of the whole privacy page it's a piece of layout that contains all the privacy-related data. Simply put the content of privacy.html to your privacy page. Include content of privacy.js to your script file and content of modal.css to your styles file. Resources from the *res* folder also must be presented on the privacy page.

## Demo

The demo page contains both privacy and modal layout as well as the simplest page structure. To see a proper demo page you need to open with a local server since because of the browser's security settings you won't see SVG icons if sprite.svg is stored locally. But with no local server, you will see everything else properly except the icons. To open the popup simply add **#privacy-popup** to the URL.