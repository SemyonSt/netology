import React, { useState } from 'react';
import './Carousel.css'; 

const slidesData = [
    { src: 'https://static.tildacdn.com/tild3532-6331-4562-b637-633631316366/Rectangle_9_1.png', title: 'Fashion ракурсы', description: 'Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу.' },
    { src: 'https://static.tildacdn.com/tild6363-6563-4030-b566-663764363961/Rectangle_11_1.png', title: '3D объекты', description: 'Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность.' },
    { src: 'https://static.tildacdn.com/tild3539-3466-4162-b662-366135636162/Rectangle_10_1.png', title: 'Фоновые изображения', description: 'Погрузитесь в мир создания фоновых изображений с Midjourney.' },
    { src: 'https://static.tildacdn.com/tild3863-6339-4330-b763-323038313639/Recta8ngle_16_1.png', title: 'Портреты', description: 'Откройте для себя секреты создания портретов с Midjourney.' },
    { src: 'https://static.tildacdn.com/tild6538-3634-4361-a263-326332363236/Rectangl8e_12_1.png', title: 'Fashion ракурсы', description: 'Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу.' },
];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = slidesData.length;

    const moveToNextSlide = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const moveToPrevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const handleTouchStart = (e) => {
        this.startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        const moveX = e.touches[0].clientX;
        const diffX = this.startX - moveX;

        if (diffX > 50) {
            moveToNextSlide();
        } else if (diffX < -50) {
            moveToPrevSlide();
        }
    };

    const offset = -currentIndex * (300 + 20); // ширина слайда + отступ

    return (
        <>
            <div className='body_name'>
                <div className='liberry'>
                    Библиотека
                </div>
                <div className='random_style_container'>
                    <div className='random_style'>
                        Рандомные стили
                    </div>
                    <div className="nav">
                        <div class="nav_button next" onClick={moveToPrevSlide} disabled={currentIndex === 0}>
                            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L3 10.5L12 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div class="nav_button next" onClick={moveToNextSlide} disabled={currentIndex === totalSlides - 1}>
                            <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2L11 10.5L2 19" stroke="white" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
            <div className='cards'>


                <div className="carousel-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className="slides" style={{ transform: `translateX(${offset}px)` }}>
                        {slidesData.map((slide, index) => (
                            <div className="slide" key={index}>
                                <img src={slide.src} alt={slide.title} />
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselComponent;
