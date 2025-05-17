'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Assets
import SplashImage_01 from '@/assets/welcome - background.jpg';
import SplashImage_02 from '@/assets/welcome - center.jpg';


// Styles
import './welcome-overlay-style.scss';

export default function WelcomeOverlay(){
    const [ hasSeen, setHasSeen ] = useState<string | null>('true')
    // setHasSeen(sessionStorage.getItem('has-seen-welcome-screen'))

    async function onClickHandler(){
        sessionStorage.setItem('has-seen-welcome-screen', 'true')
        setHasSeen( await sessionStorage.getItem('has-seen-welcome-screen'))
    }

    useEffect(() => {
        const hasSeenValue = sessionStorage.getItem('has-seen-welcome-screen')
        setHasSeen( hasSeenValue )
    }, [])

    if( hasSeen !== 'true'){
        return (
            <div className='welcome-overlay'>
                <section className='welcome-overlay__heading-section'>
                    <h1>Believe<br />Yourself</h1>
                    <div>
                    <div />
                        <h2>Train like a pro</h2>
                    </div>
                </section>
                <Image
                    className='welcome-overlay__image__focus-top'
                    alt={'Frontpage splash image'}
                    src={SplashImage_01}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100%"
                    style={{
                        gridRow: '1/2'
                    }}
                />
                <section className='welcome-overlay__CTA-section'>
                    <button onClick={onClickHandler}>
                    Start Training
                    </button>
                </section>
                <Image
                    alt={'Frontpage splash image'}
                    src={SplashImage_02}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100%"
                    style={{
                        gridRow: '2/3'
                }}
                />
            </div>
        )
    }

    return( null )
}