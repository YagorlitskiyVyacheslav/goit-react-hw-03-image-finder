import React, { Component } from 'react';

import FindForm from './components/findForm/findForm';
import ImageList from './components/ImageList/imageList';
import LoadMore from './components/loadMore/buttonLoadMore';
import Modal from './components/modal/modalWindow';
import Spiner from './components/spiner/spiner';

import fetchApi from './fetch/imageApi';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    query: "",
    page: 1,
    disabled: false,
    largeImageURL: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [] });
      this.fetchImages();
    }
    if (
      prevState.largeImageURL !== this.state.largeImageURL &&
      this.state.largeImageURL
    ) {
      this.setState({ disabled: true });
      window.addEventListener("keydown", this.closeModalWindow);
    }
  }
  closeModalWindow = (e) => {
    if(e.code === 'Escape' || e.target.id === 'overlay') {
      this.setState({ disabled: false, largeImageURL: null });
      window.removeEventListener("keydown", this.closeModalWindow);
    }
  }
  fetchImages = () => {
    this.setState({ loading: true });
    fetchApi
      .fetchImage(this.state.query, this.state.page)
      .then((response) => {
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...response],
            page: prevState.page + 1,
          };
        });
        window.scrollTo({
          top: document.documentElement.scrollHeight - 670,
          behavior: "smooth",
        });
      }
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handlerSubmitForm = (query) => {
    this.setState({ query });
  };
  handlerModalWindow = (largeImageURL) => {
    this.setState({ largeImageURL });
  };
  render() {
    const { images, loading, error, disabled, largeImageURL } = this.state;
    console.log(loading)
    return (
      <>
        <FindForm onSubmit={this.handlerSubmitForm} />
        <section>
          {error && <p>{error}</p>}
          {images.length > 0 && (
            <ImageList images={images} largeImg={this.handlerModalWindow} />
          )}
          {images.length > 0 && !loading && <LoadMore onClick={this.fetchImages} />}
          {loading && <Spiner/>}
          {disabled && (
            <Modal onClose={this.closeModalWindow}>
              <img src={largeImageURL} alt="Large Image" />
            </Modal>
          )}
        </section>
      </>
    );
  }
}

export default App;
