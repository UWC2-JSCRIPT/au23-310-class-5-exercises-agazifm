//broke up the original comments provided in assignments to guide my code, down below

document.addEventListener('DOMContentLoaded', function() {
    //selects all <td> within the table
    const tdElements = document.querySelectorAll('td');

    // Attach one listener that will detect clicks on any of the <td>
    document.addEventListener('click', function(event) {
        // combs through all <td> elements
        tdElements.forEach(function(td) {
            // checks if click is a <td> within the table
            if (event.target === td) {
                // update that element's innerHTML to be the
                // x, y coordinates of the mouse at the time of the click
                td.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
            }
        });
    });
});