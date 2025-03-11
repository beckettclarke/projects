// ==UserScript==
// @name         RickStopper
// @namespace    https://beckettclarke.ca
// @version      5
// @description  Blocks rickrolls
// @author       BC Studios
// @run-at       document-start
// @downloadURL  https://beckettclarke.github.io/projects/js/rickstopper/rickstopper.user.js
// @match        https://www.youtube.com/watch?v=dQw4w9WgXcQ*
// @match        https://www.youtube.com/watch?v=xvFZjo5PgG0*
// @icon         https://beckettclarke.github.io/projects/js/rickstopper/icon.png
// @grant        none
// ==/UserScript==

// If the URL does not contain "?rsaccept=true" //
if (document.location.href.indexOf('?rsaccept=true') === -1){
    console.log('⚠️ Rickroll detected, redirecting...');
    // Redirect to block page //
    location.replace('https://beckettclarke.github.io/projects/js/rickstopper/');
}
