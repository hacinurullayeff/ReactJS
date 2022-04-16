import React from 'react'
import Typed from 'react-typed'

const header = () => {
  return (
    <div>
        <Typed className='typed-text'
            strings={[
                'Derece1',
                'Derece2',
                'Derece3']}
                typeSpeed={30}
                backSpeed={40}
                loop >
                <p/>
        </Typed>
    </div>
  )
}

export default header