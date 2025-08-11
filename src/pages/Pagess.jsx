import React from 'react'
import About from '../components/Pages/About';
import Unlimited from '../components/Pages/Unlimited';

import Images from '../components/Pages/Images';
import Company from '../components/Pages/Company';
import Discover from '../components/Pages/Discover';
import OurServices from '../components/Pages/OurServices';
import Meet from '../components/home/Meet';

const Pagess = () => {
  return (
    <div>
      <About/>
      <Unlimited/>
      <Images/>
      <Company/>
      <Discover/>
      <OurServices/>
      <Meet/>
    </div>
  )
}

export default Pagess;
