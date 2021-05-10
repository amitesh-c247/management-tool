import React from 'react';
import {Card} from 'react-bootstrap';



// const editorConfig = {
//     plugins: [PasteFromOffice],
// }

class EditorComponents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorData :{}
        }
        
    }
    
    handleChange = ( event, editor ) => {
        const data = editor.getData();
        this.setState({
			editorData: data
        });
    } 

    handleSubmit = ()=>{
        const {editorData} = this.state;
        localStorage.setItem("editordata", editorData);
    }



    render() {
        const {storageeditorData} = this.state.editorData;

      return (
          <>
          <h1 className={"text-center pt-4 pb-4"}>Dashboard</h1>
            <Card>
                <Card.Body>
                </Card.Body>
                    <code dangerouslySetInnerHTML={{ __html: storageeditorData}}>
                    </code>
                    <div className={"col-md-4 pb-5"}>
                        <button className={"btn btn-success"} onClick={this.handleSubmit}>Submit</button>
                    </div>
                
            </Card>
          </>
      );
    }
}

export default EditorComponents;