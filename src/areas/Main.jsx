import React from 'react';

/* CSS */
import './../sass/Main.scss'

/* IMAGENS */
import MuscleMan from '../images/homem-musculoso.png';
import GirlPushUP from '../images/pushup-girl.png';

/* COMPONENTS */
import Article from '../components/Article';
import Traineer from '../components/Traineer';
import Price from '../components/Price';

import IncentivoTextBlock from '../components/IncentivoTextBlock';
import StaffTextBlock from '../components/StaffTextBlock';
import PricesContainer from '../components/PricesContainer';

/* CONTROLLERS */
import TraineersInfos from '../controllers/TraineersInfos';
import PricesInfos from '../controllers/PricesInfos';

function Main() {
    return (
        <main id='corpo'>
            <Article id="intro">
                <div className='text-container'>
                    <h1>BUILD<br/>YOUR BODY</h1>
                    <div className='container-text'>
                        <p className='title-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repellat in corporis! Facere, nostrum ex magni beatae fugiat totam, nemo
                        </p>
                        <a href="#">LER MAIS</a>
                    </div>
                </div>
                <img className='muscle-man' src={MuscleMan} alt="Homem Musculoso" />
            </Article>
            <Article id="incentivo">
                <IncentivoTextBlock />
                <img className='push-up-girl' src={GirlPushUP} alt="Mulher Flexão" />
            </Article>
            <Article id="staff">
                <StaffTextBlock />
                <ul>
                    {React.Children.toArray(
                        TraineersInfos.map((Personal) => (
                            <Traineer src={Personal.src} name={Personal.name} desc={Personal.desc} />
                        ))
                    )}
                </ul>
            </Article>
            <Article id='prices'>
                <article id='price-container'>
                    <h2>OUR PRICES</h2>
                    <PricesContainer>
                        {React.Children.toArray(
                            PricesInfos.map((price) => (
                                <Price number={price.number} time={price.time} price={price.price}>
                                    {price.children}
                                </Price>
                            ))
                        )}
                    </PricesContainer>
                    <h2>WELCOME TO JOIN!</h2>
                </article>
            </Article>
        </main>
    );
}

export default Main;