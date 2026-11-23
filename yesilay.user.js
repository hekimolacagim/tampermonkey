// ==UserScript==
// @name         Yeşilay'a Sözüm
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/hekimolacagim/tampermonkey/raw/refs/heads/main/yesilay.user.js
// @downloadURL  https://github.com/hekimolacagim/tampermonkey/raw/refs/heads/main/yesilay.user.js
// @match        https://www.yesilay.org.tr/bagimlilik/dijital-bagimliliklar/?rf=*
// @match        *://facebook.com/*
// @match        *://*.facebook.com/*
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @require      https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js
// @resource     ALERTIFY_CSS https://cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText('ALERTIFY_CSS'));
    if (window.location.href.includes('yesilay')) {
        // Do something
        const params = new URLSearchParams(window.location.search);
        const domain = params.get('rf')
        alertify.alert("Yasaklanmış Siteye Erişim", `⚠️ ${domain} Birçok sitenin istatistiğini tutmaktansa hiç kullanmamak sence de daha hayırlı değil mi?`);
    }
    else {
        location.replace(`https://www.yesilay.org.tr/bagimlilik/dijital-bagimliliklar/?rf=${window.location.hostname}`);
    }
})();
