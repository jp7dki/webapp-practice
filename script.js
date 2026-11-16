(function () {
  "use strict";

  var WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
  var timeEl = document.getElementById("time");
  var dateEl = document.getElementById("date");
  var panelEl = document.querySelector(".panel");
  var tubes = document.querySelectorAll(".tube");

  // 各管に 0〜9 の陰極を作る
  var cathodes = [];
  tubes.forEach(function (tube) {
    var list = [];
    for (var d = 0; d <= 9; d++) {
      var span = document.createElement("span");
      span.className = "cathode";
      span.textContent = String(d);
      tube.appendChild(span);
      list.push(span);
    }
    cathodes.push({ list: list, lit: -1 });
  });

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render() {
    var now = new Date();
    var text = pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());

    // 変わった桁だけ点灯を切り替える
    for (var i = 0; i < cathodes.length; i++) {
      var tube = cathodes[i];
      var digit = Number(text[i]);
      if (tube.lit !== digit) {
        if (tube.lit >= 0) tube.list[tube.lit].classList.remove("is-lit");
        tube.list[digit].classList.add("is-lit");
        tube.lit = digit;
      }
    }

    // 区切りのネオン球を1秒ごとに点滅
    panelEl.classList.toggle("is-blink-off", now.getSeconds() % 2 === 1);

    var hms = text.slice(0, 2) + ":" + text.slice(2, 4) + ":" + text.slice(4, 6);
    timeEl.textContent = hms;
    timeEl.setAttribute("datetime", hms);
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
