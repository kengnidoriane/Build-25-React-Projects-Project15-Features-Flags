import React from 'react'
import FeatureFlagGlobalState from './components/feature-flags/context'
import FeatureFlags from './components/feature-flags'


function App() {

  return (
    <>
      {/* Feature flags implementation */}
      <FeatureFlagGlobalState >
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  )
}

export default App
