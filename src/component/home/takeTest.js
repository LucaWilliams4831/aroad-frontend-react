import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, Body_Text_Desktop } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';

function TakeTest() {
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
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                width: '100vw',
                backgroundColor: 'white',
            }
        }}>
            <Box sx={{
                ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
                ...{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                    maxWidth: '1440px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '40px' : '40px 20px',
                    height: 'fit-content',
                    backgroundColor: '#545F70',
                    borderRadius: '100px',
                }
            }}>
                <img alt='' src='./images/take-test.png'
                    style={{
                        width: windowWidth > SCREEN_SMALL_WIDTH ? '515px' : '100%',
                    }} />
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px' : '15px',
                    }
                }}>
                    <Box>
                        <img alt='' src='./images/flow-bar.png'
                            style={{
                                maxWidth: 'calc(100vw - 100px)',
                                height: '28px',
                                transform: 'scaleY(-1)',
                            }} />
                    </Box>
                    <H2_Desktop style={{
                        marginBottom: '50px',
                        color: 'white',
                    }}>Take the Driving Test When You’re Ready</H2_Desktop>
                    <Body_Text_Desktop style={{
                        marginBottom: '30px',
                        color: 'RGBA(255,255,255,0.8 )',
                    }}>Don't want to wait around for a test date? With our short notice or last-minute test dates, you won't have to! Rest easy knowing that you'll always have a test date available. You can set up a test date whenever it's convenient for you – and if something comes up, it's easy enough to reschedule your test date. Our short-notice test dates are also helpful for students who recently failed a driving test or are looking for car practical tests.</Body_Text_Desktop>
                </Box>
            </Box>
        </Box >
    );
}

export default TakeTest;