import './work.css'
import { motion } from 'framer-motion'
import Html1 from '../../assets/img/html1.gif'
import Css from '../../assets/img/css2.gif'
import JavaScript from '../../assets/img/js3.gif'
import Reactjs from '../../assets/img/react4.gif'
import Vite from '../../assets/img/vite5.jpg'

const OnClick1 = () => {
    const first = document.querySelector(".item-img1");
    const second = document.querySelector(".item-img2");
    const third = document.querySelector(".item-img3")
    const fourth = document.querySelector(".item-img4")
    const five = document.querySelector(".item-img5")
    five.classList.remove("show")
    fourth.classList.remove("show")
    first.classList.toggle("show");
    second.classList.remove("show");
    third.classList.remove("show");
}

const OnClick2 = () => {
    const second = document.querySelector(".item-img2");
    const first = document.querySelector(".item-img1");
    const third = document.querySelector(".item-img3")
    const fourth = document.querySelector(".item-img4")
    const five = document.querySelector(".item-img5")
    five.classList.remove("show")
    fourth.classList.remove("show")
    first.classList.remove("show");
    second.classList.toggle("show");
    third.classList.remove("show")
}

const OnClick3 = () => {
    const second = document.querySelector(".item-img2");
    const first = document.querySelector(".item-img1");
    const third = document.querySelector(".item-img3")
    const fourth = document.querySelector(".item-img4")
    const five = document.querySelector(".item-img5")
    five.classList.remove("show")
    fourth.classList.remove("show")
    first.classList.remove("show");
    second.classList.remove("show");
    third.classList.toggle("show")
}

const OnClick4 = () => {
    const second = document.querySelector(".item-img2");
    const first = document.querySelector(".item-img1");
    const third = document.querySelector(".item-img3")
    const fourth = document.querySelector(".item-img4")
    const five = document.querySelector(".item-img5")
    five.classList.remove("show")
    first.classList.remove("show");
    second.classList.remove("show");
    third.classList.remove("show")
    fourth.classList.toggle("show")
}

const OnClick5 = () => {
    const second = document.querySelector(".item-img2");
    const first = document.querySelector(".item-img1");
    const third = document.querySelector(".item-img3")
    const fourth = document.querySelector(".item-img4")
    const five = document.querySelector(".item-img5")
    five.classList.toggle("show")
    first.classList.remove("show");
    second.classList.remove("show");
    third.classList.remove("show")
    fourth.classList.remove("show")
}

const Work = () => {     
  return (
    <section className="section-work" id='View'>
        <div className="container-work">
            <div className="container-title">
                <h1 aria-label='My Work'>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}>M</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}>y</motion.span>
                    <motion.span> </motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}>P</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}>r</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}>o</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}>g</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}>r</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true }}>e</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}>s</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.9 }}
                    viewport={{ once: true }}>s</motion.span>
                    
                </h1>
            </div>
            <motion.div 
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.5, type: 'spring', bounce: 0.6 }}
            viewport={{ once: true }} className="container-works-info">
                <p>
                    In this part im going to show my <span>progress</span> on frontend development, im so proud of it and i aspire to be better with the passage of time.
                </p>
            </motion.div>
            <div className="container-progress">
                <div className="container-buttons">
                    <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 3.2, type: 'spring', bounce: 0.6 }}
                    viewport={{ once: true }} 
                    className="container-btn">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={OnClick1}
                        className='btn'>
                            <span>
                              1
                            </span>
                        </motion.button>
                    </motion.div>
                    <motion.div 
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 3.6, type: 'spring', bounce: 0.6 }} 
                    viewport={{ once: true }}
                    className="container-btn">
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}  
                        onClick={OnClick2}
                        className='btn'>
                            <span>
                               2
                            </span>
                        </motion.button>
                    </motion.div>
                    <motion.div  
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 4, type: 'spring', bounce: 0.6 }} 
                    viewport={{ once: true }}
                    className="container-btn">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={OnClick3} 
                        className='btn'>
                            <span>
                              3
                            </span>
                        </motion.button>
                    </motion.div>
                    <motion.div 
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 4.4, type: 'spring', bounce: 0.6 }}
                    viewport={{ once: true }}
                    className="container-btn">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={OnClick4}
                        className='btn'>
                            <span>
                              4
                            </span>
                        </motion.button>
                    </motion.div>
                    <motion.div  
                    initial={{ x: -400, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 4.8, type: 'spring', bounce: 0.6 }} 
                    viewport={{ once: true }}
                    className="container-btn">
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={OnClick5}
                        className='btn'>
                            <span>
                             5
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <div className="container-imgs-progress">
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }} 
                className="item-img1">
                    <img src={Html1} alt="" />
                    <motion.h2
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}>Comence con codigos muy simples en sublime text</motion.h2>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }} 
                className="item-img2">
                    <img src={Css} alt="" />
                    <motion.h2
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}>Tambien probaba estilos con css muy basico</motion.h2>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }} 
                className="item-img3">
                    <img src={JavaScript} alt="" />
                    <motion.h2
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}>Con el tiempo comence con JavaScript mas avanzado</motion.h2>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }} 
                className="item-img4">
                    <img src={Reactjs} alt="" />
                    <motion.h2
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}>Cuando aprendi JS comenece directo con ReactJS</motion.h2>
                </motion.div>

                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }} 
                className="item-img5">
                    <img src={Vite} alt="" />
                    <motion.h2
                    initial={{ opacity:0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.6 }}>Cuando me volvi experto en react finalize aprendiendo Vite</motion.h2>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Work