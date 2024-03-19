import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 30, color: 'white' }} spin />;

const FiveMoreButton = ({ onClick, buttonLoading }) => {
  return (
    <div>
      <button className="five-more-button" onClick={onClick}>
        {buttonLoading ? <Spin indicator={antIcon} /> : 'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ! '}
      </button>
    </div>
  );
};

export default FiveMoreButton;
