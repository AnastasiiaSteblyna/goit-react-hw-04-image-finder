import { Component } from 'react';
import css from '../../styles/Common.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    searchData: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchData);
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchData: value });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={handleSubmit}>
          <button type="submit" className={css.searchformButton}>
            <span className={css.searchformButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchformInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }
}
