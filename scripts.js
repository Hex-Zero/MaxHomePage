var $statusComponent = $("#statusComponentTemplate").detach();

function createStatus(component, statusTitle, statusPercentage) {
  var $status = component.clone().attr("id", "");
  var _statusPercentage = statusPercentage > 100 ? 100 : statusPercentage;
  if (_statusPercentage >= 50) {
    $status
      .find(".max-status-outer-layer-3")
      .css(
        "background",
        `linear-gradient(${
          90 + (360 / 100) * (_statusPercentage - 50)
        }deg,rgba(7, 7, 7, 0) 0%,rgba(3, 3, 3, 0) 50%,rgba(2, 2, 2, 1) 51%,rgba(0, 0, 0, 1) 100%)`
      );
  } else {
    $status
      .find(".max-status-outer-layer-3")
      .css(
        "background",
        `linear-gradient(${
          90 + (360 / 100) * _statusPercentage
        }deg,rgba(7, 7, 7, 0) 0%,rgba(3, 3, 3, 0) 50%,#fff 51%,#fff 100%)`
      );
  }
  $status.find(".max-status-number").html(statusPercentage + "%");
  return $status;
}

for (i = 0; i < 7; i++) {
  $(".max-status-container").append(
    createStatus($statusComponent, "status " + i, 1 + i * 25)
  );
}
