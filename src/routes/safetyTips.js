import React from 'react';
import Testimonies from '../components/testimonialContainer';
import FooterContainer from '../components/footerContainer';

export default function safetyTips() {
  return (
    <>
      <div className="safety-page-container">
        <h1 className="safety-header">How to have safe Puppy Playdates?</h1>
        <ol className="safety-tips">
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
          <li className="tip">Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.</li>
        </ol>
      </div>
        <Testimonies />
        <FooterContainer />
    </>
  )
}

