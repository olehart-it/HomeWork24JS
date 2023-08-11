const form = document.getElementById("registration-form");
        const tableContainer = document.getElementById("table-container");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(form);

            const tableHTML = `
                <table>
                    <tr><th>Імя</th><td>${formData.get("first-name")}</td></tr>
                    <tr><th>Фамилия</th><td>${formData.get("last-name")}</td></tr>
                    <tr><th>Дата рождения</th><td>${formData.get("birthdate")}</td></tr>
                    <tr><th>Пол</th><td>${formData.get("gender")}</td></tr>
                    <tr><th>Город</th><td>${formData.get("city")}</td></tr>
                    <tr><th>Адрес</th><td>${formData.get("address")}</td></tr>
                    <tr><th>Язык</th><td>${formData.getAll("language").join(", ")}</td></tr>
                </table>
            `;

            tableContainer.innerHTML = tableHTML;
            form.style.display = "none"; 
        });