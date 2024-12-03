#!/usr/bin/env osascript -l JavaScript

/**
 * Button options
 * 1. 0
 * 2. 1
 * 3. 2
 * 4. 3
 * 5. 5
 * 6. 8
 * 7. 
 */
const point = '0';

const chrome = Application('Google Chrome')

chrome.windows().forEach((window, winIdx) => {
  window.tabs().forEach((tab, tabIdx) => {
    if (tab.title().includes('Pointing Session ')) {
      tab.execute({
        javascript: `document.querySelector('input[type="button"][value^="${point}"]').click()`
      })
    }
  })
})
