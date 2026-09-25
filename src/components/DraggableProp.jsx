// DraggableProp.jsx
'use client';
import { motion } from 'framer-motion';

const DraggableProp = ({ children, initialX, initialY }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ x: initialX, y: initialY }}
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      style={{ position: 'absolute', cursor: 'grab', zIndex: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default DraggableProp;