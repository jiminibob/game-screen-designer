export const AddEntry = ({ entries, newEntry }) => {
  const newEntries = { ...entries };
  newEntries[newEntry.id] = { ...newEntry };
  return newEntries;
};

export const AddEntries = ({ entries, newEntries }) => {
  return {
    ...entries,
    ...ArrayToKeyValue({ items: newEntries })
  };
};

export const RemoveEntry = ({ entries, id }) => {
  const newEntries = { ...entries };
  delete newEntries[id];
  return newEntries;
};

export const UpdateEntry = ({ entries, updatedEntry }) => {
  return AddEntry({ entries, entry: updatedEntry });
};

export const UpdateEntryValues = ({ entries, entryid, updatedValues }) => {
  const newEntries = { ...entries };
  newEntries[entryid] = { ...entries[entryid], ...updatedValues };
  return newEntries;
};

export const GetEntryById = ({ entries, entryid }) => {
  return FindByProp({ items: entries, prop: 'id', value: entryid });
};

export const GetEntryAsNew = ({ entries, entryid }) => {
  const result = GetEntryById({ entries, entryid });
  if (result) {
    return { ...result };
  }
};

export const GetEntryPropValue = ({ entries, entryid, propName }) => {
  const entry = GetEntryById({ entries, entryid });
  return entry[propName];
};

// SHORTCUTS
export const ArrayToKeyValue = ({ items, propname = 'id' }) => {
  return items.reduce((obj, item) => {
    obj[item[propname]] = item;
    return obj;
  }, {});
};

export const FindByProp = ({ items, prop, value }) => {
  return items.find((item) => {
    return item[prop] === value;
  });
};
