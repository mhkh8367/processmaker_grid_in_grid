
// Required External Libraries (کتابخانه های خارجی لازم):
/*
/ext-lib/jquery-ui.js,
/ext-lib/jquery-ui.css,
*/

// ___________________________________________________________

// Example:

/*


// >> الزامات:



// For all subforms used in the main form
subform_id_list = {
  's3': '553696111603a2294edaa86040570285', // id of subform 3
  's4': '227181373603a2294efc6f8017724506', // id of subform 4
  's5': '951271154603a2294ecf756010271436', // id of subform 5
};

// ______________

// Just for subforms that have relevant grids in the main form
subform_grid_object = { // keys of this object are subform_numbers

  's3': { // For subform 3
    subform_id: subform_id_list['s3'],
    subform_grid_fields_id: [ 'txt_s3_fName', 'txt_s3_lName', 'txt_s3_nationalCode', 'txt_s3_studyField', 'drp_s3_lastEduCert', 'lnk_s3_lastEduCert',
                             'txt_s3_position', 'txt_s3_employType', 'drp_s3_employStatus', 'txt_s3_phone', 'txt_s3_email', ],
    grid_hidden_fields_number: [4,5,6,7,8,9,10,11,   12], // 1,2,3,
    unique_id_col_number: 12,
    link_upload_pair: [ ['lnk_s3_lastEduCert_temp' ,'mfi_s3_lastEduCert_temp'] ], // جفت: [شناسه فیلد لینک وابسته به آپلود, u   شناسه فیلد آپلود ]
    // در صورت عدم وجود "فیلد آپلود" و "لینک وابسته به آن" داخل آرایه بالا خالی خواهد بود. به شکل زیر:
    // link_upload_pair: [],

    subgrid: {
      "grd_s3_relatedCertIncentive": {
        'normal_col': [1,2],
        'unique_id_col_number': 3, // +element_subgrid['normal_col'].length + 1
        'link_upload_pair': [ [2,4] ], // [link_col, upload_col]
      },
    }
  },

  's4': { // For subform 4
    subform_id: subform_id_list['s4'],
    subform_grid_fields_id: [ 'txt_s4_abbreviation', 'txt_s4_engFullName', 'txt_s4_parsFullName', 'txt_s4_manufacturerCountry', 'txt_s4_manufacturerCo',
                             'txt_s4_model', 'dat_s4_manufacturedDt', 'txt_s4_yearPurchased', 'txt_s4_serialNo', 'txt_s4_specializedAxis', 'drp_s4_periodicCalib',
                             'txt_s4_calibCertNo', 'dat_s4_calibCertDt', 'lnk_s4_calibCert', 'txt_s4_calibrator', 'txt_s4_technician', 'lnk_s4_equipIns', 'txt_s4_equipInsName',
                             'drp_s4_latestStatus', 'txt_s4_latestStatusOther',
                             'hid_drp_s4_day', 'txt_s4_timeStart', 'txt_s4_timeEnd', 'drp_s4_serviceMethod', ],
    grid_hidden_fields_number: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,   25], // 1,2,3,
    unique_id_col_number: 25,
    link_upload_pair: [ ['lnk_s4_calibCert_temp' ,'mfi_s4_calibCert_temp'], ['lnk_s4_equipIns_temp' ,'mfi_s4_equipIns_temp'] ], // جفت: [شناسه فیلد لینک وابسته به آپلود, u   شناسه فیلد آپلود ]
    // در صورت عدم وجود "فیلد آپلود" و "لینک وابسته به آن" داخل آرایه بالا خالی خواهد بود. به شکل زیر:
    // link_upload_pair: [],

    subgrid: {
      "grd_s4_measureInfo": {
        'normal_col': [1,2,3],
        'unique_id_col_number': 4, // +element_subgrid['normal_col'].length + 1
        'link_upload_pair': [], // [link_col, upload_col]
      },
    }
  },

  's5': { // For subform 5
    subform_id: subform_id_list['s5'],
    subform_grid_fields_id: [ 'txt_s5_examTitle', 'txt_s5_relatedEquip', 'txt_s5_standard', 'lnk_s5_testIns', 'txt_s5_testInsName', 'txt_s5_testingTariffs',
                             'lnk_s5_sampleTestReport', 'txt_s5_testTimeMin', 'txt_s5_testTimeHour', 'txt_s5_testTimeDay', 'txt_s5_testTimeMonth', 'drp_s5_testStatus', ],
    grid_hidden_fields_number: [4,5,6,7,8,9,10,11,12,   13], // 1,2,3,
    unique_id_col_number: 13,
    link_upload_pair: [ ['lnk_s5_testIns_temp' ,'mfi_s5_testIns_temp'], ['lnk_s5_sampleTestReport_temp' ,'mfi_s5_sampleTestReport_temp'] ], // جفت: [شناسه فیلد لینک وابسته به آپلود, u   شناسه فیلد آپلود ]
    // در صورت عدم وجود "فیلد آپلود" و "لینک وابسته به آن" داخل آرایه بالا خالی خواهد بود. به شکل زیر:
    // link_upload_pair: [],

  },

};

*/

// ___________________________________________________________


/**
 * Id Instruction:
 *
 * Grid id: grd_subform_{subform_number} // e.g.: grd_subform_s3 >> If subformGrid_prefix is "grd_subform_"
 * Add row button id: btn_add_row_{subform_number} // e.g.: btn_add_row_s3 >> Depricated
 * Pay attention that types of form controls in subform and grid should be in the same type
 *   (except for file upload that will be controlled by button)
 *   For example: checkbox to checkbox and textbox to checkbox and textbox to textbox
 *   and dropbox should have the same keys in subform and grid
 *
 * Pay attention that using buttons to call upload inputs considers the other of
 *   the upload inputs place in the grid row, not the id of upload input control on grid row.
 *
 * Id of grid fields is not important and we use orther of columns in grid to transfer data.
 *
 */

// فعال سازی کل کدها
if (typeof isFormOld_id === "undefined") {
  console.error('لطفا متغیر isFormOld_id را تعریف و مقداردهی کنید.');
} else {
  try {
    isFormOld = ($("#"+isFormOld_id).getValue() == "1")? true : false;
    subformGrid_prefix = "grd_subform_";
    functionsHandlingCoreCenter();
  } catch (error) {
    console.error(error);
  }
}

// #########################################################################################
// ############################### Connected Subform and Grid ##############################
// #########################################################################################

// ################################## >> Do some stylings:

// Customize Global Style:
// Source: https://stackoverflow.com/questions/15493965/define-global-css-classes-using-javascript-or-jquery
var styleTag = $('\
<style>\
/* Change font setting for jquery-ui modal */ \
.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: unset; }\
.ui-widget, .ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button { font-family: "IRANSans", Arial, Tahoma, Verdana; }\
.glyphicon { font-family: Glyphicons Halflings !important; }\
\
/* Change other parts of form */ \
.rowIndex { text-align: center; }\
.panel { -webkit-box-shadow: unset; box-shadow: unset; } /* Remove panel box-shadow */ \
.form-control { width: 100%; } /* Change form-control width to 100% */ \
</style>\
');
$('html > head').append(styleTag);

// ################################## >> JS Code:

// _____________________________ Core Function _____________________________

function functionsHandlingCoreCenter () {

  // Define objects:
  grid_row_index = {};
  grid_id = {};
  myInt_subgrid = {}; // Set all intervals for all subgrids in the called subform
  myInt_subform = {}; // Set all intervals for all subforms
  is_modal_created = false; // Used in modal

  defaultSubformValues = {};
  for (const key_subform in subform_grid_object) {
    if (Object.hasOwnProperty.call(subform_grid_object, key_subform)) {

      const element_subform = subform_grid_object[key_subform];

      // _____________________________ Subforms <> Subform_grids Initial Actions _____________________________

      // Hide subform
      // Source: https://wiki.processmaker.com/3.2/JavaScript_Functions_and_Methods/Obtaining_JQuery_Objects#hide
      $('#'+ element_subform.subform_id).parent().hide();

      // Grid Settings
      // Source: https://wiki.processmaker.com/3.3/JavaScript_Functions_and_Methods/Grid
      if (!isFormOld) {
        clearGrid(subformGrid_prefix+ key_subform);
        // $("#"+subformGrid_prefix+ key_subform).deleteRow(1);
      } else {
        // Delete the first row for old forms where the unique_id column is empty >> Means that the grid was empty and that row was auto generated
        let unique_id = $("#"+subformGrid_prefix+ key_subform).getValue(1, +subform_grid_object[key_subform]['unique_id_col_number']);
        if (unique_id == "") {
          clearGrid(subformGrid_prefix+ key_subform);
          // $("#"+subformGrid_prefix+ key_subform).deleteRow(1);
        }
      }

      element_subform.grid_hidden_fields_number.forEach(elm1 => { $("#"+subformGrid_prefix+ key_subform).hideColumn(elm1); });

      // Add edit buttons to pre-field rows of grid
      let rowCount = $("#"+subformGrid_prefix+ key_subform).getNumberRows();
      for (let index = 0; index < rowCount; index++) {
        add_edit_button(subformGrid_prefix, key_subform, index+1);
      }

      // Add button on click
      $("#"+subformGrid_prefix+key_subform+" button.pmdynaform-grid-newitem").click(add_row_modal);

      // >> Deactivating "New Row" button of grd_subform
      // Source: https://stackoverflow.com/questions/1687790/how-to-remove-onclick-with-jquery
      $("#"+subformGrid_prefix+ key_subform).parent().prop("onclick", null).off("click");
      $("#"+subformGrid_prefix+ key_subform + " .pmdynaform-grid-text-plus").text("افزودن ردیف جدید");

      // ---------------------------

      // Source: https://api.jquery.com/css/ or https://www.w3schools.com/jquery/jquery_css.asp
      // Source: https://api.jquery.com/parent/
      $('#'+ element_subform.subform_id).css({"border":"unset", "padding":"unset"});
      $('#'+ element_subform.subform_id).parent().css({"padding":"unset"});
      $('#'+ element_subform.subform_id).parent().parent().parent().css({"margin":"unset"});

      // ---------------------------

      // Extract Subform Modal default values to use in add_row_modal() function
      defaultSubformValues[key_subform] = [];
      element_subform.subform_grid_fields_id.forEach((elm2, index) => {
        defaultSubformValues[key_subform][index] = $('#'+ element_subform.subform_id +' #'+ elm2 +'_temp').getValue();
      });

      // _____________________________ Subgrids <> Maingrids Initial Actions _____________________________

      for (const key_subgrid in element_subform['subgrid']) {
        if (Object.hasOwnProperty.call(element_subform['subgrid'], key_subgrid)) {
          const element_subgrid = element_subform['subgrid'][key_subgrid];

          // As the grid in subform is always empty at first calling of the form,
          //     then it automaticaly generates a new empty row and we should remove it
          clearGrid(key_subgrid);
          // $("#"+key_subgrid).deleteRow(1);

          if (!isFormOld) {
            clearGrid(key_subgrid+"_main");
            // $("#"+key_subgrid+"_main").deleteRow(1);
          } else {
            // Delete the first row for old forms where the unique_id column is empty >> Means that the grid was empty and that row was auto generated
            let unique_id = $("#"+key_subgrid+"_main").getValue(1, +element_subgrid['unique_id_col_number']);
            if (unique_id == "") {
              clearGrid(key_subgrid+"_main");
              // $("#"+key_subgrid+"_main").deleteRow(1);
            }
          }

          // Hode the main-grid of this subgrid
          $("#"+key_subgrid+"_main").hide();

        }
      }

    }
  }

}

// _____________________________ Subforms <> Subform_grids Functions _____________________________

// >> F01 : Transfer values and create new row or edit the current row
function transfer_data_into_grid (target_row) {

  var newRowData = [];
  var editRowData = [];

  // Extract Subform Modal values and import into new row of grid
  subform_grid_object[subform_number].subform_grid_fields_id.forEach((element, index) => {
    content_value = $('#'+ subform_grid_object[subform_number].subform_id +' #'+ element +'_temp').getValue();
    newRowData[index]  = {value: content_value};
    editRowData[index] = content_value;
  });

  let subform_unique_id = new Date().valueOf(); // Is the same as Date.now()
  newRowData[newRowData.length] = {value: subform_unique_id}; // Used to handle grids in subforms

  // How to fill up the grid >> Source: https://wiki.processmaker.com/3.3/JavaScript_Functions_and_Methods/Grid#

  // Source: https://dmitripavlutin.com/javascript-defined-variable-checking/ >> window.hasOwnProperty('myGlobalVar')
  if (target_row == null) {

    $("#"+subformGrid_prefix+ subform_number).addRow(newRowData);

    // -------------------------------

    add_edit_button(subformGrid_prefix, subform_number, $("#"+subformGrid_prefix+ subform_number).getNumberRows());

    // Specify new attributes to remove button of each row
    $("#"+subformGrid_prefix+ subform_number +" .pmdynaform-grid-tbody .pmdynaform-grid-row").eq(+$("#"+subformGrid_prefix+ subform_number)
                                                                                                 .getNumberRows() - 1).find('.remove-row').attr({'subform_unique_id':subform_unique_id, 'subform_number':subform_number});

    $(document).on('click', '[subform_unique_id='+subform_unique_id+']', function(){

      var subform_unique_id = $(this).attr('subform_unique_id');
      var subform_number    = $(this).attr('subform_number');

      for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
        if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
          const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];

          // Delete those rows from main subgrid where the related subform_grid_row does not exist any more
          var to_delete_index_array = [];
          subgrid_main_array = $("#"+key_subgrid+"_main").getValue();
          subgrid_main_array.forEach((element_main, index_main) => {
            if (element_main[(+element_subgrid['unique_id_col_number']-1)+1] == subform_unique_id) {
              to_delete_index_array[index_main] = index_main;
            }
          });

          to_delete_index_array.reverse();
          to_delete_index_array.forEach(index_del => {
            $("#"+key_subgrid+"_main").deleteRow(+index_del+1);
          });

        }
      }

    });

  } else {

    // Extract Subform Modal values and import into new row of grid
    editRowData.forEach((element, index) => {
      $("#"+subformGrid_prefix+ subform_number).setValue(element, target_row, +index+1);
    });

  }

  setMyInt();

}

// Set interval as myInt_subform and myInt_subgrid
function setMyInt () {

  // Set all intervals for all subforms
  // myInt_subform = {}; // Was defined in functionsHandlingCoreCenter() function
  for (const key_pair in subform_grid_object[subform_number]['link_upload_pair']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['link_upload_pair'], key_pair)) {
      const element_pair = subform_grid_object[subform_number]['link_upload_pair'][key_pair];
      // element_pair[0] is the link field id that is going to be filled
      myInt_subform[element_pair[0]] = setInterval(function () { updateDLinkPlace_inForm(element_pair[0], element_pair[1]); }, 1000);
    }
  }

  // -----------------------------------------------------------------------------

  // Set all intervals for all subgrids in the called subform
  // myInt_subgrid = {}; // Was defined in functionsHandlingCoreCenter() function
  for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
      const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];

      myInt_subgrid[key_subgrid] = {};
      for (const key_pair in element_subgrid['link_upload_pair']) {
        if (Object.hasOwnProperty.call(element_subgrid['link_upload_pair'], key_pair)) {
          const element_pair = element_subgrid['link_upload_pair'][key_pair];
          myInt_subgrid[key_subgrid][key_pair] = setInterval(function () { updateDLinkPlace_inGrid(key_subgrid, element_pair[0], element_pair[1]); }, 1000);
        }
      }

    }
  }

}

// Clear interval of myInt_subgrid and myInt_subform
function clearMyInt () {

  // Clear all intervals for all subforms
  for (const key_myInt_subform in myInt_subform) { // key_myInt_subform is the same as element_pair[0] in setMyInt function
    if (Object.hasOwnProperty.call(myInt_subform, key_myInt_subform)) {
      const element_myInt_subform = myInt_subform[key_myInt_subform];
      clearInterval(element_myInt_subform);
    }
  }

  // -----------------------------------------------------------------------------

  // Clear all intervals for all subgrids in the called subform
  for (const key_myInt_subgrid in myInt_subgrid) { // key_myInt_subgrid is the same as key_subgrid in setMyInt function
    if (Object.hasOwnProperty.call(myInt_subgrid, key_myInt_subgrid)) {
      const element_myInt_subgrid = myInt_subgrid[key_myInt_subgrid];

      for (const key_2_myInt_subgrid in element_myInt_subgrid) { // key_2_myInt_subgrid is the same as key_pair in setMyInt function
        if (Object.hasOwnProperty.call(element_myInt_subgrid, key_2_myInt_subgrid)) {
          const element_2_myInt_subgrid = element_myInt_subgrid[key_2_myInt_subgrid];
          clearInterval(element_2_myInt_subgrid);
        }
      }

    }
  }

}

// Clear full grid
function clearGrid (grid_id) {
  // Source: https://wiki.processmaker.com/3.2/JavaScript_Functions_and_Methods/Grid#grid.deleteRow
  // Delete all rows:
  let rows = $("#"+grid_id).getNumberRows();
  for (let i=0; i < rows; i++) {
    $("#"+grid_id).deleteRow();
  }
  // Add new row as first row
  // $("#"+grid_id).addRow();
}

function updateDLinkPlace_inForm (link_field_id, upload_field_id) {

  // Source: https://www.pmusers.com/index.php/Manipulating_Multiple_File_controls_with_JavaScript

  var file_models = $("#"+upload_field_id).getInfo().fileCollection.models;
  if (file_models.length != 0 && file_models[0].attributes.percentage == 100 && file_models[0].attributes.isValid == true) {

    setTimeout(function(){
      downloadLink = file_models[0].getLinkDownload();
      $("#"+link_field_id).setValue(downloadLink);
      $("#lnk_s1_infoAttach").setValue(downloadLink);

      $('#'+upload_field_id+' a.fa-trash').click();
    }, 1000);

  }

}


function updateDLinkPlace_inGrid (grid_id, link_col_index, upload_col_index) {

  // Source: https://www.pmusers.com/index.php/Manipulating_Multiple_File_controls_with_JavaScript

  var rows = $("#"+grid_id).getNumberRows();
  for (var i=0; i < rows; i++) {
    var file_models = getFieldById(grid_id).gridtable[i][upload_col_index-1].model.attributes.fileCollection.models;
    if (file_models.length != 0 && file_models[0].attributes.percentage == 100 && file_models[0].attributes.isValid == true) {

      var loaded_files = $('.pmdynaform-multiplefile-box .pmdynaform-mfile-wrapper');
      if (loaded_files.length > 1) {
        // console.log(loaded_files.eq(0));
        for (let index = 0; index < loaded_files.length - 1; index++) {
          loaded_files.eq(index).find("a.fa-trash").click();
        }
      }

      let downloadLink = file_models[0].getLinkDownload();
      $("#"+grid_id).setValue(downloadLink, +i+1, link_col_index);

    }
  }

}

// >> Force multiple file uploader to select just one file in each file selection
// Source: https://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements
// $(document).on('click', '.pm-modal-upload', function() {
//   // $("#modalUpload input[type=file]").css({"font-weight": "bold", "background-color": "red"});
//   $("#modalUpload input[type=file]").attr({"multiple": false,});
//   // $("#modalUpload input[type=file]").prop('multiple', false);
// });

// >> F02.00 : To handle modal OK/Cancel button
function handleModalConfirm (result, target_row) {

  // result will be true if button was click, while it will be false if users close the dialog directly.
  if (result) {

    // Source: https://dmitripavlutin.com/javascript-defined-variable-checking/ >> window.hasOwnProperty('myGlobalVar')
    if (target_row == null) {
      target_row = $("#"+subformGrid_prefix+ subform_number).getNumberRows();
    }
    transfer_data_into_grid(target_row);
    subgrid_handling_onConfirm(target_row);

  } else {

    // Source: https://dmitripavlutin.com/javascript-defined-variable-checking/ >> window.hasOwnProperty('myGlobalVar')
    if (target_row == null) {
      $("#"+subformGrid_prefix+ subform_number).deleteRow($("#"+subformGrid_prefix+ subform_number).getNumberRows());
    }

  }

  is_modal_created = false;

  // Set Subform Modal values to default mode
  subform_grid_object[subform_number].subform_grid_fields_id.forEach((element, index) => {
    $('#'+ subform_grid_object[subform_number].subform_id +' #'+ element +'_temp').setValue(defaultSubformValues[subform_number][index]);
  });

  clearMyInt();

  // Clear all subgrids in the called subform
  for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
      // const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];
      clearGrid(key_subgrid);
    }
  }

}

// Create a modal to show custom massage defined in domVariable variable
function createMessageModal (domVariable) {

  // Source: https://jqueryui.com/dialog/#modal-message
  // Source: https://api.jqueryui.com/dialog/

  // External Libraries (For http://ls.arian.co.ir:8081)
  // /ext-lib/jquery-ui.js,
  // /ext-lib/jquery-ui.css,

  // -----------------------------------------------------

  $(domVariable).dialog({
    modal: true,
    open: function (event, ui) {

      // Modal title bar styling
      $(this).parent().find(".ui-dialog-titlebar-close").hide();
      $(this).parent().find(".ui-dialog-title").css({"float":"right"});
      $(this).parent().find(".ui-dialog-titlebar").css({"background-color":"#3397e1"});

      // Modal bottons styling
      $(this).parent().find(".ui-dialog-buttonset button").eq(0).find('span')
        .addClass("btn btn-success")
        .css({"font-weight": "bold"})
        .html('<span class="glyphicon glyphicon-ok"></span> بستن');

    },
    buttons: {
      "بستن": function() {
        $(this).dialog("close");
      },
    },
  });

}

// Create a modal to show subform
function createSubformModal (target_row) {

  // Source: https://jqueryui.com/dialog/#modal-confirmation
  // Source: https://api.jqueryui.com/dialog/

  // External Libraries (For http://ls.arian.co.ir:8081)
  // /ext-lib/jquery-ui.js,
  // /ext-lib/jquery-ui.css,

  // -----------------------------------------------------

  $("#"+subform_grid_object[subform_number].subform_id).dialog({
    title: 'ورود اطلاعات به لیست',
    modal: true,
    closeOnEscape: false,
    resizable: true, // resizable: false,
    // height: "auto",
    // minWidth: 1200,
    open: function (event, ui) {

      // Modal title bar styling
      $(this).parent().find(".ui-dialog-titlebar-close").hide();
      $(this).parent().find(".ui-dialog-title").css({"float":"right"});
      $(this).parent().find(".ui-dialog-titlebar").css({"background-color":"#3397e1"});

      // Modal body and main div styling
      $(this).css({"height":"70vh", "overflow-y":"auto"});
      $(this).parent().css({"width":"90vw", "left":"5vw"});
      $(this).parent().css({"box-shadow":"0 0 25px #3397e1"});

      // Modal bottons styling
      $(this).parent().find(".ui-dialog-buttonset button").eq(0).find('span')
        .addClass("btn btn-danger")
        .css({"font-weight": "bold"})
        .html('<span class="glyphicon glyphicon-remove"></span> بستن');

      $(this).parent().find(".ui-dialog-buttonset button").eq(1).find('span')
        .addClass("btn btn-success")
        .css({"font-weight": "bold"})
        .html('<span class="glyphicon glyphicon-ok"></span> ذخیره');

    },
    buttons: {
      "بستن": function() {
        handleModalConfirm(false, target_row);
        $(this).dialog("close");
      },
      "ذخیره": function() {
        handleModalConfirm(true, target_row);
        $(this).dialog("close");
      },
    },
  });

}

// F00: Add edit button to grid rows of subform
function add_edit_button (subformGrid_prefix, subform_number, rowNumber) {

  var edit_btn = '<div style="vertical-align: top; margin-right: 5px; padding: 4px;" class="pmdynaform-grid-removerow-static">\
<button type="button" class="glyphicon glyphicon-edit btn btn-success btn-sm" onclick="edit_row_modal(this);">\
</div>';
  $("#"+subformGrid_prefix+ subform_number +" .pmdynaform-grid-tbody .pmdynaform-grid-row").eq(+rowNumber - 1).append(edit_btn);

}

// >> F03 : Call a modal to add grid row
function add_row_modal () {

  // subform_number = $(this).closest(".pmdynaform-field-button").attr('id').replace("btn_add_row_", "");
  subform_number = $(this).closest(".pmdynaform-field-grid").attr('id').replace(subformGrid_prefix, "");

  // ---------------

  grid_row_index.subform_number = null;

  old_subgrid_unique_id = {};
  for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
      // const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];
      old_subgrid_unique_id[key_subgrid] = []; // Is used to delete extra rows from hidden subgrid
    }
  }

  transfer_data_into_grid(grid_row_index.subform_number);
  createSubformModal(grid_row_index.subform_number);
  is_modal_created = true;

}

// >> F04 : Call a modal to edit grid row
function edit_row_modal (this_element) {

  subform_number = $(this_element).closest(".pmdynaform-field-grid").attr('id').replace(subformGrid_prefix, "");

  // ---------------

  // extract_row_values
  let grid_row = $(this_element).parent().parent();
  // grid_row.css({"font-weight": "bold", "background-color": "red"});

  grid_row_index.subform_number = +grid_row.index()+1;

  // ---------------------------

  // Set Subform Modal values to grid row values
  let related_grid_row_value = $("#"+subformGrid_prefix+ subform_number).getValue()[grid_row_index.subform_number - 1];
  subform_grid_object[subform_number].subform_grid_fields_id.forEach((element, index) => {
    $('#'+ subform_grid_object[subform_number].subform_id +' #'+ element +'_temp').setValue(related_grid_row_value[index]);
  });

  add_subgrid_main_to_subgrid(grid_row_index.subform_number);
  createSubformModal(grid_row_index.subform_number);
  is_modal_created = true;

  setMyInt();

}


// _____________________________ Subgrids <> Maingrids Functions _____________________________

function subgrid_handling_onConfirm (target_row) {

  var subform_unique_id = $("#"+subformGrid_prefix+ subform_number).getValue(target_row, +subform_grid_object[subform_number]['unique_id_col_number']);
  // The following will be decremented for each new row of subgrids
  var subgrid_unique_id = new Date().valueOf(); // Is the same as Date.now()

  for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
      const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];

      for (const key_pair in element_subgrid['link_upload_pair']) {
        if (Object.hasOwnProperty.call(element_subgrid['link_upload_pair'], key_pair)) {
          const element_pair = element_subgrid['link_upload_pair'][key_pair];
          updateDLinkPlace_inGrid(key_subgrid, element_pair[0], element_pair[1]);
        }
      }

      // Add subgrid rows to subgrid_main
      subgrid_array      = $("#"+key_subgrid).getValue();
      subgrid_main_array = $("#"+key_subgrid+"_main").getValue();
      var new_subgrid_unique_id = []; // Is used to delete extra rows from hidden subgrid
      subgrid_array.forEach((element_sub, index_sub) => {

        // Set value for unique id cell of row in array of values
        if (element_sub[+element_subgrid['unique_id_col_number']-1] == '') {
          element_sub[+element_subgrid['unique_id_col_number']-1] = subgrid_unique_id--;
        }

        new_subgrid_unique_id[index_sub] = element_sub[+element_subgrid['unique_id_col_number']-1];

        var equal_row_index = null;
        for (const index_main in subgrid_main_array) {
          if (Object.hasOwnProperty.call(subgrid_main_array, index_main)) {
            const element_main = subgrid_main_array[index_main];
            if (element_main[+element_subgrid['unique_id_col_number']-1] == element_sub[+element_subgrid['unique_id_col_number']-1]
                && element_main[(+element_subgrid['unique_id_col_number']-1)+1] == subform_unique_id) {
              equal_row_index = index_main;
              // Source: https://stackoverflow.com/questions/56832514/can-i-use-continue-and-break-in-javascript-for-in-and-for-of-loops
              break;
            }
          }
        }

        if (equal_row_index !== null) {

          // Source: https://stackoverflow.com/questions/8976627/how-to-add-two-strings-as-if-they-were-numbers >> used: unary plus
          element_subgrid['normal_col'].forEach((element_col_number, index_col_number) => {
            $("#"+key_subgrid+"_main").setValue(element_sub[+element_col_number-1], +equal_row_index+1, +element_col_number);
          });

        } else {

          var add_object = [];
          element_subgrid['normal_col'].forEach((element_col_number, index_col_number) => {
            add_object[+index_col_number] = {value: element_sub[+element_col_number-1]};
          });
          add_object[+element_subgrid['unique_id_col_number']-1]     = {value: element_sub[+element_subgrid['unique_id_col_number']-1]};
          add_object[(+element_subgrid['unique_id_col_number']-1)+1] = {value: subform_unique_id};

          $("#"+key_subgrid+"_main").addRow(add_object);

        }

      });

      // ---------------------------

      // Delete those rows from main subgrid where the unique_id is not in new_subgrid_unique_id array any more
      var to_delete_index_array = [];
      for (const key_old in old_subgrid_unique_id[key_subgrid]) {
        if (Object.hasOwnProperty.call(old_subgrid_unique_id[key_subgrid], key_old)) {
          const element_old = old_subgrid_unique_id[key_subgrid][key_old];
          if (new_subgrid_unique_id.indexOf(element_old) == -1) {
            to_delete_index_array[key_old] = key_old;
            // $("#"+key_subgrid+"_main").deleteRow(+key_old+1);
          }
        }
      }

      to_delete_index_array.reverse();
      to_delete_index_array.forEach(index_del => {
        $("#"+key_subgrid+"_main").deleteRow(+index_del+1);
      });

    }
  }

}

function add_subgrid_main_to_subgrid (target_row) {

  var subform_unique_id = $("#"+subformGrid_prefix+ subform_number).getValue(target_row, +subform_grid_object[subform_number]['unique_id_col_number']);

  old_subgrid_unique_id = {};
  for (const key_subgrid in subform_grid_object[subform_number]['subgrid']) {
    if (Object.hasOwnProperty.call(subform_grid_object[subform_number]['subgrid'], key_subgrid)) {
      const element_subgrid = subform_grid_object[subform_number]['subgrid'][key_subgrid];

      // Add subgrid_main rows to subgrid
      old_subgrid_unique_id[key_subgrid] = []; // Is used to delete extra rows from hidden subgrid
      subgrid_main_array = $("#"+key_subgrid+"_main").getValue();
      subgrid_main_array.forEach((element_main, index_main) => {
        if (element_main[(+element_subgrid['unique_id_col_number']-1)+1] == subform_unique_id) {

          var add_object = [];
          element_subgrid['normal_col'].forEach((element_col_number, index_col_number) => {
            add_object[+index_col_number] = {value: element_main[+element_col_number-1]};
          });
          add_object[+element_subgrid['unique_id_col_number']-1] = {value: element_main[+element_subgrid['unique_id_col_number']-1]};
          $("#"+key_subgrid).addRow(add_object);

          // ---------------------

          old_subgrid_unique_id[key_subgrid][index_main] = element_main[+element_subgrid['unique_id_col_number']-1];

        }
      });

    }
  }

}

// #########################################################################################
// #########################################################################################
