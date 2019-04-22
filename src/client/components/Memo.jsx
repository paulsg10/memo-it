import React from 'react';

const Memo = (props) => {
  const { memoTitle, memoText } = props;

  return (
    <div className="memo">
      <h6 className="memo-title">{memoTitle}</h6>
      <span className="memo-text">{memoText}</span>
    </div>
  );
};

export default Memo;
