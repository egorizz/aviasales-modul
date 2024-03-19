function getSortedList(receivedState) {
  const { stops1, stops2, stops3, stopsAll, stopsFree, filterMode } = receivedState;

  let sortedByMode = [];
  if (filterMode === 'opt') {
    sortedByMode = [...receivedState.tickets];
  }
  if (filterMode === 'low') {
    sortedByMode = [...receivedState.tickets].sort((a, b) => a.price - b.price);
  }
  if (filterMode === 'fst') {
    sortedByMode = [...receivedState.tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  }

  let sortedByTicks = [];

  const arrayOfPoint = [];
  if (stops1) {
    arrayOfPoint.push(1);
  }
  if (stops2) {
    arrayOfPoint.push(2);
  }
  if (stops3) {
    arrayOfPoint.push(3);
  }
  if (stopsFree) {
    arrayOfPoint.push(0);
  }

  if (stops1 && stops2 && stops3 && stopsAll && stopsFree) {
    sortedByTicks = [...sortedByMode];
  } else {
    sortedByTicks = [...sortedByMode].filter((node) =>
      arrayOfPoint.includes(node.segments[0].stops.length + node.segments[1].stops.length)
    );
  }
  return sortedByTicks;
}

export default getSortedList;
