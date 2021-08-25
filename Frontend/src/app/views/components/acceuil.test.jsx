const {Acceuil } = require("./Acceuil")


test('acceuil', function () {
    WebGL2RenderingContext(<Modal title="bjr"><div id="demo"></div></Modal>)
    const demo=document.querySelector('#demo')
    expect(demo).nodeType.toBeNull()
})