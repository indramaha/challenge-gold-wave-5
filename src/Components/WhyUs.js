
import './WhyUs.css'

const WhyUs = (props) => {
    return(
        <div className='whyus-section' id='whyus'>
            <div>
                <div className='whyus-title'>
                    <h3 className='whyus-title-h3'>Why Us?</h3>
                </div>
                <div className='whyus-desc'>
                    <p className='whyus-desc-p'>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='whyus-card-area'>
                        {
                            props.whyUsCardText.map((item, i) => {
                                return(
                                    <div className='whyus-card' key={i}>
                                        {item.icon}
                                        <div className='whyus-card-title'>
                                            <h5 className='whyus-card-title-h5'>{item.title}</h5>
                                        </div>
                                        <div className='whyus-card-desc'>
                                            <p className='whyus-card-desc-p'>{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default WhyUs;