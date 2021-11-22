const historyDataBase = document.querySelector("#history-data");

export const historyData = (data = null) => {
  let history = [];
  let historyElements = [];

  history = localStorage.getItem("history");

  if (history) {
    historyElements = JSON.parse(history);
    if (data) historyElements.push(data);
  } else {
    if (data) historyElements = [data];
  }

  localStorage.setItem("history", JSON.stringify(historyElements));

  let historyList = "";

  historyElements.forEach((historyElement) => {
    historyList += `<li>${historyElement}</li>`;
  });

  historyDataBase.innerHTML = `<ul>${historyList}</ul>`;
};
