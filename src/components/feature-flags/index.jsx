import React, {useContext} from 'react'

import Accordian from '../accordian'
import LightDarkMode from '../theme-switch'
import RandomColor from '../ramdom-color'
import TicTacToe from '../tic-tac-toe/tic-tac-toe'
import TreeView from '../tree view'
import { FeatureFlagsContext } from './context'
import menus from '../tree view/data'


export default function FeatureFlags() {
  const {loading, enabledFlags} = useContext(FeatureFlagsContext)

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />
    },
    {
      key: 'showTicTacToe',
      component: <TicTacToe />
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />
    },
    {
      key: 'showAccordion',
      component: <Accordian />
    },
    {
      key: 'showTreeView',
      component: <TreeView menus={ menus }/>
    },
  ]

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey]
  }

  if (loading) {
    return <h1>Loading data! please wait</h1>
  }
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem =>checkEnabledFlags(componentItem.key) ? componentItem.component : null )
      }
    </div>
  )
}
