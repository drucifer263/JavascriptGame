// For guessing game

 
window.onload = function () {

    hideGuess();
    hideWager();
    hideAge();

    var celebrities = [30];
    var randomCeleb = [11];
    //var used = [30];
    var num;
    var playerScore = 0;
    var highScore = 0;
    var wager = 0;
    var birthday;
    var playerClock;
    var totalTime = 0;
    var round = 0;
    var index;
   
    function selectRandomNum() {
        var randomNum = Math.floor(Math.random() * 30);
        return randomNum;
    };

    function checkCelebNum() {
        used[round] = selectRandomNum();
        for (var i = 1; i < 11; i++) {
            if (used[round] == used[i]) {
                used[round] = Math.floor(Math.random() * 30);
            }

            else
                return used[round];
        }
    };

    //function selectRandomNum() {
    //    var randomNum = Math.floor(Math.random() * 30);
    //    used[randomNum] = -1;
    //        return randomNum;
    //    };

    //function uniqueNum(num) {
    //    var tempNum;

    //    if (used[num] == -1) {
    //        tempNum = Math.floor(Math.random() * 30);
    //        used[tempNum] = 0;
    //        return tempNum;
    //    }

    //};

    
    //for (var i = 0; i < 10; i++) {

    //    num = selectRandomNum();
    //var index = uniqueNum(num);
    //    randomCeleb[i] = index;
    //}

    //for (var i = 0; i < 11; i++) {
    //    var index = checkCelebNum();
    //    randomCeleb[i] = index;
    //}
   
    //console.log(randomCeleb);

    //Starts the game event handler
    var btnStart_Click = function () {
        index = randomUniqueNum();
        console.log(document.cookie);
        checkCookie();
        highScore = getCookie("HighScore");
        console.log(highScore);
        setScore();
        console.log(highScore);
        round += 1;
        setImage();
        playerClock = setInterval(countTimer, 1000);
        hideStart();
        unhideGuess();
        setRound();
        

    }

    function setRound()
    {
        document.getElementById("roundDisplay").innerHTML ="Round: " +round;
    }

    function setScore()
        {
        document.getElementById("scoreDisplay").innerHTML = "Player Score: "+playerScore+ " |  High Score: "+highScore;
    }

    
    /* Sets, gets and checks cookie that is in DOM, Nick Tran showed me how to do this*/
    function createCookie(highScore) {
        var cookieName = "HighScore";
        var daysToExpire = 25;
        var cDate = new Date();
        cDate.setTime(cDate.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        var expires = "expires=" + cDate.toUTCString();        var cookieData = cookieName + "=" + highScore + ";" + expires + ";path=/";        document.cookie = cookieData;
    };

    function getCookie(nameOfCookie) {
        var name = nameOfCookie + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookie = decodedCookie.split(';');
        for (var i = 0; i < cookie.length; i++) {
            var c = cookie[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    
    function checkCookie() {
        var bestscore = getCookie("HighScore");
        if (bestscore =="")
        {
            bestscore = 0;
            createCookie(bestscore);
        }
        
    }    /**/        //Timer function    function countTimer() {
        totalTime++;
        var hour = Math.floor(totalTime / 3600);
        var minute = Math.floor((totalTime - hour * 3600) / 60);
        var seconds = totalTime - (hour * 3600 + minute * 60);

        document.getElementById("timerDisplay").innerHTML = "Clock: " + minute + ":" + seconds;
    };
    //function SelectRandom() {
    //    var used = [10];
    //    var tempNum;
        
    //    for (var i = 0; i < 10; i++)
    //    {
    //        var randomNum = Math.floor(Math.random() * 30);
    //        used[i] = randomNum;
            
    //        if(tempNum ==  randomNum)
    //        {
    //            used[i] = Math.floor(Math.random() * 30);
    //            tempNum = used[i];
    //        }

    //        tempNum = randomNum;
    //    }    //    console.log(randomNum);
    //    return randomNum;
    //};



    
    //Celeb construtor
    function createCeleb(name, birthDate, image) {
        this.name = name;
        this.birthDate = birthDate;
        this.image = image;
    };
    
    //Celeb objs
    celebrities[0]= new createCeleb("Carl Sagan", "11/09/1934", "images/celebrities/Carl_Sagan.JPG");
    celebrities[1] = new createCeleb("Daft Punk", "01/01/1993", "images/celebrities/daftpunk.jpg");
    celebrities[2] = new createCeleb("Grace Hopper", "12/09/1906", "images/celebrities/Grace Hopper.jpg");
    celebrities[3] = new createCeleb("Justice", "01/01/2003", "images/celebrities/Justice.jpg");
    celebrities[4] = new createCeleb("Kanye West", "06/08/1977", "images/celebrities/Kanye West.jpg");
    celebrities[5] = new createCeleb("Neil deGrasse Tyson", "10/05/1958", "images/celebrities/NeilTyson.jpg");
    celebrities[6] = new createCeleb("Kat Dennings", "06/13/1986", "images/celebrities/KatDennings.jpg");
    celebrities[7] = new createCeleb("Johnny Depp", "06/09/1963", "images/celebrities/Johnny Depp.jpg");
    celebrities[8] = new createCeleb("Arnold Schwarzenegger", "07/30/1947", "images/celebrities/Arnold Schwarzenegger.jpg");
    celebrities[9] = new createCeleb("Emma Watson", "04/15/1990", "images/celebrities/Emma Watson.jpg");
    celebrities[10] = new createCeleb("Daniel Radcliffe", "07/23/1989", "images/celebrities/Daniel Radcliffe.jpg");
    celebrities[11] = new createCeleb("Leonardo DiCaprio", "11/11/1974", "images/celebrities/Leonardo DiCaprio.jpg");
    celebrities[12] = new createCeleb("Tom Cruise", "07/03/1962", "images/celebrities/Tom Cruise.jpg");
    celebrities[13] = new createCeleb("Charles Chaplin", "04/25/1889", "images/celebrities/Charles Chaplin.jpg");
    celebrities[14] = new createCeleb("Morgan Freeman", "06/01/1937", "images/celebrities/Morgan Freeman.jpg");
    celebrities[15] = new createCeleb("Tom Hanks", "07/09/1956", "images/celebrities/Tom Hanks.jpg");
    celebrities[16] = new createCeleb("Hugh Jackman", "10/12/1968", "images/celebrities/Hugh Jackman.jpg");
    celebrities[17] = new createCeleb("Will Smith", "09/25/1968", "images/celebrities/Will Smith.jpg");
    celebrities[18] = new createCeleb("Kamal Haasan", "11/07/1954", "images/celebrities/Kamal Haasan.jpg");
    celebrities[19] = new createCeleb("Rowan Atkinson", "01/06/1955", "images/celebrities/Rowan Atkinson.jpg");
    celebrities[20] = new createCeleb("Rajinikanth", "12/12/1950", "images/celebrities/Rajinikanth.jpg");
    celebrities[21] = new createCeleb("Aamir Khan", "03/14/1965", "images/celebrities/Aamir Khan.jpg");
    celebrities[22] = new createCeleb("Amitabh Bachchan", "10/11/1942", "images/celebrities/Amitabh Bachchan.jpg");
    celebrities[23] = new createCeleb("James Cameron", "08/16/1954", "images/celebrities/James Cameron.jpg");
    celebrities[24] = new createCeleb("Bill Murray", "09/21/1950", "images/celebrities/Bill Murray.jpg");
    celebrities[25] = new createCeleb("Bruce Lee", "11/27/1940", "images/celebrities/Bruce Lee.jpg");
    celebrities[26] = new createCeleb("Sean Connery", "08/25/1930", "images/celebrities/Sean Connery.jpg");
    celebrities[27] = new createCeleb("Dwayne Johnson", "05/02/1972", "images/celebrities/Dwayne Johnson.jpg");
    celebrities[28] = new createCeleb("Brad Pitt", "12/18/1963", "images/celebrities/Brad Pitt.jpg");
    celebrities[29] = new createCeleb("Jet Li", "04/26/1963", "images/celebrities/Jet Li.jpg");
   

    function randomUniqueNum() {
       
        var uindex = Math.floor(Math.random() * celebrities.length);
        
        
        return uindex;
    }

   // index = Math.floor(Math.random() * randomUniqueNum());

    /* Hides of unhides controls on web page*/
    function hideGuess() {
        document.getElementById("txtGuess").style.visibility = "hidden";
        document.getElementById("btnSubmit").style.visibility = "hidden";
    };

    function hideWager() {
        document.getElementById("txtWager").style.visibility = "hidden";
        document.getElementById("btnWager").style.visibility = "hidden";
    };

    function hideStart() {
        document.getElementById("btnStart").style.visibility = "hidden";
        document.getElementById("aboutDisplay").style.visibility = "hidden";
    };
    function unhideGuess() {
        document.getElementById("txtGuess").style.visibility = "visible";
        document.getElementById("btnSubmit").style.visibility = "visible";
    };

    function unhideWager() {
        document.getElementById("txtWager").style.visibility = "visible";
        document.getElementById("btnWager").style.visibility = "visible";
    };

    function hideAge() {
        document.getElementById("txtAge").style.visibility = "hidden";
        document.getElementById("btnAge").style.visibility = "hidden";
    };

    function unhideAge() {
        document.getElementById("txtAge").style.visibility = "visible";
        document.getElementById("btnAge").style.visibility = "visible";
    };

    //Sets image on page
    function setImage() {
        var image = createImage();

        //Place the img element on the page
        var section = document.getElementById("imageDisplay");
        section.innerHTML = "";         // clear the contents of the div
        section.appendChild(image);     // add the image to the div
    };
       
    //Calculates celeb age from current date
    function calculateAge(celebYear) {
        var today = new Date();
        var todayYear = today.getFullYear();
        var celebAge = todayYear - celebYear;
        return celebAge;
    };

    //Creates image from celeb obj
    function createImage() {
        var width ="200px";
        var height ="300px";
        var imageFile = celebrities[index].image;
        var image = document.createElement("img");

        if (image != null && image != undefined) {
            image.src = imageFile;
            image.style.width;
            image.style.height;
        }

        return image;
    };

    //Resets game
    function resetGame() {
        window.location.reload();
    };

    //Checks the playes guess
    function playerCheckGuess() {
        
        var guess = document.getElementById("txtGuess").value;
        var celeb = celebrities[index].name;

        if (celeb == guess ) {
            alert("You guessed right");
            playerScore += 10;

        }
        else {
            alert("You guessed wrong");
        }
        
       
    };

    //Bonus Roung player wages points
    function playerBonus() {
        hideGuess();
        unhideWager();
       
        document.getElementById("btnWager").onclick = btnWager_Click;
        document.getElementById("btnAge").onclick = btnAge_Click;
       
    }

    //Calculates the time bounus for the game
    function calculateTimeBonus() {
       
        console.log(totalTime);

        if(totalTime <= 300 && playerScore >=90)
        {
            alert("You did it 5 minutes or less. You get an extra 10 points");
            playerScore += 10;
        }

        else if (totalTime <= 240 && playerScore >= 90) {
            alert("You did it 4 minutes or less. You get an extra 10 points");
            playerScore += 20;
        }

        else if (totalTime <= 180 && playerScore >= 90) {
            alert("You did it 3 minutes or less. You get an extra 10 points");
            playerScore += 30;
        }

        else if (totalTime <= 120 && playerScore >= 90) {
            alert("You did it 2 minutes or less. You get an extra 10 points");
            playerScore += 40;
        }
        else if (totalTime <= 60 && playerScore >= 90) {
            alert("You did it in 60 secs or less. 2x multiplier");
            playerScore *= 2;
        }
        else {
            alert("You tried and were fast. 1.1x multiplier");
            playerScore *= 1.1;
        }

    }

    function calculateHighScore() {
        if(playerScore > highScore)
        {
            highScore = playerScore;
            createCookie(highScore);
        }
    }

    //Event handler for wager button
    var btnWager_Click = function(){
    wager = parseInt(document.getElementById("txtWager").value);

        if(playerScore == 0)
        {
            alert("You Dont have any points to wager.");
            resetGame();
        } 
        
        else if(wager > playerScore){
            alert("You Dont have enough!");

        }
        else if (wager < 1) {
            alert("You should wager at least a point!");

        }

        else {
            hideWager();
            alert("Your Wager is: " + wager);
            unhideAge();
        }

        

    }

    //Event handler for age button
    var btnAge_Click = function () {
        var guessAge = document.getElementById("txtAge").value.toString();
        var birthday = celebrities[index].birthDate.substr(6, celebrities[index].birthDate.length);

        console.log("Age guessed: " + guessAge);
        console.log("Birth year: " + birthday);

        var calculatedAge = calculateAge(birthday).toString();
        console.log("Age calculated: " + calculatedAge);

        var result = parseInt(calculatedAge - guessAge);
        console.log("Your answer is within this range: " + result);

        if (calculatedAge - guessAge >= -2 || calculatedAge - guessAge <= 2) {
            playerScore += wager;

            setScore();
            alert("Congratz, you gained: " + wager + ". Your New Score is:" + playerScore);

            clearInterval(playerClock);
            calculateTimeBonus();
            setScore();
            alert("With the time bonus your Score is:" + playerScore);
            
            calculateHighScore();

            resetGame();
        }

        else {
            playerScore -= wager;
            setScore();
            alert("Sorry you, lost: " + wager + ". Your New Score is:" + playerScore);

            clearInterval(playerClock);
            calculateTimeBonus();
            setScore();
            alert("With the time bonus your Score is:" + playerScore);

            calculateHighScore();

            resetGame();
        }

    }

    var btnSubmit_Click = function () {
        console.log(celebrities[index].birthDate.substr(6, celebrities[index].birthDate.length));
        
        playerCheckGuess();
        round++;
        setScore();
        setRound();
        index = randomUniqueNum();
        setImage();
        
        if (round == 11)
        {
            setImage();
            playerBonus();
        }
        
        
        
    }
    //Event handlers connected to buttons
    document.getElementById("btnStart").onclick = btnStart_Click;
    
    document.getElementById("btnSubmit").onclick = btnSubmit_Click;

    /*
    // Professor Christopher M. Pascuccci cookie library from example http://cis-iis2.temple.edu/users/pascucci/cis3344/JavaScript/Cookie_Example2.html

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
    */
};

//Professor Pascucci's code from examples
//For navigation bar shrinking and what not
$(document).ready(function () {
    $('#nav-btn').click(function () {
        $(this).next().toggle();
    });
});

//For testing the resize of the window so that the nav can be either block or inline
$(window).resize(function () {
    if ($(window).width() > 600)
        $('.navList').css("display", "block");
    else
        $('.navList').css("display", "none");
});

