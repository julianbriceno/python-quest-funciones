# 🔐 PYTHON QUEST - MATRIX EDITION

Plataforma interactiva para enseñar Python a través de 12 desafíos estilo hackeo con interfaz tipo Matrix.

## 📋 Características

✅ **12 desafíos programados** - Desde Fácil hasta Avanzado
✅ **Validación secuencial** - No puedes avanzar sin completar cada nivel
✅ **Interfaz Matrix** - Diseño dark/neon con efectos visuales
✅ **Python en el navegador** - Skulpt ejecuta código sin servidor
✅ **Portada inmersiva** - Narrativa de infiltración hacker
✅ **Pantalla final épica** - Mensaje celebratorio con lluvia Matrix
✅ **Responsive** - Funciona en desktop y móvil

## 📁 Estructura de Archivos

```
python-quest/
├── index.html          # Estructura HTML (limpio, sin estilos)
├── style.css           # Todos los estilos CSS
├── script.js           # Lógica JavaScript (desafíos, ejecución, UI)
└── README.md           # Este archivo
```

## 🚀 Uso Local

1. **Descarga los 4 archivos** (index.html, style.css, script.js, README.md)
2. **Guárdalos en una carpeta**:
   ```
   python-quest/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```
3. **Abre `index.html` en tu navegador**
4. ¡Listo! El juego funciona completamente offline

## 🌐 Deploy a GitHub Pages (RECOMENDADO)

### A través de la página de githubpages

### Opción B: Desde la terminal

```bash
# Crear carpeta
mkdir python-quest
cd python-quest

# Inicializar Git
git init
git config user.name "Tu Nombre"
git config user.email "tu@email.com"

# Copiar los archivos aquí (index.html, style.css, script.js, README.md)
# Luego:

git add .
git commit -m "Python Quest - Plataforma de aprendizaje interactivo"

# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/tu-usuario/python-quest.git
git branch -M main
git push -u origin main
```

Luego activa GitHub Pages en Settings (ver "Opción A" paso 3).

## 🎮 Cómo Jugar

### 1️⃣ Pantalla de Inicio
- Lee la narrativa
- Click "INGRESAR AL SISTEMA"

### 2️⃣ Desafíos
- **Izquierda**: Descripción + Pistas + Ejemplo de sintaxis
- **Derecha**: Editor de código + Botón EJECUTAR
- **Abajo**: Resultado de ejecución + Navegación de niveles

### 3️⃣ Flujo
1. Lee el desafío
2. Usa pistas si las necesitas
3. Escribe tu solución Python
4. Presiona ▶ EJECUTAR CÓDIGO
5. Si pasan todos los tests → **SIGUIENTE se desbloquea**
6. Si hay error → Recibe ayuda específica

### 4️⃣ Bloqueos de Seguridad
- ❌ **No puedes saltar niveles** - debes hacerlos en orden
- ❌ **No puedes avanzar sin completar** - cada nivel valida antes de desbloquear
- ✅ **Puedes retroceder** - vuelve a niveles anteriores

## 📚 Los 12 Desafíos

| # | Título | Dificultad | Concepto |
|---|--------|-----------|----------|
| 1 | Función Sumadora | Fácil | Funciones básicas |
| 2 | Números Pares | Fácil | Listas + condicionales |
| 3 | Contar Palabras | Intermedio | Diccionarios + iteración |
| 4 | Elevar al Cuadrado | Intermedio | List comprehension |
| 5 | Invertir Diccionario | Intermedio | Dict comprehension |
| 6 | Posición del Elemento | Intermedio | Enumerate + lambda |
| 7 | Validar Email | Intermedio | Strings + lógica |
| 8 | Suma de Matrices | Avanzado | Listas anidadas |
| 9 | Aplicar Operación | Avanzado | Funciones orden superior |
| 10 | Parsear Config | Avanzado | Parsing de strings |
| 11 | Factorial | Avanzado | Recursión |
| 12 | Sistema Usuarios | Avanzado | Integración final |

## 🛠️ Personalización

### Cambiar colores
En `style.css`, busca:
```css
color: #00FF41;  /* Verde neon */
border-color: #00FF41;
```
Reemplaza `#00FF41` con tu color favorito (en hexadecimal).

### Agregar nuevos desafíos
En `script.js`, dentro del array `CHALLENGES`, copia un nivel completo y modifica:

```javascript
{
  id: 13,  // ← número siguiente
  title: "Tu Desafío",
  difficulty: "Fácil",  // Fácil / Intermedio / Avanzado
  narrative: "🎬 Tu narrativa",
  description: "Lo que debe hacer el estudiante",
  hint: "Pista sin revelar la solución",
  syntax: "Ejemplo de código correcto",
  errHints: {
    "NameError": "Ayuda específica si hay error",
  },
  tests: `
# Aquí van los tests en Python puro
assert funcion(arg) == resultado
print("✓ Test pasó")
print("\\n✅ ¡Todos los tests pasaron!")
  `,
},
```

**Importante**: Los tests deben incluir una línea final con mensaje de éxito.

### Cambiar narrativa de la portada
En `index.html`, busca:
```html
<div class="portada-description">
  <p>> Tu texto aquí</p>
</div>
```

## 📊 Estadísticas

- **Desafíos**: 12
- **Líneas de código JS**: ~750
- **Líneas de CSS**: ~450
- **Tamaño total**: ~150 KB (sin librerías externas)
- **Tiempo esperado**: 1-2 horas para completar todo

## 🐛 Troubleshooting

### "Python no se ejecuta"
- Recarga la página (Ctrl+R o Cmd+R)
- Limpia cache (Ctrl+Shift+R)
- Usa otro navegador

### "El código es correcto pero da error"
- Verifica espaciado exacto en los tests
- Usa `print()` para debug
- Lee el mensaje de error completo

### "No puedo subir a GitHub"
- Verifica que creaste el repositorio primero en GitHub.com
- Usa HTTPS, no SSH, para evitar problemas de clave
- Ve a Settings → Pages y confirma que Branch = main

## 📝 Licencia

Libre para usar en educación. Modifica como quieras.

## 💬 Soporte

Si tienes dudas:
1. Revisa la estructura HTML (muy limpia, fácil de entender)
2. Lee los comentarios en `script.js`
3. Experimenta modificando `style.css`

---

**¡Eres parte del sistema ahora, agente!** 🔐

Última actualización: Abril 2026
