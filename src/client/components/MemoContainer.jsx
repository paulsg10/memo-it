import React, { Component } from 'react';
import axios from 'axios';
import MemoCreator from './MemoCreator';
import MemosDisplay from './MemosDisplay';

class MemoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memoList: [],
    };
  }

  componentDidMount() {
    const { memoList } = this.state;

    let memoListCopy;

    // AXIOS call for all memos
    axios.get('http://localhost:3000/getMemos')
      .then((res) => {
        memoListCopy = memoList.slice();
        memoListCopy = res.data;
        if (memoListCopy) {
          this.setState({
            memoList: memoListCopy,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmitMemo(title, text) {
    const { memoList } = this.state;
    let memoListCopy;

    // AXIOS call to post new memo
    axios({
      method: 'post',
      url: 'http://localhost:3000/addMemo',
      data: {
        memoTitle: title,
        memoText: text,
      },
    })
      .then((res) => {
        memoListCopy = memoList.slice();
        const newMemo = res.data;
        memoListCopy.push(newMemo);
        this.setState({
          memoList: memoListCopy,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { memoList } = this.state;

    return (
      <div className="App">
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

export default MemoContainer;
