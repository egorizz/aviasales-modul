import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Offline } from 'react-detect-offline';

import getSortedList from '../sortFilter';
import Filter from '../Filter';
import Alert from '../Alert';
import FilterOptions from '../FilterOptions';
import TicketList from '../TicketList';
import { searchIdLoad, loadTickets, setSuccess } from '../store/actions';
import Loader from '../Loader';

const AppAviasales = ({ state, initSearchIdLoad, initLoadTickets, setSuccessStatus }) => {
  const [serverError, setServerError] = useState(false);

  const showServerError = () => {
    setServerError(true);
    setTimeout(() => {
      setServerError(false);
    }, 8000);
  };

  const ticks = getSortedList(state);

  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((json) => {
        initSearchIdLoad(json.searchId);
      })
      .catch(() => setSuccessStatus(false));
  }, []);

  async function subscribe() {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${state.searchId}`);

    if (response.status === 502 || response.status === 500) {
      if (!serverError) showServerError();

      await subscribe();
    } else if (response.status !== 200) {
      await subscribe();
    } else {
      const ticksPart = await response.json();

      initLoadTickets(ticksPart.tickets);
      if (!ticksPart.stop) {
        await subscribe();
      }
    }
  }
  useEffect(() => {
    if (state.searchId !== null) {
      subscribe();
    }
  }, [state.searchId]);

  const percents = Math.round((100 * state.tickets.length) / 5000);

  return (
    <div className="app-aviasales">
      <div className="app-aviasales__logo"></div>
      <div className="app-aviasales__main">
        <Filter />
        <Offline>
          <Alert message={'Нет соединения'} />
        </Offline>
        <Loader percents={percents} />

        <FilterOptions />
        {!ticks.length && (
          <div className="app-aviasales__note">Рейсов, подходящих под заданные фильтры, не найдено</div>
        )}

        <TicketList displayTickets={ticks} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initSearchIdLoad: (searchId) => {
      dispatch(searchIdLoad(searchId));
    },
    initLoadTickets: (tickets) => {
      dispatch(loadTickets(tickets));
    },
    setSuccessStatus: (flag) => {
      dispatch(setSuccess(flag));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppAviasales);
