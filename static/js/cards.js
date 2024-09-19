/* PRODUCT CARDS 1*/

const card = document.getElementById("product-cards");
const scroollLeft = document.getElementById("left")
const scroollRight = document.getElementById("right");

scroollLeft.addEventListener("click", () => {
    
    card.scrollBy({
        left: - 270,
        behavior: "smooth",
    });
});

scroollRight.addEventListener("click", () => {
    card.scrollBy({
        left: 270,
        behavior: "smooth",
    });
});

/* PRODUCT CARDS 2 */

const card2 = document.getElementById("product-cards2");

const scroollLeft2 = document.getElementById("left2");

const scroollRight2 = document.getElementById("right2");

scroollLeft2.addEventListener("click", () => {
    card2.scrollBy({
        left: - 270,
        behavior: "smooth",
    })
})

scroollRight2.addEventListener("click", () => {
    card2.scrollBy({
        left: 270,
        behavior: "smooth",
    });
});
