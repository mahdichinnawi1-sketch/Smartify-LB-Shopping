const React = require('react');
const { useState, useEffect } = require('react');

function Carousel(props) {
    const { items } = props;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [items.length]);

    const nextSlide = () => setCurrent((current + 1) % items.length);
    const prevSlide = () => setCurrent((current - 1 + items.length) % items.length);

    return React.createElement('div', { className: 'carousel-container' },
        items.map((item, idx) =>
            React.createElement('div', { key: idx, className: 'carousel-slide' + (idx === current ? ' active' : '') },
                React.createElement('img', { src: item.image, alt: item.title }),
                React.createElement('div', { className: 'carousel-text' },
                    React.createElement('h2', null, item.title),
                    React.createElement('p', null, item.subtitle)
                )
            )
        ),
        React.createElement('button', { className: 'prev', onClick: prevSlide }, '❮'),
        React.createElement('button', { className: 'next', onClick: nextSlide }, '❯')
    );
}

module.exports = Carousel;
