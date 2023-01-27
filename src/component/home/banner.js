import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H1_Desktop, Link_Desktop, Body_Text_Desktop, H1_Mobile, Body_Text_Mobile, Link_Mobile, Description_Text_Desktop } from '../../style/typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as color from '../../style/basic/color';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import TextEdit_Custom from '../../style/form';
import { Button_Contained } from '../../style/button';
import CheckBox_Circle from '../../style/checkbox';

function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            height: 'calc(100vh - 100px)',
            backgroundColor: '#333333',
        }}>
            {
                windowWidth > SCREEN_SMALL_WIDTH &&
                <Box sx={{
                    position: 'relative',
                }}>
                    <img alt='' src='./images/banner1.png'
                        style={{
                            position: 'absolute',
                            width: '100vw',
                        }} />
                    <Box Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            position: 'absolute',
                            width: '40vw',
                            height: '30vh',
                            paddingTop: '10vw',
                            marginLeft: '10vw',
                            justifyContent: 'space-between',
                        }
                    }}>
                        <H1_Desktop>Start Your Driving Journey With Us</H1_Desktop>
                        <Body_Text_Desktop>Get driving lessons in London with fully qualified instructors.</Body_Text_Desktop>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                            }
                        }}>
                            <Link_Desktop style={{
                                color: color.accent,
                            }}>Read More</Link_Desktop>
                            <ExpandMoreIcon sx={{ color: color.accent }} />
                        </Box>
                    </Box>
                </Box>
            }
            {
                windowWidth <= SCREEN_SMALL_WIDTH &&
                <Box sx={{
                    position: 'relative',
                }}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'right',
                            overflow: 'hidden',
                            width: '100vw',
                        }
                    }}>
                        <img alt='' src='./images/banner1.png'
                            style={{
                                width: '100vw',
                                minWidth: '640px',
                            }} />
                    </Box>
                    <Box Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            width: 'calc(100vw - 30px)',
                            height: '30vh',
                            padding: '30px 15px',
                            justifyContent: 'space-between',
                        }
                    }}>
                        <H1_Mobile style={{
                            color: 'white',
                        }}>Start Your Driving Journey With Us</H1_Mobile>
                        <Body_Text_Mobile style={{
                            color: 'RGBA(255,255,255,0.8 )',
                        }}>Get driving lessons in London with fully qualified instructors.</Body_Text_Mobile>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                            }
                        }}>
                            <Link_Mobile style={{
                                color: color.accent,
                            }}>Read More</Link_Mobile>
                            <ExpandMoreIcon sx={{ color: color.accent }} />
                        </Box>
                    </Box>
                </Box>
            }
            <Box sx={{
                ...DISPLAY_FLEX_ROW,
                ...{
                    width: '100vw',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: '-128px',
                }
            }}>
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        borderRadius: '30px',
                        backgroundColor: 'white',
                        width: 'calc(100vw - 50px)',
                        maxWidth: '1440px',
                        margin: '0 55px',
                        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                    }
                }}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            margin: '50px',
                        }
                    }}>
                        <TextEdit_Custom
                            placeholder={''}
                            label={'Post Code'}
                            icon={0}
                            text={''}
                        />
                        <TextEdit_Custom
                            placeholder={''}
                            label={'Phone Number'}
                            icon={0}
                            text={''}
                        />
                        <Button_Contained>View Dates/Prices</Button_Contained>
                    </Box>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            alignItems: 'center',
                            margin: '0 50px',
                        }
                    }}>
                        <CheckBox_Circle />
                        <Description_Text_Desktop style={{
                            marginLeft: '10px',
                        }}>Happy for us to contact you about our course</Description_Text_Desktop>
                    </Box>
                    <Link_Desktop style={{
                        margin: '0 0 50px 90px',
                    }}>See our Data policy</Link_Desktop>
                </Box>
            </Box>
        </Box >
    );
}

export default Banner;