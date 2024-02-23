$(function() {
  // Populating sidebar-list with document IDs
  $.ajax({
    url: "data",
    success: function(files) {
      files.forEach(function(file) {
        $("#document-ids").append("<li class='ui-widget-content'>" + file + "</li>");
      });
      $("#document-ids").sortable();
      $("#document-ids").selectable();
    }
  });
});
