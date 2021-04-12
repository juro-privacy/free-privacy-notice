# Technical description

## Folder structure

- *privacy* - contains scripts, styles and layout for part of the main privacy notice page.
- *modal* - contains scripts, styles and layout for the pop-up privacy modal.
- *res* - contains js, styles and other resources required by both the modal or privacy page.
- *libs* - same as res, but 3rd party.

## Modal

Simply put the content of modal.html on your pages where you want the modal to appear. Include the content of modal.js in your script file and content of modal.css to your styles file. Resources from the *res* folder also must be presented on all the pages where modal appears. Please note that having **#privacy-popup** in the URL will open popup automatically after opening the page (if you include modal.js, of course).

Besides this please
- replace **/policy.html** with the link to your privacy page.
- adjust the text of the modal so it reflects your company.

## Privacy

Privacy is the full privacy page (not the modal). It's a piece of layout that contains privacy-related information, patterns and icons. Simply put the content of privacy.html on your privacy page. Include the content of privacy.js in your script file and the content of modal.css in your styles file. Resources from the *res* folder also must be presented on the privacy page.

## Demo

The demo page contains both privacy and modal layout as well as the simplest page structure. To see a proper demo page you need to open with a local server since because of the browser's security settings you won't see SVG icons if sprite.svg is stored locally. But with no local server, you will see everything else properly except the icons. To open the popup simply add **#privacy-popup** to the URL.
