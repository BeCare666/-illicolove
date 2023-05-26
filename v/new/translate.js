 // Fonction de traduction
 function translateText(text, targetLanguage, callback) {
    $.ajax({
        url: 'https://translate.googleapis.com/translate_a/single',
        type: 'GET',
        dataType: 'json',
        data: {
            client: 'gtx',
            sl: 'fr',
            tl: targetLanguage,
            dt: 't',
            q: text
        },
        success: function(response) {
            if (response && response[0][0][0]) {
                const translatedText = response[0][0][0];
                callback(translatedText);
            } else {
                console.log('La réponse de l\'API de traduction est incorrecte.');
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

// Sélectionner les éléments de texte sur la page
const elements = $('body').find('*').filter(function() {
    return $(this).is(':not(script, style, title, meta, head, html') &&
        ($(this).is(':input, button, a') || $(this).children().length === 0) &&
        ($(this).attr('value') || $(this).attr('placeholder') || $(this).text()).trim() !== '';
});

elements.each(function() {
    const element = $(this);
    let textToTranslate = '';
    
    if ($(this).is(':input')) {
        textToTranslate = $(this).attr('value') || $(this).attr('placeholder');
    } else {
        textToTranslate = element.text();
    }
    
    translateText(textToTranslate, 'es', function(translatedText) {
        if (element.is(':input')) {
            element.val(translatedText);
        } else {
            element.text(translatedText);
        }
    });
});
