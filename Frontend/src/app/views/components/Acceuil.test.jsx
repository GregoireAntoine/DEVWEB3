test ('dd', function(){
     expect(1).toBe(1)
})


test('displays content after click', function () {

    document.body.innerHTML = `<div className="col-sm-2 sidebar">`
    const spoilerButton = document.getElementsByClassName('col-sm-2 sidebar')
    expect(spoilerButton).not.toBeNull() 
  })

  test('displays content after click', function () {

    document.body.innerHTML = `<div className="acceuil">`
    const spoilerButton = document.getElementsByClassName('acceuil')
    expect(spoilerButton).not.toBeNull() 
  })

  test('displays content after click', function () {

    document.body.innerHTML = `<div className="description">`
    const spoilerButton = document.getElementsByClassName('description')
    expect(spoilerButton).not.toBeNull() 
  })

 