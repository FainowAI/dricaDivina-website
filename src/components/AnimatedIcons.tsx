import { motion } from "framer-motion";

interface IconProps {
  className?: string;
  size?: number;
}

// Ícone de Skincare/Gota com brilho
export const SkincareIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Gota principal */}
    <motion.path
      d="M24 6C24 6 10 20 10 30C10 37.732 16.268 44 24 44C31.732 44 38 37.732 38 30C38 20 24 6 24 6Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    {/* Brilho interno */}
    <motion.path
      d="M18 28C18 28 20 24 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    />
    {/* Partículas de brilho */}
    <motion.circle
      cx="30"
      cy="20"
      r="1.5"
      fill="currentColor"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.7 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
    />
    <motion.circle
      cx="34"
      cy="26"
      r="1"
      fill="currentColor"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
    />
  </motion.svg>
);

// Ícone de Comunidade/Corações conectados
export const CommunityIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Coração central */}
    <motion.path
      d="M24 42L21.18 39.39C11.04 30.22 4 23.88 4 16C4 9.66 9.12 4.5 15.5 4.5C19.04 4.5 22.44 6.16 24 8.76C25.56 6.16 28.96 4.5 32.5 4.5C38.88 4.5 44 9.66 44 16C44 23.88 36.96 30.22 26.82 39.39L24 42Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, scale: 0.8 }}
      animate={{ pathLength: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
    {/* Linhas de conexão */}
    <motion.path
      d="M16 20C16 20 20 24 24 24C28 24 32 20 32 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
    />
    {/* Pulso do coração - animação simples sem keyframes múltiplos */}
    <motion.circle
      cx="24"
      cy="20"
      r="3"
      fill="currentColor"
      initial={{ opacity: 0.1, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
    />
  </motion.svg>
);

// Ícone de Conteúdo/Livro com estrela
export const ContentIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Livro aberto */}
    <motion.path
      d="M6 8V40C6 40 10 36 24 36C38 36 42 40 42 40V8C42 8 38 4 24 4C10 4 6 8 6 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    {/* Linha central do livro */}
    <motion.path
      d="M24 4V36"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
    />
    {/* Estrela de destaque - sem type spring com múltiplos valores */}
    <motion.path
      d="M24 14L25.5 17.5L29 18L26.5 20.5L27 24L24 22.5L21 24L21.5 20.5L19 18L22.5 17.5L24 14Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
    />
    {/* Linhas de texto */}
    <motion.path
      d="M12 16H18M12 22H16M30 16H36M32 22H36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
    />
  </motion.svg>
);

// Ícone de Calendário/Anos
export const YearsIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Calendário base */}
    <motion.rect
      x="6"
      y="10"
      width="36"
      height="32"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
    {/* Ganchos do calendário */}
    <motion.path
      d="M14 6V14M34 6V14"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
    />
    {/* Linha divisória */}
    <motion.path
      d="M6 20H42"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
    />
    {/* Número 6+ estilizado - sem type spring */}
    <motion.text
      x="24"
      y="34"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="currentColor"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
    >
      6+
    </motion.text>
  </motion.svg>
);

// Ícone de Vídeos/Play criativo
export const VideosIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Círculo externo */}
    <motion.circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
    {/* Triângulo de play - sem type spring */}
    <motion.path
      d="M20 16L32 24L20 32V16Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      fillOpacity="0.2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
    />
    {/* Ondas de som/reprodução - animação simples */}
    <motion.path
      d="M36 18C38 20 38 28 36 30"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    />
    <motion.path
      d="M40 14C44 18 44 30 40 34"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
    />
  </motion.svg>
);

// Ícone de Seguidoras/Pessoas com coração
export const FollowersIcon = ({ className = "", size = 32 }: IconProps) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Pessoa central */}
    <motion.circle
      cx="24"
      cy="14"
      r="8"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
    <motion.path
      d="M8 44C8 35.163 15.163 28 24 28C32.837 28 40 35.163 40 44"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    />
    {/* Pessoas laterais (menores) */}
    <motion.circle
      cx="8"
      cy="18"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
    />
    <motion.circle
      cx="40"
      cy="18"
      r="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 1, ease: "easeOut" }}
    />
    {/* Coração flutuante - sem keyframes múltiplos com spring */}
    <motion.path
      d="M24 8L23 7C21.5 5.5 19 5.5 17.5 7C16 8.5 16 11 17.5 12.5L24 19L30.5 12.5C32 11 32 8.5 30.5 7C29 5.5 26.5 5.5 25 7L24 8Z"
      fill="currentColor"
      fillOpacity="0.3"
      initial={{ scale: 0, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
    />
  </motion.svg>
);
