import { useState } from 'react'
import './MyCard2.css'
import { motion } from 'framer-motion'

const MyCard2 = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            layout
            className="card"
            onClick={() => setIsOpen(!isOpen)}
            style={{ borderRadius: '1rem' }}
            transition={{ duration: .5 }}
        >
            <motion.div
                className="card-top"
                layout="position"
            >
                <div className="card-top__header">
                    <h3>React & Framer.motion </h3>
                </div>
            </motion.div>

            {isOpen && (
                <motion.div
                    className="card-content"
                    initial={{ clipPath: 'circle(0% at 0 0)' }}
                    animate={{ clipPath: 'circle(140.9% at 0 0)' }}
                    transition={{
                        duration: .5,
                        ease: 'easeInOut',
                        type: 'spring',
                        damping: 25,
                        stiffness: 100
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet ...
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet ...
                    </p>
                </motion.div>
            )}
        </motion.div>
    )
}

export default MyCard2
