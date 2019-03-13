import React, { Component } from 'react';
import '../styles/App.css';
import MemoCreator from './MemoCreator';
import MemosDisplay from './MemosDisplay';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [],
    };
  }

  componentDidMount() {
    // AXIOS call for all memos
  }

  handleSubmitMemo() {
    const { memoList } = this.state;
    const memoListCopy = memoList.slice();

    // AXIOS call to post new memo
    
  }

  render() {
    const { memoList } = this.state;

    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <MemoCreator handleSubmitMemo={() => handleSubmitMemo()} />
        <MemosDisplay memoList={memoList} />
      </div>
    );
  }
}

export default App;
