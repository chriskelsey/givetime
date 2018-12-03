const db = require("../models");

module.exports = {
	getLocation: function(res) {
	  if (navigator.geolocation) {
	    //showPosition(navigator.geolocation.getCurrentPosition(showPosition));
	    console.log(navigator.geolocation.getCurrentPosition());
	  } else {
	    console.log("Geolocation is not supported by this browser");
	  }
	}
}