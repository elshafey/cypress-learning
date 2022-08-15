class CareerLevel
{
    selectLevel(index){
        cy.get(':nth-child('+index+') > [tabindex="0"] > .panel-body')
          .click()
    }

    getSelectedLevel(){
        return cy.get('.e67rya20 div.selected .panel-body')
    }

}

export default CareerLevel