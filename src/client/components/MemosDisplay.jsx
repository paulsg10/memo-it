import React from 'react';
import Memo from './Memo';

const MemosDisplay = (props) => {
  const { memoList } = props;

  const displayMemos = memoList.map((memo) => {
    const { _id, memoTitle, memoText } = memo;
    return (
      <Memo key={_id} memoTitle={memoTitle} memoText={memoText} />
    );
  });

  return (
    <div>
      <p>Memos Display Component</p>
      <div className="memos-container">
        {displayMemos}
      </div>
    </div>
  );
};

export default MemosDisplay;
