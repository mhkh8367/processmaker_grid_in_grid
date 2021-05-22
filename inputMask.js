
// Source: https://github.com/RobinHerbots/Inputmask
// Source: https://stephanwagner.me/jBox

// Required External Libraries (کتابخانه های خارجی لازم):

/*
/ext-lib/mask/jquery.inputmask.min.js,
/ext-lib/mask/inputMask.js,
/ext-lib/jBox.all.min.css,
/ext-lib/jBox.all.min.js,
*/

// ___________________________________________________________________

// Example:

/*

// ______________________ کنترل ماسک ها ______________________

var inputMaskTypes = {
  number: [ "txt_s5_testTimeMonth_temp", "txt_s5_testTimeMonth" ], // اعداد صحیح و اعشاری
  integer: [ ], // فقط اعداد صحییح
  float: [ ], // اعداد اعشاری با 2 رقم اعشار
  email: [ "txt_s3_email", "txt_s3_email_temp" ],
  // website: [ ],
  year: [ 'txt_s1_yearEstablished', 'txt_s2_yearEstablish', 'txt_s4_yearPurchased_temp', 'txt_s4_yearPurchased',
          'txt_s2_netStartYear', 'txt_s2_netEndYear' ],
  time: [ 'txt_s4_timeStart_temp', 'txt_s4_timeEnd_temp', 'txt_s4_timeStart', 'txt_s4_timeEnd' ],
  // second: [  ],
  minute: [ "txt_s5_testTimeMin_temp", "txt_s5_testTimeMin" ],
  hour: [ "txt_s5_testTimeHour_temp", "txt_s5_testTimeHour" ],
  day: [ "txt_s5_testTimeDay_temp","txt_s5_testTimeDay" ],
  month: [  ],
  money: [ "txt_s5_testingTariffs_temp", "txt_s5_testingTariffs" ],
  melliCode: [ "txt_s3_nationalCode_temp" ],
  // postalCode: [],
  tel: [ "txt_s2_techDirectorTel", "txt_s2_fax", "txt_s2_connectorTel", "txt_s1_fax" ],
  mobile: [ "txt_s2_connectorMob", "txt_s2_techDirectorMob" ],
  phone: [ "txt_s1_phone", "txt_s2_phone", "txt_s3_phone_temp" ],
  // eng: [],
  // pars: [],
};

// $(document).on("click", function () {
$('button.pmdynaform-grid-newitem').on("click", function () {
  setTimeout(function(){ createInputmask(inputMaskTypes); }, 500); 
});
createInputmask(inputMaskTypes);

*/

// ___________________________________________________________________

// تابع ایجاد ماسک
function createInputmask (inputMaskTypes) {

  for (const maskType in inputMaskTypes) {
    if (Object.hasOwnProperty.call(inputMaskTypes, maskType)) {
      const element = inputMaskTypes[maskType];

      var sample = '', direction = 'ltr';

      if (maskType == "number") {
        // Available Options: allowMinus = false, allowPlus = false, autoGroup = false, groupSeparator = ",", radixPoint = "." (radixPoint >> علامت اعشار)
        inputmaskObject = { alias: 'integer', radixPoint: ".", placeholder: "_", "removeMaskOnSubmit": true }; // regex: "[0-9]+"
        sample = '123456789';
      } else if (maskType == "integer") {
        // Available Options: allowMinus = false, allowPlus = false, autoGroup = false, groupSeparator = ",", radixPoint = "." (radixPoint >> علامت اعشار)
        inputmaskObject = { alias: 'integer', placeholder: "_" }; // regex: "[0-9]+"
        sample = '892374';
      } else if (maskType == "float") {
        // Available: 'alias': 'decimal', 'groupSeparator': ',', digits: 2, 'removeMaskOnSubmit': true, placeholder: "_"
        inputmaskObject = { 'alias': 'decimal', digits: 2, placeholder: "_" };
        sample = 'اعداد اعشاری با 2 رقم اعشار';
      } else if (maskType == "email") {
        inputmaskObject = { alias: 'email' };
        sample = 'my@gmail.com';
      } else if (maskType == "website") {
        inputmaskObject = { regex: "(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)", placeholder: "_" };
        sample = 'https://www.google.com';
      } else if (maskType == "year") {
        inputmaskObject = { regex: "[0-1][0-4][0-9][0-9]", placeholder: "_" }; // For Year Shamsi
        sample = 'تا سال 1499';
      } else if (maskType == "time") {
        inputmaskObject = { regex: "([0-1][0-9]|[2][0-3]):([0-5][0-9])", placeholder: "0" };
        sample = 'از 00:00 تا 23:59';
      } else if (maskType == "second" || maskType == "minute") {
        inputmaskObject = { regex: "[0-9]|[0-5][0-9]", placeholder: "0" };
        sample = 'از 0 تا 59';
      } else if (maskType == "hour") {
        inputmaskObject = { regex: "[0-9]|[0-1][0-9]|[2][0-3]", placeholder: "0" };
        sample = 'از 0 تا 23';
      } else if (maskType == "day") {
        inputmaskObject = { regex: "[0-9]|[0-2][0-9]|[3][0-1]", placeholder: "0" };
        sample = 'از 0 تا 31';
      } else if (maskType == "month") {
        inputmaskObject = { regex: "[0-9]|[1][0-1]", placeholder: "0" };
        sample = 'از 0 تا 11';
      } else if (maskType == "money") {
        inputmaskObject = { alias: 'integer', groupSeparator: ',', placeholder: "0", "removeMaskOnSubmit": true };
        sample = '438248245';
      } else if ((maskType == "melliCode") | (maskType == "postalCode")) {
        inputmaskObject = { regex: "[0-9]{10}", placeholder: "_" };
        sample = '4282783648';
      } else if (maskType == "mobile") {
        inputmaskObject = { regex: "09[0-9]{9}", placeholder: "_" };
        sample = 'یازده رقمی 09125376253';
      } else if (maskType == "phone" | maskType == "tel") {
        inputmaskObject = { regex: "0[0-9]{0,10}", placeholder: "_" }; // regex: "0[0-9]{8,10}"
        sample = '02188334627';
      } else if (maskType == "eng") {
        inputmaskObject = { regex: "[A-za-z0-9\-\s\n\r\t\?\"\:\}\{\|\+\_\)\(\*\&\^\%\!\~\`\=\'\,\.\-\[\]\/\.]+", placeholder: "_" };
        sample = 'متن دارای حروف انگلیسی';
      } else if (maskType == "pars") {
        inputmaskObject = { regex: "([ا-ی ء ئ]){2,255}", placeholder: "_" };
        sample = 'متن دارای حروف فارسی';
        direction = 'rtl';
      } else {
        return false;
      }

      // در هنگام ورود ناقص اطلاعات، اطلاعات پاک شود
      inputmaskObject["clearIncomplete"] = true;

      element.forEach((input_element) => {

        let targetInput = $('input[id*="[' + input_element + ']"]');
        targetInput.inputmask(inputmaskObject);

        // اعمال جهت ورودی در فیلد
        targetInput.attr({'dir':direction});

        // اعمال نمونه ورودی
        if (sample != "") {

          targetInput.jBox('Tooltip', {
            theme: 'TooltipDark',
            content: 'نمونه ورودی:<br>'+ sample,
            animation:{open: 'pulse', close: 'flip'},
          });

        }

      });
      
    }
  }

}
