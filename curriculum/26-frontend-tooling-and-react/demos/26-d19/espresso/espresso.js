// takes strings that looks like
// "foo = -val if cond"
// and executes them as real JS like
// "if (cond) foo = -val"
function espressoScript(code) {
  if (!code.includes('if')) return code

  // ['foo', '=', '-val', 'if', 'cond']
  let tokens = code.split(" ")

  let varName = tokens[0]
  let expr  = tokens[2]
  let cond = tokens[tokens.length - 1]

  let output = `if (${cond}) ${varName} = ${expr}`
  return output
}

// imagine this code was in a file called
// negator.esp and this entire program
// was executed as:
// espresso negator.esp negator.js
// to turn our made-up .esp file into a real .js file
let code = `number = 42
condition = true
number = -number if condition`

code = code.split('\n').map(espressoScript)
code = code.join('\n')

console.log(code)
