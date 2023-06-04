
document.getElementById("getForm").addEventListener("submit", (e) => {
    e.preventDefault();
    loadMovies(document.querySelector("input[name='query']").value);
});
 
function loadMovies(name) {
    var omdbAPI = new XMLHttpRequest();
    var omdbURL = `http://www.omdbapi.com/?&apikey=64ee4908&t=${name}`;
    
    omdbAPI.open("get", omdbURL);
 	omdbAPI.send();
    omdbAPI.onload = function(event) {
    event.preventDefault();
 
      if (this.status == 200) {
         var result = JSON.parse(this.responseText);
            let Movie =  result.Title;
            let year = result.Year;
            let director = result.Director;
            let Plot = result.Plot;
       
            document.getElementById('Movie_name').innerHTML = Movie;        
            document.getElementById('year').innerHTML = year;
            document.getElementById('Director').innerHTML = director;
            document.getElementById('Plot').innerHTML= Plot;
        }
    }
 
    
}





