document.querySelectorAll('.certificado-imagen__input').forEach(input => {
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function() {
            e.target.closest('.certificado-imagen')
                .querySelector('img')
                .src = reader.result;
        }
        
        if (file) reader.readAsDataURL(file);
    });
});