// Dependencies.

import isInputsAreValid from "./utils/inputs-are-valid";
import { login } from "./services/services";

const form = document.querySelector("[data-js=login-form]");
const submitBtn = document.querySelector("[data-js=submit-btn]");

const loginHandler = {
  success: (data) => {
    console.log(data);
    submitBtn.classList.remove("mcafee__disabled");
    // TODO: show error view.
  },
  error: (error) => {
    console.log(error);
    submitBtn.classList.remove("mcafee__disabled");
    // TODO: show error view.
  }
}

// Public.

/**
 * Initialize and bind form submit event on the login page.
 */
function init() {
  form &&
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (isInputsAreValid()) {
        submitBtn.classList.add("mcafee__disabled");

        login(loginHandler);
      }
    });
}


/*
* Make debugging easier, clearly communicate what is missing.
* Added at the end because at the top event listener will not be attached
* since thowing error will stop execution of script.
*/
if (!form) throw new Error("Could not find [data-js=login-form]");
if (!submitBtn) throw new Error("Could not find [data-js=submit-btn]");

export {
  init
};