const fill = (coll, value, start, end) => {
  const collLength = coll.length;
  if (end > collLength - 1) end = collLength - 1;
  if (end <= start) return coll;

  for (let i = start; i < end; i += 1) {
    coll[i] = value;
  }
  
  return coll;
};

  console.log(fill([1, 2, 3, 4, 5], 'y', 2, 10));