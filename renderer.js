"use strict";
const { shell, fs } = require("electron");

var imglinks = document.querySelectorAll(".links>a");

Array.from(imglinks).forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openWithPhotoshop(link.href);
  });
});

let openWithPhotoshop = function(link) {
  if (link.startsWith("file://")) {
    link = link.substring(7);
  }
  shell.openItem(link);
};

/**
 let cmd = `open -b "com.adobe.Photoshop" ${link}`;
  console.log(cmd);
  exec(cmd, error => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
 */
