// ==========================================
// 1. ส่วนของ Project Slider
// ==========================================
const projectData = [

    {
        image: "cat4.jpg", 
        caption: "หนูชื่อ เอโลอิส"
    },
    {
        image: "cat1.jpg", 
        caption: "ผมชื่อ ฟิว โฟเด้น"
    },
    {
        image: "cat2.jpg", 
        caption: "ผมชื่อ เทา เทา"
    },
    {
        image: "cat3.jpg", 
        caption: "ผมชื่อ พามเมอร์"
    }
];

let currentIndex = 0;

// ดึง Element มารอไว้ก่อน (Caching) เพื่อลดภาระการค้นหา DOM ทุกครั้งที่คลิกเปลี่ยนรูป
const sliderImage = document.getElementById("slider-image");
const sliderCaption = document.getElementById("slider-caption");

const updateSlider = () => {
    sliderImage.src = projectData[currentIndex].image;
    sliderCaption.innerText = projectData[currentIndex].caption;
};

// ใช้เครื่องหมาย Modulo (%) เพื่อจัดการการวนลูป (แทนการใช้ if หลายบรรทัด)
function nextImage() {
    currentIndex = (currentIndex + 1) % projectData.length;
    updateSlider();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + projectData.length) % projectData.length;
    updateSlider();
}

// ==========================================
// 2. ส่วนของ Profile Image Hover (ใส่แว่น)
// ==========================================
const profileImg = document.querySelector('.profile-img');
const defaultImage = 'profile-picture.jpg'; 
const hoverImage = 'profile-picture-dark.jpg'; 

// Preload รูปภาพแว่นทึบไว้ล่วงหน้า เพื่อไม่ให้กระตุกตอนเอาเมาส์ไปชี้ครั้งแรก
const preload = new Image();
preload.src = hoverImage;

// เช็คความปลอดภัย (Safety Check) ว่ามี element รูปโปรไฟล์อยู่จริงก่อนใส่ Event
if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
        profileImg.src = hoverImage;
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.src = defaultImage;
    });
}