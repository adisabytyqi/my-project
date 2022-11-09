var $ = jQuery;

$(".grid--4-cols").isotope({
  itemSelector: ".images",
  percentPosition: true,
  masonry: {
    columnWidth: ".projects",
  },
});
