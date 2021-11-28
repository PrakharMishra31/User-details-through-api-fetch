const btnGetDetails = document.querySelector(".get_details");
const table = document.querySelector(".table");
const tableDetails = document.querySelector(".table_details");

const url = "https://jsonplaceholder.typicode.com/users";
const getDetails = async function () {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    table.classList.remove("hidden");
    console.log(data);
    data.forEach((el) => {
      const detailRow = document.createElement("tr");
      detailRow.innerHTML = `<td>${el.name}</td>
      <td>${el.address.city}</td>
      <td>${el.email}</td>
      <td>${el.phone}</td>`;
      tableDetails.appendChild(detailRow);
    });
  } catch (err) {
    console.log(err);
  }
};

btnGetDetails.addEventListener("click", function () {
  getDetails();
});
