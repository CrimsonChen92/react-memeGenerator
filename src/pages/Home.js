import React from "react";

function Home() {
  return (
    <div class="container">
      <h1>Home</h1>
      <p>Welcome to the Meme Generator Home Page</p>
      <br></br>
      <button onClick={switchPage}>Start Making Meme Now!</button>
    </div>
  );
}
function switchPage() {
  window.location.href = "http://localhost:3000/memes";
}

export { Home };
