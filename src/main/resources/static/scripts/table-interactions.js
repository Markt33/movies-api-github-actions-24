//wait until the page loads
window.onload = function (){
    //select all edit links
    const editLinks = document.querySelectorAll('.edit');
    for (const link of editLinks){
        link.onclick = editRecord;
    }

    const deleteLinks = document.querySelectorAll('.delete');
    for (const link of deleteLinks){
        link.onclick = deleteRecord;
    }

}

function deleteRecord(evt) {
    const deleteLink = evt.target;
    const row = deleteLink.parentElement.parentElement;
    const cells = row.children;

    const id = cells[0].innerHTML;

    //send the fetch request

    //how do we remove the row?
    row.remove();
}

function editRecord(evt){
    console.log(evt.target);

    //look for the id we are editing
    const editLink = evt.target;
    const row = editLink.parentElement.parentElement;
    const cells = row.children;

    const id = cells[0].innerHTML;
    console.log(`Editing id ${id}`);

    const species = cells[2].innerHTML;
    console.log(`Editing species ${species}`);

    //replace the text with an input element
    cells[2].innerHTML = `<input type="text" id="species" value="${species}">`;

    const location = cells[4].innerHTML;

    cells[4].innerHTML = `<input type="text" id="species" value="${location}">`;

}


/*
// Wait until the page loads
window.onload = async function () {
    // Fetch the data
    const uri = "http://localhost:8080/api/v1/teams/all";
    const config = {
        method: 'get'
    };

    try {
        const response = await fetch(uri, config);
        const data = await response.json();
        showTeams(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    // Select the form button and handle form submission
    const button = document.querySelector("#submit");
    button.onclick = addTeam;

    async function addTeam(event) {
        event.preventDefault(); // Stop the form from submitting

        const newTeam = {
            teamName: document.querySelector("#teamName").value,
            season: document.querySelector("#season").value,
            wins: document.querySelector("#wins").value
        };

        const addTeamUri = "http://localhost:8080/api/v1/teams";
        const addTeamConfig = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTeam)
        };

        try {
            const response = await fetch(addTeamUri, addTeamConfig);
            if (!response.ok) {
                throw new Error('Failed to add team');
            }
            const team = await response.json();
            const tbody = document.querySelector("#teamBody");
            addTeamRow(tbody, team);
        } catch (error) {
            console.error("Error adding team:", error);
        }
    }

    // Add event listeners to edit and delete links
    const tableBody = document.querySelector("#teamBody");
    tableBody.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("edit")) {
            editRecord(target);
        } else if (target.classList.contains("delete")) {
            deleteRecord(target);
        }
    });
};

function showTeams(teams) {
    const tbody = document.querySelector("#teamBody");
    tbody.innerHTML = ""; // Clear existing rows

    // Add rows for each team
    teams.forEach(team => {
        addTeamRow(tbody, team);
    });
}

function addTeamRow(tbody, team) {
    const row = tbody.insertRow();
    row.innerHTML = `
        <td>${team.id}</td>
        <td>${team.teamName}</td>
        <td>${team.season}</td>
        <td>${team.wins}</td>
        <td><button><a href="#" class="edit">Edit</a></button></td>
        <td><button><a href="#" class="delete">Delete</a></button></td>
    `;
}

async function deleteRecord(target) {
    const row = target.closest("tr");
    const id = row.children[0].textContent;
    const deleteUri = `http://localhost:8080/api/v1/teams/${id}`;

    const deleteConfig = {
        method: 'delete'
    };

    try {
        const response = await fetch(deleteUri, deleteConfig);
        if (!response.ok) {
            throw new Error('Failed to delete team');
        }
        row.remove(); // Remove the row from the table
    } catch (error) {
        console.error("Error deleting team:", error);
    }
}

function editRecord(target){
    const editLink = target;
    const row = editLink.closest("tr"); // Find the parent row
    const cells = row.children;

    // Extracting data from cells
    const teamName = cells[1].innerHTML;
    const season = cells[2].innerHTML;
    const wins = cells[3].innerHTML;

    // Replace text with input fields for editing
    cells[1].innerHTML = `<input type="text" id="teamName" value="${teamName}">`;
    cells[2].innerHTML = `<input type="text" id="season" value="${season}">`;
    cells[3].innerHTML = `<input type="text" id="wins" value="${wins}">`;

    // Adjusting edit link to save the changes
    editLink.textContent = "Save";
    editLink.onclick = saveRecord;
}

async function saveRecord(evt) {
    const saveLink = evt.target;
    const row = saveLink.closest("tr"); // Find the parent row
    const cells = row.children;

    // Extracting edited values
    const id = cells[0].textContent;
    const updatedTeamName = cells[1].querySelector("input").value;
    const updatedSeason = cells[2].querySelector("input").value;
    const updatedWins = cells[3].querySelector("input").value;

    const updateUri = `http://localhost:8080/api/v1/teams/${id}`;
    const updateConfig = {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            teamName: updatedTeamName,
            season: updatedSeason,
            wins: updatedWins
        })
    };

    try {
        const response = await fetch(updateUri, updateConfig);
        if (!response.ok) {
            throw new Error('Failed to update team');
        }
        // Update the row with new values
        cells[1].innerHTML = updatedTeamName;
        cells[2].innerHTML = updatedSeason;
        cells[3].innerHTML = updatedWins;

        // Adjusting edit link back to "Edit"
        saveLink.textContent = "Edit";
        saveLink.onclick = editRecord;
    } catch (error) {
        console.error("Error saving team:", error);
    }
}

 */