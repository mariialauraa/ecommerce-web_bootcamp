import styles from './styles.module.css';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({children}) => {
  return (
    <div className={styles.container}>
      <span>{children}</span>
    </div>
  )
}

export default Badge;