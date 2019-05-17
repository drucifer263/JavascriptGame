// Professor 	Christopher M. Pascuccci cookie library from example http://cis-iis2.temple.edu/users/pascucci/cis3344/JavaScript/Cookie_Example2.html

// Cookies Namespace
function Cookies() {
    var _cookieObject = null;


    function writeCookie(key, value, days) {
        var cookieData;
        var date = new Date();
        var expires;

        if (days == undefined)
            days = 30;

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = date.toUTCString();
        cookieData = key + "=" + value + "; " +
                     "expires=" + expires + "; " +
                     "path=/";

        document.cookie = cookieData;
    }

    function writeCookieWithValues(cookieName, values, days) {
        const KEY_INDEX = 0;
        const VALUE_INDEX = 1;

        var cookieData, cookieObject, valueString;
        var date = new Date();
        var expires;

        if (days == undefined)
            days = 30;

        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = date.toUTCString();

        // Create an empty object used to store the key-value pairs
        cookieObject = {};
        _cookieObject = cookieObject;

        // Dynamically add properties with the name of the key and the value as its value
        for (var i = 0; i < values.length; i++) {
            var keyValuePair = values[i].split("=");
            cookieObject[keyValuePair[KEY_INDEX]] = keyValuePair[VALUE_INDEX];
        }

        // Use the JSON serializer to serialize an object into a string
        valueString = JSON.stringify(cookieObject);

        // Store the entire object's serialized string as the only value of this cookie
        cookieData = cookieName + "=" + valueString + "; " +
                     "expires=" + expires + "; " +
                     "path=/";

        document.cookie = cookieData;
    }

    function readCookie(key) {
        const KEY_INDEX = 0;
        const VALUE_INDEX = 1;

        var cookie = document.cookie;
        var cookieList = cookie.split(";");
        var keyValuePair;

        // Search each cookie for the specific key
        for (var i = 0; i < cookieList.length; i++) {

            keyValuePair = cookieList[i].split("=");
            if (keyValuePair[KEY_INDEX].trim() == key)
                return keyValuePair[VALUE_INDEX];
        }

        return null;
    }

    function readValueFromCookie(cookieName, key) {

        var cookie = readCookie(cookieName);
        if (cookie == null || cookie == undefined)
            return null;

        _cookieObject = JSON.parse(cookie);
        return _cookieObject[key];
    }

    var namespace = {};
    namespace.writeCookie = writeCookie;
    namespace.readCookie = readCookie;

    namespace.writeCookieWithValues = writeCookieWithValues;
    namespace.readValueFromCookie = readValueFromCookie;
    return namespace;
}