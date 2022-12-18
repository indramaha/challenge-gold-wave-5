import Accordion from 'react-bootstrap/Accordion';

import './FAQ.css'

const FAQ = () => {
    return (
        <div className='faq-section' id='faq'>
            <div className='faq-title'>
                <div className='faq-title-h3-bg'>
                    <h3 className='faq-title-h3'>Frequently Asked Question</h3>
                </div>
                <div className='faq-title-p-bg'>
                    <p className='faq-title-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className='faq-accord'>
                <Accordion>
                    <div className='faq-accord-item'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                            <Accordion.Body>
                                <div className='faq-accord-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className='faq-accord-item'>
                        <Accordion.Item eventKey="1" >
                            <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                            <Accordion.Body>
                                <div className='faq-accord-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className='faq-accord-item'>
                        <Accordion.Item eventKey="2" >
                            <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                            <Accordion.Body>
                                <div className='faq-accord-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className='faq-accord-item'>
                        <Accordion.Item eventKey="3" >
                            <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                            <Accordion.Body>
                                <div className='faq-accord-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className='faq-accord-item'>
                        <Accordion.Item eventKey="4" >
                            <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                            <Accordion.Body>
                                <div className='faq-accord-body'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                </Accordion>
            </div>
            
        </div>
        
    );
}

export default FAQ;