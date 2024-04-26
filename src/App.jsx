import { useState } from 'react'
import './App.css'
import {Flex} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background-object">
      </div>

      <section>
        <Flex
          style={{ height: '100vh' , maxWidth: '100vw', color:'#ececec', textAlign: 'center', background: 'rgba(0,0,0,0.2)', backdropFilter:'blur(100px)', fontSize:'2.5rem' }}
          justify='center'
          align='center'
        >
          <h1>
            👋 Hello! myself Suryansh Chauhan,<br/>
            designer & developer
          </h1>

        </Flex>
      </section>

      <Flex
          style={{  height: '60px' , width:'95%' , margin:'auto',
                    color:'#ececec', textAlign: 'center',
                    background: 'rgba(255,255,255,0.1)', 
                    backdropFilter:'blur(100px)', fontSize:'1.5rem',
                    borderRadius:'12p'
                  }}
          justify='center'
          align='center'
        >
          <h2>
          Hello
          </h2>

        </Flex>

    </>
  )
}

export default App
