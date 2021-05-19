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

  var menuOpen = function menuOpen() {
    // Открытие моб меню
    var $buttonsMenu = $(".js-open-menu");

    if ($buttonsMenu.length) {
      var $menu = $(".menu");
      var $buttonClose = $(".js-btn-close");
      var $header = $(".header");
      $buttonsMenu.each(function () {
        var $btn = $(this);

        var scrollHeader = function scrollHeader() {
          if ($menu.hasClass("is-show")) {
            if ($menu.scrollTop() > 1) {
              $header.addClass("scroll");
            } else {
              $header.removeClass("scroll");
            }
          }
        };

        $btn.click(function () {
          // если открыто меню
          if ($menu.hasClass("is-show")) {
            var pos = parseInt($("body").attr("data-scroll"), 10);
            $menu.removeClass("is-show");
            $btn.removeClass("is-show");
            $header.removeClass("scroll");
            $("body").removeClass("is-menu-open").removeAttr("data-scroll");
            window.scrollTo(0, pos); // если закрыто меню
          } else {
            $menu.addClass("is-show");

            if ($menu.scrollTop() > 1) {
              $header.addClass("scroll");
            }

            setTimeout(function () {
              $btn.addClass("is-show");
            }, 100);
            setTimeout(function () {
              var pagePos = $(window).scrollTop();
              $("body").addClass("is-menu-open").attr("data-scroll", pagePos);
            }, 450);
          }
        });
        $(".menu").on("scroll", scrollHeader);
      });
      $buttonClose.click(function () {
        var pos = parseInt($("body").attr("data-scroll"), 10);
        $menu.removeClass("is-show");
        $buttonsMenu.each(function () {
          var $btn = $(this);
          $btn.removeClass("is-show");
        });
        $("body").removeClass("is-menu-open").removeAttr("data-scroll");
        window.scrollTo(0, pos);
      });
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

  var App = /*#__PURE__*/function () {
    function App() {
      _classCallCheck(this, App);
    }

    _createClass(App, null, [{
      key: "init",
      value: function init() {
        nodeListForEach();
        menuOpen();
        technologiesAnimation();
      }
    }]);

    return App;
  }();

  App.init();
  window.App = App;

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsic3JjL2pzL25vZGUtbGlzdC1mb3ItZWFjaC5qcyIsInNyYy9qcy9tZW51LW9wZW4uanMiLCJzcmMvanMvdGVjaG5vbG9naWVzLWFuaW1hdGlvbi5qcyIsInNyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vZGVMaXN0Rm9yRWFjaCA9ICgpID0+IHtcbiAgaWYgKCdOb2RlTGlzdCcgaW4gd2luZG93ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XG4gICAgfVxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVMaXN0Rm9yRWFjaDtcbiIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuICAvLyDQntGC0LrRgNGL0YLQuNC1INC80L7QsSDQvNC10L3RjlxuICBjb25zdCAkYnV0dG9uc01lbnUgPSAkKFwiLmpzLW9wZW4tbWVudVwiKTtcblxuICBpZiAoJGJ1dHRvbnNNZW51Lmxlbmd0aCkge1xuICAgIGNvbnN0ICRtZW51ID0gJChcIi5tZW51XCIpO1xuICAgIGNvbnN0ICRidXR0b25DbG9zZSA9ICQoXCIuanMtYnRuLWNsb3NlXCIpO1xuICAgIGNvbnN0ICRoZWFkZXIgPSAkKFwiLmhlYWRlclwiKTtcblxuICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICRidG4gPSAkKHRoaXMpO1xuXG4gICAgICBjb25zdCBzY3JvbGxIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICgkbWVudS5oYXNDbGFzcyhcImlzLXNob3dcIikpIHtcblxuICAgICAgICAgIGlmKCRtZW51LnNjcm9sbFRvcCgpID4gMSkge1xuICAgICAgICAgICAgJGhlYWRlci5hZGRDbGFzcyhcInNjcm9sbFwiKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaGVhZGVyLnJlbW92ZUNsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgJGJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L7RgtC60YDRi9GC0L4g0LzQtdC90Y5cbiAgICAgICAgaWYgKCRtZW51Lmhhc0NsYXNzKFwiaXMtc2hvd1wiKSkge1xuXG4gICAgICAgICAgY29uc3QgcG9zID0gcGFyc2VJbnQoJChcImJvZHlcIikuYXR0cihcImRhdGEtc2Nyb2xsXCIpLCAxMCk7XG4gICAgICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImlzLW1lbnUtb3BlblwiKS5yZW1vdmVBdHRyKFwiZGF0YS1zY3JvbGxcIik7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBvcyk7XG5cbiAgICAgICAgICAvLyDQtdGB0LvQuCDQt9Cw0LrRgNGL0YLQviDQvNC10L3RjlxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgJG1lbnUuYWRkQ2xhc3MoXCJpcy1zaG93XCIpO1xuXG4gICAgICAgICAgaWYoJG1lbnUuc2Nyb2xsVG9wKCkgPiAxKSB7XG4gICAgICAgICAgICAkaGVhZGVyLmFkZENsYXNzKFwic2Nyb2xsXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGJ0bi5hZGRDbGFzcyhcImlzLXNob3dcIik7XG5cbiAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJpcy1tZW51LW9wZW5cIikuYXR0cihcImRhdGEtc2Nyb2xsXCIsIHBhZ2VQb3MpO1xuICAgICAgICAgIH0sIDQ1MCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKFwiLm1lbnVcIikub24oXCJzY3JvbGxcIiwgc2Nyb2xsSGVhZGVyKTtcbiAgICB9KTtcblxuICAgICRidXR0b25DbG9zZS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwb3MgPSBwYXJzZUludCgkKFwiYm9keVwiKS5hdHRyKFwiZGF0YS1zY3JvbGxcIiksIDEwKTtcbiAgICAgICRtZW51LnJlbW92ZUNsYXNzKFwiaXMtc2hvd1wiKTtcbiAgICAgICRidXR0b25zTWVudS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgJGJ0biA9ICQodGhpcyk7XG4gICAgICAgICRidG4ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93XCIpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiaXMtbWVudS1vcGVuXCIpLnJlbW92ZUF0dHIoXCJkYXRhLXNjcm9sbFwiKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwb3MpO1xuICAgIH0pO1xuXG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudU9wZW47XG4iLCJjb25zdCB0ZWNobm9sb2dpZXNBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9ICQoXCIudGVjaG5vbG9naWVzIC5yb3dcIik7XG5cbiAgaWYgKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGl0ZW1zID0gY29udGFpbmVyLmZpbmQoXCIudGVjaG5vbG9naWVzX19pdGVtXCIpO1xuXG4gICAgbGV0IHZhbHVlID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyA4MDtcbiAgICAgIGxldCB2YWwgPSB2YWx1ZSArIFwibXNcIjtcbiAgICAgICQoaXRlbXNbaV0pLmNzcyhcInRyYW5zaXRpb24tZGVsYXlcIiwgdmFsKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIub24oJ2ludmlldycsIGZ1bmN0aW9uKGV2ZW50LCBpc0luVmlldykge1xuICAgICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInRyYW5zZm9ybVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZWNobm9sb2dpZXNBbmltYXRpb247XG4iLCJpbXBvcnQgbm9kZUxpc3RGb3JFYWNoIGZyb20gJy4vbm9kZS1saXN0LWZvci1lYWNoJztcbmltcG9ydCBtZW51T3BlbiBmcm9tICcuL21lbnUtb3Blbic7XG5pbXBvcnQgdGVjaG5vbG9naWVzQW5pbWF0aW9uIGZyb20gJy4vdGVjaG5vbG9naWVzLWFuaW1hdGlvbic7XG5cbmNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbml0KCkge1xuICAgIG5vZGVMaXN0Rm9yRWFjaCgpO1xuICAgIG1lbnVPcGVuKCk7XG4gICAgdGVjaG5vbG9naWVzQW5pbWF0aW9uKCk7XG4gIH1cbn1cblxuXG5BcHAuaW5pdCgpO1xud2luZG93LkFwcCA9IEFwcDtcbiJdLCJuYW1lcyI6WyJub2RlTGlzdEZvckVhY2giLCJ3aW5kb3ciLCJOb2RlTGlzdCIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsYmFjayIsInRoaXNBcmciLCJpIiwibGVuZ3RoIiwiY2FsbCIsIm1lbnVPcGVuIiwiJGJ1dHRvbnNNZW51IiwiJCIsIiRtZW51IiwiJGJ1dHRvbkNsb3NlIiwiJGhlYWRlciIsImVhY2giLCIkYnRuIiwic2Nyb2xsSGVhZGVyIiwiaGFzQ2xhc3MiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiY2xpY2siLCJwb3MiLCJwYXJzZUludCIsImF0dHIiLCJyZW1vdmVBdHRyIiwic2Nyb2xsVG8iLCJzZXRUaW1lb3V0IiwicGFnZVBvcyIsIm9uIiwidGVjaG5vbG9naWVzQW5pbWF0aW9uIiwiY29udGFpbmVyIiwiaXRlbXMiLCJmaW5kIiwidmFsdWUiLCJ2YWwiLCJjc3MiLCJldmVudCIsImlzSW5WaWV3IiwiQXBwIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtFQUM1QixNQUFJLGNBQWNDLE1BQWQsSUFBd0IsQ0FBQ0MsUUFBUSxDQUFDQyxTQUFULENBQW1CQyxPQUFoRCxFQUF5RDtFQUN2REYsSUFBQUEsUUFBUSxDQUFDQyxTQUFULENBQW1CQyxPQUFuQixHQUE2QixVQUFVQyxRQUFWLEVBQW9CQyxPQUFwQixFQUE2QjtFQUMxREEsTUFBQUEsT0FBTyxHQUFHQSxPQUFPLElBQUlMLE1BQXJCOztFQUNBLFdBQUssSUFBSU0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLQyxNQUF6QixFQUFpQ0QsQ0FBQyxFQUFsQyxFQUFzQztFQUN0Q0YsUUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNILE9BQWQsRUFBdUIsS0FBS0MsQ0FBTCxDQUF2QixFQUFnQ0EsQ0FBaEMsRUFBbUMsSUFBbkM7RUFDQztFQUNBLEtBTEQ7RUFNRDtFQUNGLENBVEQ7O0VDQUEsSUFB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
