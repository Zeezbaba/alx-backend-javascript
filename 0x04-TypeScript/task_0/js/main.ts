interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// creating two new students
const studentOne: Student = {
	firstName: "Azeez",
	lastName: "Okeleji",
	age: 99,
	location: "Lagos"
}

const studentTwo: student = {
	firstName: "Darasimi",
	lastName: "Timilehin",
	age: 44,
	location: "London"
}

const studentsList: Student[] = [studentOne, studentTwo];


// Creating header and table
const table = document.createElement('table');
const headerRow = table.insertRow();
const headers = ['First Name', 'Location'];

headers.forEach(header => {
  const th = document.createElement('th');
  th.innerText = header;
  headerRow.appendChild(th);
});

studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.innerText = student.firstName;
  locationCell.innerText = student.location;
});

document.getElementById('student-table')?.appendChild(table);
