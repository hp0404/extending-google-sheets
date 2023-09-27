function duplicateSheet() {
    var sheetNames = ["A", "B", "C"];
  
    for (const sheetName of sheetNames) {
      var spreadsheet = SpreadsheetApp.getActive();
      spreadsheet.duplicateActiveSheet();
      spreadsheet.getActiveSheet().setName(sheetName);
    }
  }
  
  function duplicateAndProtect() {
    var sheetNames = ["A", "B", "C"];
  
    for (const region of sheetNames) {
      var spreadsheet = SpreadsheetApp.getActive();
      spreadsheet.duplicateActiveSheet();
      spreadsheet.getActiveSheet().setName(region);
      var sheet = spreadsheet.getActiveSheet();
      sheet
        .getRange(
          spreadsheet.getCurrentCell().getRow(),
          1,
          1,
          sheet.getMaxColumns(),
        )
        .activate();
      spreadsheet.getActiveRange().protect();
    }
  }
  