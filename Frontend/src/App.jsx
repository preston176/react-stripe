import { useState } from 'react'

import './App.css'
import StripeContainer from './Components/StripeContainer'

function App() {

  const [showItem, setShowItem] = useState(false)


  return (
    <div className='App'>
      <h1>The Pen Store</h1>
      {showItem ? <StripeContainer /> : <>
        <h3>$10.00</h3>
        <img className='image' src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSYb-8BA6Jj_FoXJK1KVwNzuqAShDFaGVhrvhQwhsY3v9XQExDCtY_sU0lasSH009WmD3yTfvqEds6Xp8vpFcA" alt="image" />
        <button onClick={() => setShowItem(true)}>Buy Now</button>
      </>}
    </div>
  )
}

export default App
