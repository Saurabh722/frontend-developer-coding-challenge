// Dependencies.

import messages from "./messages";
import rules from "./rules";

const emailField = document.querySelector("[data-js=email-field]");
const passwordField = document.querySelector("[data-js=password-field]");
const errorMessageView = document.querySelector("[data-js=error-messages]");


/**
 * return error-message if fields are not valid.
 * @param {String} value The value of input field.
 * @param {String} type The type of input-text field.
 * @returns {String} return error-message if invalid or false if valid.
 */
function inputHandler(value, type) {
    if (value === "") return `<li>${messages.error[type].empty}</li>`;
    if (!rules[type](value)) return `<li>${messages.error[type].validation}</li>`;

    return false;
}

/**
 * reset error messages.
 * @private
 */
function resetErrorView() {
    errorMessageView.innerHTML = "";
}

// Public.

/**
 * Validate login input fields and accordingly update error-messages.
 * @public
 * @returns {Boolean} Whether input fields are valid.
 */
function isInputsAreValid() {
    const emailValue = emailField ? emailField.value.trim() : "";
    const passwordValue = passwordField ? passwordField.value.trim() : "";
    const emailMessage = inputHandler(emailValue, "email");
    const passwordMessage = inputHandler(passwordValue, "password");
    let errorMessage = "";

    resetErrorView();

    if (emailMessage) {
        errorMessage = `${emailMessage}`;
        emailField.classList.add("input-error");
    }

    if (passwordMessage) {
        errorMessage += `${passwordMessage}`;
        passwordField.classList.add("input-error");
    }

    if (errorMessage) {
        errorMessageView.innerHTML = `<ul>${errorMessage}</ul>`;
        errorMessageView.classList.add("mcafee__login-validation-message--show");
        return false;
    }

    errorMessageView.classList.remove("mcafee__login-validation-message--show");
    return true;
}

/*
* on-click reset input field by removing input-error style-class.
*/

emailField && emailField.addEventListener("click", () => emailField.classList.remove("input-error"));
passwordField && passwordField.addEventListener("click", () => passwordField.classList.remove("input-error"));

/*
* Make debugging easier, clearly communicate what is missing.
*/
if (!emailField) throw new Error("Could not find [data-js=email-field]");
if (!passwordField) throw new Error("Could not find [data-js=password-field]");
if (!errorMessageView) throw new Error("Could not find [data-js=error-messages]");

export default isInputsAreValid;