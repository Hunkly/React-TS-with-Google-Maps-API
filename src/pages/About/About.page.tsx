import React from 'react';
import Header from "../../components/Header/Header.component";
import AboutStyled from './About.styled';
import image from '../../assets/image.jpg';

export default function About(){

    return(
        <AboutStyled>
            <Header children="About me"/>
            <div className="about__text">
                <p>So hello there. My name is Viktor and this is my simple project. I am 20 y.o. and i was borned in Nova Kakhovka that locates in Kherson region. I love read books by Remarque,
                listen music by The Neighbourhood, Rammstein, Twenty one Pilots and Ciggarrets after Sex.</p>
                <p>My best lover - my guitar.</p>
                <p>I have a great family and true friends. I am a happy son, brother and uncle.</p>
                <p>  All my life i have been interested of software engeeniering. I tried too many things such as OOP, making games, etc. But my choiсe fell on web-development.
                    You can ask me why but i won't have give you a objective answer. I feel in myself that web-development is what i need and what i can do.</p>
            </div>
            <div className="about__photo">
                <img
                    src={image}
                    alt="Me"
                />
                <p>Just me ;)</p>
            </div>
        </AboutStyled>
    )
}


