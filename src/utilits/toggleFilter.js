const toggleFilter = (filter, nameFilter) => {
  const newValue = !filter[nameFilter]
  let filterCount = 0
  const newFilter = {}

  if (nameFilter === 'checkedALL') {
    for (const key in filter) {
      if (Object.hasOwnProperty.call(filter, key)) {
        newFilter[key] = newValue
      }
    }
    return newFilter
  }

  for (const key in filter) {
    if (Object.hasOwnProperty.call(filter, key)) {
      filterCount = filter[key] ? filterCount + 1 : filterCount - 1
    }
  }

  if (filterCount === 3 && newValue) {
    Object.assign(newFilter, filter, {
      [nameFilter]: newValue,
      checkedALL: newValue,
    })
    return newFilter
  }

  Object.assign(newFilter, filter, {
    [nameFilter]: newValue,
    checkedALL: false,
  })
  return newFilter
}
export default toggleFilter
