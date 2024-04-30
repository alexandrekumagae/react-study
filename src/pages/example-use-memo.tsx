import { useMemo, useState } from "react"

export default function ExampleUseMemo() {
  const [number1, setNumber1] = useState(1)
  const [number2, setNumber2] = useState(1)
  const [number3, setNumber3] = useState(1)
  const [number4, setNumber4] = useState(1)

  const potencia = useMemo(() => {
    const future = Date.now() + 1000
    while (Date.now() < future) {}
    return number1 ** number2
  }, [number1, number2])

  const soma = number3 + number4

  return (
    <>
      <form>
        <div>
          Potência: {potencia}
        </div>
        
        <div>
          <label htmlFor="number1">Número 1</label>
          <input type="number" onChange={(e) => setNumber1(Number(e.target.value))} id="number1" value={number1} />
        </div>
        
        <div>*</div>
        
        <div>
          <label htmlFor="number2">Número 2</label>
          <input type="number" onChange={(e) => setNumber2(Number(e.target.value))} id="number2" value={number2} />
        </div>
        
        <br />
        <br />
        
        <div>Soma: {soma}</div>
        
        <div>
          <label htmlFor="number3">Número 3</label>
          <input type="number" onChange={(e) => setNumber3(Number(e.target.value))} id="number3" value={number3} />
        </div>

        <div>+</div>
        
        <div>
          <label htmlFor="number4">Número 4</label>
          <input type="number" onChange={(e) => setNumber4(Number(e.target.value))} id="number4" value={number4} />
        </div>
      </form>
    </>
  )
}