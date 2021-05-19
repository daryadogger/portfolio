const technologiesAnimation = () => {
  const container = $(".technologies .row");

  if (container) {
    const items = container.find(".technologies__item");

    let value = 0;

    for (var i = 0; i < items.length; i++) {
      value = value + 80;
      let val = value + "ms";
      $(items[i]).css("transition-delay", val);
    }

    container.on('inview', function(event, isInView) {
      if (isInView) {
        items.each(function() {
          $(this).addClass("transform");
        });
      } else {
        items.each(function() {
          $(this).removeClass("transform");
        });
      }
    });
  }
};

export default technologiesAnimation;
