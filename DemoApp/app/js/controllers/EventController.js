'use strict';

// eventsApp was created in app.js.
console.log("Registering EventController.");
eventsApp.controller('EventController', function ($scope) {
  // This is a social event.  Some kind of AngularJS-related gathering.
  $scope.event = {
    name: "AngularJS Bootcamp",
    date: "2018-07-24",
    time: "10:00 AM",
    location: {
      address: "Google HQ",
      city: "Mountain View",
      state: "CA",
      country: "USA"

    },
    imageUrl: "/img/angularjs-logo.png"
  };

});


