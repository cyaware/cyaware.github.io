import React, { useState, useEffect } from 'react';

const WelcomePage = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const [quote, setQuote] = useState('');

    const backgrounds = [
        'img/bg1.jpg', 
        'img/bg3.jpg', 
        'img/bg4.jpg', 
        'img/bg6.jpg', 
        'img/bg7.webp', 
        'img/bg8.jpg', 
        'img/bg9.jpeg', 
        'img/bg10.png', 
        'img/bg11.jpg'
    ];

    useEffect(() => {
        fetch('quotes.txt')
            .then(response => response.text())
            .then(data => {
                const quotes = data.split('\n').filter(line => line.trim() !== '');
                changeContent(quotes);
            })
            .catch(error => console.error('Error fetching quotes:', error));
    }, []);

    const changeContent = (quotes) => {
        const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        setBackgroundImage(`url(${backgrounds[randomBgIndex]})`);
        setQuote(quotes[randomQuoteIndex]);
    };

    return React.createElement(
        'div',
        {
            style: {
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }
        },
        React.createElement(
            'div',
            {
                style: {
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    borderRadius: '10px',
                }
            },
            React.createElement('h1', { style: { fontSize: '2rem', marginBottom: '20px' } }, quote),
            React.createElement(
                'button',
                {
                    style: {
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        color: 'white',
                        backgroundColor: '#007BFF',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    },
                    onClick: () => (window.location.href = 'login.html'),
                    onMouseOver: (e) => (e.target.style.backgroundColor = '#0056b3'),
                    onMouseOut: (e) => (e.target.style.backgroundColor = '#007BFF'),
                },
                'Get Started'
            )
        )
    );
};

export default WelcomePage;
