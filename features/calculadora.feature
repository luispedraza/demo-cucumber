Feature: Calculadora

    Probamos varios métodos de una calculadora


    Scenario: Suma de dos enteros positivos
        Given Tengo una calculadora
        When Se suman 6 y 4
        Then El resultado debe ser 10

    Scenario: Suma de dos enteros negativos
        Given Tengo una calculadora
        When Se suman <num1> y <num2>
        Then El resultado debe ser <num3>

        Examples:
            | num1 | num2 | num3 |
            | 1    | 2    | 3    |
            | 2    | 5    | 7    |

    Scenario: Multiplicación de dos enteros positivos
        Given Tengo una calculadora
        When Se multiplican <num1> y <num2>
        Then El resultado debe ser <num3>

        Examples:
            | num1 | num2 | num3 |
            | 2    | 4    | 8    |
            | 4    | 10   | 40   |