(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var nodeListForEach = function nodeListForEach() {
    if ('NodeList' in window && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;

        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }
  };

  var technologiesAnimation = function technologiesAnimation() {
    var container = $(".technologies .row");

    if (container) {
      var items = container.find(".technologies__item");
      var value = 0;

      for (var i = 0; i < items.length; i++) {
        value = value + 80;
        var val = value + "ms";
        $(items[i]).css("transition-delay", val);
      }

      container.on('inview', function (event, isInView) {
        if (isInView) {
          items.each(function () {
            $(this).addClass("transform");
          });
        } else {
          items.each(function () {
            $(this).removeClass("transform");
          });
        }
      });
    }
  };

  var headerScroll = function headerScroll() {
    var main = document.querySelector("main");
    var $header = $(".header");

    if ($header) {
      var scrollHeader = function scrollHeader() {
        var introTop = main.getBoundingClientRect().top;

        if (introTop < -1) {
          $header.addClass("scroll");
        } else if ($header.hasClass("scroll") && introTop > -1) {
          $header.removeClass("scroll");
        }
      };

      $(window).on("scroll", scrollHeader);
      $(document).on("ready", scrollHeader);
    }
  };

  var ankors = function ankors() {
    var links = $(".js-ankor");

    if (!links) {
      return;
    }

    var partname = window.location.pathname; //?????????????????? ???? document.ready ?????????????? #hashtag ?? url, ?? ???????? ????????, ???????????????? ???? ???????????? ????????????

    var checkHash = function checkHash() {
      if (window.location.hash) {
        var hash = window.location.hash;

        if ($(hash).length) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
          }, 900, 'swing');
        }
      }
    };

    $(document).ready(checkHash); // ???? ???????????? ???????????? ?????????????????????? ??????????????

    links.each(function () {
      $(this).on("click", function (evt) {
        // ??????????, ?????????? ???????? ?????????????????????? ?? ???????????????? ?????????????????????? ???? ????????????
        if ($(".menu").hasClass("is-show")) {
          $(".menu").removeClass("is-show");
          $('body').removeClass('is-menu-open').removeAttr('data-scroll');
          checkHash(); // ?????????????? ???????????? ?????????????? ???? ?????????????????????? ???????????? ?? data ???????????????? ?????? ???????????????????????? ????????????????
        } else {
          evt.preventDefault();
          var hash = $(this).attr('data-href');

          if ($(hash).length) {
            $('html, body').animate({
              scrollTop: $(hash).offset().top - 100
            }, 900, 'swing');
          }
        }
      });
      $(this).on("focus", function (evt) {
        // ??????????, ?????????? ???????? ?????????????????????? ?? ???????????????? ?????????????????????? ???? ????????????
        if ($(".menu").hasClass("is-show")) {
          $(".menu").removeClass("is-show");
          $(".js-open-menu").removeClass("is-show");
          $('body').removeClass('is-menu-open').removeAttr('data-scroll');
          checkHash(); // ?????????????? ???????????? ?????????????? ???? ?????????????????????? ???????????? ?? data ???????????????? ?????? ???????????????????????? ????????????????
        } else {
          evt.preventDefault();
          var hash = $(this).attr('data-href');

          if ($(hash).length) {
            $('html, body').animate({
              scrollTop: $(hash).offset().top - 100
            }, 900, 'swing');
          }
        }
      });
    });
  };

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);
    }

    _createClass(App, null, [{
      key: "init",
      value: function init() {
        nodeListForEach();
        technologiesAnimation();
        headerScroll();
        ankors();
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy90ZWNobm9sb2dpZXMtYW5pbWF0aW9uLmpzIiwic3JjL2pzL2hlYWRlci5qcyIsInNyYy9qcy9hbmtvcnMuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub2RlTGlzdEZvckVhY2ggPSAoKSA9PiB7XG4gIGlmICgnTm9kZUxpc3QnIGluIHdpbmRvdyAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xuICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlTGlzdEZvckVhY2g7XG4iLCJjb25zdCB0ZWNobm9sb2dpZXNBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoXCIudGVjaG5vbG9naWVzIC5yb3dcIik7XG5cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIudGVjaG5vbG9naWVzX19pdGVtXCIpO1xuXG4gICAgbGV0IHZhbHVlID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyA4MDtcbiAgICAgIGxldCB2YWwgPSB2YWx1ZSArIFwibXNcIjtcbiAgICAgICQoaXRlbXNbaV0pLmNzcyhcInRyYW5zaXRpb24tZGVsYXlcIiwgdmFsKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIub24oJ2ludmlldycsIGZ1bmN0aW9uKGV2ZW50LCBpc0luVmlldykge1xuICAgICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZWNobm9sb2dpZXNBbmltYXRpb247XG4iLCJjb25zdCBoZWFkZXJTY3JvbGwgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBjb25zdCAkaGVhZGVyID0gJChcIi5oZWFkZXJcIik7XG5cbiAgaWYgKCRoZWFkZXIpIHtcblxuICAgIGNvbnN0IHNjcm9sbEhlYWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGludHJvVG9wID0gbWFpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIGlmIChpbnRyb1RvcCA8IC0xKSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgIH0gZWxzZSBpZiAoJGhlYWRlci5oYXNDbGFzcyhcInNjcm9sbFwiKSAmJiBpbnRyb1RvcCA+IC0xKSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5vbihcInNjcm9sbFwiLCBzY3JvbGxIZWFkZXIpO1xuICAgICQoZG9jdW1lbnQpLm9uKFwicmVhZHlcIiwgc2Nyb2xsSGVhZGVyKTtcblxuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlclNjcm9sbDtcbiIsImNvbnN0IGFua29ycyA9ICgpID0+IHtcbiAgY29uc3QgbGlua3MgPSAkKFwiLmpzLWFua29yXCIpO1xuICBpZiAoIWxpbmtzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGFydG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgLy/Qn9GA0L7QstC10YDRj9C10Lwg0L3QsCBkb2N1bWVudC5yZWFkeSDQvdCw0LvQuNGH0LjQtSAjaGFzaHRhZyDQsiB1cmwsINC4INC10YHQu9C4INC10YHRgtGMLCDRgdC60YDQvtC70LvQuNC8INC00L4g0L3Rg9C20L3QvtC5INGB0LXQutGG0LjQuFxuICBjb25zdCBjaGVja0hhc2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgaWYgKCQoaGFzaCkubGVuZ3RoKSB7XG4gICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6ICgkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDYwKSxcbiAgICAgICAgICB9LCA5MDAsICdzd2luZycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShjaGVja0hhc2gpO1xuXG4gIC8vINCd0LAg0LrQvdC+0L/QutC4INCy0LXRiNCw0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5XG4gIGxpbmtzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgLy8g0J3Rg9C20L3Qviwg0YfRgtC+0LHRiyDQvNC10L3RjiDQt9Cw0LrRgNGL0LLQsNC70L7RgdGMINC4INGB0YLRgNCw0L3QuNGG0LAg0YHQutGA0L7Qu9C70LjQu9Cw0YHRjCDQtNC+INGB0LXQutGG0LjQuFxuICAgICAgaWYgKCQoXCIubWVudVwiKS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAkKFwiLm1lbnVcIikucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLW1lbnUtb3BlbicpLnJlbW92ZUF0dHIoJ2RhdGEtc2Nyb2xsJyk7XG4gICAgICAgIGNoZWNrSGFzaCgpO1xuXG4gICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQuNC/0YIg0YHQutGA0L7Qu9C70LAg0LTQviDQvdC10L7QsdGF0L7QtNC40LzQvtC5INGB0LXQutGG0LjQuCDQsiBkYXRhINCw0YLRgNC40LHRg9GC0LUg0LHQtdC3INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBoYXNoID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcblxuICAgICAgICBpZiAoJChoYXNoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICgkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMCksXG4gICAgICAgICAgICB9LCA5MDAsICdzd2luZycpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQodGhpcykub24oXCJmb2N1c1wiLCBmdW5jdGlvbihldnQpIHtcbiAgICAgIC8vINCd0YPQttC90L4sINGH0YLQvtCx0Ysg0LzQtdC90Y4g0LfQsNC60YDRi9Cy0LDQu9C+0YHRjCDQuCDRgdGC0YDQsNC90LjRhtCwINGB0LrRgNC+0LvQu9C40LvQsNGB0Ywg0LTQviDRgdC10LrRhtC40LhcbiAgICAgIGlmICgkKFwiLm1lbnVcIikuaGFzQ2xhc3MoXCJpcy1zaG93XCIpKSB7XG5cbiAgICAgICAgJChcIi5tZW51XCIpLnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICAgJChcIi5qcy1vcGVuLW1lbnVcIikucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzLW1lbnUtb3BlbicpLnJlbW92ZUF0dHIoJ2RhdGEtc2Nyb2xsJyk7XG4gICAgICAgIGNoZWNrSGFzaCgpO1xuXG4gICAgICAvLyDQntCx0YvRh9C90YvQuSDRgdC60YDQuNC/0YIg0YHQutGA0L7Qu9C70LAg0LTQviDQvdC10L7QsdGF0L7QtNC40LzQvtC5INGB0LXQutGG0LjQuCDQsiBkYXRhINCw0YLRgNC40LHRg9GC0LUg0LHQtdC3INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBoYXNoID0gJCh0aGlzKS5hdHRyKCdkYXRhLWhyZWYnKTtcblxuICAgICAgICBpZiAoJChoYXNoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICgkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMCksXG4gICAgICAgICAgICB9LCA5MDAsICdzd2luZycpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFua29ycztcbiIsImltcG9ydCBub2RlTGlzdEZvckVhY2ggZnJvbSAnLi9ub2RlLWxpc3QtZm9yLWVhY2gnO1xuaW1wb3J0IHRlY2hub2xvZ2llc0FuaW1hdGlvbiBmcm9tICcuL3RlY2hub2xvZ2llcy1hbmltYXRpb24nO1xuaW1wb3J0IGhlYWRlclNjcm9sbCBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgYW5rb3JzIGZyb20gJy4vYW5rb3JzJztcblxuY2xhc3MgQXBwIHtcbiAgc3RhdGljIGluaXQoKSB7XG4gICAgbm9kZUxpc3RGb3JFYWNoKCk7XG4gICAgdGVjaG5vbG9naWVzQW5pbWF0aW9uKCk7XG4gICAgaGVhZGVyU2Nyb2xsKCk7XG4gICAgYW5rb3JzKCk7XG4gIH1cbn1cblxuXG5BcHAuaW5pdCgpO1xud2luZG93LkFwcCA9IEFwcDtcbiJdLCJuYW1lcyI6WyJub2RlTGlzdEZvckVhY2giLCJ3aW5kb3ciLCJOb2RlTGlzdCIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsYmFjayIsInRoaXNBcmciLCJpIiwibGVuZ3RoIiwiY2FsbCIsInRlY2hub2xvZ2llc0FuaW1hdGlvbiIsImNvbnRhaW5lciIsIiQiLCJpdGVtcyIsImZpbmQiLCJ2YWx1ZSIsInZhbCIsImNzcyIsIm9uIiwiZXZlbnQiLCJpc0luVmlldyIsImVhY2giLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGVhZGVyU2Nyb2xsIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRoZWFkZXIiLCJzY3JvbGxIZWFkZXIiLCJpbnRyb1RvcCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhhc0NsYXNzIiwiYW5rb3JzIiwibGlua3MiLCJwYXJ0bmFtZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjaGVja0hhc2giLCJoYXNoIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInJlYWR5IiwiZXZ0IiwicmVtb3ZlQXR0ciIsInByZXZlbnREZWZhdWx0IiwiYXR0ciIsIkFwcCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07RUFDNUIsTUFBSSxjQUFjQyxNQUFkLElBQXdCLENBQUNDLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsT0FBaEQsRUFBeUQ7RUFDdkRGLElBQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsT0FBbkIsR0FBNkIsVUFBVUMsUUFBVixFQUFvQkMsT0FBcEIsRUFBNkI7RUFDMURBLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJTCxNQUFyQjs7RUFDQSxXQUFLLElBQUlNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7RUFDdENGLFFBQUFBLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjSCxPQUFkLEVBQXVCLEtBQUtDLENBQUwsQ0FBdkIsRUFBZ0NBLENBQWhDLEVBQW1DLElBQW5DO0VBQ0M7RUFDQSxLQUxEO0VBTUQ7RUFDRixDQVREOztFQ0FBLElBQU1HLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtFQUNsQyxNQUFNQyxTQUFTLEdBQUdDLENBQUMsQ0FBQyxvQkFBRCxDQUFuQjs7RUFFQSxNQUFJRCxTQUFKLEVBQWU7RUFDYixRQUFNRSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csSUFBVixDQUFlLHFCQUFmLENBQWQ7RUFFQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWjs7RUFFQSxTQUFLLElBQUlSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLEtBQUssQ0FBQ0wsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7RUFDckNRLE1BQUFBLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQWhCO0VBQ0EsVUFBSUMsR0FBRyxHQUFHRCxLQUFLLEdBQUcsSUFBbEI7RUFDQUgsTUFBQUEsQ0FBQyxDQUFDQyxLQUFLLENBQUNOLENBQUQsQ0FBTixDQUFELENBQVlVLEdBQVosQ0FBZ0Isa0JBQWhCLEVBQW9DRCxHQUFwQztFQUNEOztFQUVETCxJQUFBQSxTQUFTLENBQUNPLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0VBQy9DLFVBQUlBLFFBQUosRUFBYztFQUNaUCxRQUFBQSxLQUFLLENBQUNRLElBQU4sQ0FBVyxZQUFXO0VBQ3BCVCxVQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLFFBQVIsQ0FBaUIsV0FBakI7RUFDRCxTQUZEO0VBR0QsT0FKRCxNQUlPO0VBQ0xULFFBQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXLFlBQVc7RUFDcEJULFVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsV0FBUixDQUFvQixXQUFwQjtFQUNELFNBRkQ7RUFHRDtFQUNGLEtBVkQ7RUFXRDtFQUNGLENBMUJEOztFQ0FBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07RUFDekIsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtFQUVBLE1BQU1DLE9BQU8sR0FBR2hCLENBQUMsQ0FBQyxTQUFELENBQWpCOztFQUVBLE1BQUlnQixPQUFKLEVBQWE7RUFFWCxRQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0VBQ3pCLFVBQU1DLFFBQVEsR0FBR0wsSUFBSSxDQUFDTSxxQkFBTCxHQUE2QkMsR0FBOUM7O0VBRUEsVUFBSUYsUUFBUSxHQUFHLENBQUMsQ0FBaEIsRUFBbUI7RUFDakJGLFFBQUFBLE9BQU8sQ0FBQ04sUUFBUixDQUFpQixRQUFqQjtFQUVELE9BSEQsTUFHTyxJQUFJTSxPQUFPLENBQUNLLFFBQVIsQ0FBaUIsUUFBakIsS0FBOEJILFFBQVEsR0FBRyxDQUFDLENBQTlDLEVBQWlEO0VBQ3RERixRQUFBQSxPQUFPLENBQUNMLFdBQVIsQ0FBb0IsUUFBcEI7RUFDRDtFQUNGLEtBVEQ7O0VBV0FYLElBQUFBLENBQUMsQ0FBQ1gsTUFBRCxDQUFELENBQVVpQixFQUFWLENBQWEsUUFBYixFQUF1QlcsWUFBdkI7RUFDQWpCLElBQUFBLENBQUMsQ0FBQ2MsUUFBRCxDQUFELENBQVlSLEVBQVosQ0FBZSxPQUFmLEVBQXdCVyxZQUF4QjtFQUVEO0VBRUYsQ0F2QkQ7O0VDQUEsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtFQUNuQixNQUFNQyxLQUFLLEdBQUd2QixDQUFDLENBQUMsV0FBRCxDQUFmOztFQUNBLE1BQUksQ0FBQ3VCLEtBQUwsRUFBWTtFQUNWO0VBQ0Q7O0VBRUQsTUFBTUMsUUFBUSxHQUFHbkMsTUFBTSxDQUFDb0MsUUFBUCxDQUFnQkMsUUFBakMsQ0FObUI7O0VBU25CLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVc7RUFDM0IsUUFBSXRDLE1BQU0sQ0FBQ29DLFFBQVAsQ0FBZ0JHLElBQXBCLEVBQTBCO0VBQ3hCLFVBQU1BLElBQUksR0FBR3ZDLE1BQU0sQ0FBQ29DLFFBQVAsQ0FBZ0JHLElBQTdCOztFQUVBLFVBQUk1QixDQUFDLENBQUM0QixJQUFELENBQUQsQ0FBUWhDLE1BQVosRUFBb0I7RUFDaEJJLFFBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I2QixPQUFoQixDQUF3QjtFQUNwQkMsVUFBQUEsU0FBUyxFQUFHOUIsQ0FBQyxDQUFDNEIsSUFBRCxDQUFELENBQVFHLE1BQVIsR0FBaUJYLEdBQWpCLEdBQXVCO0VBRGYsU0FBeEIsRUFFRyxHQUZILEVBRVEsT0FGUjtFQUdIO0VBQ0Y7RUFDRixHQVZEOztFQVlBcEIsRUFBQUEsQ0FBQyxDQUFDYyxRQUFELENBQUQsQ0FBWWtCLEtBQVosQ0FBa0JMLFNBQWxCLEVBckJtQjs7RUF3Qm5CSixFQUFBQSxLQUFLLENBQUNkLElBQU4sQ0FBVyxZQUFXO0VBQ3BCVCxJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVMyQixHQUFULEVBQWM7RUFDaEM7RUFDQSxVQUFJakMsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUIsUUFBWCxDQUFvQixTQUFwQixDQUFKLEVBQW9DO0VBRWxDckIsUUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXVyxXQUFYLENBQXVCLFNBQXZCO0VBQ0FYLFFBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVVcsV0FBVixDQUFzQixjQUF0QixFQUFzQ3VCLFVBQXRDLENBQWlELGFBQWpEO0VBQ0FQLFFBQUFBLFNBQVMsR0FKeUI7RUFPbkMsT0FQRCxNQU9PO0VBRUxNLFFBQUFBLEdBQUcsQ0FBQ0UsY0FBSjtFQUVBLFlBQUlQLElBQUksR0FBRzVCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9DLElBQVIsQ0FBYSxXQUFiLENBQVg7O0VBRUEsWUFBSXBDLENBQUMsQ0FBQzRCLElBQUQsQ0FBRCxDQUFRaEMsTUFBWixFQUFvQjtFQUNoQkksVUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjZCLE9BQWhCLENBQXdCO0VBQ3BCQyxZQUFBQSxTQUFTLEVBQUc5QixDQUFDLENBQUM0QixJQUFELENBQUQsQ0FBUUcsTUFBUixHQUFpQlgsR0FBakIsR0FBdUI7RUFEZixXQUF4QixFQUVHLEdBRkgsRUFFUSxPQUZSO0VBR0g7RUFFRjtFQUNGLEtBdEJEO0VBd0JBcEIsSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTMkIsR0FBVCxFQUFjO0VBQ2hDO0VBQ0EsVUFBSWpDLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FCLFFBQVgsQ0FBb0IsU0FBcEIsQ0FBSixFQUFvQztFQUVsQ3JCLFFBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csV0FBWCxDQUF1QixTQUF2QjtFQUNBWCxRQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CVyxXQUFuQixDQUErQixTQUEvQjtFQUNBWCxRQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVXLFdBQVYsQ0FBc0IsY0FBdEIsRUFBc0N1QixVQUF0QyxDQUFpRCxhQUFqRDtFQUNBUCxRQUFBQSxTQUFTLEdBTHlCO0VBUW5DLE9BUkQsTUFRTztFQUVMTSxRQUFBQSxHQUFHLENBQUNFLGNBQUo7RUFFQSxZQUFJUCxJQUFJLEdBQUc1QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQyxJQUFSLENBQWEsV0FBYixDQUFYOztFQUVBLFlBQUlwQyxDQUFDLENBQUM0QixJQUFELENBQUQsQ0FBUWhDLE1BQVosRUFBb0I7RUFDaEJJLFVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I2QixPQUFoQixDQUF3QjtFQUNwQkMsWUFBQUEsU0FBUyxFQUFHOUIsQ0FBQyxDQUFDNEIsSUFBRCxDQUFELENBQVFHLE1BQVIsR0FBaUJYLEdBQWpCLEdBQXVCO0VBRGYsV0FBeEIsRUFFRyxHQUZILEVBRVEsT0FGUjtFQUdIO0VBRUY7RUFDRixLQXZCRDtFQXdCRCxHQWpERDtFQW1ERCxDQTNFRDs7TUNLTWlCOzs7Ozs7OzZCQUNVO0VBQ1pqRCxNQUFBQSxlQUFlO0VBQ2ZVLE1BQUFBLHFCQUFxQjtFQUNyQmMsTUFBQUEsWUFBWTtFQUNaVSxNQUFBQSxNQUFNO0VBQ1A7Ozs7OztFQUlIZSxHQUFHLENBQUNDLElBQUo7RUFDQWpELE1BQU0sQ0FBQ2dELEdBQVAsR0FBYUEsR0FBYjs7OzsifQ==
