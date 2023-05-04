import React from 'react'
import Map from "../../components/Map/Map"
import * as Sentry from '@sentry/react';

const MapPage = () => {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred in MapPage File</p>}>
    <Map/>
    </Sentry.ErrorBoundary>
  )
}

export default Sentry.withProfiler(MapPage)