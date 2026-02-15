fetch("http://localhost:3001/api/movies")
.then(r=>r.json())
.then(data=>{
  const list = data.data || data;   // works for both formats

  list.forEach(m=>{
    const d=document.createElement("div");
    d.className="card";
    d.innerHTML=`
      <h3>${m.title || m.name}</h3>
      <p>${m.tagline || ""}</p>
      <p>${(m.vote_average || 0).toFixed(1)} / 10</p>
    `;
    d.onclick=()=>location=`movie.html?id=${m.id}`;
    movies.appendChild(d);
  });
});
