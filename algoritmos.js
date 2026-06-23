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

function visualType(title, index) {
  if (title.includes('Sort') || title.includes('orden') || title.includes('Heap')) return 'bars';
  if (title.includes('Dijkstra') || title.includes('BFS') || title.includes('DFS') || title.includes('grafo') || title.includes('Kruskal') || title.includes('Prim') || title.includes('A Star')) return 'graph';
  if (title.includes('Window') || title.includes('Pointers') || title.includes('Search') || title.includes('Búsqueda')) return 'segments';
  if (title.includes('Tree') || title.includes('Trie') || title.includes('árbol')) return 'tree';
  if (title.includes('Hash') || title.includes('Cache') || title.includes('Bloom')) return 'bubbles';
  return ['bars', 'graph', 'segments', 'tree', 'bubbles'][index % 5];
}

function visualHtml(type) {
  if (type === 'bars') return '<div class="algo-bars"><span></span><span></span><span></span><span></span><span></span></div>';
  if (type === 'graph') return '<div class="algo-graph"><i></i><i></i><i></i><i></i><b></b><b></b><b></b></div>';
  if (type === 'segments') return '<div class="algo-segments"><span></span><span></span><span></span><span></span></div>';
  if (type === 'tree') return '<div class="algo-tree"><i></i><i></i><i></i><i></i><b></b><b></b><b></b></div>';
  return '<div class="algo-bubbles"><span></span><span></span><span></span><span></span><span></span></div>';
}

function renderAlgorithms() {
  const container = document.querySelector('#algorithmsCards');
  let counter = 0;
  container.innerHTML = algorithmLevels.map(([id, category, level, topics]) => {
    const cards = topics.map((title) => {
      counter += 1;
      const type = visualType(title, counter);
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
