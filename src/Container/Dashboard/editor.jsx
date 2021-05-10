import React from 'react';
import EditorComponents from '../../Components/editor';

class Editor extends React.Component {
  componentDidMount = () => {
    const data = JSON.parse(localStorage.getItem("data"))
    if (data && !data.token) {
      this.props.history.push('/')
    }
  }

  render() {
    const data = JSON.parse(localStorage.getItem("data"))
    return (
      <>
        <EditorComponents data={data} />
      </>
    );
  }
}

export default Editor;
