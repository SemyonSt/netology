import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className='subtract'>
                {/* Если нужно, добавьте дополнительный контент здесь */}
                <div className='footer_info_name'>
                    Использование ИИ
                    позволяет значительно
                    сэкономить ресурсы
                </div>

                <div className='footer_info_text'>
                    <div className='footer_info_text_number'>
                        01
                    </div>
                    <div className='footer_info_text_description'>
                    Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях.                    </div>

                </div>
            </div>
        </div>
    );
};

export default FooterComponent;