function extractText() {
   let items=$("li")
       .toArray()
       .map(x=>x.textContent)
       .join(", ");

   $("#result").text(items);
}

