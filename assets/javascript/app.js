$('#start').on('click',function(){

})

// trivia questions
var questions = [{
    question: "This HOF running back never played in a SuperBowl:",
    answers: ["OJ Simpson", "John Riggins", "Tony Dorsett", "Thurman Thomas"],

    correctAnswer: "OJ Simpson", 
    image: "../images/oj.jpeg"
},  {
    question: "Who has the highest career Super Bowl passer rating?"
    answers: ["Ben Roethlisberger", "Tom Brady", "Steve Young", "Joe Montana"],

    correctAnswer: "Joe Montana",
    image: "../images/montana.jpeg"
}, {
    question: "Who were the only Super Bowl co-MVPs?"
    answers: ["Franco Harris & Lynn Swann", "Troy Aikman & Emmitt Smith", "Jerry Rice & Joe Montana", "Randy White & Harvey Martin"],

    correctAnswer: "Randy White & Harvey Martin, of the Dallas Cowboys -- January 15, 1978, in SuperBowl XII",
    image: "../images/harvey.jpeg"
}, {
    question: "Who ran the longest play ever in a Super Bowl game?",
    answers: ["Franco Harris", "John Taylor", "James Harrison", "Timmy Smith"],

    correctAnswer: "James Harrison, 100 yd interception return in SB XLIII",
    image: "../images/harrison.jpeg"
}, {
    question: "Who had the longest rushing carry in a Super Bowl game?",
    answers: ["Walter Payton", "Willie Parker", "Jerome Bettis", "Tony Dorsett"],

    correctAnswer: "Willie Parker scored a 75 yd TD in SuperBowl XL, vs the SeaHawks",
    image: "../images/parker.jpeg"
}, {
    question: "Who was the first player to win a Heisman Trophy, NCAA National Championship, and a Super Bowl?", 
    answers: ["Roger Staubach", "Tony Dorsett", "Desmond Howard", "Jim Plunkett"],

    correctAnswer: "Tony Dorsett was the first to win Heisman (1976), NCAA National Championship (1976-U of Pitt), and a Super Bowl (XII in 1978) title",
    image: "../images/dorsett.jpeg"
}, {
    question: "Scoring within the first 14 seconds, this Chicago Bear hold the record for fastest score in a Super Bowl game",
    answers: ["Willie Gault", "William Perry", "Walter Payton", "Devin Hester"],

    correctAnswer: "Devin Hester returned the opening kickoff to score a TD in Super Bowl XLI",
    image: "../images/hester.jpeg"
}, {
    question: "What NFL player holds the record for most career Super Bowl fumbles?", 
    answers: ["Chuck Foreman", "Fran Tarkenton", "John Elway", "Roger Staubach"],

    correctAnswer: "Roger Staubach has five career fumbles from Super Bowls VI, X, XII, & XIII", 
    image: "../images/roger.jpeg"
}, {
    question: "How many dot-com ads were there in the 2000 Super Bowl?", 
    answers: [ "23", "17", "19", "21"],

    correctAnswer: "17 total featured ads, companies paid over 2 million dollars for a 30 second spot. The following year, only 3 dot-coms boughts advertising spots during Super Bowl XXXV",
    image: "../images/dotcom.jpeg"
}, { 
    question: "Who has scored the most career Super Bowl points?",
    answers: ["Jerry Rice", "Terrell Davis", "Emmitt Smith", "Roger Craig"],

    correctAnswer: "Jerry Rice has scored 48 points in 4 Super Bowls", 
    image: "../images/rice.jpeg"
}, {
    question: "Who has the most career completions in the Super Bowl?",
    answers: ["Tom Brady", "Troy Aikman", "Terry Bradshaw", "Kurt Warner"],

    correctAnswer: "Tom Brady (the GOAT) has 235 completions",
    image: "../images/brady.jpeg"
}, { 
    question: "Before 'Super Bowl' became the official name of the NFL-AFL championship game, Sports Illustrated referred to it as what in a September 12, 1966 article?",
    answers: ["the 'game of games'", "the 'ultimate game'", "the 'supergame'", "the 'football world championship'"],

    correctAnswer: "Super Bowl I is referred to in some contemporary reports and Sports Illustrated as the 'Supergame', and was played on January 15, 1967 at the LA Memorial Coliseum.",
    image: "../images/sb1.jpeg"
}, {
    question: "Who has played in the most Super Bowl games?",
    answers: ["Adam Vinatieri", "Mike Lodish", "Joe Montana", "Tom Brady"],

    correctAnswer: "Tom Brady has played in 8 Super Bowls, all with the NE Patriots.",
    image: "../images/brady2.jpeg"
}, {
    question: "Who has thrown the most career Super Bowl interceptions?", 
    answers: ["John Elway", "Jim Kelly", "Tom Brady", "Rich Gannon"],

    correctAnswer: "John Elway has thrown 8 interceptions in his Super Bowl career (XXI, XXII, XXIV, XXXII)."
    image: "../images/elway.jpeg"
}, {
    question: "The first Super Bowl rings were given out in which year?",
    answers: ["1968", "1968", "1970", "1967"]

    correctAnswer: "Rings have been given out to the Super Bowl winners for each game winner, ever.",
    image: "../images/rings.jpeg"
}];
