describe('Покупка нового фото', function () {
    it('Смена аватара', function () {
        //авторизация
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('lelikgam@yandex.ru');
        cy.get('#password').type('Lelik2023');
        cy.get('.auth__button').click();
        //выбор аватара
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5203628710352214');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0926');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Alena Gam');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})