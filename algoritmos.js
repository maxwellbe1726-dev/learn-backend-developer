const algorithmLevels = [
  ['fundamentos', 'Fundamentos de lógica', 'Básico', ['Suma acumulada', 'Conteo de elementos', 'Máximo y mínimo', 'Promedio de valores', 'Intercambio de variables', 'Validación par/impar', 'Contador de frecuencia simple', 'Recorrido de array', 'Recorrido inverso', 'Dos acumuladores']],
  ['strings', 'Strings y patrones básicos', 'Básico', ['Invertir cadena', 'Palíndromo', 'Contar vocales', 'Normalizar texto', 'Anagrama básico', 'Compresión Run Length', 'Subcadena más larga sin repetir', 'Búsqueda ingenua de patrón', 'Rotación de cadena', 'Distancia de Hamming']],
  ['arrays', 'Arrays y dos punteros', 'Básico-Intermedio', ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'Difference Array', 'Kadane', 'Merge de arrays ordenados', 'Partición de array', 'Eliminar duplicados', 'Producto excepto sí mismo', 'Mayor área entre líneas']],
  ['busqueda', 'Búsqueda', 'Básico-Intermedio', ['Búsqueda lineal', 'Búsqueda binaria', 'Lower Bound', 'Upper Bound', 'Binary Search on Answer', 'Búsqueda ternaria', 'Jump Search', 'Exponential Search', 'Interpolación', 'Búsqueda en matriz ordenada']],
  ['ordenamiento', 'Ordenamiento', 'Básico-Avanzado', ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Heap Sort', 'Counting Sort', 'Radix Sort', 'Bucket Sort', 'TimSort']],
  ['estructuras', 'Estructuras de datos', 'Intermedio', ['Pila con array', 'Cola con array', 'Cola circular', 'Deque', 'Lista enlazada', 'Lista doblemente enlazada', 'Hash Table', 'Set con hashing', 'LRU Cache', 'Union Find']],
  ['arboles', 'Árboles', 'Intermedio', ['DFS en árbol', 'BFS por niveles', 'Inorder', 'Preorder', 'Postorder', 'Binary Search Tree', 'AVL conceptual', 'Red Black Tree conceptual', 'Heap binario', 'Trie']],
  ['grafos', 'Grafos esenciales', 'Intermedio-Avanzado', ['DFS en grafo', 'BFS en grafo', 'Detección de ciclos', 'Orden topológico', 'Componentes conectados', 'Componentes fuertemente conectados', 'Kahn', 'Kosaraju', 'Tarjan SCC', 'Bipartite Check']],
  ['rutas', 'Rutas y caminos mínimos', 'Avanzado', ['Dijkstra', 'Bellman Ford', 'Floyd Warshall', 'A Star', '0-1 BFS', 'Johnson', 'Camino mínimo en DAG', 'Prim', 'Kruskal', 'Boruvka']],
  ['dinamica', 'Programación dinámica', 'Avanzado', ['Memoización', 'Tabulación', 'Fibonacci DP', 'Knapsack 0/1', 'Longest Common Subsequence', 'Longest Increasing Subsequence', 'Edit Distance', 'Coin Change', 'Matrix Chain Multiplication', 'DP con bitmask']],
  ['optimizacion', 'Optimización y combinatoria', 'Avanzado', ['Backtracking', 'Permutaciones', 'Combinaciones', 'N Queens', 'Sudoku Solver', 'Branch and Bound', 'Meet in the Middle', 'Greedy Scheduling', 'Huffman Coding', 'Interval Merging']],
  ['profesional', 'Algoritmos profesionales', 'Avanzado-Pro', ['Bloom Filter', 'Consistent Hashing', 'Reservoir Sampling', 'Rate Limiting Token Bucket', 'Rate Limiting Leaky Bucket', 'MapReduce', 'PageRank', 'K Means', 'Minimax', 'Alpha Beta Pruning']]
];

const algorithmDescriptions = {
  'Suma acumulada': 'Acumula valores en una variable para obtener totales, muy usado en reportes, métricas y validaciones.',
  'Two Pointers': 'Usa dos índices para recorrer una estructura desde extremos o posiciones distintas sin ciclos innecesarios.',
  'Sliding Window': 'Mantiene una ventana móvil para resolver problemas de subarrays o substrings en tiempo eficiente.',
  'Prefix Sum': 'Precalcula sumas para responder consultas de rangos en O(1) después de una preparación inicial.',
  'Kadane': 'Encuentra la suma máxima de un subarray continuo usando una decisión local en cada posición.',
  'Búsqueda binaria': 'Divide el espacio ordenado a la mitad para encontrar datos o respuestas en O(log n).',
  'Merge Sort': 'Ordena dividiendo el problema en mitades y combinando resultados ya ordenados.',
  'Quick Sort': 'Ordena separando elementos alrededor de un pivote; suele ser muy rápido en la práctica.',
  'Hash Table': 'Asocia claves con valores usando una función hash para búsquedas promedio O(1).',
  'LRU Cache': 'Elimina primero lo menos usado recientemente combinando mapa y lista doblemente enlazada.',
  'Union Find': 'Gestiona conjuntos disjuntos para saber si elementos están conectados de forma eficiente.',
  'Trie': 'Árbol de prefijos útil para autocompletado, diccionarios, rutas y búsquedas por prefijo.',
  'DFS en grafo': 'Explora profundidad antes de retroceder; sirve para ciclos, componentes y dependencias.',
  'BFS en grafo': 'Explora por niveles; encuentra caminos mínimos cuando todas las aristas tienen el mismo costo.',
  'Orden topológico': 'Ordena tareas con dependencias, útil en compiladores, pipelines y planificación.',
  'Dijkstra': 'Calcula caminos mínimos en grafos con pesos no negativos usando prioridad por menor distancia.',
  'Bellman Ford': 'Encuentra caminos mínimos incluso con pesos negativos y detecta ciclos negativos.',
  'Floyd Warshall': 'Calcula caminos mínimos entre todos los pares de nodos con programación dinámica.',
  'A Star': 'Busca rutas usando costo real más heurística, común en mapas, videojuegos y navegación.',
  'Prim': 'Construye un árbol de expansión mínima creciendo desde un nodo con la arista más barata.',
  'Kruskal': 'Construye un árbol de expansión mínima ordenando aristas y evitando ciclos con Union Find.',
  'Memoización': 'Guarda resultados de llamadas recursivas para no recalcular subproblemas repetidos.',
  'Tabulación': 'Resuelve subproblemas de abajo hacia arriba usando tablas y estados bien definidos.',
  'Knapsack 0/1': 'Optimiza selección de elementos con peso y valor sin repetir elementos.',
  'Longest Common Subsequence': 'Encuentra la subsecuencia común más larga entre dos secuencias.',
  'Edit Distance': 'Mide cuántas operaciones se necesitan para convertir una cadena en otra.',
  'Backtracking': 'Explora decisiones posibles y retrocede cuando una rama no puede llevar a solución.',
  'Huffman Coding': 'Comprime datos asignando códigos más cortos a símbolos más frecuentes.',
  'Bloom Filter': 'Estructura probabilística para saber si algo posiblemente existe o definitivamente no existe.',
  'Consistent Hashing': 'Distribuye claves entre servidores reduciendo movimientos cuando cambia el número de nodos.',
  'Rate Limiting Token Bucket': 'Controla tráfico permitiendo ráfagas limitadas mediante tokens regenerados con el tiempo.',
  'MapReduce': 'Divide procesamiento masivo en fases map y reduce para computación distribuida.',
  'PageRank': 'Mide importancia de nodos según enlaces entrantes, famoso por ranking de páginas web.',
  'K Means': 'Agrupa datos en K clusters ajustando centros iterativamente.',
  'Minimax': 'Elige la mejor jugada asumiendo que el rival también juega de forma óptima.'
};

function descriptionForAlgorithm(title, category) {
  if (algorithmDescriptions[title]) return algorithmDescriptions[title];
  return `Algoritmo de ${category.toLowerCase()} que entrena razonamiento, análisis de casos y eficiencia para resolver problemas de programación.`;
}

function visualType(title, id) {
  const t = title.toLowerCase();
  if (id === 'ordenamiento' || t.includes('sort') || t.includes('timsort')) return 'sort';
  if (t.includes('binaria') || t.includes('lower bound') || t.includes('upper bound') || t.includes('ternaria') || t.includes('jump') || t.includes('exponential') || t.includes('interpolación') || t.includes('binary search') || t.includes('matriz ordenada')) return 'binary';
  if (t.includes('two pointers') || t.includes('punteros') || t.includes('intercambio') || t.includes('palíndromo') || t.includes('rotación') || t.includes('hamming') || t.includes('mayor área')) return 'twopointer';
  if (t.includes('window') || t.includes('ventana') || t.includes('subcadena')) return 'window';
  if (id === 'strings') return 'string';
  if (t.includes('pila') || t.includes('stack')) return 'stack';
  if (t.includes('cola') || t.includes('deque') || t.includes('queue') || t.includes('reservoir') || t.includes('rate limiting') || t.includes('mapreduce')) return 'queue';
  if (t.includes('hash') || t.includes('frecuencia') || t.includes('set ') || t.includes('cache') || t.includes('bloom') || t.includes('consistent')) return 'hash';
  if (id === 'arboles' || t.includes('trie') || t.includes('heap') || t.includes('tree') || t.includes('árbol')) return 'tree';
  if (id === 'rutas') return 'path';
  if (id === 'grafos' || t.includes('grafo') || t.includes('dfs') || t.includes('bfs') || t.includes('pagerank') || t.includes('scc')) return 'graph';
  if (id === 'dinamica' || t.includes('kadane') || t.includes('prefix') || t.includes('difference') || t.includes('knapsack') || t.includes('subsequence')) return 'dp';
  if (id === 'optimizacion' || t.includes('backtracking') || t.includes('queens') || t.includes('sudoku') || t.includes('permutaciones') || t.includes('combinaciones') || t.includes('minimax') || t.includes('alpha') || t.includes('branch')) return 'recursion';
  if (id === 'fundamentos') return (t.includes('frecuencia')) ? 'hash' : (t.includes('máximo') || t.includes('mínimo')) ? 'sort' : 'scan';
  return 'scan';
}

function cells(n) {
  return Array.from({ length: n }, () => '<span></span>').join('');
}

function visualHtml(type) {
  switch (type) {
    case 'sort': return `<div class="v-sort">${cells(6)}</div><span class="v-tag">ordena de menor a mayor</span>`;
    case 'scan': return `<div class="v-scan">${cells(6)}<i class="v-cursor"></i></div><span class="v-tag">recorre uno por uno</span>`;
    case 'binary': return `<div class="v-binary">${cells(7)}<i class="v-mid"></i></div><span class="v-tag">parte a la mitad</span>`;
    case 'twopointer': return `<div class="v-tp">${cells(6)}<i class="v-l"></i><i class="v-r"></i></div><span class="v-tag">dos punteros que se acercan</span>`;
    case 'window': return `<div class="v-window">${cells(7)}<i class="v-frame"></i></div><span class="v-tag">ventana que se desliza</span>`;
    case 'string': return `<div class="v-string"><b>O</b><b>L</b><b>A</b><b>H</b></div><span class="v-tag">transforma caracteres</span>`;
    case 'stack': return `<div class="v-stack">${cells(4)}<i class="v-arrow"></i></div><span class="v-tag">LIFO: entra y sale por arriba</span>`;
    case 'queue': return `<div class="v-queue">${cells(4)}</div><span class="v-tag">FIFO: fluye de inicio a fin</span>`;
    case 'hash': return `<div class="v-hash"><u></u><u></u><u></u><i></i><i></i></div><span class="v-tag">claves caen en cubetas</span>`;
    case 'tree': return `<div class="v-tree"><i></i><i></i><i></i><b></b><b></b></div><span class="v-tag">jerarquía padre e hijos</span>`;
    case 'graph': return `<div class="v-graph"><i></i><i></i><i></i><i></i><b></b><b></b><b></b></div><span class="v-tag">nodos conectados</span>`;
    case 'path': return `<div class="v-path"><i></i><i></i><i></i><i></i><b></b></div><span class="v-tag">camino más corto</span>`;
    case 'dp': return `<div class="v-dp">${Array.from({ length: 16 }, (_, i) => `<span style="animation-delay:${(i % 4 + Math.floor(i / 4)) * 0.12}s"></span>`).join('')}</div><span class="v-tag">llena una tabla por partes</span>`;
    case 'recursion': return `<div class="v-rec"><i></i><i></i><i></i></div><span class="v-tag">se repite hacia dentro</span>`;
    default: return `<div class="v-scan">${cells(6)}<i class="v-cursor"></i></div><span class="v-tag">recorre uno por uno</span>`;
  }
}

function renderAlgorithms() {
  const container = document.querySelector('#algorithmsCards');
  let counter = 0;
  container.innerHTML = algorithmLevels.map(([id, category, level, topics]) => {
    const cards = topics.map((title) => {
      counter += 1;
      const type = visualType(title, id);
      return `<article class="algorithm-card">
        <div class="java-card-top"><span class="java-number">${counter}</span><span class="java-level">${level}</span></div>
        <div class="algorithm-visual ${type}">${visualHtml(type)}</div>
        <h3>${title}</h3>
        <p>${descriptionForAlgorithm(title, category)}</p>
        <span class="algorithm-category">${category}</span>
      </article>`;
    }).join('');
    return `<section id="${id}" class="java-level-section"><div class="java-level-heading"><span>${topics.length} algoritmos</span><h2>${category}</h2></div><div class="java-card-grid">${cards}</div></section>`;
  }).join('');
}

renderAlgorithms();
