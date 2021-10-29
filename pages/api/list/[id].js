import listItem from '../../mock-data/list-by-id.json';
import listItems from '../../mock-data/list-details.json';


export default function personHandler({ query: { id } }, res) {
  console.log("Req received for '/list/{id}' by id " + id);


  if (id != 404) {

    const filteredItems = listItems.filter( item => item.createDetails.batchNumber == id  );
    let matchedItem = { };

    if(filteredItems.length > 0){
      matchedItem = filteredItems[0];
   }
    else if (listItem) {
      matchedItem = listItem;
    }

    matchedItem.id = id;

    res.status(200).json(matchedItem);

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