import React, { Component } from 'react';

class MemoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoTitle: '',
      memoText: '',
    };
  }

  handleTitleChange(event) {
    const { memoTitle } = this.state;
    this.setState({
      memoTitle: event.target.value,
    });
  }

  handleTextChange(event) {
    const { memoText } = this.state;
    this.setState({
      memoText: event.target.value,
    });
  }

  handleSubmit(event) {
    const { handleSubmitMemo } = this.props;
    const { memoTitle, memoText } = this.state;

    event.preventDefault();
    const title = memoTitle.trim();
    const text = memoText.trim();
    console.log(title, text);

    if (!title || !text) {
      return;
    }

    handleSubmitMemo(memoTitle, memoText);

    this.setState({
      memoTitle: '',
      memoText: '',
    });
  }

  render() {
    const { memoTitle, memoText } = this.state;
    return (
      <div>
        <p>Create a new memo!</p>
        <form className="form">
          <input required type="text" placeholder="Enter Memo Title" value={memoTitle} onChange={event => this.handleTitleChange(event)} />
          <br />
          <br />
          <textarea required rows="5" cols="28" placeholder="Take a memo..." value={memoText} onChange={event => this.handleTextChange(event)} />
          <br />
          <br />
          <button type="button" className="post-button" onSubmit={event => this.handleSubmit(event)}>Post</button>
        </form>
      </div>
    );
  }
}

export default MemoCreator;
