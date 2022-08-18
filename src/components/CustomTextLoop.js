import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';

const CustomTextLoop = ({ data }) => {
  /* Router */
  /* State */
  const [options, setOptions] = useState([
    '저희 병원을 방문해 주셔서 감사합니다.',
    '잠시 앉아서 기다려 주시면 안내해드리겠습니다.',
  ]);
  /* Hooks */
  useEffect(() => {
    const optionsTimeout = setTimeout(() => {
      const temp = data.map((item) => item.notice_content);
      // console.log(temp);
      setOptions([
        '저희 병원을 방문해 주셔서 감사합니다.',
        '잠시 앉아서 기다려 주시면 안내해드리겠습니다.',
        ...temp,
      ]);
      // console.log('change options');
    }, 10000);

    return () => {
      clearTimeout(optionsTimeout);
    };
  }, [data]);

  /* Functions */

  /* Render */
  return (
    <TextLoop
      interval={10000}
      children={options}
      noWrap={false}
      className="notice-item"
    />
  );
};

export default CustomTextLoop;
