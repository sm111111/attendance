
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function showResult(result) {
    const resultBox = document.getElementById('resultBox');

    if (result === 'Dashboard') {
        resultBox.innerHTML = `
            <div class="active_result">
                <div class="boxs">
                    <i class="bi bi-people custom-icon"></i>
                    <span>250</span>
                    <br>
                    <strong>Total Employees</strong>
                </div>
                <div class="boxs">
                    <i class="bi bi-person-dash-fill custom-icon"></i>
                    <span>10</span>
                    <br>
                    <strong>On Leave</strong>
                </div>
                <div class="boxs">
                    <i class="bi bi-person-workspace custom-icon"></i>
                    <span>20</span>
                    <br>
                    <strong>Working Recently</strong>
                </div>
                <div class="boxs">
                    <i class="bi bi-check-circle custom-icon"></i>
                    <span>4</span>
                    <br>
                    <strong>Pending Tasks</strong>
                </div>
            </div>
            <div class="chart_container">
                <div class="chart box_chart_40">
                    <div class="container">
        <h6>Employee Attendance</h6>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr onclick="showInfo('John Doe', 'john@example.com', 'Software Engineer')">
                    <td>John Doe</td>
                    <td><input type="checkbox" checked></td>
                </tr>
                <tr onclick="showInfo('Jane Smith', 'jane@example.com', 'Project Manager')">
                    <td>Jane Smith</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr onclick="showInfo('Emily Johnson', 'emily@example.com', 'Designer')">
                    <td>Emily Johnson</td>
                    <td><input type="checkbox" checked></td>
                </tr>
                <tr onclick="showInfo('Michael Brown', 'michael@example.com', 'Developer')">
                    <td>Michael Brown</td>
                    <td><input type="checkbox"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div id="infoModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeInfo()">&times;</span>
            <h2 id="employeeName"></h2>
            <p>Email: <span id="employeeEmail"></span></p>
            <p>Position: <span id="employeePosition"></span></p>
        </div>
    </div>
                </div>
                <div class="chart box_chart_60">
                    <div class="four_box">
                        <ul>
                            <li><div class="loader"></div></li>
                            <li><div class="loader"></div></li>
                            <li><div class="loader"></div></li>
                            <li><div class="loader"></div></li>
                        </ul>
                    </div>
                </div>
            </div>`;
    } else if (result === 'Attendance'){
        resultBox.innerHTML =`<div class="container_attendance">
        <h1>Hello Shekhar</h1>
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Emp Name</th>
                    <th>Date</th>
                    <th>Schedule In</th>
                    <th>Schedule Out</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
             
                <tr onclick="redirectToDetails('1')">
                    <td>001</td>
                    <td>shekhar mali</td>
                    <td>2024-09-21</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>Present</td>
                </tr>
                <tr onclick="redirectToDetails('2')">
                    <td>002</td>
                    <td>sujit saroj</td>
                    <td>2024-09-21</td>
                    <td>09:30 AM</td>
                    <td>05:30 PM</td>
                    <td>Absent</td>
                </tr>
                <tr onclick="redirectToDetails('3')">
                    <td>001</td>
                    <td>shekhar mali</td>
                    <td>2024-09-21</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>Present</td>
                </tr>
                <tr onclick="redirectToDetails('4')">
                    <td>002</td>
                    <td>sujit saroj</td>
                    <td>2024-09-21</td>
                    <td>09:30 AM</td>
                    <td>05:30 PM</td>
                    <td>Absent</td>
                </tr><tr onclick="redirectToDetails('5')">
                    <td>001</td>
                    <td>shekhar mali</td>
                    <td>2024-09-21</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>Present</td>
                </tr>
                <tr onclick="redirectToDetails('6')">
                    <td>002</td>
                    <td>sujit saroj</td>
                    <td>2024-09-21</td>
                    <td>09:30 AM</td>
                    <td>05:30 PM</td>
                    <td>Absent</td>
                </tr><tr onclick="redirectToDetails('7')">
                    <td>001</td>
                    <td>shekhar mali</td>
                    <td>2024-09-21</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>Present</td>
                </tr>
                <tr onclick="redirectToDetails('8')">
                    <td>002</td>
                    <td>sujit saroj</td>
                    <td>2024-09-21</td>
                    <td>09:30 AM</td>
                    <td>05:30 PM</td>
                    <td>Absent</td>
                </tr><tr onclick="redirectToDetails('9')">
                    <td>001</td>
                    <td>shekhar mali</td>
                    <td>2024-09-21</td>
                    <td>09:00 AM</td>
                    <td>05:00 PM</td>
                    <td>Present</td>
                </tr>
                <tr onclick="redirectToDetails('10')">
                    <td>002</td>
                    <td>sujit saroj</td>
                    <td>2024-09-21</td>
                    <td>09:30 AM</td>
                    <td>05:30 PM</td>
                    <td>Absent</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>`;
       
    } else if(result === 'Employes'){
        resultBox.innerHTML = ``;

    } else if(result ===  'Holiday'){
        resultBox.innerHTML = `
        <h2>Holidays and Festivals in 2024</h2>
        <table class="holiday-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Festival</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>January 14</td>
                    <td>Makar Sankranti</td>
                    <td>Harvest festival celebrated with kite flying.</td>
                </tr>
                <tr>
                    <td>January 26</td>
                    <td>Republic Day</td>
                    <td>Celebration of India's constitution.</td>
                </tr>
                <tr>
                    <td>March 8</td>
                    <td>Holi</td>
                    <td>Festival of colors, celebrating spring.</td>
                </tr>
                <tr>
                    <td>March 25</td>
                    <td>Ram Navami</td>
                    <td>Celebration of Lord Rama's birth.</td>
                </tr>
                <tr>
                    <td>April 10</td>
                    <td>Good Friday</td>
                    <td>Christian observance of the crucifixion.</td>
                </tr>
                <tr>
                    <td>April 14</td>
                    <td>Baisakhi</td>
                    <td>Harvest festival celebrated in Punjab.</td>
                </tr>
                <tr>
                    <td>May 1</td>
                    <td>Maharashtra Day</td>
                    <td>Marks the formation of the state of Maharashtra.</td>
                </tr>
                <tr>
                    <td>June 16</td>
                    <td>Eid al-Adha</td>
                    <td>Islamic festival of sacrifice.</td>
                </tr>
                <tr>
                    <td>July 6</td>
                    <td>Guru Purnima</td>
                    <td>Day to honor one's teachers and gurus.</td>
                </tr>
                <tr>
                    <td>August 15</td>
                    <td>Independence Day</td>
                    <td>Celebration of India's independence.</td>
                </tr>
                <tr>
                    <td>September 9</td>
                    <td>Ganesh Chaturthi</td>
                    <td>Festival celebrating Lord Ganesha.</td>
                </tr>
                <tr>
                    <td>October 2</td>
                    <td>Gandhi Jayanti</td>
                    <td>Celebration of Mahatma Gandhi's birthday.</td>
                </tr>
                <tr>
                    <td>October 10</td>
                    <td>Dussehra</td>
                    <td>Victory of good over evil; celebrates Lord Rama's victory over Ravana.</td>
                </tr>
                <tr>
                    <td>October 31</td>
                    <td>Diwali</td>
                    <td>Festival of Lights, celebrating the return of Lord Rama.</td>
                </tr>
                <tr>
                    <td>November 12</td>
                    <td>Gurpurab</td>
                    <td>Celebration of Guru Nanak's birth.</td>
                </tr>
                <tr>
                    <td>December 25</td>
                    <td>Christmas</td>
                    <td>Celebrating the birth of Jesus Christ.</td>
                </tr>
            </tbody>
        </table>
    `;
    } else {
        resultBox.innerText = result;
    }
}


function redirectToDetails(employeeId) {
    window.location.href = `details.html?id=${employeeId}`;
}


