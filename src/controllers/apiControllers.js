const fileService = require( "../services/file/fileService" )

/**
 * Test
 * permite testear el API
 */
async function Test( req, res ) {
  res.send( "Test ok" );
}

/**
 * Transformar XLXS a JSONL
 */
async function TransformDataXLSXToJSONL( req, res ) {
  await fileService.TransformDataXLSXToJSONL();

  res.send();
}

/**
 * Subir JSONL a OpenAI
 */
async function UploadFileJSONL( req, res ) {
  const response = await fileService.UploadFileJSONL();

  res.status( response.status ).send( response.data );
}

/**
 * Listar archivos subidos al API de OpenAI
 */
async function ListFiles( req, res ) {
  const response = await fileService.ListFiles();

  res.status( response.status ).send( response.data );
}

// Exportación de los Endpoints
module.exports = {
  Test,
  TransformDataXLSXToJSONL,
  UploadFileJSONL,
  ListFiles
}