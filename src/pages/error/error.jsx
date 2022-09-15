import styles from './error.module.scss';
export const ErrorPage = (props) => {
    console.log(props);
    return (
    <div className={styles.error}>
    {props.status === 404 ? '404 Not Found' : 'Error!!'}
    <img src={require('./error.jpeg')} alt="error" />
    </div>
    );
  };