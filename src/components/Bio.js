import React from 'react';
import styled from 'styled-components';
import bioimg from '../images/rooftops.jpg';

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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

const BioImg = styled.img`
    height: 18rem;
    width: 16rem;

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

const Bio = () => {
    return (
        <Container>
            <Flexer>
                <BioImg src={bioimg} alt="software-dev-pic"></BioImg>
                <Words>
                    <SectionTitle>Qui incididunt</SectionTitle>
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

export default Bio;
