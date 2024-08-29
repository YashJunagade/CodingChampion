import React from 'react';

const FormattedText = ({ text }) => {
  return (
    <div className="formatted-text">
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormattedText;
