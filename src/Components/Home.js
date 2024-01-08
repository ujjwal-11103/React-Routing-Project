import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import '../Styles/Home.css'
export default function Home() {
    return (
        <div>
            <Nav />
            <div className="home-main">

                <div className="home-container">

                    <div className="home-left">

                        <div className="left-wrapper">

                            <h1>Hello <span className='word'>React !</span></h1>
                            <h2>A cool JavaScript library</h2>

                        </div>

                    </div>

                    <div className="home-right">

                        <div className="img-part">

                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjiMDaclXMZGBlLGtHH0Scnbx0Yn4bLTspvgkffdqHBE1Wdp_5AHV0Z1SaD0opW7un028&usqp=CAU" alt="img-react" /> */}
                            <img src={process.env.PUBLIC_URL + '/logo512.png'} alt="React Logo" />


                        </div>

                    </div>
                </div>


            </div>


            {/* <h1>This is Home</h1>
            <Link to='/Nav'> Nav</Link> */}
        </div>
    )
}

