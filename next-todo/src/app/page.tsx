import { AddTask } from '@/components/AddTask';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <AddTask />
    </main>
  );
}
