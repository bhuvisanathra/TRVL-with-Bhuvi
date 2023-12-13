import React from 'react'
import { CardItem } from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">

                    {/* Ul-1 */}
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall inside the Amazon JunglThe Modpar Fort, built by Jamsaheb around four centuries ago, stands on a high hill at the convergence of Jamsaheb and Rana Saheb territories. Strategically designed with four circular forts for defense, the fort's walls are concealed from the outside, showcasing military tactical foresight. Today, the settlement outside the fort lies in a dilapidated state.e" label='Heritage' path='/services' />
                        <CardItem src="images/img-2.jpg" text="Ghumli, once the capital of the Saindhava and later the Jethwa dynasty in western Saurashtra, served as the second capital from 1220. However, in 1313, it faced destruction after Rana Bhanji Jethwa's defeat and subsequent abandonment, attributed to a curse linked to a tragic love affair. The Jadeja clan, led by Barmaniyaji Jadeja, attacked Ghumli, fulfilling a divine dream, resulting in the construction of the Ashapura Mata Temple and the transformation of Ghumli into ruins." label='Divine Place' path='/services' />
                    </ul>

                    {/* Ul-2 */}
                    <ul className='cards__items'>
                        <CardItem src='images/img-3.jpg' text='Abhapar Hill Station' label='Tracking' path='/services' />
                        <CardItem src='images/img-4.jpg' text='Kileshwar Mahadev temple' label='Divine Place' path='/products' />
                        <CardItem src='images/img-8.jpg' text='Navlakha Temple' label='Heritage' path='/sign-up' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards