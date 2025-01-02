//2
const header = document.createElement("header");
header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";
document.body.prepend(header);

//3
const menuData = [
  { name: "Головна", url: "/" },
  { name: "Про нас", url: "/about" },
  { name: "Послуги", url: "/services" },
  { name: "Контакти", url: "/contacts" },
];

menuData.forEach(item => {
  const link = document.createElement("a");
  link.textContent = item.name;
  link.href = item.url;
  link.style.margin = "0 15px";
  header.appendChild(link);
});

//4
const links = header.querySelectorAll("a");
links.forEach(link => {
  link.setAttribute("target", "_blank");
});

//5
const flexBlock = document.createElement("div");
flexBlock.style.display = "flex";
flexBlock.style.flexWrap = "wrap";
flexBlock.style.gap = "10px";
document.body.appendChild(flexBlock);

for (let i = 0; i < 50; i++) {
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.borderRadius = "50%";
  div.style.backgroundColor = getRandomColor();
  flexBlock.appendChild(div);
}

//6
const circles = flexBlock.querySelectorAll("div");
circles.forEach(circle => {
  circle.classList.add("circle-element");
});

// Функція для генерації випадкового кольору
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//7
const container = document.createElement("div");
container.style.marginTop = "20px";
document.body.appendChild(container);

const elementsArray = [
  { text: "Елемент 1", usePrepend: true },
  { text: "Елемент 2", usePrepend: false },
  { text: "Елемент 3", usePrepend: true },
];

elementsArray.forEach(element => {
  const p = document.createElement("p");
  p.textContent = element.text;

  if (element.usePrepend) {
    container.prepend(p);
  } else {
    container.append(p);
  }
});
