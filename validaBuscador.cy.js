describe ('Visita buscador google e realiza pesquisa sobre cypress', ()=>{

    it('Acessa a página inicial do buscador',()=>{
        cy.visit ('google.com.br');


    })
    it('Valida barra de pesquisas realizando uma busca',()=>{
        cy.visit ('google.com.br');
        cy.get('.gLFyf').type('Alterdata')
        .type('{enter}');
        

    })
    it('Valida acesso ao link da alterdata pelo google',()=>{
        cy.visit ('google.com.br');
        cy.get('.gLFyf').type('Alterdata')
        .type('{enter}');
       cy.get('.LC20lb MBeuO DKV0Md').click()

    })



})

    