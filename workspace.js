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

  //console.log(fileNames);

  fileNames.forEach(fileName => {
    const listItem = document.createElement('li');
    listItem.textContent = fileName;
    list.appendChild(listItem);
  });


    new Sortable(list, {
      animation: 150, // animation duration in milliseconds
      ghostClass: 'sortable-ghost', // class for the drop placeholder
      chosenClass: 'sortable-chosen', // class for the chosen item while dragging
      dragClass: 'sortable-drag', // class for the dragging item
      onEnd: function (evt) {
        // Triggered when the item is dropped
        console.log('Item dropped:', evt.item);
      },
    });

  // Execute code on click
  $(list).on('click', 'li', function() {
    $(this).toggleClass('selected'); // change 'selected' to the name of your selected class

    // If the rectangle already exists, show or hide it
    if ($(this).data('rectangle')) {
      const rectangle = $(this).data('rectangle');
      rectangle.toggle();
    } else {
      // Create a rectangle, make it draggable, and append it to the body
      const rectangle = $('<div>').css({
        width: '20vw',
        background: 'white',
        border: '2px solid black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        padding: '10px',
        overflow: 'auto'
      }).draggable({
        start: function(event, ui) {
          // This is the original mouse position
          const click = {
            left: event.clientX,
            top: event.clientY
          };

          $(document).on('mousemove', function(event) {
            // This is the new mouse position
            const move = {
              left: event.clientX,
              top: event.clientY
            };

            // This is the difference between the new and original mouse position
            const offset = {
              left: move.left - click.left,
              top: move.top - click.top
            };

            // Move the draggable element by the same amount the mouse has moved
            ui.position = {
              top: ui.originalPosition.top + offset.top,
              left: ui.originalPosition.left + offset.left
            };
          });
        },
        stop: function() {
          $(document).off('mousemove');
        }
      });
      $('body').append(rectangle);

      // Store a reference to the rectangle in the list item
      $(this).data('rectangle', rectangle);

      // Load the text and set it as the content of the rectangle
      d3.text('data/' + $(this).text()).then(function(data) {
        rectangle.text(data);
      }).catch(function(error) {
        console.log(error);
      });
    }
  });

});


