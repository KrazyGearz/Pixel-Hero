// export default function Grid() {
//   if (typeof document !== "undefined") {
//     let gridContainer = document.createElement("container");

//     gridContainer.innerHTML = "";
//     for (let i = 0; i < 10; i++) {
//       let col = document.createElement("div");
//       col.classList.add("gridRow");
//       gridContainer.appendChild(col);
//       console.log(gridContainer);
//     }

//     return gridContainer;
//   }
// }
import styles from "../../styles/Home.module.css";
let mouseDown = false;

function draw(id) {
  console.log("mouseMove on id: " + id);
  if (mouseDown == true) {
    let box = document.getElementById(id);
    box.style.backgroundColor = "blue";
    console.log(box);
  }
  //console.log(box.backgroundColor);
}
export function reset() {
  // let grid = document.getElementById("grid");
  // console.log(grid);
  // grid.innerHTML = "";
  // grid.innerHTML = Grid();
}
export function Grid(h, w) {
  let grid = [];
  let idCount = 0;
  let height = h | 50;
  let width = w | 50;
  for (let m = 0; m < width; m++) {
    let gridRow = [];
    for (let i = 0; i < height; i++) {
      gridRow.push("");
    }
    grid.push(gridRow);
  }
  return (
    <container
      className={styles.container}
      onMouseDown={() => (mouseDown = true)}
    >
      {grid.map((arry) => (
        <div className={styles.gridyy}>
          {arry.map((value) => (
            <div
              id={idCount++}
              className={styles.gridyy}
              onMouseMove={(a) => draw(a.target.id)}
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </container>
  );
}
export function mouseUp() {
  mouseDown = false;
}
