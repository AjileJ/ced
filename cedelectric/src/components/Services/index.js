import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src= {Icon1}/>
                <ServicesH2>Experience</ServicesH2>
                <ServicesP>For almost 20 years, CED Electric has been providing outstanding electrical services to residential and commercial clients in Ventura and Los Angeles Counties. Our years of experience give us the confidence to fix any electrical problem you have.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= {Icon2}/>
                <ServicesH2>Electrical Installs</ServicesH2>
                <ServicesP>We perform electrical installs and repairs quickly, safely and complete. We take pride in satisfying our customers. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= {Icon3}/>
                <ServicesH2>Audio and Video</ServicesH2>
                <ServicesP>We are also a full service audio & video contractor performing expert flat panel TV installations, surround sound and whole home audio & video systems. From system design to remote control set up and programming we can get your entertainment system operating flawlessly.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services