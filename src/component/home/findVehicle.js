import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, Body_Text_Desktop, H2_Mobile, Body_Text_Mobile } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';

function FindVehicle() {
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
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '200px 50px 50px' : '200px 20px 50px',
                    height: 'fit-content',
                }
            }}>
                <img alt='' src='./images/find-vehicle.png'
                    style={{
                        width: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                            windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                        height: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                            windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                        margin: windowWidth > SCREEN_SMALL_WIDTH ? '0 50px 0 0' : '0 auto 20px',
                    }} />
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                }}>
                    <img alt='' src='./images/car-ico.png'
                        style={{
                            width: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                            height: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                            marginBottom: '20px',
                        }} />
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H2_Desktop style={{
                            marginBottom: '50px',
                        }}>Find the Right Vehicle Instructor for You in London</H2_Desktop>
                    }
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <Body_Text_Desktop style={{
                            marginBottom: '30px',
                        }}>Save time, money, and frustration by connecting to the best vehicle instructors for you in London. A-Road School of Motoring is a comprehensive online platform that connects qualified and experienced vehicle instructors to students in need of car driving lessions, HGV (Class 2 / C) (Class 1 C + E / traning),motorcycle training, CBT (Compulsory Basic Training), and more.</Body_Text_Desktop>
                    }
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <Body_Text_Desktop>We make finding the right instructor or driving course that cn deliver the essential training you need easy - let us know what you need and we'll connect you to your perfect match in no time.</Body_Text_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H2_Mobile style={{
                            marginBottom: '50px',
                        }}>Find the Right Vehicle Instructor for You in London</H2_Mobile>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <Body_Text_Mobile style={{
                            marginBottom: '30px',
                        }}>Save time, money, and frustration by connecting to the best vehicle instructors for you in London. A-Road School of Motoring is a comprehensive online platform that connects qualified and experienced vehicle instructors to students in need of car driving lessions, HGV (Class 2 / C) (Class 1 C + E / traning),motorcycle training, CBT (Compulsory Basic Training), and more.</Body_Text_Mobile>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <Body_Text_Mobile>We make finding the right instructor or driving course that cn deliver the essential training you need easy - let us know what you need and we'll connect you to your perfect match in no time.</Body_Text_Mobile>
                    }
                </Box>
            </Box>
        </Box >
    );
}

export default FindVehicle;