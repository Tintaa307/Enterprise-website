import React from 'react'
import './skills.css'
import { motion, useAnimationFrame } from 'framer-motion'

const Skills = () => {
  return (
    <section className="section-skills" id='Skills'>
        <div className="container-skills">
            <div className="container-title">
                <h1 aria-label='My Skills'>
                    <motion.span
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}
                     viewport={{ once: true }}>M</motion.span>
                    <motion.span dra initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}
                    viewport={{ once: true }}>y</motion.span>
                    <motion.span> </motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}
                    viewport={{ once: true }}>S</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}>k</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}
                    viewport={{ once: true }}>i</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}
                    viewport={{ once: true }}>l</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}>l</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.7 }}
                    viewport={{ once: true }}>s</motion.span>
                    <span> </span>
                    <motion.span initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.8 }}
                    viewport={{ once: true }}>&</motion.span>
                    <span> </span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.9 }}
                    viewport={{ once: true }}>E</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }}
                    viewport={{ once: true }}>x</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.1 }}
                    viewport={{ once: true }}>p</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.2 }}
                    viewport={{ once: true }}>e</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.3 }}
                    viewport={{ once: true }}>r</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.4 }}
                    viewport={{ once: true }}>i</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }}
                    viewport={{ once: true }}>e</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.6 }}
                    viewport={{ once: true }}>n</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.7 }}
                    viewport={{ once: true }}>c</motion.span>
                    <motion.span  initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.8 }}
                    viewport={{ once: true }}>e</motion.span>
                </h1>
            </div>
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.6 }} className="container-compare-skills">
                <div className="container-skills">
                    <div className="skills">
                        <h3>Front-end</h3>
                        <div className="container-dash">
                            <motion.div initial={{ width: 0, color: "#000" }}
                            whileInView={{ width: 380, height: 5, background: "#08fdd8" }}
                            transition={{ duration: 2, type: 'spring', bounce: 0.7, delay: 2.8 }}
                            viewport={{ once: true }} className="dash1">
                            </motion.div>
                        </div>
                    </div>
                    <div className="skills">
                        <h3>ReactJS</h3>
                        <div className="container-dash">
                            <motion.div initial={{ width: 0, color: "#000" }}
                            whileInView={{ width: 330, height: 5, background: "#FF0033" }}
                            transition={{ duration: 2, type: 'spring', bounce: 0.7, delay: 3.3 }}
                            viewport={{ once: true }} className="dash2">
                            </motion.div>
                        </div>
                    </div>
                    <div className="skills">
                        <h3>Back-end</h3>
                        <div className="container-dash">
                            <motion.div initial={{ width: 0, color: "#000" }}
                            whileInView={{ width: 280, height: 5, background: "#9933FF" }}
                            transition={{ duration: 2, type: 'spring', bounce: 0.7, delay: 3.8 }}
                            viewport={{ once: true }} className="dash3">
                            </motion.div>
                        </div>
                    </div>
                    <div className="skills">
                        <h3>TypeScript</h3>
                        <div className="container-dash">
                            <motion.div initial={{ width: 0, color: "#000" }}
                            whileInView={{ width: 220, height: 5, background: "#CC66FF" }}
                            transition={{ duration: 2, type: 'spring', bounce: 0.7, delay: 4.2 }}
                            viewport={{ once: true }} className="dash4">
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 3.2 }} className="container-skills-text">
                <div className="container-texts">
                    <motion.div drag
                     dragConstraints={{
                       top: 0,
                       left: -10,
                       right: 450,
                       bottom: 450,
                    }} 
                    animate={{ x: [0, 200, 300, 50, 0],
                    y: [0, 300, 300, 400, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 3 }}
                    className="container-item">
                        <span>ReactJS</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -50,
                       left: -10,
                       right: 450,
                       bottom: 410,
                    }} 
                    animate={{ x: [0, 100, 200, 150, 0],
                    y: [0, 100, 10, 400, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, delay: 2.8 }}
                    className="container-item">
                        <span>HTML</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -85,
                       left: -10,
                       right: 450,
                       bottom: 360,
                    }} 
                    animate={{ x: [0, 300, 300, 30, 0],
                    y: [0, 0, 300, 100, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, delay: 2.6 }}    
                    className="container-item">
                        <span>CSS</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -150,
                       left: -10,
                       right: 450,
                       bottom: 310,
                    }}  
                    animate={{ x: [0, 400, 400, 369, 0],
                    y: [0, -90, 300, 120, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, delay: 2.4 }}
                    className="container-item">
                        <span>Bootstrap</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -190,
                       left: -10,
                       right: 450,
                       bottom: 260,
                    }} 
                    animate={{ x: [0, 0, 400, 400, 0],
                    y: [0, -190, -190, 200, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, delay: 2.2 }}
                    className="container-item">
                        <span>MySql</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -250,
                       left: -10,
                       right: 450,
                       bottom: 200,
                    }} 
                    animate={{ x: [0, 0, 400, 0, 0],
                    y: [0, 180, 180, -220, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    className="container-item">
                        <span>Framer</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -300,
                       left: -10,
                       right: 450,
                       bottom: 150,
                    }} 
                    animate={{ x: [0, 159, 400, 400, 0],
                    y: [0, 0, 80, -310, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1.8 }}
                    className="container-item">
                        <span>JavaScript</span>
                    </motion.div>
                    <br />
                    <motion.div drag
                     dragConstraints={{
                       top: -350,
                       left: -10,
                       right: 450,
                       bottom: 100,
                    }} 
                    animate={{ x: [0, 90, 210, 120, 0],
                    y: [0, 80, -120, -370, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1.6 }}
                    className="container-item">
                        <span>Git</span>
                    </motion.div>
                    <motion.div drag
                     dragConstraints={{
                       top: -410,
                       left: -10,
                       right: 450,
                       bottom: 40,
                    }} 
                    animate={{ x: [0, 200, 400, 220, 0],
                    y: [0, -210, -210, 60, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1.4 }}
                    className="container-item">
                        <span>Python</span>
                    </motion.div>
                    <motion.div drag
                     dragConstraints={{
                       top: -430,
                       left: -10,
                       right: 450,
                       bottom: -10,
                    }} 
                    animate={{ x: [0, 319, 49, 150, 0],
                    y: [0, -300, -210, -300, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1.2 }}
                    className="container-item">
                        <span>NodeJS</span>
                    </motion.div>
                    <motion.div drag
                     dragConstraints={{
                       top: -470,
                       left: -10,
                       right: 450,
                       bottom: -30,
                    }}
                    animate={{ x: [0, 239, 222, 326, 0],
                    y: [0, 0, -289, -189, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                    className="container-item">
                        <span>PHP</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Skills