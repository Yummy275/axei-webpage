import React from 'react';
import styled from 'styled-components';

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

const SubTitle = styled.h4``;

const PageHead = () => {
    return (
        <Container>
            <BackgroundImgDiv>
                <Title>AXEI</Title>
                <SubTitle>Software Development</SubTitle>
            </BackgroundImgDiv>
        </Container>
    );
};

export default PageHead;
