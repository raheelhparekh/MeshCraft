import React, { useEffect, useRef } from 'react';
import './parallax.css';

import hill1 from './images/background.jpeg'
import hill3 from './images/mountain-1.png'
import hill4 from './images/mountain-2.png'
import leaf from './images/side.png'
import logo from './images/logo.png'


const Parallax = () => {
    const textRef = useRef(null);
    const leafRef = useRef(null);
    const hill1Ref = useRef(null);
    const hill4Ref = useRef(null);
    const hill5Ref = useRef(null);

    const handleScroll = () => {
        const value = window.scrollY;
        if (textRef.current) {
            textRef.current.style.marginTop = value * 2.5 + 'px';
        }
        if (leafRef.current) {
            leafRef.current.style.left = value * 1.5 + 'px';
        }
        if (hill1Ref.current) {
            hill1Ref.current.style.top = value * 1 + 'px';
        }
        if (hill4Ref.current) {
            hill4Ref.current.style.left = value * -0.5 + 'px';
        }
        if (hill5Ref.current) {
            hill5Ref.current.style.top = value * 1.5 + 'px';
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>

            <section className="parallax">
                <img src={hill1} ref={hill1Ref} id="hill1" alt="Hill 1" />
           
                <img src={hill3} id="hill3" alt="Hill 3" />
                <img src={hill4} ref={hill4Ref} id="hill4" alt="Hill 4" />
                
                <h2 ref={textRef} id="text">WELCOME TO</h2>
                <img src={logo} ref={textRef} id="logo" alt="Hill 4" />
                <img src={leaf} ref={leafRef} id="leaf" alt="Leaf" />
               
            </section>
            
            <section className="sec">
             
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit,
                    doloribus tenetur natus minus accusamus laudantium repellat nostrum,
                    commodi sapiente soluta aperiam, voluptas ipsa tempore molestiae. Vitae,
                    consectetur qui. Cumque facere maiores veritatis voluptas amet eaque
                    illo, fugit eius iste modi similique possimus saepe dolore temporibus at
                    placeat nesciunt earum, deserunt laboriosam perferendis assumenda! Sint
                    facilis itaque, fugit amet numquam maxime culpa, ratione nesciunt quas
                    incidunt placeat magni ipsum dolore rem, cupiditate in voluptatem libero
                    perspiciatis mollitia! Possimus sed velit in recusandae iusto adipisci
                    nobis at quas id dolore, dolorem harum ut inventore non iste placeat,
                    iure reprehenderit, excepturi quod. Odio eligendi aliquid labore
                    nesciunt quia eos eaque ducimus doloremque, recusandae quo accusantium
                    rem nam veritatis. Laudantium, voluptatibus earum sit placeat neque
                    delectus nulla, hic eveniet itaque facilis aliquid qui. <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit,
                    doloribus tenetur natus minus accusamus laudantium repellat nostrum,
                    commodi sapiente soluta aperiam, voluptas ipsa tempore molestiae. Vitae,
                    consectetur qui. Cumque facere maiores veritatis voluptas amet eaque
                    illo, fugit eius iste modi similique possimus saepe dolore temporibus at
                    placeat nesciunt earum, deserunt laboriosam perferendis assumenda! Sint
                    facilis itaque, fugit amet numquam maxime culpa, ratione nesciunt quas
                    incidunt placeat magni ipsum dolore rem, cupiditate in voluptatem libero
                    perspiciatis mollitia! Possimus sed velit in recusandae iusto adipisci
                    nobis at quas id dolore, dolorem harum ut inventore non iste placeat,
                    iure reprehenderit, excepturi quod. Odio eligendi aliquid labore
                    nesciunt quia eos eaque ducimus doloremque, recusandae quo accusantium
                    rem nam veritatis. Laudantium, voluptatibus earum sit placeat neque
                    delectus nulla, hic eveniet itaque facilis aliquid qui. <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit,
                    doloribus tenetur natus minus accusamus laudantium repellat nostrum,
                    commodi sapiente soluta aperiam, voluptas ipsa tempore molestiae. Vitae,
                    consectetur qui. Cumque facere maiores veritatis voluptas amet eaque
                    illo, fugit eius iste modi similique possimus saepe dolore temporibus at
                    placeat nesciunt earum, deserunt laboriosam perferendis assumenda! Sint
                    facilis itaque, fugit amet numquam maxime culpa, ratione nesciunt quas
                    incidunt placeat magni ipsum dolore rem, cupiditate in voluptatem libero
                    perspiciatis mollitia! Possimus sed velit in recusandae iusto adipisci
                    nobis at quas id dolore, dolorem harum ut inventore non iste placeat,
                    iure reprehenderit, excepturi quod. Odio eligendi aliquid labore
                    nesciunt quia eos eaque ducimus doloremque, recusandae quo accusantium
                    rem nam veritatis. Laudantium, voluptatibus earum sit placeat neque
                    delectus nulla, hic eveniet itaque facilis aliquid qui. <br /><br />
                </p>
            </section>
        </div>
    );
};

export default Parallax;