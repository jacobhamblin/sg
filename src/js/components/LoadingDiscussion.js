import React, { Component } from 'react'
import { LoadingDots } from '../components'
import '../../scss/loadingDiscussion.scss'

const LoadingDiscussion = () => {
  return (
    <div>
      <div className="loading-dots-container">
        <LoadingDots/>
      </div>
      <div className='comment starter'>
        <div className='title-bar'>
          <div className='title bar medium'/>
        </div>
        <div className='user-container'>
          <div className='avatar'></div>
          <div className='bar short'/>
        </div>
        <div className='message-container'>
          <div className='toggle-comments'>
          </div>
          <div className='message'>
            <div className='bar'/>
            <div className='short'/>
          </div>
        </div>
        <div className='lower-bar'>
          <div className='bar short'/>
        </div>
      </div>

      <div>
        <div className='comment'>
          <div className='user-container'>
            <div className='avatar'></div>
            <div className='bar short'/>
          </div>
          <div className='message-container'>
            <div className='toggle-comments'>
            </div>
            <div className='message'>
              <div className='bar'/>
              <div className='bar'/>
            </div>
          </div>
          <div className='lower-bar'>
            <div className='bar short'/>
          </div>
        </div>

        <div>
          <div className='comment one'>
            <div className='user-container'>
              <div className='avatar'></div>
              <div className='bar short'/>
            </div>
            <div className='message-container'>
              <div className='toggle-comments'>
              </div>
              <div className='message'>
                <div className='bar'/>
                <div className='bar'/>
                <div className='bar short'/>
              </div>
            </div>
            <div className='lower-bar'>
              <div className='bar short'/>
            </div>
          </div>

          <div>
            <div className='comment one'>
              <div className='user-container'>
                <div className='avatar'></div>
                <div className='bar short'/>
              </div>
              <div className='message-container'>
                <div className='toggle-comments'>
                </div>
                <div className='message'>
                  <div className='bar short'/>
                </div>
              </div>
              <div className='lower-bar'>
                <div className='bar short'/>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div>
        <div className='comment'>
          <div className='user-container'>
            <div className='avatar'></div>
            <div className='bar short'/>
          </div>
          <div className='message-container'>
            <div className='toggle-comments'>
            </div>
            <div className='message'>
              <div className='bar'/>
            </div>
          </div>
          <div className='lower-bar'>
            <div className='bar short'/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LoadingDiscussion
