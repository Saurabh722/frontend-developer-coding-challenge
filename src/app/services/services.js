// Only to support IE11 promise-polyfill and whatwg-fetch are imported.
import 'promise-polyfill/src/polyfill';
import "whatwg-fetch";

const URL = "https://reqres.in/api/login";

/**
 * Hardcode data for successful login just for demo perpose.
 */
const successData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}

/**
 * return random boolean login just for demo perpose to switch successful/unsuccessful login results.
 * @returns {Boolean} return random boolean true/false.
 */
function switchRandomData() {
    return Math.random() < 0.5;
}

/**
 * generate login-post-options.
 * @param {Object} data Object contains email and password.
 * @returns {Object} return object for login-post-options.
 */
function getLoginPostOption(data) {
    const randomData = switchRandomData() ? data : successData;

    return {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(randomData)
    };
}

/**
 * Initialize login post request.
 * @param {Object} callback Object contains success and error callback functions.
 */
function login(callback) {
    const response = fetch(URL, getLoginPostOption())
        .then(response => response.json())
        .then(data => callback.success(data))
        .catch((error) => callback.error(error));
}

export {
    login
}