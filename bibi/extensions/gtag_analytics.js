/*!
 *
 *  # Bibi Extension: Analytics                                  (℠)
 *
 *  * © Satoru Matsushima - https://bibi.epub.link or https://github.com/satorumurmur/bibi
 *  * Open source under the MIT License - https://github.com/satorumurmur/bibi/blob/master/LICENSE
 *
 */ !(function (e) {
    var t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var r = (t[i] = { i: i, l: !1, exports: {} });
      return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              i,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return i;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 16));
  })({
    16: function (e, t) {
      window.Bibi = window.Bibi || {};
      Bibi.x({
        id: "Analytics",
        description: "Utilities for Tracking and Logging with Google Analytics.",
        author: "Satoru Matsushima (@satorumurmur)",
        version: "1.2.0-demo",
      })(function () {
        "use strict";
        var e;
        "string" == typeof this["G-EM8DXBQWVQ"] &&
          this["G-EM8DXBQWVQ"] &&
          ((e = window),
          (e.dataLayer = e.dataLayer || []),
          (e.gtag =
            e.gtag ||
            function () {
              e.dataLayer.push(arguments);
            }),
          (e.gtag.l = 1 * new Date()),
          e.gtag("js", new Date()),
          e.gtag("config", this["G-EM8DXBQWVQ"]),
          e.gtag("config", this["G-EM8DXBQWVQ"], { 'allow_linker': true }),
          E.add("bibi:loaded-navigation", function () {
            return sML.forEach(I.Panel.BookInfo.Navigation.querySelectorAll("a"))(
              function (e) {
                return e.addEventListener("click", function () {
                  gtag("event", "Bibi: Jumped by Navigation", {
                    'event_category': "Bibi",
                    'event_label':
                      e.innerHTML.replace(/<[^>]*>/g, "") +
                      ' - "'.concat(
                        e.getAttribute("data-bibi-original-href"),
                        '"'
                      ),
                  });
                });
              }
            );
          }),
          E.add("bibi:played:by-button", function () {
            gtag("event", "Bibi: Played by Button", {
              'event_category': "Bibi",
              'event_label': S["parent-uri"]
                ? "on: " + S["parent-uri"].replace(/#.+$/, "")
                : "",
            });
          }),
          E.add("bibi:scrolled", function () {
            if (100 != R.Current.Percent) return !1;
            gtag("event", "Bibi: Read Through", {
              'event_category': "Bibi",
              'event_label': Date.now() - Bibi.TimeOrigin,
            });
          }));
      });
    },
  });
  