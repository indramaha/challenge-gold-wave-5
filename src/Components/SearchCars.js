import {FiChevronDown} from 'react-icons/fi'
import './SearchCars.css'

const SearchCars = () => {
    return(
        <div className='searchcars-section'>
            <div className='searchcars-bg'>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Nama Mobil</p>
                    </div>
                    <div className='searchcars-input-bg'>
                        <input
                            className='searchcars-input-name'
                            placeholder='Ketik nama/tipe mobil'
                        />
                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Kategori</p>
                    </div>
                    <div className='searchcars-input-bg'>
                        <input
                            className='searchcars-input-category-price'
                            placeholder='Masukan Kapasitas Mobil'
                        />
                        <FiChevronDown />
                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Harga</p>
                    </div>
                    <div className='searchcars-input-bg'>
                        <input
                            className='searchcars-input-category-price'
                            placeholder='Masukan Harga Sewa per Hari'
                        />
                        <FiChevronDown />
                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Status</p>
                    </div>
                    <div className='searchcars-input-bg'>
                        <input
                            className='searchcars-input-status'
                            placeholder='Disewa'
                        />
                        <FiChevronDown />
                    </div>
                </div>
                <div className='searchcars-seacrh-button-bg'>
                    <button className='searchcars-seacrh-button'>Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCars;