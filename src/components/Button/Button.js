import css from '../../styles/Common.module.css';
import PropTypes from 'prop-types';

export default function Button({ nextPage }) {
  return (
    <button type="button" onClick={nextPage} className={css.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
