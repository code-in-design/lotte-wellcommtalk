import Image from 'next/image';
import React from 'react';
import {useSwiper} from 'swiper/react';
import {PrevButtonContainer} from '../DetailModal.styles';

const SliderPrevButton = () => {
  const swiper = useSwiper();

  return (
    <PrevButtonContainer onClick={() => swiper.slidePrev()}>
      <Image src="/assets/images/detail/chevron_left.png" width={24} height={24} alt="" />
    </PrevButtonContainer>
  );
};

export default SliderPrevButton;
