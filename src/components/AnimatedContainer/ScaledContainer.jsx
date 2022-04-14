import { motion } from 'framer-motion/dist/framer-motion'

function ScaledContainer({ className, childrenComponent }) {

    const styles = {
        cursor: 'pointer',
        scale: 1.05,
        transition: 'all .8s ease-in-out',

    }

    const scale = {
        scale: 0.9,
        x: "-5px",
        y: "5px"
    }

    return (
        <motion.div
            className={className}
            whileHover={styles}
            whileTap={scale}
        >
            {childrenComponent}
        </motion.div>
    );
}

export default ScaledContainer;
