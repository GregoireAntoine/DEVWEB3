test ('dd', function(){
     expect(1).toBe(1)
})


test('verif class col-sm-2 sidebar', function () {

    document.body.innerHTML = `<div className="col-sm-2 sidebar">`
    const verif = document.getElementsByClassName('col-sm-2 sidebar')
    expect(verif).not.toBeNull() 
  })

  test('verif class acceuil', function () {

    document.body.innerHTML = `<div className="acceuil">`
    const verif = document.getElementsByClassName('acceuil')
    expect(verif).not.toBeNull() 
  })

  test('verif class descirption', function () {

    document.body.innerHTML = `<div className="description">`
    const verif = document.getElementsByClassName('description')
    expect(verif).not.toBeNull() 
  })

 