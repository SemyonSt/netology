import './Header.css';

function Header2() {
    return (
        <header className="App-header">
            <div className="lol">
                
                <img className="girl2" src="https://optim.tildacdn.com/tild6234-3836-4665-b465-626633363930/-/format/webp/_1.png" alt="Girl" />
                <div className='header_button'>
                    <img className="logo" src="https://static.tildacdn.com/tild3065-3833-4163-a636-643830306133/F1ULL_logo_color_bl.svg" alt="logo" />
                    <div className='header_button_menu'>
                        <div className='header_button_menu_text'>Меню</div>
                    </div>
                </div>

                <div className='header_text'>
                    <div className='header_info'>
                        <div className='main_header'>
                            Как использовать нейросети
                        </div>
                        <div className='main_subheader'>
                            в графическом дизайне
                        </div>
                    </div>

                    <div className='header_guide' >
                        <div className='btn_guide'>Бесплатный гайд </div>
                        <div className='info_guide'>Получите бесплатный гайд
                            по искусственному интеллекту, который поможет улучшить работу графического дизайнера </div>
                    </div>
                </div>

                <div className='atom_star'>
                    <img className="atom_star" src="https://optim.tildacdn.com/tild3963-3265-4233-b237-383232393132/-/resize/210x/-/format/webp/n_konovalov_3D_rende.png" alt="atom" />

                </div>
                <div className='atom_lightning'>
                    <img className="atom_lightning" src="https://optim.tildacdn.com/tild3331-3961-4034-a430-623938353534/-/resize/332x/-/format/webp/n_konovalov_3D_rende.png" alt="atom" />
                </div>

                <div className='download_btn'>
                    Получить гайд
                </div>
            </div>
        </header>
    );
}

export default Header2;