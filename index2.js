/* global $ */

var notes = [
  { id: 1, body: "This is a first test", timestamp: Date.now() - 300000000 },
  { id: 2, body: "This is a second test this is a very long note", timestamp: Date.now() + 200000000 },
  { id: 3, body: "", timestamp: Date.now() - 100000000 },
  { id: 4, body: "This is a fourth test", timestamp: Date.now() },
];

notes.forEach(function (note) {
  var $noteSelector = $(`
  <div class="note-selector">
    <p class="note-selector-title">${note.body}</p> 
    <p class="note-selector-timestamp">${note.timestamp}</p> 
  </div>
  `);
  $(".note-selectors").append($noteSelector);
});
