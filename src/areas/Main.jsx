import React from 'react';

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
        <main>
            <Article id="intro">
                <h1>CONSTRUA SEU CORPO</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae cumque amet assumenda cum provident cupiditate odit, ipsum id eos animi aut perferendis possimus saepe aperiam dignissimos. Libero, fugit ipsam.
                </p>
                <a href="#">LER MAIS</a>
                <img src={MuscleMan} alt="Homem Musculoso" />
            </Article>
            <Article id="incentivo">
                <div className='text-container'>
                    <h2>SEU CORPO É UMA OBRA DE ARTE</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe temporibus cum veniam tempore sint consequatur animi deleniti delectus! Vitae eligendi, est eveniet aliquid asperiores labore optio natus. Mollitia, consequuntur id.
                    </p>
                    <a href="#">LER MAIS</a>
                </div>
                <img src={GirlPushUP} alt="Mulher Flexão" />
            </Article>
            <Article id="staff">
                <h2>ESTAMOS AQUI PARA TE ENSINAR</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae cum quam consequuntur enim quo ad adipisci mollitia quaerat ullam, ea quis nihil dolore dolorum doloremque.
                </p>
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