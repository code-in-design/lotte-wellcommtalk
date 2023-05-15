import {colors} from '@/styles/colors';
import {SectionBlock, SectionLabel} from '@/styles/section.styles';
import Image from 'next/image';
import React from 'react';
import {CautionText, GiftBlock, GiftContainer, Section6Container, Section6Text} from './Section6.styles';

const Section6 = ({isDesktop}: IsDesktop) => {
  return (
    <Section6Container isDesktop={isDesktop}>
      <SectionBlock isDesktop={isDesktop}>
        <SectionLabel isDesktop={isDesktop} backgroundColor={colors.PINK}>
          참여 혜택
        </SectionLabel>

        <Section6Text isDesktop={isDesktop}>
          {'참여해주신 분 중 추첨을 통해\n'} <b>다양한 선물</b>을 드립니다. (총 300분)
        </Section6Text>

        <GiftContainer isDesktop={isDesktop}>
          <GiftBlock isDesktop={isDesktop}>
            <Image src="/assets/images/section6/reward_cinema.png" width={176} height={90} alt="" />
            <span>롯데시네마 관람권 2매 (100명)</span>
          </GiftBlock>

          <GiftBlock isDesktop={isDesktop}>
            <Image src="/assets/images/section6/reward_giftcard.png" width={136} height={90} alt="" />
            <span>모바일 롯데마트상품권 (100명)</span>
          </GiftBlock>

          <GiftBlock isDesktop={isDesktop}>
            <Image src="/assets/images/section6/reward_lotteria.png" width={140} height={90} alt="" />
            <span>롯데리아 더블팩 (100명)</span>
          </GiftBlock>
        </GiftContainer>

        <CautionText isDesktop={isDesktop}>{'*유의사항 | EVENT 1번과 2번은 중복 참여는 가능하나\n중복 당첨이 되지 않습니다.'}</CautionText>
      </SectionBlock>
    </Section6Container>
  );
};

export default Section6;
