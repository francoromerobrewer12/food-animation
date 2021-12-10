import React, { useEffect } from 'react';
import './Section1.css';
import background from '../../assets/section_1_bg.webp';
import section_1_01 from '../../assets/section_1_01.webp';
import section_1_02 from '../../assets/section_1_02.webp';
import section_1_03 from '../../assets/section_1_03.webp';
import section_1_04 from '../../assets/section_1_04.webp';
import section_1_05 from '../../assets/section_1_05.webp';
import section_1_06 from '../../assets/section_1_06.webp';
import section_1_07 from '../../assets/section_1_07.webp';
import section_1_08 from '../../assets/section_1_08.webp';
import section_1_09 from '../../assets/section_1_09.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Circ } from 'gsap/gsap-core';

function Section1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.images-wrapper',
        start: '40% center',
        end: '+300',
        scrub: true,
      },
    });
    tl.from('.section_1_01', {
      y: '-150px',
      x: '-150px',
      ease: Circ,
      duration: 4,
    });
    tl.from(
      '.section_1_02',
      {
        y: '-150px',
        x: '0px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_03',
      {
        y: '-150px',
        x: '-80px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_04',
      {
        y: '-100px',
        x: '-100px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_05',
      {
        y: '0px',
        x: '-100px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_06',
      {
        y: '0px',
        x: '-250px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_07',
      {
        y: '150px',
        x: '-150px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_08',
      {
        y: '80px',
        x: '-200px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
    tl.from(
      '.section_1_09',
      {
        y: '80px',
        x: '0px',
        ease: Circ,
        duration: 4,
      },
      '-=4'
    );
  }, []);
  return (
    <div className='section1-container'>
      <h1 className='section1-title'>
        Make Your Site Move with <br />
        Animation
      </h1>
      <div className='images-wrapper'>
        <img src={background} alt='' className='section_1_bg' />
        <div className='ingredients-images'>
          <img className='section_1_01' src={section_1_01} />
          <img className='section_1_02' src={section_1_02} />
          <img className='section_1_03' src={section_1_03} />
          <img className='section_1_04' src={section_1_04} />
          <img className='section_1_05' src={section_1_05} />
          <img className='section_1_06' src={section_1_06} />
          <img className='section_1_07' src={section_1_07} />
          <img className='section_1_08' src={section_1_08} />
          <img className='section_1_09' src={section_1_09} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
