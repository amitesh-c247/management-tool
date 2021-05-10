import React, { Component } from 'react';
import Croppie from 'croppie';
import '../../../node_modules/croppie/croppie.css'

const croppieOptions = {
    showZoomer: true,
    enableOrientation: true,
    mouseWheelZoom: "ctrl",
    viewport: {
      width: 600,
      height: 400,
      type: "square"
    },
    boundary: {
      width: "600",
      height: "400"
    }
  };
  
//   const croppie = document.getElementById("croppie");
//   console.log(croppie,"croppiecroppiecroppie")
//   const c = new Croppie(croppie, croppieOptions);

class CropperTool extends Component {
    state = {
        croppedImage: null,
        isFileUploaded: false
      };
    
      file = React.createRef();
    //   croppie = React.createRef();
      img = React.createRef();
    
      componentDidMount = () =>{
          this.croppie = document.getElementById("croppie");
          this.c = new Croppie(this.croppie, croppieOptions);
      }
      onFileUpload = e => {
          console.log(this.c,'ccccccccccccc');
        this.setState({ isFileUploaded: true }, () => {
          const reader = new FileReader();
          const file = this.file.current.files[0];
          console.log(file, "file hhhhhh")
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.c.bind({ url: reader.result });
          };
          reader.onerror = function(error) {
            console.log("Error: ", error);
          };
        });
      };
    
      onResult = e => {
        this.c.result("base64").then(base64 => {
          this.setState(
            { croppedImage: base64 },
            () => (this.img.current.src = base64)
          );
        });
      };
    
      render() {
        const { isFileUploaded, croppedImage } = this.state;
    
        return (
            <>
            <div id={"croppie"}></div>
            fgfkjghdfkjhgdfkjghkj
            <div className="cropTool" id="cropTool">
                <input
                type="file"
                id="files"
                ref={this.file}
                onChange={this.onFileUpload}
                />
                <hr />
                <button
                type="button"
                disabled={!isFileUploaded}
                onClick={this.onResult}
                >
                Crop!
                </button>
                <hr />
                <h2> Result! </h2>
                <div>
                <img ref={this.img} alt="cropped image" />
                <a hidden={!croppedImage} href={croppedImage} download="cropped.png">
                    Download Cropped Image
                </a>
                </div>
            </div>
          </>
        );
      }
}

export default CropperTool