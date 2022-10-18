chrome.action.onClicked.addListener(async (tab) => {
  startSession(tab) 
})


chrome.contextMenus.create({
  id: "githubsurflyid",
  title: 'Github+Surfly',
})

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  startSession(tab)
})


function startSession(tab) {
  let url = tab.url;
  if (url.startsWith("https://github.com") || url.startsWith("https://gist.github.com")) {
    url = url.replace(/github\.com\//i, "github.dev/")
  }

  chrome.tabs.create({
    url: `https://surfly.online/?url=${url}`
  });
}