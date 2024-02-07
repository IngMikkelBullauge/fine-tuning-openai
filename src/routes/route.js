const express = require( "express" );
const apiController = require( "../controllers/apiControllers" );
const router = express.Router();

router
  .post( "/test", apiController.Test )
  .post( "/transform-data-xlsx-to-jsonl", apiController.TransformDataXLSXToJSONL )
  .post( "/upload-file-jsonl", apiController.UploadFileJSONL )
  .get( "/list-files", apiController.ListFiles )

module.exports = router;