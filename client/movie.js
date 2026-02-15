const id = new URLSearchParams(location.search).get("id");

fetch(`http://localhost:3001/api/movies/${id}`)
.then(r=>r.json())
.then(m=>{
  movie.innerHTML=`
    <h1>${m.title || m.name}</h1>
    <p>${m.overview || ""}</p>
    <p>${m.release_date ? new Date(m.release_date).toLocaleDateString() : ""}</p>
    <p>${m.runtime || ""} minutes</p>
  `;
});
