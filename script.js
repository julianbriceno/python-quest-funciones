/* ================================================================
   PYTHON QUEST - MATRIX EDITION
   Script Principal
   ================================================================ */

// ================================================================
// DESAFÍOS (12 niveles)
// ================================================================
const CHALLENGES = [
  {
    id: 1,
    title: "Acceso Inicial — Función Sumadora",
    difficulty: "Fácil",
    narrative: "🎬 La puerta principal requiere un PIN numérico. Necesitamos una función que sume dos valores para generarlo.",
    description: "Crea una función llamada sumar(a, b) que reciba dos números y devuelva su suma.",
    hint: "Usa def para definir la función y return para devolver el resultado.\n\ndef nombre(param1, param2):\n    return resultado",
    syntax: "def sumar(a, b):\n    return a + b\n\nprint(sumar(3, 5))   # → 8\nprint(sumar(-1, 1))  # → 0",
    errHints: {
      "NameError":      "¿Definiste la función como 'sumar'? El nombre debe ser exacto.",
      "TypeError":      "La función debe recibir dos parámetros: def sumar(a, b)",
      "AssertionError": "Revisa tu lógica: ¿estás haciendo a + b y retornando el resultado?",
    },
    tests: `
assert sumar(3, 5)   == 8,  "sumar(3, 5) debe ser 8"
assert sumar(-1, 1)  == 0,  "sumar(-1, 1) debe ser 0"
assert sumar(10, 20) == 30, "sumar(10, 20) debe ser 30"
print("✓ Test 1/3: sumar(3, 5) = 8")
print("✓ Test 2/3: sumar(-1, 1) = 0")
print("✓ Test 3/3: sumar(10, 20) = 30")
print("\\n✅ ¡Todos los tests pasaron! Nivel 1 completado.")
`,
  },
  {
    id: 2,
    title: "Filtro de Datos — Números Pares",
    difficulty: "Fácil",
    narrative: "🎬 El sistema de detección rechaza datos corruptos. Solo pueden pasar los valores pares.",
    description: "Crea una función filtrar_pares(lista) que reciba una lista de enteros y devuelva solo los números pares.",
    hint: "Un número es par si numero % 2 == 0.\nPuedes usar list comprehension:\n[x for x in lista if condicion]",
    syntax: "def filtrar_pares(lista):\n    return [n for n in lista if n % 2 == 0]\n\nprint(filtrar_pares([1, 2, 3, 4]))  # → [2, 4]",
    errHints: {
      "NameError":      "¿La función se llama exactamente 'filtrar_pares'?",
      "TypeError":      "Asegúrate de iterar sobre la lista con un for.",
      "AssertionError": "Revisa la condición de filtrado. Un número par tiene residuo 0 al dividir entre 2: n % 2 == 0",
    },
    tests: `
r1 = filtrar_pares([1, 2, 3, 4, 5, 6])
assert r1 == [2, 4, 6], "filtrar_pares([1,2,3,4,5,6]) debe ser [2,4,6], obtuve: " + str(r1)

r2 = filtrar_pares([1, 3, 5])
assert r2 == [], "filtrar_pares([1,3,5]) debe ser [], obtuve: " + str(r2)

r3 = filtrar_pares([2, 4, 6])
assert r3 == [2, 4, 6], "filtrar_pares([2,4,6]) debe ser [2,4,6], obtuve: " + str(r3)

r4 = filtrar_pares([])
assert r4 == [], "filtrar_pares([]) debe ser [], obtuve: " + str(r4)

print("✓ Test 1/4: filtrar_pares([1,2,3,4,5,6]) = [2,4,6]")
print("✓ Test 2/4: filtrar_pares([1,3,5]) = []")
print("✓ Test 3/4: filtrar_pares([2,4,6]) = [2,4,6]")
print("✓ Test 4/4: filtrar_pares([]) = []")
print("\\n✅ ¡Todos los tests pasaron! Nivel 2 completado.")
`,
  },
  {
    id: 3,
    title: "Análisis de Mensajes — Contar Palabras",
    difficulty: "Intermedio",
    narrative: "🎬 Interceptamos transmisiones encriptadas. Para descifrar el patrón necesitamos contar la frecuencia de cada palabra.",
    description: "Crea una función contar_palabras(texto) que reciba un string y devuelva un diccionario {palabra: frecuencia}.",
    hint: "1. Divide el texto con .split() o .split(' ')\n2. Recorre cada palabra con un for\n3. Incrementa el contador:\n   conteo[p] = conteo.get(p, 0) + 1",
    syntax: "def contar_palabras(texto):\n    conteo = {}\n    for p in texto.split():\n        conteo[p] = conteo.get(p, 0) + 1\n    return conteo\n\nprint(contar_palabras('hola mundo hola'))\n# → {'hola': 2, 'mundo': 1}",
    errHints: {
      "NameError":      "¿La función se llama 'contar_palabras'?",
      "KeyError":       "Usa conteo.get(p, 0) para acceder sin error a claves que aún no existen.",
      "AssertionError": "Verifica que estés incrementando el conteo correctamente.",
    },
    tests: `
r1 = contar_palabras("hola mundo hola")
assert r1.get("hola")  == 2, "La palabra 'hola' debe tener frecuencia 2, obtuve: "  + str(r1.get("hola"))
assert r1.get("mundo") == 1, "La palabra 'mundo' debe tener frecuencia 1, obtuve: " + str(r1.get("mundo"))
assert len(r1) == 2,         "El diccionario debe tener 2 entradas, tiene: " + str(len(r1))

r2 = contar_palabras("a b c a b a")
assert r2.get("a") == 3, "'a' debe aparecer 3 veces, obtuve: " + str(r2.get("a"))
assert r2.get("b") == 2, "'b' debe aparecer 2 veces, obtuve: " + str(r2.get("b"))
assert r2.get("c") == 1, "'c' debe aparecer 1 vez, obtuve: "  + str(r2.get("c"))

print("✓ Test 1/2: 'hola' → 2, 'mundo' → 1")
print("✓ Test 2/2: 'a' → 3, 'b' → 2, 'c' → 1")
print("\\n✅ ¡Todos los tests pasaron! Nivel 3 completado.")
`,
  },
  {
    id: 4,
    title: "Cifrado Básico — Elevar al Cuadrado",
    difficulty: "Intermedio",
    narrative: "🎬 El protocolo de cifrado transforma cada valor elevándolo al cuadrado antes de transmitirlo.",
    description: "Crea una función elevar_al_cuadrado(lista) que reciba una lista y devuelva cada elemento elevado al cuadrado.",
    hint: "En Python ** es el operador potencia: x**2 es x al cuadrado.\nUsa list comprehension: [x**2 for x in lista]",
    syntax: "def elevar_al_cuadrado(lista):\n    return [x**2 for x in lista]\n\nprint(elevar_al_cuadrado([1,2,3]))  # → [1, 4, 9]",
    errHints: {
      "AssertionError": "Usa ** para la potencia: x**2. ¿Estás usando x*2 (multiplicar) en lugar de x**2 (potencia)?",
      "TypeError":      "Devuelve una lista, no un número.",
    },
    tests: `
r1 = elevar_al_cuadrado([1, 2, 3])
assert r1 == [1, 4, 9], "elevar_al_cuadrado([1,2,3]) debe ser [1,4,9], obtuve: " + str(r1)

r2 = elevar_al_cuadrado([0, -2, 5])
assert r2 == [0, 4, 25], "elevar_al_cuadrado([0,-2,5]) debe ser [0,4,25], obtuve: " + str(r2)

r3 = elevar_al_cuadrado([])
assert r3 == [], "elevar_al_cuadrado([]) debe ser [], obtuve: " + str(r3)

print("✓ Test 1/3: [1,2,3] → [1,4,9]")
print("✓ Test 2/3: [0,-2,5] → [0,4,25]")
print("✓ Test 3/3: [] → []")
print("\\n✅ ¡Todos los tests pasaron! Nivel 4 completado.")
`,
  },
  {
    id: 5,
    title: "Espejo de Datos — Invertir Diccionario",
    difficulty: "Intermedio",
    narrative: "🎬 El sistema usa llaves invertidas. Debemos mapear valores→claves para cruzar el checkpoint.",
    description: "Crea una función invertir_dict(d) que reciba un diccionario y devuelva uno nuevo con claves y valores intercambiados.",
    hint: "Usa .items() para obtener pares (clave, valor).\nDict comprehension: {v: k for k, v in d.items()}",
    syntax: "def invertir_dict(d):\n    return {v: k for k, v in d.items()}\n\nprint(invertir_dict({'a': 1, 'b': 2}))\n# → {1: 'a', 2: 'b'}",
    errHints: {
      "AssertionError": "Verifica que intercambies k↔v correctamente. La nueva clave es el valor antiguo.",
      "TypeError":      "Los valores originales deben ser hashables (str, int) para usarse como claves.",
    },
    tests: `
r1 = invertir_dict({"a": 1, "b": 2})
assert r1.get(1) == "a", "La clave 1 debe mapear a 'a', obtuve: " + str(r1.get(1))
assert r1.get(2) == "b", "La clave 2 debe mapear a 'b', obtuve: " + str(r1.get(2))
assert len(r1) == 2,     "El resultado debe tener 2 entradas"

r2 = invertir_dict({})
assert len(r2) == 0, "Diccionario vacío debe devolver vacío"

r3 = invertir_dict({"x": 10})
assert r3.get(10) == "x", "La clave 10 debe mapear a 'x', obtuve: " + str(r3.get(10))

print("✓ Test 1/3: {'a':1,'b':2} → {1:'a', 2:'b'}")
print("✓ Test 2/3: {} → {}")
print("✓ Test 3/3: {'x':10} → {10:'x'}")
print("\\n✅ ¡Todos los tests pasaron! Nivel 5 completado.")
`,
  },
  {
    id: 6,
    title: "Rastreo — Posición del Elemento",
    difficulty: "Intermedio",
    narrative: "🎬 Localizamos señales en el grid. Necesitamos encontrar la posición del primer elemento que cumple una condición.",
    description: "Crea una función posicion_elemento(lista, condicion) que devuelva el índice del primer elemento que cumple la condición (función), o -1 si no existe.",
    hint: "Usa enumerate(lista) para obtener índice y valor:\nfor i, v in enumerate(lista):\n    if condicion(v): return i\nreturn -1",
    syntax: "def posicion_elemento(lista, condicion):\n    for i, v in enumerate(lista):\n        if condicion(v):\n            return i\n    return -1\n\nposicion_elemento([1,3,5,4], lambda x: x%2==0)  # → 3",
    errHints: {
      "AssertionError": "Revisa la lógica: ¿usas enumerate? ¿retornas -1 al final si no encuentras nada?",
      "TypeError":      "La condición es una función. Llámala con condicion(v).",
    },
    tests: `
r1 = posicion_elemento([1, 2, 3, 4], lambda x: x > 2)
assert r1 == 2, "Primer elemento > 2 está en índice 2 (es el 3), obtuve: " + str(r1)

r2 = posicion_elemento([5, 10, 15], lambda x: x == 10)
assert r2 == 1, "El 10 está en índice 1, obtuve: " + str(r2)

r3 = posicion_elemento([1, 2], lambda x: x > 10)
assert r3 == -1, "No existe ninguno > 10, debe retornar -1, obtuve: " + str(r3)

r4 = posicion_elemento([], lambda x: x > 0)
assert r4 == -1, "Lista vacía debe retornar -1, obtuve: " + str(r4)

print("✓ Test 1/4: primer > 2 en índice 2")
print("✓ Test 2/4: el 10 en índice 1")
print("✓ Test 3/4: no existe → -1")
print("✓ Test 4/4: lista vacía → -1")
print("\\n✅ ¡Todos los tests pasaron! Nivel 6 completado.")
`,
  },
  {
    id: 7,
    title: "Control de Acceso — Validar Email",
    difficulty: "Intermedio",
    narrative: "🎬 El sistema rechaza contactos con emails inválidos. Implementa el validador de formato.",
    description: "Crea una función es_email_valido(email) que devuelva True si el string tiene exactamente un '@' y al menos un '.' después del '@'.",
    hint: "1. Comprueba email.count('@') == 1\n2. Divide con email.split('@')\n3. Verifica que la parte derecha tenga punto: '.' in partes[1]",
    syntax: "def es_email_valido(email):\n    if email.count('@') != 1:\n        return False\n    partes = email.split('@')\n    return '.' in partes[1]\n\nprint(es_email_valido('a@b.com'))  # → True",
    errHints: {
      "AssertionError": "Verifica las dos condiciones: exactamente un '@' Y al menos un '.' a la derecha del '@'.",
      "IndexError":     "Asegúrate de verificar que split('@') genere dos partes antes de acceder a [1].",
    },
    tests: `
r1 = es_email_valido("usuario@ejemplo.com")
assert r1 == True, "Email válido debe retornar True, obtuve: " + str(r1)

r2 = es_email_valido("sin-arroba.com")
assert r2 == False, "Sin @ debe retornar False, obtuve: " + str(r2)

r3 = es_email_valido("u@@a.com")
assert r3 == False, "Doble @ debe retornar False, obtuve: " + str(r3)

r4 = es_email_valido("usuario@dominio")
assert r4 == False, "Sin punto después de @ debe retornar False, obtuve: " + str(r4)

r5 = es_email_valido("a@b.c")
assert r5 == True, "a@b.c es válido, obtuve: " + str(r5)

print("✓ Test 1/5: usuario@ejemplo.com → True")
print("✓ Test 2/5: sin-arroba.com → False")
print("✓ Test 3/5: u@@a.com → False")
print("✓ Test 4/5: usuario@dominio → False")
print("✓ Test 5/5: a@b.c → True")
print("\\n✅ ¡Todos los tests pasaron! Nivel 7 completado.")
`,
  },
  {
    id: 8,
    title: "Matrices — Suma Elemento a Elemento",
    difficulty: "Avanzado",
    narrative: "🎬 Las matrices de cifrado se superponen. Necesitamos sumar dos matrices celda por celda.",
    description: "Crea una función sumar_matrices(A, B) que reciba dos matrices (listas de listas) y devuelva una nueva con la suma elemento a elemento.",
    hint: "Recorre filas con range(len(A))\nDentro, recorre columnas con range(len(A[i]))\nresultado[i][j] = A[i][j] + B[i][j]",
    syntax: "def sumar_matrices(A, B):\n    return [\n        [A[i][j] + B[i][j] for j in range(len(A[i]))]\n        for i in range(len(A))\n    ]",
    errHints: {
      "IndexError":     "Verifica los índices: i para filas, j para columnas.",
      "AssertionError": "La suma debe hacerse celda a celda en la misma posición [i][j].",
    },
    tests: `
r1 = sumar_matrices([[1, 2], [3, 4]], [[5, 6], [7, 8]])
assert r1[0][0] == 6,  "r[0][0] debe ser 6,  obtuve: " + str(r1[0][0])
assert r1[0][1] == 8,  "r[0][1] debe ser 8,  obtuve: " + str(r1[0][1])
assert r1[1][0] == 10, "r[1][0] debe ser 10, obtuve: " + str(r1[1][0])
assert r1[1][1] == 12, "r[1][1] debe ser 12, obtuve: " + str(r1[1][1])

r2 = sumar_matrices([[0]], [[0]])
assert r2[0][0] == 0, "[[0]]+[[0]] debe dar [[0]], obtuve: " + str(r2)

print("✓ Test 1/2: [[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]")
print("✓ Test 2/2: [[0]] + [[0]] = [[0]]")
print("\\n✅ ¡Todos los tests pasaron! Nivel 8 completado.")
`,
  },
  {
    id: 9,
    title: "Orden Superior — Aplicar Operación",
    difficulty: "Avanzado",
    narrative: "🎬 El procesador de datos aplica transformaciones arbitrarias en lote. Construimos el motor de transformación.",
    description: "Crea una función aplicar_operacion(lista, func) que aplique func a cada elemento y devuelva la lista transformada.",
    hint: "Usa list comprehension:\n[func(x) for x in lista]\nO usa map():\nlist(map(func, lista))",
    syntax: "def aplicar_operacion(lista, func):\n    return [func(x) for x in lista]\n\nresultado = aplicar_operacion([1,2,3], lambda x: x*2)\nprint(resultado)  # → [2, 4, 6]",
    errHints: {
      "AssertionError": "Aplica func a cada elemento individualmente, no a la lista completa.",
      "TypeError":      "Llama la función como func(x), con paréntesis.",
    },
    tests: `
r1 = aplicar_operacion([1, 2, 3], lambda x: x * 2)
assert r1 == [2, 4, 6], "Duplicar [1,2,3] debe dar [2,4,6], obtuve: " + str(r1)

r2 = aplicar_operacion([1, 2, 3], lambda x: x ** 2)
assert r2 == [1, 4, 9], "Cuadrados de [1,2,3] debe dar [1,4,9], obtuve: " + str(r2)

r3 = aplicar_operacion([], lambda x: x + 1)
assert r3 == [], "Lista vacía debe dar [], obtuve: " + str(r3)

r4 = aplicar_operacion([5], lambda x: x * 0)
assert r4 == [0], "Multiplicar por 0 debe dar [0], obtuve: " + str(r4)

print("✓ Test 1/4: [1,2,3] * 2 = [2,4,6]")
print("✓ Test 2/4: [1,2,3] ** 2 = [1,4,9]")
print("✓ Test 3/4: [] → []")
print("✓ Test 4/4: [5] * 0 = [0]")
print("\\n✅ ¡Todos los tests pasaron! Nivel 9 completado.")
`,
  },
  {
    id: 10,
    title: "Decodificación — Parsear Configuración",
    difficulty: "Avanzado",
    narrative: "🎬 Interceptamos un archivo de configuración en formato clave=valor. Hay que convertirlo a diccionario.",
    description: "Crea una función parsear_config(s) que convierta el string 'clave1=valor1,clave2=valor2' en un diccionario.",
    hint: "1. Divide por comas: s.split(',')\n2. Para cada par divide por '=': par.split('=')\n3. El primer elemento es la clave, el segundo el valor",
    syntax: "def parsear_config(s):\n    return {par.split('=')[0]: par.split('=')[1]\n            for par in s.split(',')}\n\nprint(parsear_config('host=localhost,port=8080'))\n# → {'host': 'localhost', 'port': '8080'}",
    errHints: {
      "ValueError":     "Asegúrate de que cada par tenga exactamente un '='.",
      "AssertionError": "La clave está antes del '=', el valor después.",
    },
    tests: `
r1 = parsear_config("host=localhost,puerto=8080")
assert r1.get("host")   == "localhost", "host debe ser 'localhost', obtuve: " + str(r1.get("host"))
assert r1.get("puerto") == "8080",      "puerto debe ser '8080', obtuve: "   + str(r1.get("puerto"))

r2 = parsear_config("user=admin,pass=s3cr3t")
assert r2.get("user") == "admin",   "user debe ser 'admin', obtuve: "   + str(r2.get("user"))
assert r2.get("pass") == "s3cr3t", "pass debe ser 's3cr3t', obtuve: " + str(r2.get("pass"))

print("✓ Test 1/2: host=localhost, puerto=8080")
print("✓ Test 2/2: user=admin, pass=s3cr3t")
print("\\n✅ ¡Todos los tests pasaron! Nivel 10 completado.")
`,
  },
  {
    id: 11,
    title: "Recursión — Factorial",
    difficulty: "Avanzado",
    narrative: "🎬 El generador de llaves de cifrado usa factoriales. Debemos implementarlo de forma recursiva.",
    description: "Crea una función factorial(n) que calcule n! usando recursión.\nRecuerda: factorial(0) = 1, factorial(n) = n × factorial(n-1).",
    hint: "Necesitas dos partes:\n1. Caso base: if n <= 1: return 1\n2. Caso recursivo: return n * factorial(n - 1)",
    syntax: "def factorial(n):\n    if n <= 1:               # caso base\n        return 1\n    return n * factorial(n - 1)  # recursión\n\nprint(factorial(5))  # → 120",
    errHints: {
      "RecursionError": "¿Tienes caso base? Sin él la función se llama infinitamente. Agrega: if n <= 1: return 1",
      "AssertionError": "n! = n × (n-1) × ... × 1. Verifica la fórmula.",
    },
    tests: `
assert factorial(0) == 1,   "factorial(0) debe ser 1,   obtuve: " + str(factorial(0))
assert factorial(1) == 1,   "factorial(1) debe ser 1,   obtuve: " + str(factorial(1))
assert factorial(3) == 6,   "factorial(3) debe ser 6,   obtuve: " + str(factorial(3))
assert factorial(5) == 120, "factorial(5) debe ser 120, obtuve: " + str(factorial(5))
assert factorial(7) == 5040,"factorial(7) debe ser 5040, obtuve: " + str(factorial(7))

print("✓ Test 1/5: factorial(0) = 1")
print("✓ Test 2/5: factorial(1) = 1")
print("✓ Test 3/5: factorial(3) = 6")
print("✓ Test 4/5: factorial(5) = 120")
print("✓ Test 5/5: factorial(7) = 5040")
print("\\n✅ ¡Todos los tests pasaron! Nivel 11 completado.")
`,
  },
  {
    id: 12,
    title: "Misión Final — Sistema de Usuarios",
    difficulty: "Avanzado",
    narrative: "🎬 MISIÓN FINAL: El servidor principal requiere un sistema de validación completo. Combina todo lo aprendido.",
    description: "Crea dos funciones:\n1) validar_usuario(u): devuelve True si u['email'] es válido Y u['edad'] >= 18.\n2) procesar_usuarios(lista): devuelve solo los usuarios válidos.",
    hint: "Reutiliza la lógica de email del nivel 7.\nAccede a diccionarios con u['clave'].\nFiltrado: [u for u in lista if validar_usuario(u)]",
    syntax: "def validar_usuario(u):\n    email_ok = '@' in u['email'] and '.' in u['email']\n    edad_ok  = u['edad'] >= 18\n    return email_ok and edad_ok\n\ndef procesar_usuarios(lista):\n    return [u for u in lista if validar_usuario(u)]",
    errHints: {
      "NameError":      "¿Definiste AMBAS funciones: validar_usuario y procesar_usuarios?",
      "KeyError":       "Accede con u['email'] y u['edad'] (corchetes, no punto).",
      "AssertionError": "Verifica las dos condiciones: email válido (@ y .) Y edad >= 18.",
    },
    tests: `
usuarios = [
    {"nombre": "Ana",   "email": "ana@test.com",   "edad": 25},
    {"nombre": "Bob",   "email": "bob.invalid",    "edad": 20},
    {"nombre": "Carol", "email": "carol@test.com", "edad": 17},
    {"nombre": "Dave",  "email": "dave@test.com",  "edad": 30},
]

assert validar_usuario(usuarios[0]) == True,  "Ana debe ser válida (email ok, 25 >= 18)"
assert validar_usuario(usuarios[1]) == False, "Bob debe ser inválido (email sin @)"
assert validar_usuario(usuarios[2]) == False, "Carol debe ser inválida (menor de edad)"
assert validar_usuario(usuarios[3]) == True,  "Dave debe ser válido (email ok, 30 >= 18)"

resultado = procesar_usuarios(usuarios)
assert len(resultado) == 2,                "Deben pasar 2 usuarios, pasaron: " + str(len(resultado))
assert resultado[0]["nombre"] == "Ana",   "El primero debe ser Ana,  obtuve: " + resultado[0]["nombre"]
assert resultado[1]["nombre"] == "Dave",  "El segundo debe ser Dave, obtuve: " + resultado[1]["nombre"]

print("✓ Test 1/7: Ana es válida")
print("✓ Test 2/7: Bob es inválido (email sin @)")
print("✓ Test 3/7: Carol es inválida (menor de edad)")
print("✓ Test 4/7: Dave es válido")
print("✓ Test 5/7: Exactamente 2 usuarios pasan")
print("✓ Test 6/7: El primero es Ana")
print("✓ Test 7/7: El segundo es Dave")
print("\\n🏆 ¡CAMPAÑA COMPLETADA! Eres parte del sistema ahora.")
`,
  },
];

// ================================================================
// ESTADO GLOBAL
// ================================================================
let currentLevel = 0;
const done = new Set();

// ================================================================
// INICIO DEL JUEGO
// ================================================================
function startGame() {
    document.getElementById('portada').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    renderChallenge();
    startMatrixRain();
}

// ================================================================
// SKULPT - Ejecutor de Python
// ================================================================
function runPython(code) {
    return new Promise((resolve, reject) => {
        let output = '';
        Sk.configure({
            output: (txt) => { output += txt; },
            read: (url) => {
                if (Sk.builtinFiles?.files[url] === undefined)
                    throw new Error('File not found: ' + url);
                return Sk.builtinFiles.files[url];
            },
            execLimit: 8000,
        });
        Sk.misceval.asyncToPromise(() =>
            Sk.importMainWithBody('<stdin>', false, code, true)
        )
            .then(() => resolve(output.trim()))
            .catch((e) => {
                let msg = e.toString ? e.toString() : String(e);
                msg = msg.replace(/on line \d+ of <stdin>/g, '').trim();
                reject(msg);
            });
    });
}

// ================================================================
// EJECUTAR CÓDIGO
// ================================================================
async function runCode() {
    const studentCode = document.getElementById('code-editor').value.trim();
    const ch = CHALLENGES[currentLevel];

    if (!studentCode) {
        setOutput('❌ El editor está vacío. Escribe tu solución primero.', false);
        return;
    }

    const btn = document.getElementById('run-btn');
    btn.disabled = true;
    btn.textContent = '⏳  EJECUTANDO...';
    clearResult();
    setOutput('> Ejecutando...', true);

    const fullCode = studentCode + '\n\n' + ch.tests;

    try {
        const out = await runPython(fullCode);
        setOutput(out, true);
        markDone();
    } catch (err) {
        setOutput('❌ ERROR EN TU CÓDIGO:\n\n' + err, false);
        showErrHint(err, ch);
    } finally {
        btn.disabled = false;
        btn.textContent = '▶ EJECUTAR CÓDIGO';
    }
}

// ================================================================
// INTERFAZ
// ================================================================
function setOutput(text, ok) {
    const el = document.getElementById('output');
    el.textContent = text;
    el.style.color = ok ? '#00FF41' : '#FF6B6B';
}

function showErrHint(errStr, ch) {
    const el = document.getElementById('result-msg');
    let tip = '💡 Lee el mensaje de error con calma. ¿El nombre de la función coincide exactamente? ¿Falta el return?';
    for (const [type, msg] of Object.entries(ch.errHints)) {
        if (errStr.includes(type)) { tip = '💡 ' + msg; break; }
    }
    el.className = 'error';
    el.style.display = 'block';
    el.innerHTML = `<strong>⚠️ Hay un error — léelo línea por línea</strong><div class="error-tip">${tip}</div>`;
}

function markDone() {
    done.add(currentLevel);
    const el = document.getElementById('result-msg');
    el.className = 'success';
    el.style.display = 'block';

    if (currentLevel === CHALLENGES.length - 1) {
        // ÚLTIMO NIVEL - Mostrar pantalla final
        el.innerHTML = '✓ ¡MISIÓN FINAL COMPLETADA! Mostrando pantalla de logro...';
        setTimeout(() => showFinalScreen(), 1500);
    } else {
        // SIGUIENTE NIVEL DESBLOQUEADO
        el.innerHTML = '✓ ¡MISIÓN COMPLETADA! &nbsp;→ SIGUIENTE está desbloqueado';
    }

    updateProgress();
    renderDots();
}

function clearResult() {
    const el = document.getElementById('result-msg');
    el.className = '';
    el.style.display = 'none';
    el.innerHTML = '';
}

// ================================================================
// NAVEGACIÓN - SIN BLOQUEOS (TODO DESBLOQUEADO)
// ================================================================
function goLevel(n) {
    if (n < 0 || n >= CHALLENGES.length) return;
    // 🔓 Todo desbloqueado - puedes saltar a cualquier nivel
    currentLevel = n;
    renderChallenge();
}

function renderChallenge() {
    const ch = CHALLENGES[currentLevel];
    document.getElementById('challenge-level').textContent = `NIVEL ${currentLevel + 1} / ${CHALLENGES.length}`;
    document.getElementById('challenge-title').textContent = ch.title;
    document.getElementById('challenge-narrative').textContent = ch.narrative;
    document.getElementById('challenge-desc').textContent = ch.description;

    const diff = document.getElementById('challenge-diff');
    diff.textContent = ch.difficulty;
    diff.className = `difficulty d-${ch.difficulty.toLowerCase()}`;

    document.getElementById('hint-pista').textContent    = ch.hint;
    document.getElementById('hint-sintaxis').textContent = ch.syntax;
    document.getElementById('hint-pista').classList.remove('visible');
    document.getElementById('hint-sintaxis').classList.remove('visible');

    document.getElementById('code-editor').value = '';
    document.getElementById('output').style.color = '#005500';
    setOutput('// Escribe tu código y presiona ▶ EJECUTAR', true);
    clearResult();

    document.getElementById('btn-prev').disabled = currentLevel === 0;
    // 🔓 Botón SIGUIENTE siempre habilitado
    document.getElementById('btn-next').disabled = currentLevel === CHALLENGES.length - 1;

    renderDots();
}

function renderDots() {
    const wrap = document.getElementById('level-dots');
    wrap.innerHTML = '';
    CHALLENGES.forEach((ch, i) => {
        const b = document.createElement('button');
        let classes = 'dot';
        if (i === currentLevel) classes += ' active';
        if (done.has(i)) classes += ' done';
        // 🔓 Sin clase .locked - todos están desbloqueados

        b.className = classes;
        b.textContent = i + 1;
        b.title = ch.title;
        
        // 🔓 Todos los botones permitidos
        b.onclick = () => goLevel(i);

        wrap.appendChild(b);
    });
}

function updateProgress() {
    const pct = Math.round(done.size / CHALLENGES.length * 100);
    const bar = document.getElementById('prog-bar');
    bar.style.width = pct + '%';
    bar.textContent = pct > 8 ? pct + '%' : '';
}

function toggleHint(type) {
    document.getElementById(`hint-${type}`).classList.toggle('visible');
}

// ================================================================
// PANTALLA FINAL ÉPICA
// ================================================================
function showFinalScreen() {
    document.getElementById('app').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
    startFinalMatrixRain();
}

function startFinalMatrixRain() {
    const container = document.getElementById('final-matrix-rain');
    const chars = '01アイウエオカキクケコサシスセソタチツテ';
    for (let i = 0; i < 200; i++) {
        const char = document.createElement('div');
        char.style.cssText = `
            position: absolute;
            color: #00FF41;
            font-size: 20px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0.3;
            animation: matrix-fall 3s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(char);
    }
}

// ================================================================
// EFECTO MATRIX (Canvas)
// ================================================================
function startMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    const CHARS = '01アイウエオカキクケコサシスセソタチツテ';
    let cols, drops;

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.floor(canvas.width / 20);
        drops = Array(cols).fill(1);
    }

    function draw() {
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF41';
        ctx.font = '15px Courier New';
        drops.forEach((y, i) => {
            ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * 20, y * 20);
            if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }

    init();
    window.addEventListener('resize', init);
    setInterval(draw, 50);
}

// ================================================================
// SOPORTE PARA TAB EN EDITOR
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderChallenge();
    startMatrixRain();

    document.getElementById('code-editor').addEventListener('keydown', e => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const t = e.target, s = t.selectionStart;
            t.value = t.value.substring(0, s) + '    ' + t.value.substring(t.selectionEnd);
            t.selectionStart = t.selectionEnd = s + 4;
        }
    });
});
