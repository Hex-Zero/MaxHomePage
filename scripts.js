var $statusComponent = $("#statusComponentTemplate").detach();

function createStatus(component, text) {
  var $status = component.clone().attr("id", "");
  return $status;
}

for (i = 0; i < 4; i++) {
  $(".max-status-container").append(
    createStatus($statusComponent, "status " + i)
  );
}
