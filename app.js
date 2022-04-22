// soru 1

const arr = [10, 20, 10, 20, 40, 40, 40, 90, 30, 10, 10];

// tekrar eden sayıları reduce ile yakala
function findRepeat(arr) {
  const repeat = arr.reduce((acc, item, i) => {
    if (item in acc) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  return repeat;
}

// tekrar eden sayılar reduce olmadan yapımı

function newFindRepeat(arr) {
  const newArr = {};
  arr.map((item, i) => {
    if (arr.indexOf(arr[i]) !== i) {
      return (newArr[item] += 1);
    }
    return (newArr[item] = 1);
  });
  return newArr;
}

// hackerrankteki Yöntem
function newFindRepeatA(arr) {
  const newArr = {};
  arr.map((item) => {
    newArr[item] = newArr[item] ? newArr[item] + 1 : 1;
  });
  return newArr;
}
newFindRepeatA(arr);

const a = newFindRepeat(arr);

// tekrar eden sayıları, tekrar ettikleri kadarını topla
function diviceTwo() {
  const value = Object.values(a);

  return value
    .filter((item) => item % 2 == 0)
    .reduce((acc, item) => item + acc);
}

diviceTwo();

// console.log(findRepeat(arr));
///////////////////////////////////////////////////

// soru 2
// T = yükselti :: D = Çukur
// patika yolunda bir kişi kaç kere çukur dan geçer

const roadPath = "TTTDDTTTDDDTTTTDDDTTTTDDD";

const roadDown = (arr) => {
  const seperateRoad = arr.split("");
  // split yerine [...arr]
  let downVal = 0;
  seperateRoad.filter((item, i) => {
    item === "D" ? (downVal = downVal + 1) : null;
  });

  // eğer yükseltiyi bulmak istersek
  const topVal = seperateRoad.length - downVal;

  return downVal;
};
roadDown(roadPath);

//aynı soru devam 0 yükselti de yola çılan biri yol sonun kaç metre yukarda veya aşağı da olur

function elevation(arr) {
  const seperateRoad = [...arr];
  let zeroPlace = 0;
  seperateRoad.map((item) => {
    if (item === "T") {
      return (zeroPlace = zeroPlace + 1);
    }

    return (zeroPlace = zeroPlace - 1);
  });

  return zeroPlace * 100 + " m";
}

elevation(roadPath);

let box = document.querySelector("#box");
let container = document.querySelector(".container");

window.addEventListener("load", () => {
  container.style.position = "relative";
  box.style.position = "absolute";
  box.style.left = 50 + "%";
  box.style.top = 50 + "%";
  // getComputedStyle(box).getPropertyValue("left") == 0 + "px";
  // getComputedStyle(container).getPropertyValue("left") == 0 + "px";
  box.style.transform = "translate(-50%,-50%)";
});

const belkız = window.addEventListener("keyup", (e) => {
  
  buttons(e);
});


const list = ["b", "e", "l", "k", "ı", "z"];
const val = Math.floor(Math.random() * list.length);
let timer = -50;



function rain(arr) {
  const rainElem = document.createElement("div");
  const rainElPos = rainElem.getBoundingClientRect();

  rainElem.classList.add("rain");

  container.append(rainElem);
  rainElem.innerHTML = arr[val];
  
  let timeout = setInterval(() => {
    rainElem.style.left = Math.floor(Math.random() * 300) + "px";
    rainElem.style.top = `${(timer += 5)}` + "px";

    console.log(rainElPos);
    if (timer > 300) {
      timer = 0;
      clearInterval(timeout);
    }
  }, 200);

}


rain(list);





const move = 7;




function buttons(e) {
  // normalde hata basmak yerine hareketi sınırlandıracaktım.
  // const boxPosLeft = window.getComputedStyle(box).getPropertyValue("left");
  // const boxPosRight = window.getComputedStyle(box).getPropertyValue("right");
  // const boxPosTop = window.getComputedStyle(box).getPropertyValue("top");
  // const boxPosBottom = window.getComputedStyle(box).getPropertyValue("bottom");

  const containerPosition = container.getBoundingClientRect();
  const boxDifPos = box.getBoundingClientRect();




  containerController(containerPosition, boxDifPos);


  switch (e.key) {
    case "a":
      box.style.left = parseInt(box.style.left) - move + "%";
      box.style.transform = "rotate(-90deg)";
      break;
    case "d":
      box.style.left = parseInt(box.style.left) + move + "%";
      box.style.transform = "rotate(90deg)";

      break;
    case "w":
      box.style.top = parseInt(box.style.top) - move + "%";
      box.style.transform = "rotate(0deg)";

      break;
    case "s":
      box.style.top = parseInt(box.style.top) + move + "%";
      box.style.transform = "rotate(180deg)";

      break;
  }
}

function containerController(containerPosition, boxDifPos) {
  if (
    boxDifPos.top < containerPosition.top ||
    boxDifPos.bottom > containerPosition.bottom ||
    boxDifPos.left < containerPosition.left ||
    boxDifPos.right > containerPosition.right
  ) {
    alert("gameOver");
    location.reload();
  }
}

