#!/usr/bin/env osascript -l JavaScript

const brave = Application('Brave')

let tabIndex;
const windowIndex = brave.windows().findIndex((window) => {
  tabIndex = window.tabs().findIndex((tab) => tab.title().includes('Meet - '));
  return tabIndex !== -1;
})

if (windowIndex === -1 && tabIndex === -1) {
  const newTab = brave.Tab({ url: "https://meet.google.com" })
  brave.windows()[0].tabs.push(newTab)
} else {
  brave.windows[windowIndex].visible = true;
  brave.windows[windowIndex].activeTabIndex = tabIndex + 1;
  brave.windows[windowIndex].index = 1;
  brave.activate();
}
