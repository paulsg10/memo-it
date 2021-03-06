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
      <div className="memo-creator">
        <h3>Create a new memo!</h3>
        <form className="form" onSubmit={event => this.handleSubmit(event)}>
          <input required type="text" placeholder="Enter Memo Title" value={memoTitle} onChange={event => this.handleTitleChange(event)} />
          <br />
          <textarea required rows="5" cols="28" placeholder="Enter Memo Here..." value={memoText} onChange={event => this.handleTextChange(event)} />
          <br />
          <input type="submit" className="post-button" value="Post" />
        </form>
      </div>
    );
  }
}

export default MemoCreator;
