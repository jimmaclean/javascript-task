# Coding task

Implement the following in JavaScript. You may ONLY use vanilla JavaScript. No 3rd-party or external libraries may be used.

From the JSON file `src/data/journeys.json`

- Load and parse the data
- Use this data to display a list of the train journeys
- By clicking on each train journey, more detailed information is displayed

The list of train journeys should display:
- Origin station
- Destination station
- Journey start and end time

The detail view for each train journey should display:
- Origin station
- Destination station
- Train operating company
- Journey duration
- Journey start and arrival time

Use some basic CSS to:
- Visually separate the journeys in the journey list.
- Emphasize the origin and destination information for a journey.

The resulting code is expected to demonstrate good code structure (e.g separation of concerns, composition, decoupling etc.).

The code should run on the latest modern browsers (don't worry about legacy browsers).


# Usage

After installing dependencies, to launch a local webserver run the start task:

```
$ npm start
```

If you wish to load files using XHR or `fetch`, then the path is relative to this project's root directory, _not_ relative to the file in which you're using XHR or `fetch`.

E.g. Using XHR or `fetch` in `src/index.js` would require you to use  `./src/data/...` rather than `./data/...`.
