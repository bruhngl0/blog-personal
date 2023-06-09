import React from 'react'

const Bruh = () => {

    const openEmail = ()=> {
        window.location.href = 'mailto: bruhngl0@gmail.com';
    }
  return (
    <div className='main'>
      <section>
        <h1>G'DAY,&nbsp; I am Bruh </h1>
        <div className='image-rotate-container'>
          <img src = '/Layer.png' className='rotating-image'/>
        </div>
     </section>

     <p>I'm just a dude who is trying to become a solid web developer and a decent human being along the way</p>
     <button onClick = {openEmail}>contact me</button>
    </div>
  )
}

export default Bruh
