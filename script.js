        // Subject data with chapters and Google Drive links
        const subjects = {
            chemistry: {
                name: "Chemistry",
                icon: "fas fa-flask",
                chapters: [
                    { name: "Chapter 1", link: "https://drive.google.com/open?id=1z3bgmaN176W32dtt9ZihZ_IdA8bnjX8B&usp=drive_copy" },
                    { name: "Chapter 2", link: "https://drive.google.com/open?id=13Se1ze8DVwbFBUPGvCL2siXVJhC5tWE-&usp=drive_copy" },
                    { name: "Chapter 3", link: "https://drive.google.com/open?id=1rEwo49zlMeOk8xh0iZzmc_RaBd2Y4OsM&usp=drive_copy" },
                    { name: "Chapter 4", link: "https://drive.google.com/open?id=1Uyz9aOZz88TW12oNYrr99QYYSiGvsRpi&usp=drive_copy" },
                    { name: "Chapter 5", link: "https://drive.google.com/open?id=1Hp0ZszGfKq__CD55LzLKd13F09_qdsko&usp=drive_copy" },
                    { name: "Chapter 7", link: "https://drive.google.com/open?id=1a9OMaFqyhRplR-nQydNpNqwhC_ga07KR&usp=drive_copy" },
                    { name: "Chapter 11", link: "https://drive.google.com/open?id=1Ha_pnCqm821UlxX3a29r1uqK7xCA2_kz&usp=drive_copy" }
                ]
            },
            biology: {
                name: "Biology",
                icon: "fas fa-seedling",
                chapters: [
                    { name: "Chapter 1", link: "https://drive.google.com/open?id=1TFQK5OI29Nhh6ai_ZOSg4o-ojBXwagX8&usp=drive_copy" },
                    { name: "Chapter 2", link: "https://drive.google.com/open?id=1LK0K8PoaU8FvBP_EAdUA0SkS5wiwbaTr&usp=drive_copy" },
                    { name: "Chapter 3", link: "https://drive.google.com/open?id=10VAcp9A6ITMvnb_VdfDunfpykO5EDcjJ&usp=drive_copy" },
                    { name: "Chapter 4", link: "https://drive.google.com/open?id=1nmpYIYrz2-fuoC76BfnuDzdGoJKxWWWv&usp=drive_copy" },
                    { name: "Chapter 8", link: "https://drive.google.com/open?id=1vPb2Gpd9l7NocB99Kxcp6r7QzH6FXLsy&usp=drive_copy" },
                    { name: "Chapter 10", link: "https://drive.google.com/open?id=1TSg1J1-6Y7xymchgsJpeaW9H91veF3Hp&usp=drive_copy" },
                    { name: "Chapter 11", link: "https://drive.google.com/open?id=1PthUmUiaFePVwKFW507cVZIs2MC-zAXp&usp=drive_copy" },
                    { name: "Chapter 14", link: "https://drive.google.com/open?id=1YS60LFkJ0-8wMZu7O5uUDWbRkXst5fwQ&usp=drive_copy" },
                    { name: "One Shot MCQ", link: "https://drive.google.com/open?id=1qou9V--aMjwq5reqn8VOHj1GABnIvYpO&usp=drive_copy" }    
                ]
            },
            bgs: {
                name: "B.G.S.",
                icon: "fas fa-globe-asia",
                chapters: [
                    { name: "Chapter 1", link: "https://drive.google.com/open?id=1POnr6KMYLC1syUQLPPmkgXm_v4CWpXms&usp=drive_copy" },
                    { name: "Chapter 2", link: "https://drive.google.com/open?id=1Qg_IKfUI0OoF8xA2uIrGDnlo0YwfFagR&usp=drive_copy" },
                    { name: "Chapter 6", link: "https://drive.google.com/open?id=1vN95Eh98kR5MWqc-AaU3K4rbskn-FoB4&usp=drive_copy" },
                    { name: "Chapter 7", link: "https://drive.google.com/open?id=1yzRW-6R92jSC_yvuYVGu7Ycb6-3xV7-a&usp=drive_copy" },
                    { name: "Chapter 8", link: "https://drive.google.com/open?id=15eJqGRxywnq1mRQRfQC585cBy15LlZU9&usp=drive_copy" },
                    { name: "Chapter 9", link: "https://drive.google.com/open?id=14AEpharCCOcL3-CyhnUHe44g5qy10_B1&usp=drive_copy" },
                    { name: "Chapter 10", link: "https://drive.google.com/open?id=1oxZ3wMLF6CTiHRyiXjX8ekiiJpJO9s33&usp=drive_copy" },
                    { name: "Chapter 11", link: "https://drive.google.com/open?id=1XfyhZM7XvhZC3Bf9ri1-yO9Rz2cWckYB&usp=drive_copy" },
                    { name: "Chapter 12", link: "https://drive.google.com/open?id=1DdpBaz4CIPlVqwOcCJm4dKBvKsJ-le5r&usp=drive_copy" },
                    { name: "Chapter 13", link: "https://drive.google.com/open?id=1zjOiYfhZ27nFgbT2RDDGv0HyFiCVZl8C&usp=drive_copy" },
                    { name: "Chapter 14", link: "https://drive.google.com/open?id=11WVaEYj0HQQ6-Y7OZrHQ8YYV4s3Z6hKy&usp=drive_copy" },
                    { name: "Chapter 15", link: "https://drive.google.com/open?id=1PRbeZDhL_Oxz2AtNPu1MhdqPtqF1f9XU&usp=drive_copy" },
                ]
            }
        };
        
        // Handle subject clicks
        document.querySelectorAll('.subject-item').forEach(item => {
            item.addEventListener('click', function() {
                const subjectKey = this.getAttribute('data-subject');
                openSubjectPage(subjectKey);
            });
        });
        
        // Open subject page function
        function openSubjectPage(subjectKey) {
            const subject = subjects[subjectKey];
            
            // Update subject page content
            document.getElementById('subject-title').textContent = subject.name;
            document.getElementById('subject-icon').innerHTML = `<i class="${subject.icon}"></i>`;
            
            // Clear and populate chapter list
            const chapterList = document.getElementById('chapter-list');
            chapterList.innerHTML = '';
            
            subject.chapters.forEach(chapter => {
                const chapterItem = document.createElement('div');
                chapterItem.className = 'chapter-item';
                chapterItem.innerHTML = `
                    <div class="chapter-name">${chapter.name}</div>
                    <div class="chapter-icon">&gt;</div>
                `;
                chapterItem.addEventListener('click', () => {
                    window.open(chapter.link, '_blank');
                });
                chapterList.appendChild(chapterItem);
            });
            
            // Switch to subject page
            document.getElementById('home-page').classList.remove('active');
            document.getElementById('subject-page').classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Handle back button
        function goBack() {
            document.getElementById('subject-page').classList.remove('active');
            document.getElementById('home-page').classList.add('active');
            window.scrollTo(0, 0);
        }
        
        // Geometric shapes animation
        document.addEventListener('DOMContentLoaded', function() {
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(shape => {
                const randomX = (Math.random() - 0.5) * 20;
                const randomY = (Math.random() - 0.5) * 20;
                shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
                
                // Add hover animation
                shape.addEventListener('mouseenter', () => {
                    shape.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.2)`;
                });
                
                shape.addEventListener('mouseleave', () => {
                    shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
                });
            });
        });
