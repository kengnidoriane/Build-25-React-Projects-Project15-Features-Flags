import React, { createContext, useState, useEffect} from 'react'
import featureFlagsDAtaServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});


  async function fetchFeatureFlag() {
    try {
      setLoading(true)
      // original service call
      const response = await featureFlagsDAtaServiceCall();
      console.log(response);
      setEnabledFlags(response);
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlag();
  }, [])
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

