const isEmptyFilter = (filter) => {
  for (const key in filter) {
    if (filter[key]) return false
  }
  return true
}

export default isEmptyFilter
