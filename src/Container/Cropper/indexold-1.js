import React, {Component, useState, useCallback } from 'react'
import ReactDOM from 'react-dom'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'

// const dogImg =
//   'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'

//  const CropperTool = () => {
//   const [crop, setCrop] = useState({ x: 0, y: 0 })
//   const [rotation, setRotation] = useState(0)
//   const [zoom, setZoom] = useState(1)
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
//   const [croppedImage, setCroppedImage] = useState(null)
//   const [ cropSize,setCropSize] = useState({ width: 600, height: 400 })

//   const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels)
//   }, [])

//   const showCroppedImage = useCallback(async () => {
//     try {
//       const croppedImage = await getCroppedImg(
//         dogImg,
//         croppedAreaPixels,
//         rotation
//       )
//       console.log('donee', { croppedImage })
//       setCroppedImage(croppedImage)
//     } catch (e) {
//       console.error(e)
//     }
//   }, [croppedAreaPixels, rotation])

//   return (
//     <div>
//       <div className={"position-relative"} style={{height:"500px"}}>
//         <Cropper
//           image={dogImg}
//           crop={crop}
//           rotation={rotation}
//           cropSize={cropSize}
//           zoom={zoom}
//           aspect={3 / 2}
//           onCropChange={setCrop}
//           onRotationChange={setRotation}
//           onCropComplete={onCropComplete}
//           onZoomChange={setZoom}
//         />
//       </div>
//       <button
//           onClick={showCroppedImage}
//           color="primary"
//         >
//           Show Result
//         </button>

//       <img src={croppedImage}/>
//     </div>
//   )
// }


// class CropperTool extends Component {
//   canvas = {}

//   state = {
//     image: 'http://192.168.2.138:3002/images/file-1610524495776-inspirational-quotes-women-billie-jean-king_jpg',
//     crop: { x: 0, y: 0 },
//     zoom: 1,
//     aspect: 4 / 3,
//     croppedAreaPixels: {},
//     cropSize:{width: 600, height: 400}
//   }

//   drawImage = () => {
//     const { croppedAreaPixels } = this.state;
//     this.ctx.drawImage(this.image, 
//     croppedAreaPixels.x, 
//     croppedAreaPixels.y, 
//     croppedAreaPixels.width, 
//     croppedAreaPixels.height, 
//     0, 
//     0, 
//     croppedAreaPixels.width, 
//     croppedAreaPixels.height);
//   }

//   onCropChange = crop => {
//     this.setState({ crop })
//   }

//   onCropComplete = (croppedArea, croppedAreaPixels) => {
//     this.setState({
//       croppedAreaPixels
//     }, () =>{
//       this.drawImage();
//     })
//   }

//   onZoomChange = zoom => {
//     this.setState({ zoom })
//   }

//   render() {
//     const { image, croppedAreaPixels, crop, zoom, aspect,cropSize } = this.state;

//     return (
//       <div className={"row"}>
//       <div className={"col-md-6"}>
//         <img 
//           ref={imageRef => this.image = imageRef}
//           id="source"
//           style={{display: 'none'}}
//           src={image} />
//         <canvas
//           ref={canvas => {
//             this.canvas = canvas;
//             canvas && (this.ctx = canvas.getContext('2d'))
//           }}
//           width={croppedAreaPixels.width}
//           height={croppedAreaPixels.height}
//         />
//       </div>
//         <div className={"col-md-6 cropper-block"}>
//         <Cropper
//           image={image}
//           crop={crop}
//           zoom={zoom}
//           aspect={aspect}
//           onCropChange={this.onCropChange}
//           onCropComplete={this.onCropComplete}
//           onZoomChange={this.onZoomChange}
//           cropSize={cropSize}
//         />
//         </div>
//       </div>
//     )
//   }
// }

// export default CropperTool;