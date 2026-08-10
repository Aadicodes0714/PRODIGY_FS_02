const token = localStorage.getItem('token');
if (!token) location.href = 'login.html';

const API = '/api/employees';
const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

async function loadEmployees() {
  const res = await fetch(API, { headers });
  const data = await res.json();
  const tbody = document.querySelector('#empTable tbody');
  tbody.innerHTML = '';
  data.forEach(e => {
    tbody.innerHTML += `
      <tr>
        <td>${e.name}</td><td>${e.email}</td><td>${e.phone}</td>
        <td>${e.position}</td><td>${e.department}</td><td>${e.salary}</td>
        <td>
          <button onclick='editEmp(${JSON.stringify(e)})'>Edit</button>
          <button onclick="deleteEmp('${e._id}')">Delete</button>
        </td>
      </tr>`;
  });
}

document.getElementById('empForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = empId.value;
  
  const body = JSON.stringify({
    name: document.getElementById('name').value, 
    email: document.getElementById('email').value, 
    phone: document.getElementById('phone').value,
    position: document.getElementById('position').value, 
    department: document.getElementById('department').value, 
    salary: +document.getElementById('salary').value
  });

  const res = await fetch(id ? `${API}/${id}` : API, {
    method: id ? 'PUT' : 'POST', headers, body
  });
  
  const data = await res.json();

  if (res.ok) { 
    resetForm(); 
    loadEmployees(); 
  } else { 
    // THIS TELLS US EXACTLY WHAT IS WRONG!
    if (data.errors) {
      alert('Validation Error: ' + data.errors[0].msg);
    } else if (data.message) {
      alert('Database Error: ' + data.message);
    } else {
      alert('Error saving employee');
    }
  }
});

function editEmp(e) {
  document.getElementById('empId').value = e._id;
  document.getElementById('name').value = e.name; 
  document.getElementById('email').value = e.email; 
  document.getElementById('phone').value = e.phone;
  document.getElementById('position').value = e.position; 
  document.getElementById('department').value = e.department; 
  document.getElementById('salary').value = e.salary;
  document.getElementById('formTitle').textContent = 'Edit Employee';
}

async function deleteEmp(id) {
  if (!confirm('Delete this employee?')) return;
  await fetch(`${API}/${id}`, { method: 'DELETE', headers });
  loadEmployees();
}

function resetForm() {
  document.getElementById('empForm').reset(); 
  document.getElementById('empId').value = ''; 
  document.getElementById('formTitle').textContent = 'Add Employee';
}

function logout() { 
  localStorage.removeItem('token'); 
  location.href = 'login.html'; 
}

loadEmployees();
