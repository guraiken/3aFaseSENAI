test('dois mais dois igual quatro', () => {
    expect(2+2).toBe(4)
})

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

const classroom = {
    studentsQnt: 30,
    maxRoomCapacity: 40,
    schoolClass: "Portuguese"
}

describe('the classroom', () => {
    test('has 30 students', () => {
        expect(classroom.studentsQnt).toBe(30)
    })
    test('room supports capacity', () =>{
        expect(classroom.maxRoomCapacity).toBe(40)
    })
    test('it´s portuguese', () => {
        expect(classroom.schoolClass).toBe('Portuguese')
    })
})

const fruit01 = {
    flavor: "grapefruit",
    ounces: 12
}

const fruit02 = {
    flavor: "grapefruit",
    ounces: 12
}


describe('the la croix cans on my desk', () =>{
    test('have all the same properties', ()=> {
        expect(fruit01).toEqual(fruit02)
    })
    test('are not the same can', () => {
        expect(fruit01).not.toEqual(fruit02)
    })    
})

const idoso1 = {
    sabor: 'velho',
    pesa: 90
}

const idoso2 = {
    sabor: 'velho',
    pesa: 90
}

describe('o dois velhos', () => {
    test('os velhos são iguais', () => {
        expect(idoso1).toEqual(idoso2)
    })
    test('os velhos NÃO são iguais', () => {
        expect(idoso1).not.toEqual(idoso2)
    })
})