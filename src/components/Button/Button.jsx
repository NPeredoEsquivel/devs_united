import { motion } from 'framer-motion/dist/framer-motion'

function Button({ buttonText, buttonClass, onClickEvent, children = null, enableAnimation = false, disabled = false }) {

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
        <motion.button
            disabled={disabled}
            className={buttonClass}
            onClick={onClickEvent}
            whileHover={disabled ? {} : (enableAnimation ? styles : {})}
            whileTap={disabled ? {} : (enableAnimation ? scale : {})}
        >
            {buttonText}
            {children}
        </motion.button >
    );
}

export default Button;
