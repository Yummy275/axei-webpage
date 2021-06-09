import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    padding: 3rem 0;
    margin-top: 15rem;
`;

const ContentHolder = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const NavMenu = styled.div`
    background-color: white;
    width: 28rem;
    height: 36rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: column;
    justify-items: center;
`;

const NavOption = styled.div`
    font-size: 1.75rem;
    margin: 2rem 0 0 2rem;
    width: 28rem;
    padding: 1rem;
    border-radius: 20px;
    ${(props) =>
        props.activeTab === props.tabValue ? `background-color: #dfdfdf; ` : ''}
`;

const NavSection = () => {
    const [activeTab, setActiveTab] = useState('one');

    return (
        <Container>
            <ContentHolder>
                <NavMenu>
                    <NavOption
                        onClick={() => setActiveTab('one')}
                        activeTab={activeTab}
                        tabValue="one"
                    >
                        Option One
                    </NavOption>
                    <NavOption
                        onClick={() => setActiveTab('two')}
                        activeTab={activeTab}
                        tabValue="two"
                    >
                        Option Two
                    </NavOption>
                    <NavOption
                        onClick={() => setActiveTab('thr')}
                        activeTab={activeTab}
                        tabValue="thr"
                    >
                        Option Three
                    </NavOption>
                    <NavOption
                        onClick={() => setActiveTab('four')}
                        activeTab={activeTab}
                        tabValue="four"
                    >
                        Option Four
                    </NavOption>
                </NavMenu>
            </ContentHolder>
        </Container>
    );
};

export default NavSection;
