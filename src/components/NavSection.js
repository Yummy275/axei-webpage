import React, { useState } from 'react';
import styled from 'styled-components';
import NavSectionInfo from './NavSectionInfo';

const Container = styled.div`
    background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
    padding: 3rem 0;
    margin-top: 15rem;
`;

const ContentHolder = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
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
    font-size: 1.4rem;
    font-style: italic;
    margin: 2rem 0 0 2rem;
    z-index: 1;
    width: 27rem;
    padding: 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    ${(props) =>
        props.activeTab === props.tabValue
            ? `background-color: #dfdfdf; box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;`
            : ''}
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
                {activeTab === 'one' ? (
                    <NavSectionInfo
                        infoImg="https://www.placecage.com/g/800/900"
                        title="Option One"
                        body="Laboris culpa exercitation mollit consectetur consectetur nisi proident minim dolor cupidatat. Esse duis qui voluptate velit. Reprehenderit id minim amet in anim velit. Dolor et consequat est ut amet consectetur id. Anim eiusmod in ullamco do minim ea. Sint proident id duis est nostrud nisi exercitation incididunt exercitation."
                    ></NavSectionInfo>
                ) : activeTab === 'two' ? (
                    <NavSectionInfo
                        infoImg="https://www.placecage.com/800/900"
                        title="Option Two"
                        body="Ipsum elit aliqua sit labore consectetur reprehenderit elit reprehenderit ipsum. Consectetur id ipsum incididunt aute enim dolore ea Lorem voluptate dolore dolore. Aliqua duis eu aute consequat dolor in esse ut magna aliqua aliquip nulla non incididunt. Ut mollit anim excepteur reprehenderit aute. Ex eu excepteur esse commodo culpa aliquip. Consequat nostrud deserunt fugiat veniam ex proident. Anim incididunt adipisicing laborum tempor aliqua ea consectetur officia commodo anim."
                    ></NavSectionInfo>
                ) : activeTab === 'thr' ? (
                    <NavSectionInfo
                        infoImg="https://www.placecage.com/c/800/900"
                        title="Option Three"
                        body="Occaeca eiusmod laborum adipisicing commodo in Lorem do eu ea amet ipsum. Cupidatat ullamco deserunt cillum deserunt ipsum sint. Reprehenderit eu in dolore minim cupidatat voluptate adipisicing duis dolore culpa. Est do cillum mollit ipsum Lorem ut duis exercitation."
                    ></NavSectionInfo>
                ) : activeTab === 'four' ? (
                    <NavSectionInfo
                        infoImg="https://www.placecage.com/g/800/900"
                        title="Option Four"
                        body="Laboris cupidatat quis consectetur veniam dolor. Consectetur consectetur eiusmod in fugiat est tempor sit consequat commodo elit et deserunt in. Laboris et veniam pariatur nisi cillum fugiat cillum sit ipsum amet anim sit labore."
                    ></NavSectionInfo>
                ) : (
                    ''
                )}
            </ContentHolder>
        </Container>
    );
};

export default NavSection;
