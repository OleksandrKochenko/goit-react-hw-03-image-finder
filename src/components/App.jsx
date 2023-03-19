import React, { Component } from 'react';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './image-gallery/gallery';
import Modal from './modal/modal';
import Button from './load-button/load-button';
import './styles.css';

import { galleryItems } from '../gallery-items'; //
console.log(galleryItems); //

class App extends Component {
  state = {
    qValue: '',
    modalSource: {
      src: '',
      alt: '',
    },
  };

  formSubmitHandler = value => {
    console.log(value); //
  };

  modalOpener = event => {
    this.setState({
      modalSource: {
        src: event.currentTarget.dataset.source,
        alt: event.currentTarget.getAttribute('alt'),
      },
    });
  };

  modalCloser = () => {
    this.setState({
      modalSource: {
        src: '',
        alt: '',
      },
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery images={galleryItems} openModal={this.modalOpener} />
        {this.state.modalSource.src !== '' && (
          <Modal onClose={this.modalCloser}>
            <img
              src={this.state.modalSource.src}
              alt={this.state.modalSource.alt}
            />
          </Modal>
        )}
        <Button />
      </>
    );
  }
}

export default App;
