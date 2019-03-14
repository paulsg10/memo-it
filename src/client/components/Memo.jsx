import React from 'react';

const Memo = (props) => {
  const { memoTitle, memoText } = props;
  return (
    <div>
      <h3 className="memo-title">{memoTitle}</h3>
      <p className="memo-text">{memoText}</p>
    </div>
  );
};

export default Memo;
