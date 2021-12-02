import { Component } from 'react';
// import FetchApi from './api/apiservice';
import Searchbar from './components/Searchbar';
import Modal from './components/Modal';
import Container from './components/Container';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Fallback from './components/Loader/Loader';
import Message from './components/Message';
// import ImageApi from '../src/api/apiservice'

class App extends Component {
    
    state = {
        images: [],
        currentPage: 1,
        searchQuery: '',
        showModal: false,
        isLoading: false,
        largeImage: '',
        error:null,
    };

    componentDidUpdate(prevProps, prevState) {
        const {searchQuery, currentPage,} = this.state
        const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e'
        const URL = 'https://pixabay.com/api/'
        let url = `${URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

        window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
        });

        if (prevState.searchQuery !== this.state.searchQuery) {
            this.setState({
                isLoading: true,
            });
        
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    return Promise.reject(
                        new Error(`Name pictures ${searchQuery} do not find`)
                    );
                })
                // ImageApi.fetchApi(searchQuery,currentPage)
                .then((response) => {
                    this.setState({ images: response.hits, currentPage: currentPage + 1, })
                })
                .catch(error => this.setState({ error }));
        }
    };
   
   

    onSearchQuery = (query) => {

        this.setState({
            images: [],
            currentPage: 1,
            searchQuery: query,
        });
    };

    toogleModal = () => {
        this.setState(({showModal})=> ({
            showModal:!showModal,
        }))
    }
    
    loadMore = () => {
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));

        const {searchQuery, currentPage} = this.state
        const API_KEY = '23511418-9a5fcf3a7b36a31c6f256788e'
        const URL = 'https://pixabay.com/api/'
        let url = `${URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

        
        fetch(url)
            .then(res => res.json())
            .then((response) => {
                this.setState((prevState) => ({ images: [...prevState.images, ...response.hits], isLoading: true }))
            })
            .finally(
                this.setState({
                    isLoading: false,
                }));
                    
        
    }

    largeImage = (fullImageUrl) => {
        this.setState({
            largeImage: fullImageUrl,
            showModal:true,
        })
    }

    render() {
        const { showModal,images,isLoading,largeImage,error } = this.state;
        return (
            <Container>
                {error && <h1>{error.message}</h1>}
                <Searchbar onSearch={this.onSearchQuery} />
                {images.length < 1 &&
                <Message>
                    <h2>Please search your pictures</h2>
                    <p>Search form is emply</p>
                </Message>}
                <ImageGallery images={images} onClick={this.largeImage}/>
                {showModal && (
                    <Modal onClose={this.toogleModal}>
                        <img src={largeImage} alt=''/>
                    </Modal>
                )}
                <Button onClick={this.loadMore} />
                {isLoading && <Fallback/>}
            </Container> 
        )
    }
}

export default App

  // getImages = async () => {
    //     const { currentPage,searchQuery } = this.state;
    //     this.setState({ isLoading: true });

    //     try {
    //         const { hits } =  FetchApi(searchQuery, currentPage);
            
    //         this.setState(prevState => ({
    //             images: [...prevState.images, ...hits],
    //             currentPage: prevState.currentPage + 1,
    //         }));
    //     } finally {
    //         this.setState({
    //             isLoading: false,
    //         });
    //     }
    // }

    // FetchApi = async () => {


    //     return await fetch(url).then(response => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //     })
    //         .then(data => {
    //             return data
    //         })
    //         .catch(error => console.log(error));
    // }










