import React from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Rokesh.</span></p>
                    <p>How can I help you today ?</p>
                </div>

                <div className="cards">
                    <div className="card">
                        <p>Suggest some code to create a audio book for study purpose</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Briefly summarize this concept : audio files</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>And tell me how to create like audiobook</p>
                        <img src={assets.message_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Suggest some code to create a audio book for study purpose</p>
                        <img src={assets.code_icon} alt="" />
                    </div>


                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Search and develop your BRAIN' />
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its respones. your privacy may be concern</p>


                </div>



            </div>




        </div>
    )
}

export default Main