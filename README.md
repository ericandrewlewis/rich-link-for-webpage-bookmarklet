# Rich Link for Webpage Bookmarklet

This bookmarklet copies a link to the current webpage you're on for pasting into a document.

## Preview

![ezgif com-gif-maker](https://user-images.githubusercontent.com/1087646/191337703-46b78d8b-1183-4527-908d-43800f1d601c.gif)

## Installation

Create a bookmark in your browser.

Copy and paste the following into the bookmark's "URL" field:

```
javascript:(function () {  let pageTitle = document.title;  pageTitle = pageTitle.replace(' - Google Docs', '');  const url = window.location.href;  const clipboardContentHtml = `<a href="${url}">${pageTitle}</a>`;  function listener(e) {;    e.clipboardData.setData("text/html", clipboardContentHtml);    e.clipboardData.setData("text/plain", url);    e.preventDefault();  } document.addEventListener("copy", listener);  document.execCommand("copy");  document.removeEventListener("copy", listener);})();
```
