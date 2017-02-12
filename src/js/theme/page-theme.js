var $ = require("../jquery-3.1.1.js");

var themes = [
  '默认样式-适合代码',
  '字号偏大-间距偏大-适合短文'
];
var currentTheme = 'tomorrow-night';

let PageTheme = function () {
  this.init();
};

PageTheme.prototype.init = function() {
  this.bindEvt();
};

PageTheme.prototype.bindEvt = function() {
  var $options = $.map(themes, function(item) {
    var selected = currentTheme === item ? ' selected' : '';
    return '<option value="' + item + '"' + selected + '>' + item +'</option>';
  });
  $('.page-theme').html($options);
  $('.page-theme').on('change', function() {
    var val = $(this).val();
    $("#pageThemeId").attr('href', './pageThemes/' + val + '.css');
  }).trigger('change');
};


module.exports = PageTheme;
