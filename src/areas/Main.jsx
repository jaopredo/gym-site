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
                <div className='text-container'>
                    <h2>YOUR BODY IS<br/>A WORK OF ART</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus cum veniam tempore sint consequatur animi deleniti delectus! Vitae eligendi, est eveniet aliquid asperiores labore optio natus. Mollitia, consequuntur id.
                    </p>
                    <a href="#">LER MAIS</a>
                </div>
                <img className='push-up-girl' src={GirlPushUP} alt="Mulher Flexão" />
            </Article>
            <Article id="staff">
                <div className='text-container'>
                    <h2>WE ARE HERE TO GUIDE YOU</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae cum quam consequuntur enim quo ad adipisci mollitia quaerat ullam, ea quis nihil dolore dolorum doloremque.
                    </p>
                </div>
                <menu>
                    {React.Children.toArray(
                        TraineersInfos.map((Personal) => (
                            <Traineer src={Personal.src} name={Personal.name} desc={Personal.desc} />
                        ))
                    )}
                </menu>
            </Article>
            <Article id='prices'>
                <h2>NOSSOS PREÇOS</h2>
                <menu>
                    {React.Children.toArray(
                        PricesInfos.map((price) => (
                            <Price number={price.number} time={price.time} price={price.price}>
                                {price.children}
                            </Price>
                        ))
                    )}
                </menu>
                <h2>SINTA-SE EM CASA!</h2>
            </Article>
        </main>
    );
}

export default Main;