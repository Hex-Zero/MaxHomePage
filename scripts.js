var $statusComponent = $("#statusComponentTemplate").detach();

function createStatus(component, text) {
  var $status = component.clone();
  return $status.html(text);
}

for (i = 0; i < 4; i++) {
  $(".max-stats-section").append(createStatus($statusComponent, "status " + i));
}
