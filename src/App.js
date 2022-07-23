import React from 'react'
import { Provider } from 'react-redux'
import  store from './redux/store'

// import Counter from './componentsRedux/Counter/Counter'
// import Info from './componentsRedux/Info/Info'

import Fruits from './componentsRedux/Fruits/Fruits'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <Info />
        <Counter /> */}
        <Fruits />
      </div>
    </Provider>
  )
}

export default App

// Nota: Este es el componente padre (principal) {}
