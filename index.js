let myReads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const readsFromLocalStorage = JSON.parse(localStorage.getItem("myReads"));

if (readsFromLocalStorage) {
  console.log(readsFromLocalStorage);
  myReads = readsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  console.log("clicked");
  myReads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myReads", JSON.stringify(myReads));
  renderLeads();
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myReads.push({ title: tabs[0].title, url: tabs[0].url });
    localStorage.setItem("myReads", JSON.stringify(myReads));
    renderLeads();
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myReads = [];
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myReads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myReads[i].url}'>
                    ${myReads[i].title}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
