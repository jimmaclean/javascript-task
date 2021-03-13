import { durationFromStrings } from "./util/dates";
import { appendArrayOfNodesTo } from "./util/dom";

function createJourneyDataPoint(key, value) {
  const span = document.createElement("span");
  span.classList.add("block", "m-b-tiny", "md--m-b-1");
  span.innerText = `${key}: ${value}`;
  return span;
}

function createHiddenPanel() {
  const element = document.createElement("div");
  element.classList.add("show-more-target");
  element.setAttribute("aria-hidden", "true");
  return element;
}

function createShowMoreButton() {
  const button = document.createElement("button");
  button.classList.add("block", "m-b-tiny", "md--m-b-1", "show-more-button");
  button.setAttribute("type", "button");
  button.innerText = "show more";
  button.addEventListener("click", function (event) {
    button.setAttribute("aria-hidden", "true");
    button.nextSibling.setAttribute("aria-hidden", "false");
  });
  return button;
}

export default function renderList(listOfJourneys, element) {
  var container = document.createElement("ol");

  for (const journey in listOfJourneys) {
    const j = listOfJourneys[journey];
    const listItem = document.createElement("li");
    listItem.classList.add("m-b-4", "md--m-b-6");

    const hiddenPanel = createHiddenPanel();
    appendArrayOfNodesTo(
      [
        createJourneyDataPoint("Operator", j.operator),
        createJourneyDataPoint(
          "Duration",
          durationFromStrings(j.startTime, j.arrivalTime)
        ),
      ],
      hiddenPanel
    );

    appendArrayOfNodesTo(
      [
        createJourneyDataPoint("Origin", j.originStation),
        createJourneyDataPoint("Destination", j.destinationStation),
        createJourneyDataPoint("Start time", j.startTime),
        createJourneyDataPoint("Arrival time", j.arrivalTime),
        createShowMoreButton(),
        hiddenPanel,
      ],
      listItem
    );
    container.appendChild(listItem);
  }

  element.appendChild(container);
}
