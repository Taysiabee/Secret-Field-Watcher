"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecretFieldWatcher = // setup a class variable to hold all of our configured parameters
// parameters will be an object literal {} containing the key-value pairs we need
// known parameters: name, value, backgroundColor, errorMessage
// parameters = {name: 'some name', value = 'some value' backgroundColor: 'some color', errorMessage: 'uh oh'}
function SecretFieldWatcher(parameters) {
  var _this = this;

  _classCallCheck(this, SecretFieldWatcher);

  _defineProperty(this, "options", {});

  _defineProperty(this, "errorMessageSpan", null);

  _defineProperty(this, "lookForFieldValue", function (evt) {
    console.log("looking!", _this.options.name, _this.options.value);
    var currentValue = evt.target.value;
    var background = document.querySelector(".background");

    if (currentValue === _this.options.value) {
      console.log("matched!");
      background.style.backgroundColor = _this.options.backgroundColor;

      if (_this.options.errorMessage) {
        _this.options.errorMessageSpan.innerHTML = _this.options.errorMessage;
      } // 1. set the background color of the form area (white part) to the selected bg color
      // 2. if there's an errorMessage show that in the span.error-message for this field
      // 3. on the next change of the field, reset the background color and empty the error field

    } else {
      console.log("did not match", currentValue);
      background.style.backgroundColor = "";
      _this.options.errorMessageSpan.innerHTML = "";
    }
  });

  var parametersWithDefaults = Object.assign({}, {
    name: " ",
    value: " ",
    backgroundColor: "blue",
    foregroundColor: "white",
    errorMessage: " "
  }, parameters);
  var name = parametersWithDefaults.name; // if (parametersWithDefaults.errorMessage) {
  //   parametersWithDefaults.backgroundColor = "red";
  // }

  this.options = parametersWithDefaults;
  console.log("SecretFieldWatcher ready!", parametersWithDefaults, name);

  if (name) {
    // the old way
    // const field = document.querySelector('input[type='' + name + ']')
    // the cool ES6 way:
    var field = document.querySelector("input[name=\"".concat(name, "\"]"));

    if (field) {
      field.addEventListener("keyup", this.lookForFieldValue);
      this.options.errorMessageSpan = field.parentElement.querySelector(".error-message");
    } else {
      console.warn("you fucked up.. we couldn't find the field named ", name);
    }
  }
};
//# sourceMappingURL=secret-field-watcher.js.map
