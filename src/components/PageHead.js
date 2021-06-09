import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FadeShiftIn from './FadeShiftIn';
import FadeShiftOut from './FadeShiftOut';
import getRandomNumber from '../util/getRandomNumber';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    color: white;
`;

const BackgroundImgDiv = styled.div`
    text-align: center;
    font-size: 2rem;
`;

const Title = styled.h1``;

const SubTitleTxt = styled.h4`
    opacity: 0;
    animation: ${FadeShiftIn('20px', '0px')} 0.3s ease-in forwards,
        ${FadeShiftOut('-20px', '0px')} 0.3s 1s ease-in forwards;
`;

const subTitleChoices = [
    'Software Development',
    'Game Design',
    'Web Applications',
    'iOS Development',
    'Andriod Development',
    'Business Solutions',
    'Automation',
];

const PageHead = () => {
    const [subTitle, setSubTitle] = useState('Software Development');

    const updateSubtitle = () => {
        const currentSub = subTitle;
        const currentSubIndex = subTitleChoices.indexOf(currentSub);
        let newSubIndex = currentSubIndex;
        while (newSubIndex === currentSubIndex) {
            newSubIndex = getRandomNumber(0, subTitleChoices.length);
        }

        const newSubTitle = subTitleChoices[newSubIndex];
        setSubTitle(newSubTitle);
    };

    useEffect(() => {
        const timer = setInterval(updateSubtitle, 1600);

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <Container>
            <BackgroundImgDiv>
                <Title>AXEI</Title>
                <SubTitleTxt key={subTitle}>{subTitle}</SubTitleTxt>
            </BackgroundImgDiv>
        </Container>
    );
};

export default PageHead;
