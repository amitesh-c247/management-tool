import React from 'react';
import EditorComponents from '../../Components/editor';

class Editor extends React.Component {
  componentDidMount = () => {
    const data = localStorage.getItem("token")
    if (data && !data.token) {
      this.props.history.push('/')
    }
  }

  render() {
    const data = localStorage.getItem("token")
    return (
      <>
        <EditorComponents data={data} />
      </>
    );
  }
}

export default Editor;
