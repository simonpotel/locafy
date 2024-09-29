function loadHeader() {
  const headerContainer = document.querySelector("header");
  const headerRequest = new XMLHttpRequest();

  headerRequest.open("GET", "/components/header.html");
  headerRequest.onload = function () {
    if (headerRequest.status === 200) {
      headerContainer.innerHTML = headerRequest.responseText;
    }
  };
  headerRequest.send();
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

window.addEventListener("DOMContentLoaded", function () {
  if (!inIframe()) {
    loadHeader();
    document.body.classList.add("navbar-body-manager");
  }
});
