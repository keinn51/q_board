import React from 'react';

const convertStrTagToElem = (htmlTag: string) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlTag }}></div>;
};

export default convertStrTagToElem;
