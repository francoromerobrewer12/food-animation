import React, { useEffect } from 'react';
import './Section2.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ingredient1 from '../../assets/section_2_06.webp';
import ingredient2 from '../../assets/section_2_07.webp';
import ingredient3 from '../../assets/section_2_08.webp';
import ingredient4 from '../../assets/section_2_09.webp';
import ingredient5 from '../../assets/section_2_10.webp';
import ingredient6 from '../../assets/section_2_01.webp';
import ingredient7 from '../../assets/section_2_02.webp';
import ingredient8 from '../../assets/section_2_03.webp';
import ingredient9 from '../../assets/section_2_04.webp';
import ingredient10 from '../../assets/section_2_05.webp';

function Section2() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      delay: 4,
      scrollTrigger: {
        trigger: '.section2-container',
        start: 'top 20%',
        end: '+250',
        scrub: true,
      },
    });
    tl.to('.images-wrapper-top', {
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div className='section2-container'>
      <h1>Draw Attention Where You Want it Most</h1>
      <p>A great animation effect is impossible to ignore.</p>
      <div className='images-wrapper-bottom'>
        <img src={ingredient1} alt='' className='ingredient' />
        <img src={ingredient2} alt='' className='ingredient' />
        <img src={ingredient3} alt='' className='ingredient' />
        <img src={ingredient4} alt='' className='ingredient' />
        <img src={ingredient5} alt='' className='ingredient' />
      </div>
      <div className='images-wrapper-top'>
        <img src={ingredient6} alt='' className='ingredient-top' />
        <img src={ingredient7} alt='' className='ingredient-top' />
        <img src={ingredient8} alt='' className='ingredient-top' />
        <img src={ingredient9} alt='' className='ingredient-top' />
        <img src={ingredient10} alt='' className='ingredient-top' />
      </div>
    </div>
  );
}

export default Section2;
