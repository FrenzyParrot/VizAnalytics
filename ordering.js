document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('documentList');

  // Include Sortable.js library directly in the script
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.14.0/Sortable.min.js';
  script.onload = function () {
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
  };

  document.head.appendChild(script);
});
