#!/usr/bin/env osascript -l JavaScript

const chrome = Application('Google Chrome')

let tabIndex;
const windowIndex = chrome.windows().findIndex((window) => {
  tabIndex = window.tabs().findIndex((tab) => tab.title().includes('Meet - '));
  return tabIndex !== -1;
})

if (windowIndex === -1 && tabIndex === -1) {
  const newTab = chrome.Tab({ url: "https://meet.google.com" })
  chrome.windows()[0].tabs.push(newTab)
} else {
  chrome.windows[windowIndex].visible = true;
  chrome.windows[windowIndex].activeTabIndex = tabIndex + 1;
  chrome.windows[windowIndex].index = 1;
  chrome.activate();
}
