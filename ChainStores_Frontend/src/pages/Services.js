
import React from 'react';
import ContentBar from '../components/ContentBar'
import { serviceone, servicetwo, servicethree,servicefour } from '../components/Data';

function Services() {
  return (
    <>
      <ContentBar {...serviceone} />
      <ContentBar {...servicetwo} />
      <ContentBar {...servicethree} />
      <ContentBar {...servicefour} />
    </>
  );
}

export default Services;
