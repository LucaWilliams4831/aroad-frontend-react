import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Drawer, IconButton } from '@mui/material';
import { Body_Title_Desktop, Body_Title_Mobile } from '../style/typography';
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

function Navbar() {
    let history = useHistory();
    const location = useLocation();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentTab, setCurrentTab] = useState(PAGE_TAB_URLS[0]);
    const [showDrawerFlag, setShowDrawerFlag] = useState(false);

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
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                width: '100vw',
                height: '50px',
                backgroundColor: 'white',
                boxShadow: '0px 3px 3px rgba(0,0,0,0.16 )',
                padding: windowWidth > SCREEN_SMALL_WIDTH ? '25px 0' : '10px 0',
            }
        }}>
            <Box sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100vw',
                    maxWidth: '1440px',
                    padding: '0 15px',
                }
            }}>
                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        alignItems: 'end',
                    }
                }}>
                    <img alt='' src='./images/logo.png'
                        style={{
                            width: '115px',
                            height: '50px',
                            marginRight: '40px',
                        }}
                    />
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <Box sx={DISPLAY_FLEX_ROW}>
                            {
                                PAGE_TAB_URLS.map((item, index) => (
                                    <Box
                                        onClick={() => {
                                            setCurrentTab(item);
                                            history.push(item);
                                        }}
                                        sx={{
                                            marginRight: '15px',
                                            cursor: 'pointer',
                                            borderBottom: '4px solid',
                                            borderColor: item === currentTab ? color.accent : 'transparent',
                                            '&:hover': {
                                                borderBottom: '4px solid',
                                                borderColor: color.accent,
                                            }
                                        }}>
                                        <Body_Title_Desktop style={{
                                            color: item === currentTab ? color.heading : '#9A9A9A',
                                        }}>{PAGE_TABS[index]}</Body_Title_Desktop>
                                    </Box>
                                ))
                            }
                        </Box>
                    }
                </Box>
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            alignItems: 'end',
                            height: '50px',
                        }
                    }}>
                        {
                            windowWidth > SCREEN_MEDIUM_WIDTH &&
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    marginBottom: '5px',
                                }
                            }}>
                                <PhoneIcon sx={{ color: color.accent }} />
                                <Body_Title_Desktop>{PHONE_NUMBER}</Body_Title_Desktop>
                            </Box>
                        }
                        {
                            windowWidth > SCREEN_MEDIUM_WIDTH &&
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    marginBottom: '5px',
                                    marginLeft: '15px',
                                }
                            }}>
                                <MailIcon sx={{ color: color.accent }} />
                                <Body_Title_Desktop>{E_MAIL}</Body_Title_Desktop>
                            </Box>
                        }
                        <Button_Outlined style={{
                            marginLeft: '30px',
                        }}>Contact Us</Button_Outlined>
                    </Box>
                }
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            justifyContent: 'space-between',
                            width: '60px',
                            height: '130px',
                            position: 'fixed',
                            left: '30px',
                            bottom: '15px',
                            zIndex: '1',
                        }
                    }}>
                        <IconButton sx={{
                            width: '60px',
                            height: '60px',
                            backgroundImage: 'url(./images/global-call-ico.png)',
                            backgroundSize: 'cover',
                        }}>
                        </IconButton>
                        <IconButton sx={{
                            width: '60px',
                            height: '60px',
                            backgroundImage: 'url(./images/global-chat-ico.png)',
                            backgroundSize: 'cover',
                        }}>
                        </IconButton>
                    </Box>
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <IconButton onClick={() => { setShowDrawerFlag(true) }}>
                        <MenuIcon />
                    </IconButton>
                }
            </Box>
            <Drawer open={showDrawerFlag}
                anchor='right'
                onClose={() => { setShowDrawerFlag(false) }}
            >
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        width: '200px',
                        padding: '10px 20px',
                    }
                }}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'right',
                        }
                    }}>
                        <IconButton onClick={() => { setShowDrawerFlag(false) }}>
                            <CloseIcon sx={{
                                color: color.heading,
                            }} />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            margin: '0 10px',
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
                                        borderBottom: '4px solid',
                                        borderColor: item === currentTab ? color.accent : 'transparent',
                                        '&:hover': {
                                            borderBottom: '4px solid',
                                            borderColor: color.accent,
                                        }
                                    }}>
                                    <Body_Title_Mobile style={{
                                        color: item === currentTab ? color.heading : '#9A9A9A',
                                    }}>{PAGE_TABS[index]}</Body_Title_Mobile>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            marginTop: '30px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                                cursor: 'pointer',
                                margin: '5px 10px',
                            }
                        }}>
                            <PhoneIcon sx={{ color: color.accent }} />
                            <Body_Title_Mobile>{PHONE_NUMBER}</Body_Title_Mobile>
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
                            <Body_Title_Mobile>{E_MAIL}</Body_Title_Mobile>
                        </Box>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                            }
                        }}>
                            <Button_Outlined style={{
                            }}>Contact Us</Button_Outlined>
                        </Box>
                    </Box>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'space-between',
                            width: '140px',
                            height: '60px',
                            margin: '40px auto',
                        }
                    }}>
                        <IconButton sx={{
                            width: '60px',
                            height: '60px',
                            backgroundImage: 'url(./images/global-call-ico.png)',
                            backgroundSize: 'cover',
                        }}>
                        </IconButton>
                        <IconButton sx={{
                            width: '60px',
                            height: '60px',
                            backgroundImage: 'url(./images/global-chat-ico.png)',
                            backgroundSize: 'cover',
                        }}>
                        </IconButton>
                    </Box>
                </Box>
            </Drawer>
        </Box >
    );
}

export default Navbar;