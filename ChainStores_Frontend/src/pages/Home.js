import React from 'react';
import ContentBar from '../components/ContentBar'
import { homeone, hometwo, homethree } from '../components/Data';

function Home() {
  return (
    <>
      <ContentBar {...homeone} />
      <ContentBar {...hometwo} />
      <ContentBar {...homethree} />
    </>
  );
}

export default Home;