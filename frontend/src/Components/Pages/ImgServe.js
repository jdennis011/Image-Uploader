import React, { useState } from 'react'


function ImgServe() {
 // this is to serve a file direct

     // History for pushing to a new link after uploading image
  const history = useHistory(); 

  const [loading, setLoading] = useState(false)


  const handleLoading = () => {
    setLoading(true)
  }

  const handleResponse = (value) => {
    // Router push to uploadd page
    setTimeout(() => {
      setLoading(false)
      history.push(value.data.filePath)
      Swal.fire({
        icon: 'success',
        title: "Your image was uploaded!",
        showConfirmButton: false,
        timer: 1500
      })
    }, 1400)    
  }

    const handlePaste = (event) => {
        const fileUploaded = event.clipboardData.files[0]
        sendRequest(fileUploaded, handleLoading, handleResponse)
    }

    return
}

export default ImgServe
