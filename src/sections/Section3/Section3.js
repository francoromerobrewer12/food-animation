import React, { useEffect } from 'react';
import './Section3.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import section_3_06 from '../../assets/section_3_06.webp';
import section_3_05 from '../../assets/section_3_05.webp';
import section_3_04 from '../../assets/section_3_04.webp';
import section_3_03 from '../../assets/section_3_03.webp';
import section_3_02 from '../../assets/section_3_02.webp';
import section_3_01 from '../../assets/section_3_01.webp';
import { Power1 } from 'gsap/gsap-core';

function Section3() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3-container',
        start: '25% 40%',
        end: '+=200',
        scrub: true,
      },
    });
    tl.to('.section_3_01', { y: '-250px', duration: 1, ease: Power1 });
    tl.to('.section_3_02', { y: '-200px', duration: 1, ease: Power1 }, '-=1');
    tl.to('.section_3_03', { y: '-50px', duration: 1, ease: Power1 }, '-=1');
    tl.to('.section_3_05', { y: '150px', duration: 1, ease: Power1 }, '-=1');
    tl.to('.section_3_06', { y: '250px', duration: 1, ease: Power1 }, '-=1');
  }, []);
  return (
    <div className='section3-container'>
      <h1>Animate Anything You Want</h1>
      <p>Easily add animation to text, photos, buttons & more.</p>
      <div class='images-wrapper'>
        <img class='section_3_06' src={section_3_06} />
        <img class='section_3_05' src={section_3_05} />
        <img class='section_3_04' src={section_3_04} />
        <img class='section_3_03' src={section_3_03} />
        <img class='section_3_02' src={section_3_02} />
        <img class='section_3_01' src={section_3_01} />
      </div>
    </div>
  );
}

export default Section3;
