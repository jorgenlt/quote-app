import React from 'react'
import quotes from './quotesData'

export default function Quote() {
    const randomNumber = (maxValue) => {
        return Math.floor(Math.random() * maxValue)
    };
    
    const randomQuote = quotes[randomNumber(quotes.length)];

    const [currentQuote, setCurrentQuote] = React.useState(randomQuote);
    const [isVisible, setIsVisible] = React.useState(true);
    const [copy, setCopy] = React.useState('unset');
    
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleCopy = () => {
        setCopy(!copy);
    };
    
    const nextQuote = () => {
        toggleVisibility();
        setCurrentQuote(() => quotes[randomNumber(quotes.length)]);
    }

    const copyQuote = () => {
        toggleCopy();
        navigator.clipboard.writeText(`"${currentQuote.quote}" - ${currentQuote.author}`);
    }

    return (
        <div id="quote-wrapper">
            <div style={{height: "100px"}}></div>
            <div className={isVisible ? 'focus-in' : 'focus-in2'}>
                <div>
                    <div id="quote" onClick={() => copyQuote()}>
                        <p id="random-quote">{currentQuote.quote}</p>
                        <i className="fa-solid fa-quote-left" id="quote-left"></i>
                        <i className="fa-solid fa-quote-right" id="quote-right"></i>
                        <div 
                            id="copied" 
                            className={copy === 'unset' ? '' : (copy ? 'fade-in-out' : 'fade-in-out2')}
                        >
                            <p>Copied!</p>
                        </div>
                    </div>
                    <div id="author">
                        <p>- {currentQuote.author}</p>
                    </div>
                </div>
            </div>
            <div 
                id="nextBtn" 
                onClick={() => nextQuote()}
            >
                <div>
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
            <a id="github" href="https://github.com/jorgenlt" target='_blank' rel="noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        )
    }