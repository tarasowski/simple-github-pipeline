import assert from "assert"
import { add, multiply, subtract, divide } from "./calculator.js"


{
  const want = 4
  const got = add(2,2)

  assert.equal(got, want)
}

{
  const want = 2
  const got = subtract(4,2)

  assert.equal(got, want)
}

{
  const want = 8
  const got = multiply(4, 2) 

  assert.equal(got, want)
}

// TDD
// ich möchte eine divide function schreiben
// 1.failing test
// 2. null implementation
// 3. die echte logik
{
  const want = 8
  const got = divide(16,2)

  assert.equal(got, want)
}

