describe('Автотесты на форму логина', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
    })

   it('Восстановление парля', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#forgotEmailButton').click(); // Нажали забыли пароль
        cy.get('#mailForgot').type('alina@mail.ru'); // Ввели другую почту
        cy.get('#restoreEmailButton').click(); // Нажали отправить код
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
    })

   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudi'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
    })

   it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('alina@mail.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
    })

   it('Логин без @ и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Совпадение текста
        })

   it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик виден
        })
})
