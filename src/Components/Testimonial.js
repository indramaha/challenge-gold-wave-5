import Carousel from 'react-bootstrap/Carousel';
import Holder from '../Assets/holder.png'
import TestiPhotoTwo from '../Assets/img_photo 2.png'
import TestiPhotoThree from '../Assets/img_photo 3.png'
import './Testimonial.css'

const Testimonial = (props) => {
    return (
        <div className='testimonial-section' id='testimonial'>
            <div className='testimonial-title-bg'>
                <div className='testimonial-title-h3-bg'>
                    <h3 className='testimonial-title-h3'>Testimonial</h3>
                </div>
                <div className='testimonial-title-p-bg'>
                    <p className='testimonial-title-p'>
                        Berbagai review positif dari para pelanggan kami
                    </p>
                </div>
            </div>
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                        className="d-block testimonial-item-img"
                        src={Holder}
                        alt="first slide"
                    />
                    <div className='testimonial-item-desc'>
                        <div className='testimonial-item-img-bg'>
                            <img src={TestiPhotoTwo} alt='testiphoto' />
                        </div>
                        <div>
                            <div className='testimonial-ratings'>
                                {
                                    props.star.map(item => {
                                        return(
                                            <div>
                                                {item.rating}
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                            <div>
                                <div className='testimonial-item-desc-p-bg'>
                                    <p className='testimonial-item-desc-p'>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </p>
                                </div>
                                <div>
                                    <p className='testimonial-item-desc-name-p'>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block testimonial-item-img"
                        src={Holder}
                        alt="Second slide"
                    />
                    <div className='testimonial-item-desc'>
                        <div className='testimonial-item-img-bg'>
                            <img src={TestiPhotoTwo} alt='testiphoto' />
                        </div>
                        <div>
                            <div className='testimonial-ratings'>
                                {
                                    props.star.map(item => {
                                        return(
                                            <div>
                                                {item.rating}
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                            <div>
                                <div className='testimonial-item-desc-p-bg'>
                                    <p className='testimonial-item-desc-p'>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </p>
                                </div>
                                <div>
                                    <p className='testimonial-item-desc-name-p'>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block testimonial-item-img"
                        src={Holder}
                        alt="Third slide"
                    />
                    <div className='testimonial-item-desc'>
                        <div className='testimonial-item-img-bg'>
                            <img src={TestiPhotoThree} alt='testiphoto' />
                        </div>
                        <div>
                            <div className='testimonial-ratings'>
                                {
                                    props.star.map(item => {
                                        return(
                                            <div>
                                                {item.rating}
                                            </div>
                                        ) 
                                    })
                                }
                            </div>
                            <div>
                                <div className='testimonial-item-desc-p-bg'>
                                    <p className='testimonial-item-desc-p'>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </p>
                                </div>
                                <div>
                                    <p className='testimonial-item-desc-name-p'>John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
}

export default Testimonial;