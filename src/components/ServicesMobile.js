import React from 'react';
import styled from 'styled-components';
import ServiceInfo from './ServiceInfo';

const Container = styled.div``;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 3rem;
`;

const Window = styled.div`
    width: 100%;
    overflow: scroll;
`;

const CaroselObjContainer = styled.div`
    display: flex;
    width: fit-content;
`;

const ServicesMobile = () => {
    return (
        <Container>
            <Title>Services Component</Title>
            <Window>
                <CaroselObjContainer>
                    <ServiceInfo
                        infoImg="https://placeimg.com/800/900/any"
                        title="Option One"
                        body="Laboris culpa exercitation mollit consectetur consectetur nisi proident minim dolor cupidatat. Esse duis qui voluptate velit. Reprehenderit id minim amet in anim velit. Dolor et consequat est ut amet consectetur id. Anim eiusmod in ullamco do minim ea. Sint proident id duis est nostrud nisi exercitation incididunt exercitation."
                    ></ServiceInfo>
                    <ServiceInfo
                        infoImg="https://placeimg.com/800/900/any"
                        title="Option Two"
                        body="Ipsum elit aliqua sit labore consectetur reprehenderit elit reprehenderit ipsum. Consectetur id ipsum incididunt aute enim dolore ea Lorem voluptate dolore dolore. Aliqua duis eu aute consequat dolor in esse ut magna aliqua aliquip nulla non incididunt. Ut mollit anim excepteur reprehenderit aute. Ex eu excepteur esse commodo culpa aliquip. Consequat nostrud deserunt fugiat veniam ex proident. Anim incididunt adipisicing laborum tempor aliqua ea consectetur officia commodo anim."
                    ></ServiceInfo>
                    <ServiceInfo
                        infoImg="https://placeimg.com/800/900/any"
                        title="Option Three"
                        body="Occaeca eiusmod laborum adipisicing commodo in Lorem do eu ea amet ipsum. Cupidatat ullamco deserunt cillum deserunt ipsum sint. Reprehenderit eu in dolore minim cupidatat voluptate adipisicing duis dolore culpa. Est do cillum mollit ipsum Lorem ut duis exercitation."
                    ></ServiceInfo>
                    <ServiceInfo
                        infoImg="https://placeimg.com/800/900/any"
                        title="Option Four"
                        body="Laboris cupidatat quis consectetur veniam dolor. Consectetur consectetur eiusmod in fugiat est tempor sit consequat commodo elit et deserunt in. Laboris et veniam pariatur nisi cillum fugiat cillum sit ipsum amet anim sit labore."
                    ></ServiceInfo>
                </CaroselObjContainer>
            </Window>
        </Container>
    );
};

export default ServicesMobile;
