import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <>
      <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>
                Description
            </div>
            <div className='descriptionbox-nav-box fade'>
                Reviews (122)
            </div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab ullam esse vitae alias voluptatem voluptate ducimus 
            blanditiis ex assumenda corrupti debitis hic,
            pariatur error consequuntur iusto architecto tempora atque mollitia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Sunt pariatur odio maiores. Natus, cupiditate.
            Veritatis praesentium atque et quibusdam tempore.</p>
        </div>
      </div>
    </>
  )
}

export default DescriptionBox
