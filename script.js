const projectData = [
            {
                image: "https://via.placeholder.com/500x300?text=Image+1", 
                caption: "ตรวจสอบและออกแบบระบบ MV/LV ให้กับโครงการ"
            },
            {
                image: "https://via.placeholder.com/500x300?text=Image+2", 
                caption: "จำลองการทำงานและคำนวณ Relay Protection ด้วยโปรแกรม ETAP"
            },
            {
                image: "https://via.placeholder.com/500x300?text=Image+3", 
                caption: "ประชุมและประสานงานกับทีมผู้รับเหมาหน้างาน (Site Support)"
            }
        ];

        let currentIndex = 0;

        function updateSlider() {
            document.getElementById("slider-image").src = projectData[currentIndex].image;
            document.getElementById("slider-caption").innerText = projectData[currentIndex].caption;
        }

        function nextImage() {
            currentIndex = currentIndex + 1;
            if (currentIndex >= projectData.length) {
                currentIndex = 0; 
            }
            updateSlider();
        }

        function prevImage() {
            currentIndex = currentIndex - 1;
            if (currentIndex < 0) {
                currentIndex = projectData.length - 1; 
            }
            updateSlider();
        }