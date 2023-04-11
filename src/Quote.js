import React, { useEffect } from 'react'
import quotes from './quotesData'

export default function Quote(props) {
    const randomNumber = (maxValue) => {
        return Math.floor(Math.random() * maxValue)
    };
    
    const randomQuote = quotes[randomNumber(quotes.length)];
    
    const [currentQuote, setCurrentQuote] = React.useState(randomQuote);
    
    // const [focusIn, setFocusIn] = React.useState(true);
    
    // const stylesFocusIn = {
    //     animation: "focus-in 800ms cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
    // }
    
    // const stylesFocusOut = {
    //     animation: "blur-out 800s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
    // }
    
    // const focusIn = () => {
    
    // }
    
    // const nextQuote = () => {
    //     setFocusIn((prevState) => {
    //         return !prevState;
    //     })
    
    //     const timer = () => {
    //         setTimeout(
    //             setCurrentQuote(() => quotes[randomNumber(quotes.length)]), 
    //             5000
    //         )
    //     }
    
    // }
    
    // style={focusIn ? stylesFocusIn : stylesFocusOut}
    
    
    
    const [isVisible, setIsVisible] = React.useState(true);
    
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const nextQuote = () => {
        toggleVisibility();
        setCurrentQuote(() => quotes[randomNumber(quotes.length)]);
    }
    
    return (
        <div id="quote-wrapper">
            <div className={isVisible ? 'focus-in' : 'focus-in2'}>
                <div id="quote">
                    <p>{randomQuote.quote}</p>
                    <i className="fa-solid fa-quote-left" id="quote-left"></i>
                    <i className="fa-solid fa-quote-right" id="quote-right"></i>
                </div>
                <div id="author">
                    <p>- {currentQuote.author}</p>
                </div>
            </div>
            <div id="nextBtn" onClick={() => nextQuote()}>
            <ul className="pre-loader">
                <li>N</li>
                <li>E</li>
                <li>X</li>
                <li>T</li>
                <li className="space"></li>
                <li>Q</li>
                <li>U</li>
                <li>O</li>
                <li>T</li>
                <li>E</li>
            </ul>
            </div>
        </div>
        )
    }