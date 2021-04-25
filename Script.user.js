// ==UserScript==
// @name         Loading times + refresh page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script to examine load times and refresh page every fifth second.
// @author       Jenna
// @match        https://wwwlab.iit.his.se/b18jenli/Examensarbete/responsive.html
// @icon         https://www.google.com/s2/favicons?domain=his.se
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

      var start = performance.now();

      for (var i = 0; i < 1e6;i++);

      var end = performance.now();
      var total = end - start;
      console.log(`Execution time: ${total} ms`);

    function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
window.onload = timedRefresh(5000);
})();