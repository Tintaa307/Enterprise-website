import React from 'react'
import './home.css'
import Icon from '../../assets/img/icono.png'
import { motion } from 'framer-motion'

const OnCLick = () => {
    const sun = document.querySelector('.ri-sun-line');
    const moon = document.querySelector('.ri-moon-line');
    sun.classList.toggle("disable");
    moon.classList.toggle("show");
}

const OnCLick2 = () => {
    const sun = document.querySelector('.ri-sun-line');
    const moon = document.querySelector('.ri-moon-line');
    sun.classList.remove("disable");
    moon.classList.remove("show");
}

const Home = () => {
  return (
    <section className="section-home" id='Home'>
        <div className="container-home">
            <h1 className='title' aria-label='Hi, Im inta, web developer'>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1}}
                className='letter' aria-hidden='true'>H</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1}} className='letter' aria-hidden='true'>i</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2}} className='letter' aria-hidden='true'>,</motion.span>
                <br/>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3}} className='letter' aria-hidden='true'>I</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4}} className='letter' aria-hidden='true'>m</motion.span>
                <motion.img initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: 1.5}} src={Icon} alt="" />
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.6}} className='letter' aria-hidden='true'>i</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.7}} className='letter' aria-hidden='true'>n</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8}} className='letter' aria-hidden='true'>t</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.9}} className='letter' aria-hidden='true'>a</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2}} className='letter' aria-hidden='true'>,</motion.span>
                <br/>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.1}} className='letter' aria-hidden='true'>w</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.2}} className='letter' aria-hidden='true'>e</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.3}} className='letter' aria-hidden='true'>b</motion.span>
                <span> </span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.4}} className='letter' aria-hidden='true'>d</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.5}} className='letter' aria-hidden='true'>e</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.6}} className='letter' aria-hidden='true'>v</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.7}} className='letter' aria-hidden='true'>e</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.8}} className='letter' aria-hidden='true'>l</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.9}} className='letter' aria-hidden='true'>o</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 3}} className='letter' aria-hidden='true'>p</motion.span>
                <motion.span  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 3.1}} className='letter' aria-hidden='true'>e</motion.span>
                <motion.span initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 3.2}} className='letter' aria-hidden='true'>r</motion.span>
            </h1>
            <motion.div initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 2.8, type: 'spring', bounce: 0.5,}} className="container-text">
                <h3 className='subtitle'>Front End Developer / Wordpress Expert</h3>
            </motion.div>
            <motion.div initial={{ x: -120, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.7, delay: 3, type: 'spring', bounce: 0.5,}} className="container-btn">
                <button className='contact'>
                    <span className="dash">

                    </span>
                    <span className="text">Contact me!</span>
                </button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 3.2}} className="container-scroll-lf">
                <span>scroll down</span>
                <i class="ri-arrow-down-line"></i>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2}} className="container-scroll-rg">
                <span>scroll down</span>
                <i class="ri-arrow-down-line"></i>
            </motion.div>
            <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0,
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 0, 0],
            }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.5, delay: 3.5 }}  
            drag
            dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
            }}className="container-sun">
                <motion.i onClick={OnCLick} class="ri-sun-line"></motion.i>
                <motion.i onClick={OnCLick2} class="ri-moon-line"></motion.i>
            </motion.div>
        </div>
    </section>
  )
}

export default Home