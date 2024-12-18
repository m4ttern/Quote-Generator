import React, { useState } from "react";

const App = () => { 
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "In the middle of every difficulty lies opportunity.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do what you can with all you have, wherever you are.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does.",
    "The secret of getting ahead is getting started.",
    "It always seems impossible until it’s done.",
    "Believe you can and you're halfway there.",
    "Don’t wait. The time will never be just right.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "We may encounter many defeats, but we must not be defeated.",
    "Dream big and dare to fail.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Life is short, and it is up to you to make it sweet.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Don't count the days, make the days count.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The harder the conflict, the greater the triumph.",
    "Start where you are. Use what you have. Do what you can.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Do not wait for the perfect moment, take the moment and make it perfect.",
    "If opportunity doesn’t knock, build a door.",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    "Be the change you want to see in the world.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Every moment is a fresh beginning.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your life does not get better by chance, it gets better by change.",
    "Do something today that your future self will thank you for.",
    "The future depends on what you do today.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "The best revenge is massive success.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
    "Dream it. Wish it. Do it.",
    "Don’t limit your challenges. Challenge your limits.",
    "Go as far as you can see; when you get there, you’ll be able to see further.",
    "Nothing worth having comes easy.",
    "The expert in anything was once a beginner.",
    "Failure is the condiment that gives success its flavor.",
    "Don’t let yesterday take up too much of today.",
    "Believe in yourself and all that you are.",
    "You miss 100% of the shots you don’t take.",
    "Every strike brings me closer to the next home run.",
    "To be a champion, you have to believe in yourself when nobody else will.",
    "Things work out best for those who make the best of how things work out.",
    "Always do your best. What you plant now, you will harvest later.",
    "Opportunities don’t happen. You create them.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Focus on the journey, not the destination.",
    "Limit your 'always' and your 'nevers.'",
    "If you want something you’ve never had, you must be willing to do something you’ve never done.",
    "Work hard in silence, let success be your noise.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Doubt kills more dreams than failure ever will.",
    "If you can dream it, you can do it.",
    "A year from now you may wish you had started today.",
    "Don’t let the fear of losing be greater than the excitement of winning.",
    "Fall seven times, stand up eight.",
    "Don’t let what you cannot do interfere with what you can do.",
    "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Don’t be afraid to give up the good to go for the great.",
    "If you’re going through hell, keep going.",
    "You can’t use up creativity. The more you use, the more you have.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Opportunities multiply as they are seized.",
    "The way to get started is to quit talking and begin doing.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "The man who moves a mountain begins by carrying away small stones.",
    "A journey of a thousand miles begins with a single step.",
    "Whatever you are, be a good one.",
    "Only those who dare to fail greatly can ever achieve greatly.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Even if you’re on the right track, you’ll get run over if you just sit there.",
    "If you want to lift yourself up, lift up someone else.",
    "Start each day with a positive thought and a grateful heart.",
    "Don’t wish it were easier. Wish you were better.",
    "Don’t quit. Suffer now and live the rest of your life as a champion."
  ];


const [quote, setQuote] = useState("");
const [bgColor, setBgColor] = useState("#ffffff");


const getRandomQuote = () => { 
const randomIndex = Math.floor(Math.random() * quotes.length); 
setQuote(quotes[randomIndex]);


const randomColor =`#${Math.floor(Math.random() * 16777215).toString(16)}`;
setBgColor(randomColor);

};
return(
  <div style={{
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor, // Set the background color dynamically
    color: "#ffffff",
    transition: "background-color 0.5s ease", // Smooth transition for background color
     }}>
<h1>Random Quote Generator</h1>
<p style={{ fontSize: "20px", fontStyle: "italic", maxWidth: "600px" }}>
  {quote || "Click the button to get a quote!"}
</p>
<button onClick={getRandomQuote}
   style={{
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Get a quote
  </button>
  </div>
);
};
export default App
