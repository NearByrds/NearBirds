import React from 'react'
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import * as Sentry from '@sentry/react';

const Team = () => {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred in Map File</p>}>

    <div>
      <NavBar />
      <div>Team</div>
      <div className="bg-gray-200 h-[1px] mx-[22px] md:mx-[82px]"></div>
      <Footer />
    </div>
    </Sentry.ErrorBoundary>
  )
}

export default Team