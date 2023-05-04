const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createPieChart);

function createPieChart() {
  const classes = Number(document.getElementById('classes').value);
  const sleeping = Number(document.getElementById('sleeping').value);
  const wash = Number(document.getElementById('wash').value);
  const studying = Number(document.getElementById('studying').value);
  const gaming = Number(document.getElementById('gaming').value);
  const walking = Number(document.getElementById('walking').value);
  
  const sum = classes + sleeping + wash + studying + gaming + walking;
  
  if (sum > 24) {
    location.reload();
  } else {
    const freeTime = 24 - sum;
    
    const data = {
      labels: ['Tunnid', 'Magamine', 'Pesu', 'Õppimine', 'Pelumine', 'Jalutamine', 'Vaba aeg'],
      datasets: [
        {
          label: 'Time Planner',
          backgroundColor: [
            '#2ecc71',
            '#3498db',
            '#95a5a6',
            '#9b59b6',
            '#f1c40f',
            '#e74c3c',
            '#bdc3c7',
          ],
          data: [classes, sleeping, wash, studying, gaming, walking, freeTime],
        },
      ],
    };

    const config = {
      type: 'pie',
      data: data,
    };

    const ctx = document.getElementById('myChart').getContext('2d');
    const pieChart = new Chart(ctx, config);
  }
}
