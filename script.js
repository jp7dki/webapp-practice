(function () {
  "use strict";

  var WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
  var timeEl = document.getElementById("time");
  var dateEl = document.getElementById("date");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render() {
    var now = new Date();
    timeEl.textContent =
      pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
    dateEl.textContent =
      now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日（" +
      WEEKDAYS[now.getDay()] + "）";
  }

  // 秒の切り替わりに合わせて更新し、表示のズレを防ぐ
  function tick() {
    render();
    setTimeout(tick, 1000 - (Date.now() % 1000));
  }

  tick();
})();
