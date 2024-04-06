import React from 'react';
import { IMAGE_URL, LOGO_IMAGE } from '../common/constant';
import '../styles/Common.scss';
import '../styles/Background.scss';
import Header from './Header';

function Background({ children }) {
    return (
        <div className='Background'>
            <img className='backgroundLogo' src={LOGO_IMAGE} alt={'로고'} />
            <span className='wave_1 left'></span>
            <span className='wave_2 left'></span>
            <span className='wave_3 left'></span>
            <span className='wave_4 left'></span>
            <span className='wave_1 right'></span>
            <span className='wave_2 right'></span>
            <span className='wave_3 right'></span>
            <span className='wave_4 right'></span>
            <div className='main'>
                <Header />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Background;