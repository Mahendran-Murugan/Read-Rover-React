import React from 'react'
import '../style/service.css'
import book1 from '../assets/book1.jpg'
import book2 from '../assets/book10.png'
import book3 from '../assets/book2.png'
import book4 from '../assets/book3.png'
import book5 from '../assets/book4.png'
import book6 from '../assets/book8.png'

export const Service = () => {
  return (
    <div className="servicehole1">
        <div className="serviceimages">
            <div className="serviceimg">
                <img src={book1} alt="img1"/>
                <h1>Spare - J.R.Moehringer</h1>
                <p>Spare is a memoir by Prince Harry, Duke of Sussex, which was released on 10 January 2023. It was ghostwritten by J. R. Moehringer and published by Penguin Random House. It is 416 pages long and available in digital, paperback, and hardcover formats and has been translated into fifteen languages. There is also a 15-hour audiobook edition, which Harry narrates himself.</p>

                    <a href="#">Read More <span> &#8594;</span></a>
            </div>
            <div className="serviceimg">
                <img src={book2} alt="img2"/>
                <h1>As Good As My Word - KM Chandrashekhar</h1>
                <p>“As Good as My Word,” written by KM Chandrasekhar, who served as the Cabinet Secretary from 2007 to 2011, begins as an autobiography with descriptive descriptions of his early years, academic career, and college years, all of which take place inside the walls of a modest but orderly Malayali home. The book offers a front-row seat to Indian politics and bureaucracy during the UPA era. In his book, Chandrasekhar gives a thorough overview of the UPA administration during one of its most difficult periods and talks about his own role in navigating India through many crises.</p>
        
                <a href="#">Read More <span> &#8594;</span></a>
                
            </div>
            <div className="serviceimg">
                <img src={book3} alt="img3"/>
                <h1>Made In India - Amitabh Kant</h1>
                <p>Retired Indian Administrative Service (IAS) officer Amitabh Kant, who served as Chief Executive Officer (CEO) of the National Institution for Transforming India (NITI Aayog) (2016-2022), has authored a new book titled “Made In India: 75 Years of Business and Enterprise” published by the Rupa Publications India.</p>

                <a href="#">Read More <span> &#8594;</span></a>      
            </div>
            <div className="serviceimg">
                <img src={book4} alt="img4"/>
                <h1>Kargil: Ek Yatri Ki Jubani - Shri Rishi Raj</h1>
                <p>Ajay Bhatt, Minister of State (MoS), Ministry of Defence (MoD), released the book and illustrations titled “Kargil: Ek Yatri Ki Jubani” (Hindi Edition) authored by Rishi Raj at the Constitution Club of India, New Delhi, Delhi. The book which pays tribute to the Martyrs of Kargil War was published by Prabhat Prakashan.</p>

                <a href="#">Read More <span> &#8594;</span></a>
            </div>
            <div className="serviceimg">
                <img src={book5} alt="img5" width="300px"/>
                <h1>Do Palkon Ki Chhavn Main - Dr. Hema Joshi</h1>
                <p>Prasoon Joshi, celebrated poet, lyricist, and Chief of the Central Board of Film Certification (CBFC), recently unveiled Do Palkon Ki Chhavn Main, a book authored by the esteemed academician Dr. Hema Joshi. The book, a fictionalized account, intricately weaves together the author's literary prowess with her deep affection for two Indian cities Almora, her birthplace, and Prayagraj, where she spent her later years.</p>

                <a href="#">Read More <span> &#8594;</span></a>
            </div>
            <div className="serviceimg">
                <img src={book6} alt="img6"/>
                <h1>Victory City - Salman Rushdie</h1>
                <p>NEW YORK TIMES EDITORS CHOICE The epic tale of a woman who breathes a fantastical empire into existence, only to be consumed by it over the centuries—from the transcendent imagination of Booker Prize winning, internationally bestselling author Salman Rushdie</p>
                <a href="#">Read More <span> &#8594;</span></a>
            </div>
        </div>
    </div>
  )
}
