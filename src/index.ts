const button = document.getElementById('myButton');

button?.addEventListener('click', () => {
    alert('Button was clicked!');
});


<div class="searchResult" onclick="window.location.href='index.html'">
  <h1>Project name is here</h1>
  <p>project description</p>
</div>

function addSearchResult(title:string, description:string, onclick) {
  const searchResultContainer = document.getElementById("searchResults");

  const searchResult = document.createElement("div");
  searchResult.classList.add("searchResult");

  searchResult.addEventListener("click", onclick);

  const heading = document.createElement("h1");
  heading.textContent = title;

  const description = document.createElement("p");
  description.textContent = description;

  searchResult.appendChild(heading);
  searchResult.appendChild(description);

  searchResultContainer.appendChild(searchResult);
}
