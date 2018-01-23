function Ticket(title, time, age) {
  this.movie = title;
  this.time = time;
  this.age = age;
  var price = 10; // Standard price of $10
  if (isAgeDiscount(age) === true) {
    price = price - 1.5;
  };
  if (isOldTitleDiscount(title) === true) {
    price = price - 1.5;
  };
  if (isShowingTimeDiscount(time) === true) {
    price = price - 1.5;
  };
  this.price = price;
};

var isAgeDiscount = function(age) {
  var year = age.slice(0, 4);
  var currentYear = 2018;
  var ageOfUser = currentYear - year;
  if (ageOfUser <= 10 || ageOfUser >= 55) {
    return true;
  } else {
    return false;
  };
};

var isOldTitleDiscount = function(movie) {
  if (movie === "old") {
    return true;
  } else {
    return false;
  };
};

var isShowingTimeDiscount = function(showing) {
  if (showing === "morning") {
    return true;
  } else {
    return false;
  };
};

$(document).ready(function() {
  $("form#tickets-form").submit(function(event) {
    event.preventDefault();
    var movie = $("#movies").val();
    var showing = $("#showing").val();
    var age = $("input#age").val();
    var newTicket = new Ticket(movie, showing, age);
    $(".price").text(newTicket.price);
    $("#price-well").show();
  });
});
