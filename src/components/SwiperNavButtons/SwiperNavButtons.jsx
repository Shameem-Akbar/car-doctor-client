import React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns" >
            <button className='btn btn-circle border-white text-white hover:text-white hover:btn-error ml-1 mr-[73rem]' onClick={() => swiper.slidePrev()}>❮</button>
            <button className='btn btn-circle border-white text-white hover:text-white ml-2 hover:btn-error' onClick={() => swiper.slideNext()}>❯</button>
        </div>
    );
};

export default SwiperNavButtons;