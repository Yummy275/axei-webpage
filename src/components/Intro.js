import React from 'react';
import styled from 'styled-components';
import introimg from '../images/rooftops.jpg';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 15rem;
`;

const Flexer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

const IntroImg = styled.img`
    height: 18rem;
    width: 16rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    @media (min-width: 768px) {
        height: 22rem;
        width: 18rem;
        margin-right: 1rem;
    }

    @media (min-width: 1024px) {
        height: 30rem;
        width: 26rem;
    }
`;

const Words = styled.div`
    max-width: 24rem;
    text-align: center;
    padding: 1rem;

    @media (min-width: 768px) {
        padding: 0;
        text-align: left;
        margin-left: 1rem;
    }
`;

const SectionTitle = styled.h2`
    margin-bottom: 2rem;
`;

const InformationText = styled.p``;

const Intro = () => {
    return (
        <Container>
            <Flexer>
                <IntroImg src={introimg} alt="software-dev-pic"></IntroImg>
                <Words>
                    <SectionTitle>Intro Component</SectionTitle>
                    <InformationText>
                        Quis in commodo ipsum deserunt velit non ea id
                        exercitation dolor do. Exercitation veniam nulla nulla
                        incididunt occaecat fugiat Lorem labore mollit. Laboris
                        ut exercitation culpa commodo. Culpa est proident id sit
                        voluptate. Occaecat excepteur veniam officia voluptate
                        pariatur.
                    </InformationText>
                </Words>
            </Flexer>
        </Container>
    );
};

export default Intro;
