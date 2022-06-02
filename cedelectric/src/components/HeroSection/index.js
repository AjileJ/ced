import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id = "/">
        <HeroBg>
            <VideoBg autoPlay loop muted src = {Video} type = {'video/mp4'} />
        </HeroBg>
        <HeroContent>
            <HeroH1>Electrical Made Easy</HeroH1>
            <HeroP>
            We stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just drop us a line. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to = "contact" onMouseEnter = {onHover} onMouseLeave = {onHover}
                primary = "true"
                dark = "true"
                >
                    Get in Touch {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection