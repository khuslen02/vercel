import React from 'react'
import zurag from './asda.png'
const styles={
  zurag:{
    height:"100vh",
    width:"100vw",
  }
}
export const App = () => {
  return (
    <img src={zurag} style={styles.zurag}/>
  )
}
export default App