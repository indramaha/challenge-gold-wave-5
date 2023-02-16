import "./ImageUpload.css"
import { useEffect, useState } from 'react';


export const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

   
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

 
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <div className="input-form">
                <input type='file' onChange={onSelectFile} />
            </div>
            
            <div className='Nota'> 
                {selectedFile &&  <img src={preview} /> }
            </div>
        </div>
    )
}