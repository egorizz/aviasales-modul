import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
/* eslint-disable-next-line */
import { connect } from 'react-redux';

import { setLoading, addPages } from '../store/actions';

const FiveMoreButton = ({ state, initSetLoading }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 30, color: 'white' }} spin />;

  return (
    <div>
      <button className="five-more-button" onClick={initSetLoading}>
        {state.buttonLoading ? <Spin indicator={antIcon} /> : 'ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ! '}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initSetLoading: () => {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(addPages());
        dispatch(setLoading(false));
      }, 500);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiveMoreButton);
