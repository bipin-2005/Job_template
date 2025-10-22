import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="top">
            <img src={props.logo} alt="Logo" />
            <button>Save</button>
        </div>
        <div className="middle">
            <div>
              <div className='com_info'>
              <div id='company'>
                <b>{props.company}</b></div>
              <div>{props.date}</div>
              </div>
              <div id="pos">{props.post}</div>
              <div className='time'>
              <span>{props.tag1}</span>
              <span>{props.tag2}</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <div>{props.pay}</div>
              <div>{props.loc}</div>
              </div>
              <button>Apply Now</button>
          </div>
      </div>
    </>
  )
}

export default Card
