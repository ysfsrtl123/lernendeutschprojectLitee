const { Word,words } = require('../model/word.js');

exports.getAdminHome = (req, res, next) => {
    const navbarTitle = 'Admin Login';
    res.render('index', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin',
        isAdmin: true
    });
};

exports.getAdminAbout = (req, res, next) => {
    const navbarTitle = 'Admin über uns'; 
    res.render('about', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin/about', 
        isAdmin: true
    });
};

exports.getAdminUbungen = (req, res, next) => {
    const navbarTitle = 'Admin Übungen';
    const words = Word.getAllWords(); // words dizisini al
    res.render('add', {
        navbarTitle,
        words, // Pug şablonuna gönderilen veri
        title: 'Admin Übungen',
        path: '/admin/ubungen',
        isAdmin: true 
    });
};

exports.postaddword = (req, res, next) => {
    const word = new Word(
        null, 
        req.body.q,
        req.body.addAnswer
    );

    console.log('Kelime:', req.body.q);
    console.log('Cevap:', req.body.addAnswer);

    word.addWord();
    console.log('Eklenen Kelime:', JSON.stringify(word, null, 2));
    res.redirect('/admin/ubungen');
};

exports.postDeleteWord = (req,res,next) => {
    const wordId = parseInt(req.params.id); 

    const wordIndex = words.findIndex(word => word.id === wordId); 

    if (wordIndex !== -1) {
        words.splice(wordIndex, 1); 
        console.log(`Kelime ID ${wordId} silindi.`);
    } else {
        console.log(`Kelime ID ${wordId} bulunamadı.`);
    }

    res.redirect('/admin/ubungen');
};

ex