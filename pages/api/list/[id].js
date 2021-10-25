import listItem from '../../mock-data/list-by-id.json'


export default function personHandler({ query: { id } }, res) {
  console.log("Req received for '/list/{id}' by id " + id);


  if (id != 404) {

    if (listItem) {
      listItem.id = id;
    }

    res.status(200).json(listItem);

  } else {

    res.status(404).json({ message: `Item with id: ${id} not found.` })
  }


  // const filtered = listData && listData.content && listData.content.filter((p) => p.batchNumber === id)

  // // list with id exists
  // if (filtered.length > 0) {
  //   res.status(200).json(filtered[0])
  // } else {
  //   res.status(404).json({ message: `Item with id: ${id} not found.` })
  // }

}