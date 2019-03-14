import React, { Component } from 'react';
import '../styles/App.css';
import MemoCreator from './components/MemoCreator';
import MemosDisplay from './components/MemosDisplay';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoList: [],
    };
  }

  componentDidMount() {
    const { memoList } = this.state;

    const memoListCopy = memoList.slice();

    // AXIOS call for all memos
    axios({
      method: 'get',
      url: '/memos',
    })
      .then((data) => {
        return data.json();
      })
      .then((memoList) => {
        memoListCopy.push(memoList);
        this.setState({
          memoList: memoListCopy,
        });
      });
  }

  handleSubmitMemo(title, text) {
    const { memoList } = this.state;
    const memoListCopy = memoList.slice();

    // AXIOS call to post new memo
    axios({
      method: 'post',
      url: '/memos',
      data: {
        memoTitle: title,
        memoText: text,
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((newMemo) => {
        memoListCopy.push(newMemo);
        this.setState({
          memoList: memoListCopy,
        });
      });
  }

  render() {
    const { memoList } = this.state;

    return (
      <div className="App">
        <div>
          <p>Nav Bar</p>
        </div>
        <div className="app-title">
          <h1>Memo It!</h1>
        </div>
        <div className="memo-creator">
          <MemoCreator handleSubmitMemo={(title, text) => this.handleSubmitMemo(title, text)} />
        </div>
        <div className="memos-display">
          <MemosDisplay memoList={memoList} />
        </div>
      </div>
    );
  }
}

export default App;
