import { useState } from 'react';
import './index.css'

const App = () => {
    const [numero1, setNumero1] = useState(''); 
    const [numero2, setNumero2] = useState(''); 
    const [operador, setOperador] = useState(''); 
    const [pantalla, setPantalla] = useState('0'); 
    const [visor, setVisor] = useState('');

    const clickear = (boton) => {
        const valor = boton.target.textContent;

        if (valor >= '0' && valor <= '9') {
            if (!operador) {
                setNumero1(numero1 + valor);
                setPantalla(numero1 + valor);
            } else {
                setNumero2(numero2 + valor);
                setPantalla(numero2 + valor);
            }
        } else if (valor === '.' && !pantalla.includes('.')) {
            if (!operador) {
                setNumero1(numero1 + valor);
                setPantalla(numero1 + valor);
            } else {
                setNumero2(numero2 + valor);
                setPantalla(numero2 + valor);
            }
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            if (numero1 !== '') {

                setOperador(valor);
                setPantalla(valor);
                setVisor(`${numero1} ${valor}`);
            }
        } else if (valor === '=') {
            if (numero1 !== '' && numero2 !== '' && operador !== '') {
                let result = 0;
                const num1 = parseFloat(numero1);
                const num2 = parseFloat(numero2);

                switch (operador) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num1 - num2;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = num1 / num2;
                        break;
                    default:
                        break;
                }

                setPantalla(result.toString());
                setVisor(`${numero1} ${operador} ${numero2}`);
                setNumero1(result.toString());
                setNumero2('');
                setOperador('');
            }
        } else if (valor === 'C') {
            setNumero1('');
            setNumero2('');
            setOperador('');
            setPantalla('0');
            setVisor('');
        } else if (valor === 'DEL' && pantalla !== "0") {
            if (!operador) {
                setNumero1(numero1.slice(0, -1));
                setPantalla(numero1.slice(0, -1));
            } else {
                setNumero2(numero2.slice(0, -1));
                setPantalla(numero2.slice(0, -1));
            }
        }
    };

    return (
        <div className="app">
            <div className="pantalla">
                <div className="segunda-pantalla">{visor}</div>
                <div className="visor">{pantalla}</div>
            </div>
            <div className="calculadora">
                <div className="head">
                    <button onClick={clickear}>C</button>
                    <button onClick={clickear}>DEL</button>
                </div>
                <div className="numeros">
                    {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+'].map((boton) => (
                        <button key={boton} onClick={clickear}>{boton}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
