(function () {
  let pageTitle = document.title;
  pageTitle = pageTitle.replace(' - Google Docs', '');
  const url = window.location.href;
  const clipboardContentHtml = `<a href="${url}">${pageTitle}</a>`;
  function listener(e) {;
    e.clipboardData.setData("text/html", clipboardContentHtml);
    e.clipboardData.setData("text/plain", url);
    e.preventDefault();
  } document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
})();
