// ==UserScript==
// @name        QLbypass
// @namespace   beckettclarke.ca
// @match       *://*quora.com/*
// @version     4
// @run-at      document-start
// @author      BC Studios
// @downloadURL https://beckettclarke.github.io/projects/js/qlbypass/qlbypass.user.js
// @icon        https://beckettclarke.github.io/projects/js/qlbypass/icon.png
// @require     https://beckettclarke.github.io/FoxJS/latest.js
// @description Unobtrusively bypasses Quora login
// ==/UserScript==

function url(){return window.location.href};
function hasString(b,s){return (b.includes(s))};
function hasNoString(b,s){return (!b.includes(s))};

// If URL contains "?share=1"
if (hasString(url(),"?share=1")){
  console.log('✅ Login bypassed!')
}
// If URL doesn't contain "?share=1"
if (hasNoString(window.location.href,"?share=1")){
  console.log('⛔ Page requires login. Bypassing...')
  // Sets the tab URL to the current url with "?share=1" at the end
  window.location.href = window.location.href + "?share=1";
}
