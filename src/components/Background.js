import React from 'react';
import { IMAGE_URL } from '../common/constant';
import '../styles/Common.scss';
import '../styles/Background.scss';

function Background({ children }) {
    return (
        <div className='Background'>
            <img className='moon' src={IMAGE_URL + `/common/moon.png`} alt={'달'} />
            <div className='wave_1 left'></div>
            <div className='wave_2 left'></div>
            <div className='wave_3 left'></div>
            <div className='wave_4 left'></div>
            <div className='wave_1 right'></div>
            <div className='wave_2 right'></div>
            <div className='wave_3 right'></div>
            <div className='wave_4 right'></div>
            <div className='main'>
                {children}
            </div>
        </div>
    );
}

export default Background;