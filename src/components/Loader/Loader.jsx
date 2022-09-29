import { InfinitySpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import styles from './Loader.module.css';

export function Loader() {
  const authIsLoading = useSelector(state => state.auth.isLoading);
  const itemsIsLoading = useSelector(state => state.items.isLoading);

  if (authIsLoading || itemsIsLoading) {
    return (
      <div className={styles.loader}>
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
}
