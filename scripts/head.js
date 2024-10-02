// check désactivé car sinon la page attend d'être load pour faire cette partie de code
// et cela écrase les css uniques à chaques pages avec le common

//document.addEventListener("DOMContentLoaded", function () {
  let metaCharset = document.createElement("meta");
  metaCharset.setAttribute("charset", "UTF-8");
  document.head.appendChild(metaCharset);

  let metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1.0";
  document.head.appendChild(metaViewport);

  let commonStyles = document.createElement("link");
  commonStyles.rel = "stylesheet";
  commonStyles.href = "/styles/common.css";
  document.head.appendChild(commonStyles);

  let favicon = document.createElement("link");
  favicon.id = "test";
  favicon.rel = "icon";
  favicon.alt = "Logo du site: un parasol sur la plage";
  favicon.href = "/assets/locafy-logo.svg";
  document.head.appendChild(favicon);

  let fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
  document.head.appendChild(fontAwesome);
//});
