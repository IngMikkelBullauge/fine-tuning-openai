const express = require( "express" );
const apiController = require( "../controllers/apiControllers" );
const router = express.Router();

router
  .post( "/test", apiController.Test )

module.exports = router;