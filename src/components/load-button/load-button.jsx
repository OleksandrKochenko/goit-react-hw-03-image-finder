import css from './load-button.module.css';

export default function Button() {
  return (
    <button className={css.button} type="button">
      Load more
    </button>
  );
}
