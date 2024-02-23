document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('documentList');


  let fileNames = ['CIA_docs.txt', 'DIA_docs.txt', 'FBI_docs.txt', 'NSA_docs.txt', 'USCBP_docs.txt'];
  for (let i = 1; i <= 43; i++) {
    let formattedNumber = String(i).padStart(2, '0'); // This will add a leading zero to numbers less than 10
    fileNames.push(`CIA_${formattedNumber}`);
  }
  for (let i = 1; i <= 3; i++) {
    let formattedNumber = String(i).padStart(2, '0'); // This will add a leading zero to numbers less than 10
    fileNames.push(`DIA_${formattedNumber}`);
  }
  for (let i = 1; i <= 41; i++) {
    let formattedNumber = String(i).padStart(2, '0'); // This will add a leading zero to numbers less than 10
    fileNames.push(`FBI_${formattedNumber}`);
  }
  for (let i = 1; i <= 22; i++) {
    let formattedNumber = String(i).padStart(2, '0'); // This will add a leading zero to numbers less than 10
    fileNames.push(`NSA_${formattedNumber}`);
  }
  for (let i = 1; i <= 2; i++) {
    let formattedNumber = String(i).padStart(2, '0'); // This will add a leading zero to numbers less than 10
    fileNames.push(`USCBP_${formattedNumber}`);
  }

  console.log(fileNames);

  fileNames.forEach(fileName => {
    const listItem = document.createElement('li');
    listItem.textContent = fileName;

    list.appendChild(listItem);
  });

  // Include Sortable.js library directly in the script
  
    // Initialize Sortable when the library is loaded
    new Sortable(list, {
      animation: 150, // animation duration in milliseconds
      ghostClass: 'sortable-ghost', // class for the drop placeholder
      chosenClass: 'sortable-chosen', // class for the chosen item while dragging
      dragClass: 'sortable-drag', // class for the dragging item
      onEnd: function (/**Event*/evt) {
        // Triggered when the item is dropped
        console.log('Item dropped:', evt.item);
      },
    });
});


d3.text("data/CIA_08").then(function(data) {
  console.log(data);
}).catch(function(error) {
  console.log(error);
});