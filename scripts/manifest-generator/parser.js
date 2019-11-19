const fs = require('fs')
const {safeParse, StylableProcessor, processNamespace} = require('@stylable/core')

const getAst = source =>
  new StylableProcessor(undefined, processNamespace).process(safeParse(source)).ast

module.exports = {
  parse: (stylePath) => {

    const source = fs.readFileSync(stylePath, {encoding: 'utf8'})
    const ast = getAst(source)

    console.log(ast)

  }
}