const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('task');
const timeInput = document.getElementById('time');
const addButton = document.getElementById('add');
const chart = document.getElementById('chart');

let tasks = [];

addButton.addEventListener('click', () => {
    const task = taskInput.value;
    const time = timeInput.value;
    if (task && time) {
      tasks.push({ task, time });
      taskInput.value = '';
      timeInput.value = '';
      displayTasks();
      displayChart(tasks); // call displayChart with the updated tasks array
    }
    
  });
  

function displayTasks() {
    taskList.innerHTML = '';
    const labels = [];
    const data = [];
    for (const task of tasks) {
      const li = document.createElement('li');
      li.textContent = `${task.task} - ${task.time}`;
      taskList.appendChild(li);
      labels.push(task.task);
      data.push(parseInt(task.time.split(':')[0]));
    }
  
    const chart = new Chart(document.getElementById('chart'), {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: 'Time spent on tasks',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }