#!/usr/bin/env osascript -l JavaScript

/**
 * Button options
 * 1. camera
 * 2. hand
 * 3. Leave
 * 4. 👍
 * 5. 👎
 * 6. 👏
 * 7. 🎉
 */
const command = 'hand';

const chrome = Application('Google Chrome')

chrome.windows().forEach((window, winIdx) => {
  window.tabs().forEach((tab, tabIdx) => {
    if (tab.title().includes('Meet - ')) {
      tab.execute({
        javascript: `document.querySelector('button[aria-label*="${command}"]').click()`
      })
    }
  })
})
