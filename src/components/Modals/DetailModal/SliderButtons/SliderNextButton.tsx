import Image from 'next/image';
import React from 'react';
import {useSwiper} from 'swiper/react';
import {NextButtonContainer} from '../DetailModal.styles';

const SliderNextButton = () => {
  const swiper = useSwiper();

  return (
    <NextButtonContainer onClick={() => swiper.slideNext()}>
      <Image src="/assets/images/detail/chevron_right.png" width={24} height={24} alt="" />
    </NextButtonContainer>
  );
};

export default SliderNextButton;
