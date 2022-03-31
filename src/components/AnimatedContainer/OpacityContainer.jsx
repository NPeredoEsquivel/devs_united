import { motion } from 'framer-motion/dist/framer-motion'

const animations = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}


function OpacityContainer({ children }) {
    return (
        <motion.div
            variants={animations}
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {children}
        </motion.div>
    );
}

export default OpacityContainer