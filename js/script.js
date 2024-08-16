window.onscroll=()=>{
let header=document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);
};

document.getElementById('viewResumeBtn').addEventListener('click', function() {
    var resumeContainer = document.getElementById('resumeContainer');
    var pdfViewer = document.getElementById('pdfViewer');
    
    // Set the PDF file location here
    pdfViewer.src = 'shivam_resume.pdf';
    
    // Display the PDF viewer
    resumeContainer.style.display = 'block';
});