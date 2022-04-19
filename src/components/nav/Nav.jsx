import React from 'react'
import './nav.css'
import Icon from '../../assets/img/icono.png'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <section className="section-nav">
        <div className="container-nav">
            <div className="container-icon">
                <motion.img animate={{ rotate: 360 }} transition={{ duration: 0.4 }} src={Icon} alt="" />
            </div>
            <ul className="lista-nav">
                <li>
                    <a href='#Home'><motion.i initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }} 
                    class="ri-home-2-line"></motion.i></a>
                </li>
                <li>
                    <a href='#Proyects'><motion.i initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.4 }} 
                    class="ri-user-line"></motion.i></a>
                </li>
                <li>
                    <a href="#Skills"><motion.i initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.4 }} 
                    class="ri-settings-line"></motion.i></a>
                </li>
                <li>
                    <a href="#View"><motion.i initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.4 }} 
                    class="ri-eye-line"></motion.i></a>
                </li>
                <li>
                    <a href="#Contact"><motion.i initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.4 }} 
                    class="ri-mail-open-line"></motion.i></a>
                </li>
            </ul>
            <div className="container-redes">
                <ul className="lista-redes">
                    <li>
                        <motion.i initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.4 }} 
                        class="ri-instagram-line"></motion.i>
                    </li>
                    <li>
                        <motion.i initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.4 }} 
                        class="ri-linkedin-fill"></motion.i>
                    </li>
                    <li>
                        <motion.i initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.4 }} 
                        class="ri-github-line"></motion.i>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Nav