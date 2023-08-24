import classNames from 'classnames';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={classNames('spinner-border text-success', styles.loader)} role="status">
      <span className="sr-only"></span>
    </div>
  );
}
