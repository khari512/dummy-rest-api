import listData from '../../mock-data/list.json'

export default function personHandler({ query: { id } }, res) {
    console.log("page by id "+id);
  const filtered = listData && listData.content && listData.content.filter((p) => p.batchNumber === id)

  // list with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Item with id: ${id} not found.` })
  }
}