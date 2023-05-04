import React from 'react'
import Team from "../../components/Team/Team"
import * as Sentry from '@sentry/react';

const TeamPage = () => {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred in TeamPage File</p>}>
    <Team/>
    </Sentry.ErrorBoundary>
  )
}

export default TeamPage