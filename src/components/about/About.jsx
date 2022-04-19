import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import Cars from '../../assets/img/cars-web.jpg'
import Coffee from '../../assets/img/coffee-web.jpg'
import Burgers from '../../assets/img/burguers-web.jpg'
import Enterprise from '../../assets/img/enterprise-web.jpg'
import Plants from '../../assets/img/plants-web.jpg'
import Tinta from '../../assets/img/tinta-web.jpg'

const About = () => {
  return (
    <section className='section-about' id='Proyects'>
        <div className="container-about">
            <div className="container-title">
                <h1 aria-label='My Portfolio'>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}>M</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} 
                    viewport={{ once: true }} >y</motion.span>
                    <motion.span> </motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}>P</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}>o</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}>r</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}>t</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}>f</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true }}>o</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}>l</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.9 }}
                    viewport={{ once: true }}>i</motion.span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }}
                    viewport={{ once: true }}>o</motion.span>
                </h1>
            </div>
            <div className="container-info">
                <motion.p initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                viewport={{ once: true }}>
                    A small gallery of recents proyects chosen by me. If you like it and you are interesting on, visit <a href="">my work</a> page.
                </motion.p>
            </div>
            <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            viewport={{ once: true }} className="container-proyects">
                <motion.div
                whileInView={{ y: [0, 240, 240, 240, 0, 0, 0], 
                x: [0, 0 ,350, 700, 700, 350, 0] }}
                viewport={{ once: true}}
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 4}} className="container-card">
                    <img src={Cars} alt="" />
                    <div className="capa">
                        <h5>Cars website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ y: [0, 0, 240, 240, 240, -1, 0],
                x: [0, -300, -300, 0, 350, 350, 0] }}
                viewport={{ once: true}}
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 4}} className="container-card">
                    <img src={Burgers} alt="" />
                    <div className="capa">
                        <h5>Burgers website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ y: [0, 0, 0, 240, 240, 240, 0],
                x: [0, -300, -650, -650, -300, 0, 0] }}
                viewport={{ once: true}}
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 4}} className="container-card">
                    <img src={Coffee} alt="" />
                    <div className="capa">
                        <h5>Coffee website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ y: [0, 0, 0, -240, -240, -240, 0], 
                x: [0, 350, 700, 700, 350, 0, 0] }} 
                viewport={{ once: true}}
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 2.5}} className="container-card">
                    <img src={Enterprise} alt="" />
                    <div className="capa">
                        <h5>Enterprise website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ y: [0, 0, -240, -240, -240, 0, 0], 
                x: [0, 350, 350, 0, -300, -300, 0] }}
                viewport={{ once: true}} 
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 2.5}} className="container-card">
                    <img src={Plants} alt="" />
                    <div className="capa">
                        <h5>Plants website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{ y: [0, -240, -240, -240, 0, 0, 0], 
                x: [0, 0, -300, -650, -650, -300, 0] }}
                viewport={{ once: true}}
                transition={{ duration: 5, type: 'spring', bounce: 0.6, delay: 2.5}} className="container-card">
                    <img src={Tinta} alt="" />
                    <div className="capa">
                        <h5>Personal website</h5>
                        <h6>Visit Here<i class="ri-arrow-right-line"></i></h6>
                        <i class="ri-links-line"></i>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default About