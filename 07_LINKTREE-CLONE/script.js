// const data = {
//   userName: "Aditya Singh",
//   bio: "I am a front-end web developer",
//   profileImage:
//     "https://media.licdn.com/dms/image/D4E03AQHBM_saUcWgvw/profile-displayphoto-shrink_400_400/0/1681462399775?e=1727308800&v=beta&t=EadHmSZbTC7qBU9N-PSyIlwq9V8Vc28I_p8hRgpMOgM",
//   socialLinks: [
//     {
//         instagram: "instagram.com"
//     },
//     {
//         facebook: "facebook.com"
//     },
//     {
//         linkedin: "linkedin.com"
//     }
//   ]
// };

const loader = document.querySelector(".loader");
const card = document.querySelector(".card");
const username = document.querySelector("#username");
const bio = document.querySelector("#bio");
const profileImage = document.querySelector("#profile-img");
const linkName = document.querySelector(".link-name");
const linkCard = document.querySelector(".inner-card");

function getData() {
    loader.style.display = "block";
    setTimeout(()=> {
        fetch("https://api.npoint.io/aff684963b66d9b149f8")
        .then(data => data.json())
        .then(data => {
        loader.style.display = "none";
        card.style.display = "block";
        applyData(data);
        });
    }, 1500);
}

function applyData(data) {
    username.innerText = data.userName;
    bio.innerText = data.bio;
    profileImage.src = data.profileImage;
    data.socialLinks.map(link => {
        linkCard.innerHTML = linkCard.innerHTML + `
            <a class="link-div" href="${link.linkUrl}" target="_blank">
                <img src="./images/${link.linkName}.png" class="icon">
                <h2 class="link-name">${link.linkName}</h2>
            </a>
        `
    });
}

getData();