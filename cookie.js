// DOM element
const buttonAcceptCookie = document.querySelector("#buttonAcceptCookie");
const sectionCookie = document.querySelector("#cookie");

// event lsiteners
buttonAcceptCookie.addEventListener ("click", () => {
    // console.log("hepp");

    sectionCookie.classList.add("hidden");

    // a cookie with a given name: "..."
    setCookie("cookieConfirmation", "true", 180);

});

// check if cookie "cookieConfirmation" exists 
if (getCookie("cookieConfirmation")) {
    console.log("cookie finns...");

    sectionCookie.classList =  "hidden";
}





// functions

/**
 *
 *
 * @param {string} cname
 * @param {string} cvalue
 * @param {number} days
 */
function setCookie(cname, cvalue, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}