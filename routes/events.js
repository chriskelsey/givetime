const router = require("express").Router();
const eventsController = require("../controllers/eventsController");
const locationController = require("../controllers/locationController");

//Pull all events for event feed
router
  .route("/eventfeed")
  .get(eventsController.findAll);

//Pull specific events based on location
router
	.route("/eventsnearme")
	.get(locationController.getLocation);

//Create a new event in the DV
router
	.route("/event")
	.post(eventsController.create);

//Get a specific event
router
	.route("/event/:id")
	.get(eventsController.findById)
	.put(eventsController.update)
	.delete(eventsController.remove)

module.exports = router;