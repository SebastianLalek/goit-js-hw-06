const categoryList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const categoryElements = element.querySelectorAll("li").length;

  console.log(`Category: ${categoryName} 
  Elements: ${categoryElements} `);
});
