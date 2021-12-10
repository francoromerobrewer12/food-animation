import React, { useEffect } from 'react';
import './Section4.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import section_4_01 from '../../assets/section_4_01.webp';
import section_4_02 from '../../assets/section_4_02.webp';
import section_4_03 from '../../assets/section_4_03.webp';
import section_4_04 from '../../assets/section_4_04.webp';

function Section4() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      delay: 4,
      scrollTrigger: {
        trigger: '.section4-container',
        start: 'top 30%',
        end: '+300',
        scrub: true,
      },
    });
    tl.to('.section_4_02', { opacity: 1, duration: 0.1 });
    tl.to('.section_4_03', { opacity: 1, duration: 0.1 });
    tl.to('.section_4_04', { opacity: 1, duration: 0.1 });
  });
  return (
    <div className='section4-container'>
      <h1>14 Types of Animation</h1>
      <p>With so many different effects, the possibilities are endless.</p>
      <div class='images-wrapper'>
        <img class='section_4_01' src={section_4_01} />
        <img class='section_4_02' src={section_4_02} />
        <img class='section_4_03' src={section_4_03} />
        <img class='section_4_04' src={section_4_04} />
      </div>
    </div>
  );
}

export default Section4;
