// function myfunction() {
//   return <h1> i'm learning react </h1>;
// }

// ReactDOM.render(
//   <div>
//     <myfunction />
//   </div>,
//   document.querySelector("#root")
// );

// ReactDOM.render(
//   <h1>new methode to create root</h1>,
//   document.querySelector("#root")
//);

// const rootroot = ReactDOM.createRoot(document.querySelector("#root"));
// const element = <h1>new methode to create root</h1>;
// rootroot.render(element);
// -------------------------------------------------------------------------------
// const h1 = document.createElement("h1");
// h1.textContent = "this is hello content";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const element = <h1>this is jsx element</h1>;
// ReactDOM.render(element, document.getElementById("root"));
// console.log(element);

const page = (
  <div>
    <nav>
      <h1> website </h1>
      <ul>
        <li>pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);
ReactDOM.render(page, document.getElementById("root"));

// 30:45
