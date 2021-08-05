const quotes = [
	{
		quote: "Some people dream of success, while oter people get up every morning and make it happen.",
		author: "Wayne Huizenga",
	},
	{
		quote: "There are better starters than me but I'm a strong finisher.",
		author: "Usain Bolt",
	},
	{
		quote: "All progress takes place outside the comfort zone.",
		author: "Michael John Bobak",
	},
	{
		quote: "The way to get started is to quit talking and begin doing.",
		author: "Walt Disney",
	},
	{
		quote: "Success seems to be connected with action. Successful people keep moving.",
		author: "Conrad Hilton",
	},
	{
		quote: "The only place where success comes before work is in the dictionary.",
		author: "Vidal Sassoon",
	},
	{
		quote: "If you run you stand a chance of losing, but if you don't run you've already lost.",
		author: "Barack Obama",
	},
	{
		quote: 'As soon as anyoue starts telling you to be "realistic," cross that person off your invitation list.',
		author: "John Eliot",
	},
	{
		quote: "Only I can change my life. No one can do it for me.",
		author: "carol Burnett",
	},
	{
		quote: "You're braver than you believe, and stronger than you seem, and smarter than you think.",
		author: "A.A. Mile",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;