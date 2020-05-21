class SecretFieldWatcher {
  // setup a class variable to hold all of our configured parameters
  options = {};
  errorMessageSpan = null;

  // parameters will be an object literal {} containing the key-value pairs we need
  // known parameters: name, value, backgroundColor, errorMessage
  // parameters = {name: 'some name', value = 'some value' backgroundColor: 'some color', errorMessage: 'uh oh'}
  constructor(parameters) {
    const parametersWithDefaults = Object.assign(
      {},
      {
        name: " ",
        value: " ",
        backgroundColor: "blue",
        foregroundColor: "white",
        errorMessage: " ",
      },
      parameters
    );

    const name = parametersWithDefaults.name;
    // if (parametersWithDefaults.errorMessage) {
    //   parametersWithDefaults.backgroundColor = "red";
    // }
    this.options = parametersWithDefaults;

    console.log("SecretFieldWatcher ready!", parametersWithDefaults, name);

    if (name) {
      // the old way
      // const field = document.querySelector('input[type='' + name + ']')
      // the cool ES6 way:
      const field = document.querySelector(`input[name="${name}"]`);
      if (field) {
        field.addEventListener("keyup", this.lookForFieldValue);
        this.options.errorMessageSpan = field.parentElement.querySelector(
          ".error-message"
        );
      } else {
        console.warn("you fucked up.. we couldn't find the field named ", name);
      }
    }
  }

  lookForFieldValue = (evt) => {
    console.log("looking!", this.options.name, this.options.value);
    const currentValue = evt.target.value;
    let background = document.querySelector(".background");
    if (currentValue === this.options.value) {
      console.log("matched!");

      background.style.backgroundColor = this.options.backgroundColor;

      if (this.options.errorMessage) {
        this.options.errorMessageSpan.innerHTML = this.options.errorMessage;
      }

      // 1. set the background color of the form area (white part) to the selected bg color
      // 2. if there's an errorMessage show that in the span.error-message for this field
      // 3. on the next change of the field, reset the background color and empty the error field
    } else {
      console.log("did not match", currentValue);
      background.style.backgroundColor = "";
      this.options.errorMessageSpan.innerHTML = "";
      
    }
  };
}
