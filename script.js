document.getElementById('generateTable').addEventListener('click', function() {
    const tableContainer = document.getElementById('tableContainer');
    let tableHTML = '<table border="1">';
    console.clear();  // Clear the console before printing a new table
    console.log("Multiplication Table:");

    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr>';
        for (let j = 1; j <= 10; j++) {
            const product = i * j;
            tableHTML += `<td>${product}</td>`;
            if (j == 1) console.log(`Multiplication of ${i}`);
        }
        tableHTML += '</tr>';
        console.log(`${i} times table completed.`);
    }
    tableHTML += '</table>';

    tableContainer.innerHTML = tableHTML;
});
