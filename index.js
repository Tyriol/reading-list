let myReads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myReads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myReads", JSON.stringify(myReads));
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myReads[i]}'>
                    ${myReads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
