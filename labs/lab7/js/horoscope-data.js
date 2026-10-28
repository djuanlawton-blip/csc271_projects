
var zodic = "capricorn";
var month = "January";
var day = 19;
var lucky = 21.0;

var horoscope = "Capricorn energy blends focused work drive with a need to balance ambition and self-care";

const belif = false;

document.getElementById("sign").textContent = zodic;

document.querySelector(".birthday").textContent = "Birthday: " + month + "" + day + "th";

document.querySelector(".luckyNum").textContent = "lucky number: " + lucky;

var parghraphs = document.querySelectorAll("p");

parghraphs[0].textContent = horoscope;

parghraphs[1].innerHTML ="Do i belive in zodic signs <strong>" + belif + "</strong>";


var my_mood = 5.0;
var partner_one_mood = 4.5;
var partner_two_mood = 4.8;

var average = (my_mood + partner_one_mood + partner_two_mood)

document.getElementById("mood").textContent = "Today's mood rating for " + zodic + "" 
+ my_mood + "out of 5. The average mood rating of Leo, Libra, and Gemini is::" + average.toFixed(1);

var zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", 
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

var my_Sign = zodiacSigns[9];
var partner1Sign = zodiacSigns[1];
var partner2Sign = zodiacSigns[2];


document.getElementById("myZodiac").textContent = "My zodiac is: " + my_Sign;
document.getElementById("partner1Zodiac").textContent = "Arnaldo zodiac sign is: " + partner1Sign;
document.getElementById("partner2Zodiac").textContent = "Brady zodiac sign is: " + partner2Sign;

var horoscopes = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];


var myDescription = horoscopes[4];
var partner1Description = horoscopes[6];
var partner2Description = horoscopes[2];


horoscopes[4] = "Capricorn energy blends focused work drive with a need to balance ambition and self-care.";


myDescription = horoscopes[2];


document.getElementById("myHoroscope").textContent = my_Sign + " Horoscope: " + myDescription;
document.getElementById("partner1Horoscope").textContent = partner1Sign + " Horoscope: " + partner1Description;
document.getElementById("partner2Horoscope").textContent = partner2Sign + " Horoscope: " + partner2Description;
