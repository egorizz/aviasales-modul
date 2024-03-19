import React, { useState, useEffect } from 'react';

import Filter from '../Filter';
import FilterOptions from '../FilterOptions';
import TicketList from '../TicketList';

const AppAviasales = () => {
  const [filterMode, setFilterMode] = useState('low');
  const [searchId, setSearchId] = useState(null);
  /* eslint-disable-next-line */
  const [tickets, setTickets] = useState([]);
  const [curTickets, setCurTickets] = useState([]);
  const [stopsAll, setStopsAll] = useState(true);
  const [stops1, setStops1] = useState(true);
  const [stops2, setStops2] = useState(true);
  const [stops3, setStops3] = useState(true);
  const [stopsFree, setStopsFree] = useState(false);

  let displayTickets;
  if (filterMode === 'opt') {
    displayTickets = [...curTickets];
  }
  if (filterMode === 'low') {
    displayTickets = [...curTickets].sort((a, b) => a.price - b.price);
  }
  if (filterMode === 'fst') {
    displayTickets = curTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  }

  let displayTickets2;
  if (stopsAll === true) {
    displayTickets2 = [...displayTickets];
  }
  if (stopsFree === true) {
    displayTickets2 = [...displayTickets].filter(
      (node) => node.segments[0].stops.length + node.segments[1].stops.length === 0
    );
  }
  if (stops1 === true && stops2 === false && stops3 === false && !stopsAll) {
    displayTickets2 = [...displayTickets].filter(
      (node) => node.segments[0].stops.length + node.segments[1].stops.length === 1
    );
  }
  if (stops1 === false && stops2 === true && stops3 === false && !stopsAll) {
    displayTickets2 = [...displayTickets].filter(
      (node) => node.segments[0].stops.length + node.segments[1].stops.length === 2
    );
  }
  if (stops1 === false && stops2 === false && stops3 === true && !stopsAll) {
    displayTickets2 = [...displayTickets].filter(
      (node) => node.segments[0].stops.length + node.segments[1].stops.length === 3
    );
  }
  if (stops1 === true && stops2 === true && stops3 === false && !stopsAll) {
    displayTickets2 = [...displayTickets].filter((node) => {
      const x = node.segments[0].stops.length + node.segments[1].stops.length;
      if (x === 1 || x === 2) {
        return true;
      }
      return false;
    });
  }
  if (stops1 === true && stops2 === true && stops3 === true && !stopsAll) {
    displayTickets2 = [...displayTickets].filter((node) => {
      const x = node.segments[0].stops.length + node.segments[1].stops.length;
      if (x === 1 || x === 2 || x === 3) {
        return true;
      }
      return false;
    });
  }
  if (stops1 === true && stops2 === false && stops3 === true && !stopsAll) {
    displayTickets2 = [...displayTickets].filter((node) => {
      const x = node.segments[0].stops.length + node.segments[1].stops.length;
      if (x === 1 || x === 3) {
        return true;
      }
      return false;
    });
  }
  if (stops1 === false && stops2 === true && stops3 === true && !stopsAll) {
    displayTickets2 = [...displayTickets].filter((node) => {
      const x = node.segments[0].stops.length + node.segments[1].stops.length;
      if (x === 2 || x === 3) {
        return true;
      }
      return false;
    });
  }

  useEffect(() => {
    fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .then((json) => {
        setSearchId(json.searchId);
        return json;
      });
  }, []);

  async function subscribe() {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);

    if (response.status === 502 || response.status === 500) {
      await subscribe();
    } else if (response.status !== 200) {
      /* eslint-disable-next-line */
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await subscribe();
    } else {
      const ticketsPart = await response.json();

      /* eslint-disable */
      setTickets((tickets) => {
        const list = [...tickets, ...ticketsPart.tickets];
        setTickets(list);
        if (curTickets.length === 0) {
          setCurTickets([...tickets]);
        }
      });
      /* eslint-enable */

      if (!ticketsPart.stop) {
        await subscribe();
      } else {
        /* eslint-disable-next-line */
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }
  }
  useEffect(() => {
    if (searchId !== null) {
      subscribe();
    }
  }, [searchId]);

  const filterHandler = (e) => {
    if (e.target.id === 'low') {
      setFilterMode('low');
    }
    if (e.target.id === 'fst') {
      setFilterMode('fst');
    }
    if (e.target.id === 'opt') {
      setFilterMode('opt');
    }
  };

  const handler = (e) => {
    const mode = e.target.id;
    if (mode === 'all' && stopsAll === false) {
      setStops1(true);
      setStops2(true);
      setStops3(true);
      setStopsAll(true);
      setStopsFree(false);
    } else if (mode === 'all' && stopsAll === true) {
      setStops1(false);
      setStops2(false);
      setStops3(false);
      setStopsAll(false);
      setStopsFree(true);
    }
    if (mode === '1') {
      if (!stops2 && !stops3 && stops1) {
        setStops1(false);
        setStopsFree(true);
        setStopsAll(false);
      } else if (stopsAll === true) {
        setStops1(false);
        setStopsAll(false);
      } else if (stopsAll === false && stops1 === true) {
        setStops1(false);
      } else if (stopsAll === false && stops1 === false) {
        setStops1(true);
        setStopsFree(false);
      } else if (stops2 === false && stops3 === false && stops1 === true) {
        setStops1(false);
        setStopsFree(true);
      }
    }
    if (mode === '2') {
      if (stops2 && !stops3 && !stops1) {
        setStops2(false);
        setStopsFree(true);
        setStopsAll(false);
      } else if (stopsAll === true) {
        setStops2(false);
        setStopsAll(false);
      } else if (stopsAll === false && stops2 === true) {
        setStops2(false);
      } else if (stopsAll === false && stops2 === false) {
        setStops2(true);
      } else if (stops2 === true && stops3 === false && stops1 === false) {
        setStops2(false);
        setStopsFree(true);
      } else if (!stops2 && !stops3 && !stops1) {
        setStops2(true);
        setStopsFree(false);
      }
    }
    if (mode === '3') {
      if (stops3 && !stops2 && !stops1) {
        setStops3(false);
        setStopsFree(true);
        setStopsAll(false);
      } else if (stopsAll === true) {
        setStops3(false);
        setStopsAll(false);
      } else if (stopsAll === false && stops3 === true) {
        setStops3(false);
      } else if (stopsAll === false && stops3 === false) {
        setStops3(true);
      }
    }
    if (mode === 'no_stops' && stopsFree === false) {
      setStopsFree(true);
      setStops1(false);
      setStops2(false);
      setStops3(false);
      setStopsAll(false);
    } else if (mode === 'no_stops' && stopsFree === true) {
      setStopsFree(false);
      setStops1(true);
      setStops2(true);
      setStops3(true);
      setStopsAll(true);
    }
  };

  useEffect(() => {
    if (stops1 && stops2 && stops3) {
      setStopsAll(true);
    }
    if (!stops1 && !stops2 && !stops3) {
      setStopsFree(true);
    }
    if (stops1 || stops2 || stops3) {
      setStopsFree(false);
    }
  }, [stops1, stops2, stops3, stopsAll, stopsFree]);

  return (
    <div className="app-aviasales">
      <div className="app-aviasales__logo"></div>
      <div className="app-aviasales__main">
        <Filter filterHandler={filterHandler} filterMode={filterMode} />
        <FilterOptions
          stops1={stops1}
          stops2={stops2}
          stops3={stops3}
          stopsAll={stopsAll}
          stopsFree={stopsFree}
          setStopsCount={handler}
        />
        <TicketList tickets={displayTickets2} />
      </div>
    </div>
  );
};

export default AppAviasales;
