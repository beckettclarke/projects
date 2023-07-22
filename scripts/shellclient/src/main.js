// ==UserScript==
// @name         ShellClient
// @namespace    https://sites.google.com/view/foxdev
// @version      2.4
// @description  A client for shell shockers
// @run-at       document-body
// @author       ItsFoxDev
// @match        https://shellshock.io/*
// @match        https://scrambled.world/*
// @match        https://eggfacts.fun/*
// @match        https://biologyclass.club/*
// @match        https://egghead.institute/*
// @match        https://egg.dance/*
// @match        https://eggisthenewblack.com/*
// @match        https://mathfun.rocks/*
// @match        https://hardboiled.life/*
// @match        https://overeasy.club/*
// @match        https://zygote.cafe/*
// @match        https://eggsarecool.com/*
// @match        https://deadlyegg.com/*
// @match        https://mathgames.world/*
// @match        https://hardshell.life/*
// @match        https://violentegg.club/*
// @match        https://yolk.life/*
// @match        https://softboiled.club/*
// @match        https://scrambled.world/*
// @match        https://algebra.best/*
// @match        https://scrambled.today/*
// @match        https://deathegg.world/*
// @match        https://violentegg.fun/*
// @icon         https://github.com/ItsFoxDev/ShellClient/raw/main/src/img/Icon.png
// @grant        none
// ==/UserScript==

// ==Credits======
// Timer skip - mewen25
// Rainbow crosshair - A3+++

var wm = document.createElement ('img');
wm.id = 'wm';wm.src = 'https://github.com/ItsFoxDev/ShellClient/raw/main/src/img/Watermark.png'
wm.style = 'position:fixed;bottom:1%;left:1%;right:79%pointer-events:none !important;z-index:50000;width:20%;height:auto'
document.body.appendChild (wm);

var css = document.createElement ('div');
css.innerHTML = '<style>#gameDescription,#mainFooter{display:none !important}#chatIn{bottom:8.5%}#chatOut{bottom:11%</style>'
document.body.appendChild (css);

// ===========[ ⏱ TIMER BYPASS ]================================= //
var open_prototype = XMLHttpRequest.prototype.open, intercept_response = function(callback) {
    XMLHttpRequest.prototype.open = function(method, url) {
        if(url.indexOf("shellshock.js") > -1) this.isScript = true;
        this.addEventListener('readystatechange', function(event) {
            if ( this.readyState === 4 && this.isScript ) {
                var response = callback(event.target.responseText);
                Object.defineProperty(this, 'response', {writable: true});
                Object.defineProperty(this, 'responseText', {writable: true});
                this.response = this.responseText = response;
            }
        });
        return open_prototype.apply(this, arguments);
    };
};
intercept_response(function(response) {
    const [adLine, adVar1, adVar2] = /function (.{2})\(e\){.\?.+?(?=}f)}function (.{2})/.exec(response);
    const [timer, timerVar, timerVar2, timerVar3] = /function (.{2})\(e\){(.{2})=M.+?(?=1,)1,(.{17}).+?(?=var)/.exec(response);
    if(!adLine || !adVar1 || !adVar2) {
        console.log('❌ Failed to block adblock timer')
    } else {
        console.log("💉 Injecting adblock timer blocker...");
        const replaceAd = `function ${adVar1}(e){console.log("[ADBLOCK]-blocked"),${adVar2}()}function ${adVar2}`
        response = response.replace(adLine, replaceAd);
    }
    if(!timer || !timerVar || !timerVar2 || !timerVar3) {
        console.log('❌ Failed to block timer');
    }
    else {
        console.log("💉 Injecting timer blocker...");
        response = response.replace(timer, `function ${timerVar}(e){setTimeout(()=>{${timerVar2}=-1,${timerVar3}},3000)}`);
    }
    return response;
});

// ===========[ 🌈 RAINBOW CROSSHAIR ]============================ //
(function () {
  function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
      s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255)};
  }
  const colors = [[], [], []];
  for (let wl = 0; wl < 100; wl++) {
    const {r, g, b} = HSVtoRGB(wl / 100 * 0.85, 1, 1);
    colors[0].push(r);
    colors[1].push(g);
    colors[2].push(b);
  }
  let crosshairs = [];
  let crosshairsSet = false;
  let colorIdx = 0;
  setInterval(function () {
    if (!crosshairsSet && typeof crosshair1 === "object") {
      for (let i = 0; i < 4; i++) {
        crosshairs.push(document.getElementById("crosshair" + i));
      }
      crosshairsSet = true;
    }
    if (typeof extern !== "undefined" && extern.inGame) {
      for (let i = 0; i < 4; i++) {
        let ch = crosshairs[i];
        const idx = Math.mod(Math.floor(colorIdx + 30 * i), 100);
        const colorString = `rgb(${colors[0][idx]}, ${colors[1][idx]}, ${colors[2][idx]})`;
        ch.style.backgroundColor = colorString;
        ch.style.color = colorString;
      }
      colorIdx += 0.89;
      if (colorIdx >= 100) {
        colorIdx = 0;
      }
    }
  }, 33);
}());
