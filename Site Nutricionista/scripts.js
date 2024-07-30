document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isExpanded = answer.style.maxHeight;

            // Collapse all answers
            document.querySelectorAll('.faq-answer').forEach(answer => {
                answer.style.maxHeight = null;
            });

            // Expand the clicked answer
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});



/*footer*/


document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    if (email) {
        alert('Obrigado por se inscrever, ' + email + '!');
        document.getElementById('email').value = '';
    } else {
        alert('Por favor, insira um email válido.');
    }
});

