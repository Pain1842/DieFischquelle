import React from 'react';
import { Layout, Menu } from 'antd';
import './Navigation.css';
import logo from '/images/Fischquelle_Logo_Transparent_Background.png';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (hash: string) => {
        if (window.location.pathname !== '/') {
            navigate('/', { replace: true });
            // Warte, bis die Hauptseite geladen ist, bevor gescrollt wird
            setTimeout(() => smoothScrollToElement(hash), 1);
        } else {
            smoothScrollToElement(hash);
        }
    };

    const smoothScrollToElement = (hash: string) => {
        const element = document.querySelector(hash);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 100, // 100px Offset für smoothes Scrollen
                behavior: 'smooth',
            });
        }
    };

    return (
        <Header className="header">
            <div onClick={() => handleNavigation('#carousel')} className="logo-container" style={{ cursor: 'pointer' }}>
                <img src={logo} alt="Fischquelle Logo" className="logo" />
            </div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="nav-menu">
                <Menu.Item key="1">
                    <a onClick={() => handleNavigation('#carousel')}>Home</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a onClick={() => handleNavigation('#about')}>Über uns</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a onClick={() => handleNavigation('#market-schedule')}>Markttage</a>
                </Menu.Item>
                <Menu.Item key="4">
                    <a onClick={() => handleNavigation('#contact')}>Kontakt</a>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navigation;
