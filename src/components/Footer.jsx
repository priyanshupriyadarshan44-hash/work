import { motion } from 'framer-motion'
import { FiHeart, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="footer-quote">"Home is where Mom is." 🏡</p>

        <p className="footer-message">
          Thank you for being the most beautiful soul in my life.
          Every breath I take, every dream I chase — it's all because of you.
          I love you, Mom. Today, tomorrow, and forever. <FiHeart style={{ color: '#e8657a', verticalAlign: 'middle' }} />
        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Instagram" id="social-instagram"><FiInstagram /></a>
          <a href="#" aria-label="Facebook" id="social-facebook"><FiFacebook /></a>
          <a href="#" aria-label="Twitter" id="social-twitter"><FiTwitter /></a>
        </div>

        <p className="footer-bottom">
          Made with ❤️ for the world's best Mom • Happy Mother's Day 2026
        </p>
      </motion.div>
    </footer>
  )
}
