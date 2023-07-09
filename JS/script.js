const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
    
    setInterval(() => {
        image1.classList.toggle('hidden');
        image2.classList.toggle('hidden');
    }, 3000);