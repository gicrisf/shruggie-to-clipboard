document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("shruggieinput").select();

  var text;
  var success = document.execCommand("Copy");
  if (success) {
    browser.browserAction.setBadgeBackgroundColor({ color: '#FFF' });
    browser.browserAction.setBadgeText({ text: "✔️️" });
    document.getElementById("status").innerHTML = "¯\\_(ツ)_/¯<br>Copied!";
    setTimeout(function () {
      browser.browserAction.setBadgeText({ text: '' });
      window.close();
    }, 1000);
  }
  else {
    browser.browserAction.setBadgeBackgroundColor({ color: "#d9534f" });
    browser.browserAction.setBadgeText("Fail");
    document.getElementById("status").innerText = "Copy Failed";
    setTimeout(function () {
      browser.browserAction.setBadgeText({ text: '' });
      window.close();
    }, 1000);

  }

});
