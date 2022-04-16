import React from 'react'
import Typed from 'react-typed'

const header = () => {
  return (
    <div>
        <Typed className='typed-text'
            strings={[
                'Search for products',
                'Search for categories',
                'Search for brands']}
                typeSpeed={30}
                backSpeed={40}
                loop >
                <p/>
        </Typed>
    </div>
  )
}

export default header