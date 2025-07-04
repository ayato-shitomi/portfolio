document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chart-container');
    const subGrids = [];
    const textareas = [];

    // Create 9 sub-grids (3x3)
    for (let i = 0; i < 9; i++) {
        const subGrid = document.createElement('div');
        subGrid.classList.add('sub-grid');
        chartContainer.appendChild(subGrid);
        subGrids.push(subGrid);

        const subGridTextareas = [];
        // Create 9 cells within each sub-grid
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            const textarea = document.createElement('textarea');
            textarea.setAttribute('data-subgrid-index', i);
            textarea.setAttribute('data-cell-index', j);
            cell.appendChild(textarea);
            subGrid.appendChild(cell);
            subGridTextareas.push(textarea);
        }
        textareas.push(subGridTextareas);
    }

    // Function to update the URL with the chart data
    const updateURL = () => {
        const allText = textareas.flat().map(t => t.value);
        // Encode to handle multi-byte characters
        const data = btoa(encodeURIComponent(JSON.stringify(allText)));
        history.replaceState(null, '', `?data=${data}`);
    };

    // Function to load chart data from the URL
    const loadFromURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const data = urlParams.get('data');
        if (data) {
            try {
                // Decode to handle multi-byte characters
                const allText = JSON.parse(decodeURIComponent(atob(data)));
                if (Array.isArray(allText) && allText.length === 81) {
                    textareas.flat().forEach((textarea, index) => {
                        textarea.value = allText[index] || '';
                    });
                }
            } catch (e) {
                console.error('Failed to load data from URL', e);
            }
        }
    };

    // Function to link the center grid to the outer grids
    const linkGrids = () => {
        const centerSubGridTextareas = textareas[4];
        const outerSubGridIndices = [0, 1, 2, 3, 5, 6, 7, 8];

        centerSubGridTextareas.forEach((textarea, index) => {
            if (index === 4) return; // Skip the main theme cell

            const correspondingOuterSubGridIndex = outerSubGridIndices[index < 4 ? index : index - 1];
            const targetTextarea = textareas[correspondingOuterSubGridIndex][4];

            // Sync from center to outer
            textarea.addEventListener('input', () => {
                targetTextarea.value = textarea.value;
                updateURL();
            });

            // Also update the URL when outer grid centers are edited directly
            targetTextarea.addEventListener('input', () => {
                 updateURL();
            });
        });
        
        // Add event listeners to all other textareas to update URL
        textareas.forEach((subGrid, i) => {
            subGrid.forEach((textarea, j) => {
                 // Add listener only if it doesn't have one already
                 if (i === 4 || (i !== 4 && j === 4)) {
                    // These already have listeners from the logic above
                 } else {
                    textarea.addEventListener('input', updateURL);
                 }
            });
        });
         // Add listener for the very center cell
        textareas[4][4].addEventListener('input', updateURL);
    };

    loadFromURL();
    linkGrids();
    // Initial sync in case of loading from URL
    const centerSubGridTextareas = textareas[4];
    const outerSubGridIndices = [0, 1, 2, 3, 5, 6, 7, 8];
     centerSubGridTextareas.forEach((textarea, index) => {
        if (index === 4) return; 
        const correspondingOuterSubGridIndex = outerSubGridIndices[index < 4 ? index : index - 1];
        const targetTextarea = textareas[correspondingOuterSubGridIndex][4];
        targetTextarea.value = textarea.value;
    });
});
