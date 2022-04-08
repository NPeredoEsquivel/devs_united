import { motion } from 'framer-motion/dist/framer-motion'

function Button({ disabled, buttonText, buttonClass, onClickEvent, childrenComponent = null }) {

    const styles = {
        cursor: 'pointer',
        scale: 1.05,
        transition: 'all .2s ease-in-out',

    }

    return (
        <motion.button
            disabled={disabled}
            className={buttonClass}
            onClick={onClickEvent}
            whileHover={disabled ? {} : styles}
            whileTap={disabled ? {} : { scale: 0.9, x: "-5px", y: "5px" }}
        >
            {buttonText}
            {childrenComponent}
        </motion.button>
    );
}

export default Button;
