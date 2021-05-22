
// Change the form style (subheadings, labels, ...)
function changeFormStyle () {

  // To create multiline label
  $('div[id^="lab_"] > span > p > span').each(function(){
    $(this).html($(this).html().replaceAll("|", "<br>"));
  });

  // ---------------------------

  // To style headings
  $('.pmdynaform-field-title h4').addClass("alert alert-info text-center");
  $('.pmdynaform-field-title h4').css({"font-weight": "bold", "color": "black", "background": "unset", "width": "100%"});

  // ---------------------------

  // To style subheadings
  // Source: https://www.w3schools.com/bootstrap/bootstrap_alerts.asp >> alert: success, info, warning, danger
  $('h5[id*="sub"]').addClass("alert alert-info text-center");
  var subheadings_width = ['100', '80', '60', '40'];
  subheadings_width.forEach((element, index) => {
    $('h5[id*="sub'+(+index+1)+'_"]').css({"font-weight": "bold", "color": "black", "padding": "5px", "margin": "auto", "width": element+"%"});
  });

  // ---------------------------

  // Displaying_options_in_a_horizontal_list
  // Source: https://wiki.processmaker.com/3.1/Checkbox_and_Checkbox_Group#Displaying_options_in_a_horizontal_list

  // $(".pmdynaform-radio-items").find("div.radio").addClass("radio-inline");
  // $(".pmdynaform-checkbox-items").find("div.checkbox").addClass("radio-inline");
  $(".pmdynaform-radio-items div.radio").addClass("radio-inline");
  $(".pmdynaform-checkbox-items div.checkbox").addClass("radio-inline");

  // Change the style of jbox tooltip
  $('html > head').append($('<style> .jBox-content { text-align: right; font-family: "IRANSans", Arial, Tahoma, Verdana;} </style>'));
  
  // ---------------------------

  $('html > head').append($( 
    '<style>'+
      '.sarbarg {'+
        'width: 100%;'+
        'height: 32px;'+
        'border-bottom: 2px solid #b8d2ff;'+
      '}'+
      '.sarbarg_title {'+
        'font-size: 14px;'+
        'color: #002057;'+
        'background: #b8d2ff;'+
        'padding: 4px 10px;'+
        'text-indent: 10px;'+
        'display: inline-block;'+
        'line-height: 1.7;'+
        'position: relative;'+
      '}'+
      '.sarbarg_title::after {'+
        'width: 0;'+
        'height: 0;'+
        'content: "";'+
        'position: absolute;'+
        'top: 0;'+
        'right: 100%;'+
        'border-bottom: 32px solid #b8d2ff;'+
        'border-left: 32px solid transparent;'+
      '}'+
      '.pmdynaform-form {'+
        'font-family: "IRANSans", Arial, Tahoma, Verdana !important;'+
      '}'+
    '</style>'
  ));

  let icon_class = ["fa fa-pencil", ];
  icon_class.forEach((icon_element, index) => {
    let dom_obj = $('h5[id*="sb' + (index + 1) + '_"]');
    for (const key in dom_obj) {
      if (Object.hasOwnProperty.call(dom_obj, key)) {
        const element = dom_obj.eq(key); // dom_obj[key];
        element.html(
          '<div class="sarbarg"><p class="sarbarg_title"><i class="' + icon_class + '"></i> ' + element.find("p span").html() + "</p></div>"
        );
      }
    }
  });

}
