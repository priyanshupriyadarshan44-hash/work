import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flower-loader">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flower-petal"
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
        <div className="flower-center" />
      </div>
      <p className="loading-text">Preparing something special for Mom...</p>
    </motion.div>
  )
}
