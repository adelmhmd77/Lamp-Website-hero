let btn = document.querySelector('#btn');
let light = document.querySelector('#light'); // Selecting by ID for accuracy

function toggleLight() { 
    btn.classList.toggle('active');
    light.classList.toggle('on');
}

// Add event listener instead of using onclick in HTML
btn.addEventListener('click', toggleLight);

