import axios from "axios";

const button = document.getElementById("summarizeBtn");
const contentArea = document.getElementById("summarizedContent")

async function getCurrentTabUrl() {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  return tabs[0]?.url;
}

async function summarize() {
  const url = await getCurrentTabUrl();
  const response = await axios.post("http://localhost:3000/summarize", {
    url: url
  })
  console.log(response.data);
  contentArea.innerText = response.data.content;
}

button.addEventListener("click", summarize)



