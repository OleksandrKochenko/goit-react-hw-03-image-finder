import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './image-gallery/gallery';
import Loader from './loader/loader';
import Modal from './modal/modal';
import Button from './load-button/load-button';
import './styles.css';

class App extends Component {
  state = {
    qValue: '',
    photos: null,
    total: 0,
    page: 1,
    isLoading: false,
    modalSource: {
      src: '',
      alt: '',
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.qValue && this.state.qValue !== prevState.qValue) {
      this.setState({
        isLoading: true,
      });
      const responce = await this.fetchPhotos();
      this.setState({
        photos: responce.data.hits,
        total: responce.data.totalHits,
        isLoading: false,
      });
    }
  }

  fetchPhotos = () => {
    const searchParams = new URLSearchParams({
      key: '33271792-fb75e177a9af11daf6327433e',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    });
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
    return axios.get(
      `https://pixabay.com/api/?q=${this.state.qValue}&page=${this.state.page}&${searchParams}`
    );
  };

  formSubmitHandler = quieryValue => {
    quieryValue.trim() === ''
      ? alert('Enter a search query')
      : this.setState({
          qValue: quieryValue.trim(),
        });
  };

  addPhotos = async () => {
    this.setState({
      isLoading: true,
    });
    const responce = await this.fetchPhotos();
    const newPhotos = responce.data.hits;
    this.setState(prevState => ({
      photos: [...prevState.photos, ...newPhotos],
      isLoading: false,
    }));
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

        {this.state.photos && (
          <ImageGallery
            images={this.state.photos}
            openModal={this.modalOpener}
          />
        )}

        {this.state.isLoading && <Loader />}

        {this.state.modalSource.src !== '' && (
          <Modal onClose={this.modalCloser}>
            <img
              src={this.state.modalSource.src}
              alt={this.state.modalSource.alt}
            />
          </Modal>
        )}

        {this.state.photos && this.state.photos.length < this.state.total && (
          <Button onClick={this.addPhotos} />
        )}
      </>
    );
  }
}

export default App;
