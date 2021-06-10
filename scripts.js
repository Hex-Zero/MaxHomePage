var $statusComponent = $("#statusComponentTemplate").detach();

var statusArray = [
  {
    statusTitle: "Css / js",
    statusPercentage: 70,
  },
  {
    statusTitle: "C#",
    statusPercentage: 60,
  },
  {
    statusTitle: "JavaScrip",
    statusPercentage: 90,
  },
  {
    statusTitle: "Reack",
    statusPercentage: 80,
  },
];

function createStatus(statusTitle, statusPercentage) {
  var $status = $statusComponent.clone().attr("id", "");
  var _statusPercentage = statusPercentage > 100 ? 100 : statusPercentage;
  if (_statusPercentage >= 50) {
    $status
      .find(".max-status-outer-layer-3")
      .css(
        "background",
        `linear-gradient(${
          90 + (360 / 100) * (_statusPercentage - 50)
        }deg,rgba(7, 7, 7, 0) 0%,rgba(3, 3, 3, 0) 48%,rebeccapurple 49%,rebeccapurple 100%)`
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
  $status.find(".max-status-title").html(statusTitle);
  $(".max-status-container").append($status);
}

statusArray.forEach((e) => {
  createStatus(e.statusTitle, e.statusPercentage);
});
