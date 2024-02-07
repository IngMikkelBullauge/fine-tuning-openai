/**
 * endpoint Test
 */
async function Test( req, res ) {
  res.send( "Test ok" );
}

// Exportación de los Endpoints
module.exports = {
  Test
}