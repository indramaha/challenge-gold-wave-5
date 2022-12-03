import { Dropdown, Form } from 'react-bootstrap';
import './FilterCars.css'

const FilterCars = (props) => {
    return ( 
        <div className='filtercars-section'>
            <div className='filtercars-bg'>
                {/* <div className='filtercars-top'>
                    <p className='filtercars-top-p'>Pencarianmu</p>
                </div> */}
                <div className='filtercars-search-bg'>
                    <div>
                        <div className='filtercars-input-title'>
                            <p className='filtercars-input-title-p'>Nama Mobil</p>
                        </div>
                        <div className='filtercars-input-bg'>
                            <input
                                onChange={props.nameFilter}
                                className='filtercars-input-name'
                                placeholder='Ketik nama/tipe mobil'
                            />
                        </div>
                    </div>
                    <div>
                        <div className='filtercars-input-title'>
                            <p className='filtercars-input-title-p'>Kategori</p>
                        </div>
                        <div>
                            <Form.Select onChange={props.categoryFilter} className='filtercars-select'>
                                <option value={''}>-Masukan Kapasitas Mobil-</option>
                                <option value={'small'}>2-4 orang</option>
                                <option value={'Medium'}>4-6 orang</option>
                                <option value={'large'}>6-8 orang</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div>
                        <div className='filtercars-input-title'>
                            <p className='filtercars-input-title-p'>Harga</p>
                        </div>
                        <div>
                            <Form.Select className='filtercars-select'>
                                <option>-Masukan Harga Sewa per Hari-</option>
                                <option>&lt;Rp.400.000</option>
                                <option>Rp.400.000-Rp.600.000</option>
                                <option>&gt;Rp.600.000</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div>
                        <div className='filtercars-input-title'>
                            <p className='filtercars-input-title-p'>Status</p>
                        </div>
                        <div>
                            <Form.Select className='filtercars-select'>
                                <option>-Disewa-</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className='filtercars-seacrh-button-bg'>
                        <button onClick={props.handleSearchButton} className='filtercars-seacrh-button'>Cari Mobil</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterCars;