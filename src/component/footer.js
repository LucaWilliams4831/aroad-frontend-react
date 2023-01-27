import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Drawer, IconButton } from '@mui/material';
import { Body_Text_Desktop, Body_Title_Desktop, Body_Title_Mobile } from '../style/typography';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as color from '../style/basic/color';
import { E_MAIL, PHONE_NUMBER, SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../default/value';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../style/default';
import { Button_Outlined } from '../style/button';

const PAGE_TABS = ['Home', 'About us', 'Car Training', 'HGV Training', 'Motorcycle Training'];
const PAGE_TAB_URLS = ['/home', '/about', '/car_training', '/hgv_training', '/motorcycle_training'];

function Footer() {
    let history = useHistory();
    const location = useLocation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentTab, setCurrentTab] = useState(PAGE_TABS[0]);

    useEffect(() => {
        let pathName = location.pathname;
        if (!PAGE_TAB_URLS.includes(pathName))
            pathName = '';
        setCurrentTab(pathName);
    }, [location]);

    useEffect(() => {
        function handleResize() {
            console.log('Navbar handleResize log - 1 : ', window.innerWidth);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{
            width: '100vw',
            height: 'fit-content',
            backgroundColor: '#31373E',
        }}>
            <Box sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                    width: 'calc(100vw - 20px)',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '10px',
                }
            }}>
                <Box sx={{
                    ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
                    ...{
                        width: 'calc(100% - 50px)',
                        maxWidth: '720px',
                        alignItems: 'start',
                        justifyContent: 'space-between',
                        padding: '25px 0',
                        marginTop: '20px',
                        marginLeft: windowWidth > SCREEN_SMALL_WIDTH ? '0' : '30px',
                    }
                }}>
                    <img alt='' src='./images/logo-white.png'
                        style={{
                            width: '115px',
                            height: '50px',
                            marginRight: '40px',
                        }}
                    />
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            margin: windowWidth > SCREEN_SMALL_WIDTH ? '0 10px' : '40px 10px',
                        }
                    }}>
                        {
                            PAGE_TAB_URLS.map((item, index) => (
                                <Box
                                    onClick={() => {
                                        setCurrentTab(item);
                                        history.push(item);
                                    }}
                                    sx={{
                                        width: 'fit-content',
                                        margin: '5px 0',
                                        cursor: 'pointer',
                                    }}>
                                    <Body_Title_Desktop style={{
                                        color: item === currentTab ? 'white' : '#9A9A9A',
                                    }}>{PAGE_TABS[index]}</Body_Title_Desktop>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box sx={DISPLAY_FLEX_COLUMN}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '5px 10px',
                            }
                        }}>
                            <PhoneIcon sx={{ color: color.accent }} />
                            <Body_Title_Desktop style={{
                                color: 'white',
                            }}>{PHONE_NUMBER}</Body_Title_Desktop>
                        </Box>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '5px 10px',
                            }
                        }}>
                            <MailIcon sx={{ color: color.accent }} />
                            <Body_Title_Desktop style={{
                                color: 'white',
                            }}>{E_MAIL}</Body_Title_Desktop>
                        </Box>
                    </Box>
                </Box>
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'space-between',
                            borderTop: '1px solid RGBA(255,255,255,0.4)',
                            padding: '25px 0',
                        }
                    }}>
                        <Body_Text_Desktop style={{
                            color: 'white',
                        }}>Copyright © 2022 A-Road School of Motoring</Body_Text_Desktop>
                        <Box sx={DISPLAY_FLEX_ROW}>
                            <Body_Title_Desktop style={{
                                color: 'white',
                                fontWeight: '700',
                            }}>Terms of Use</Body_Title_Desktop>
                            <Body_Title_Desktop style={{
                                color: 'white',
                                fontWeight: '700',
                                marginLeft: '40px',
                            }}>Privacy Policy</Body_Title_Desktop>
                        </Box>
                    </Box>
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            justifyContent: 'space-between',
                            borderTop: '1px solid RGBA(255,255,255,0.4)',
                            padding: '25px 0',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: 'calc(100% - 20px)',
                                justifyContent: 'space-between'
                            }
                        }}>
                            <Body_Title_Desktop style={{
                                color: 'white',
                                fontWeight: '700',
                            }}>Terms of Use</Body_Title_Desktop>
                            <Body_Title_Desktop style={{
                                color: 'white',
                                fontWeight: '700',
                            }}>Privacy Policy</Body_Title_Desktop>
                        </Box>
                        <Body_Text_Desktop style={{
                            color: 'white',
                        }}>Copyright © 2022 A-Road School of Motoring</Body_Text_Desktop>
                    </Box>
                }
            </Box>
        </Box >
    );
}

export default Footer;