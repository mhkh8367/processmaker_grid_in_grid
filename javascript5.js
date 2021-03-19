function changeFormStyle () {


  // _______________________________________________________________

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

  // ---------------------------
  
}
