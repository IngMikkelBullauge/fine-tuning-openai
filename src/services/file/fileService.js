let xlsx = require( "xlsx" );
const fs = require( "fs" );
const { Configuration, OpenAIApi } = require( "openai" )

// Transforma datos de Excel xlsx a un archivo JSONL para OpenAI
async function TransformDataXLSXToJSONL() {
  let workbook = xlsx.readFile( "src/shared/data-set.xlsx" );
  let sheet_name_list = workbook.SheetNames;
  let xlData = xlsx.utils.sheet_to_json( workbook.Sheets[ sheet_name_list[ 0 ] ] ); // Se usa la primer hoja del xlsx

  for( const item of xlData ) {
    let object = `{"prompt": "${item.Question} ->", "completion": "${item.Answer} END"}`;

    await fs.appendFileSync( "src/shared/data-set.jsonl", object, "utf8", function() {} )
    await fs.appendFileSync( "src/shared/data-set.jsonl", "\r\n", "utf8", function() {} )
  }
}

// Subir archivo a OpenAI : file-u845UJ9AB1wNc83jpDgevdE2
async function UploadFileJSONL() {
  const configuration = new Configuration( { apiKey: "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" } );
  const openai = new OpenAIApi( configuration );
  const response = await openai.createFile( fs.createReadStream( "src/shared/data-set.jsonl" ), "fine-tune" );

  return response;
}

module.exports = {
  TransformDataXLSXToJSONL,
  UploadFileJSONL
}