import React, { Component } from 'react';
import '../styles.css';
import css from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    qValue: '',
  };

  handleChange = e => {
    this.setState({
      qValue: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.qValue);
    this.reset();
  };

  reset = () => {
    this.setState({ qValue: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.search_form_button}>
            <span className={css.search_form_button_label}>Search</span>
          </button>
          <input
            className={css.search_form_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
