const modules = [
  { title: 'Módulo 1: Herramientas del desarrollador y control de versiones', range: '1-12', topics: [
    ['Interfaz de Línea de Comandos (CLI)', 'Terminal Linux, navegación, gestión de directorios y comandos esenciales.'],
    ['Gestión de Archivos en Linux', 'Crear, copiar, mover y eliminar archivos de forma segura.'],
    ['Administración de Permisos', 'Permisos de lectura, escritura, ejecución, chmod y chown.'],
    ['Variables de Entorno', 'Configuración externa, rutas, secretos y perfiles de ejecución.'],
    ['Fundamentos de Git', 'init, add, commit, status, push, pull y repositorios remotos.'],
    ['Ramificación y Fusión', 'branch, merge, conflictos, pull requests y revisión de cambios.'],
    ['Git Flow', 'main, develop, feature, release y hotfix para trabajo profesional.'],
    ['Historial y Restauración', 'log, revert, reset, rebase y recuperación de errores.'],
    ['Conventional Commits', 'Mensajes semánticos para automatización y trazabilidad.'],
    ['GitHub Profesional', 'SSH, issues, pull requests, code review y documentación.'],
    ['Maven', 'Dependencias, ciclo de vida, empaquetado y estructura estándar.'],
    ['IDE Profesional', 'IntelliJ IDEA, depuración, perfiles y análisis estático.']
  ]},
  { title: 'Módulo 2: Fundamentos de Java y POO', range: '13-30', topics: [
    ['JVM, JDK y JRE', 'Compilación a bytecode, ejecución multiplataforma y versiones LTS.'],
    ['Tipos de Datos y Operadores', 'Primitivos, referencias, operadores lógicos y aritméticos.'],
    ['Condicionales', 'if, else, switch y modelado de decisiones.'],
    ['Bucles', 'for, while, do-while, for-each e iteradores.'],
    ['Métodos', 'Firmas, parámetros, retornos, sobrecarga y cohesión.'],
    ['Clases y Objetos', 'Constructores, estado, comportamiento, static, final e instanciación.'],
    ['Abstracción', 'Modelar lo esencial y ocultar complejidad accidental.'],
    ['Encapsulamiento', 'Modificadores de acceso, invariantes y API pública limpia.'],
    ['Herencia', 'Reutilización controlada con extends y jerarquías simples.'],
    ['Polimorfismo', 'Interfaces, sobrescritura, toString, equals, hashCode y comportamiento dinámico.'],
    ['Clases Abstractas e Interfaces', 'Contratos, extensibilidad y diseño modular.'],
    ['Checked Exceptions', 'Errores previsibles, throws, try-catch y recuperación.'],
    ['Unchecked Exceptions', 'RuntimeException, null-safety y fallos imprevistos.'],
    ['Try-with-resources', 'Liberación automática de archivos, sockets y conexiones.'],
    ['Generics', 'Tipos parametrizados y seguridad en compilación.'],
    ['Garbage Collector', 'Memoria, objetos alcanzables y fundamentos de tuning.'],
    ['String, StringBuilder y Fechas', 'Inmutabilidad, concatenación, procesamiento de texto y java.time.'],
    ['Enums y Excepciones Personalizadas', 'Enumeraciones con comportamiento y errores de dominio claros.']
  ]},
  { title: 'Módulo 3: Java moderno, concurrencia y colecciones', range: '31-45', topics: [
    ['Collection Framework', 'List, Set, Map, Queue y Deque.'],
    ['Implementaciones de Colecciones', 'ArrayList, LinkedList, HashMap, TreeMap y ArrayDeque.'],
    ['Colecciones Inmutables', 'List.of, Set.of, Map.of y protección de estado.'],
    ['Records', 'DTOs inmutables y reducción de boilerplate.'],
    ['Sealed Classes', 'Jerarquías controladas y modelado explícito.'],
    ['Pattern Matching', 'switch e instanceof modernos.'],
    ['Lambdas', 'Funciones anónimas y estilo declarativo.'],
    ['Interfaces Funcionales', 'Predicate, Function, Consumer, Supplier y BiFunction.'],
    ['Streams API', 'filter, map, reduce, sorted, Collectors y agrupaciones.'],
    ['Optional Avanzado', 'Manejo explícito de ausencia con map, flatMap, orElseGet y composición.'],
    ['Threads', 'Thread, Runnable, synchronized y problemas de concurrencia.'],
    ['ExecutorService', 'Pools, planificación y tareas reutilizables.'],
    ['Virtual Threads', 'Concurrencia ligera para alto volumen de solicitudes.'],
    ['Concurrencia Estructurada', 'Cancelación, coordinación y errores concurrentes.'],
    ['Text Blocks, Comparación y Mapeo', 'SQL/JSON multi-línea, Comparable, Comparator y MapStruct.']
  ]},
  { title: 'Módulo 4: Algoritmia y estructuras de datos', range: '46-58', topics: [
    ['Big O', 'Complejidad temporal y espacial aplicada a backend.'],
    ['Arrays', 'Acceso por índice, recorridos e inserciones costosas.'],
    ['Listas Enlazadas', 'Nodos, referencias, inserción y eliminación dinámica.'],
    ['Pilas', 'LIFO, push, pop, deshacer, DFS y llamadas.'],
    ['Colas', 'FIFO, enqueue, dequeue, turnos, mensajería y BFS.'],
    ['Hash Tables', 'Hashing, colisiones, mapas y cachés.'],
    ['Árboles Binarios', 'Búsqueda ordenada, recorridos y balanceo conceptual.'],
    ['Búsqueda Lineal y Binaria', 'Eficiencia O(n) frente a O(log n).'],
    ['Ordenamientos Básicos', 'Bubble, selection e insertion sort.'],
    ['Ordenamientos Avanzados', 'Merge sort, quick sort y trade-offs.'],
    ['Grafos DFS y BFS', 'Modelar redes, rutas y dependencias.'],
    ['Programación Dinámica', 'Memoización y subproblemas superpuestos.'],
    ['Dos Punteros y Ventana Deslizante', 'Optimización en arreglos y strings.']
  ]},
  { title: 'Módulo 5: PostgreSQL y persistencia', range: '59-72', topics: [
    ['Arquitectura Relacional', 'Tablas, relaciones, tipos nativos y servidor PostgreSQL.'],
    ['DDL', 'CREATE, ALTER, DROP y evolución del esquema.'],
    ['Normalización', '1NF, 2NF, 3NF y reducción de duplicidad.'],
    ['DML', 'SELECT, INSERT, UPDATE y DELETE.'],
    ['Joins', 'INNER, LEFT, RIGHT y FULL OUTER JOIN.'],
    ['Agregaciones', 'GROUP BY, HAVING, SUM, AVG y reportes.'],
    ['Índices', 'B-Tree, Hash, GIN y mejora de lectura.'],
    ['Transacciones ACID', 'COMMIT, ROLLBACK, consistencia e integridad.'],
    ['EXPLAIN ANALYZE', 'Diagnóstico de consultas lentas.'],
    ['JDBC', 'PreparedStatement, ResultSet y prevención de SQL injection.'],
    ['HikariCP', 'Pools de conexión para producción.'],
    ['JPA/Hibernate', '@Entity, @Table, repositorios, ORM, DTO projections y paginación JPA.'],
    ['Asociaciones JPA y Migraciones', '@OneToMany, @ManyToOne, @ManyToMany, Flyway o Liquibase.'],
    ['Problema N+1', 'Lazy, eager, fetch join y optimización.']
  ]},
  { title: 'Módulo 6: HTTP y APIs RESTful', range: '73-82', topics: [
    ['Ciclo HTTP', 'Request, response, headers, body y content negotiation.'],
    ['Métodos HTTP', 'GET, POST, PUT, PATCH y DELETE.'],
    ['Códigos de Estado', '2xx, 3xx, 4xx y 5xx con semántica correcta.'],
    ['REST', 'Stateless, recursos, URIs y contratos uniformes.'],
    ['JSON y Validación', 'Payloads, serialización, modelos de entrada/salida y Bean Validation.'],
    ['Paginación y Filtros', 'Query params para grandes volúmenes.'],
    ['Versionado, CORS y Rate Limiting', 'Estrategias sin romper clientes, control de orígenes y límites básicos.'],
    ['Errores Estándar', 'Formato JSON consistente para fallos.'],
    ['OpenAPI/Swagger', 'Documentación interactiva de contratos.'],
    ['Postman', 'Colecciones, pruebas y validación de endpoints.']
  ]},
  { title: 'Módulo 7: Patrones, arquitectura y seguridad', range: '83-91', topics: [
    ['Arquitectura Multicapa', 'Controllers, services, repositories y responsabilidades.'],
    ['Arquitectura Hexagonal', 'Puertos, adaptadores y dominio independiente.'],
    ['DDD', 'Subdominios, entidades, value objects y lenguaje ubicuo.'],
    ['Patrones Creacionales', 'Singleton, Factory Method y Builder.'],
    ['Patrones Estructurales', 'Adapter, Decorator y composición.'],
    ['Patrones de Comportamiento', 'Strategy, Observer y reglas intercambiables.'],
    ['Criptografía y Hashing', 'BCrypt, Argon2 y cifrado básico.'],
    ['OWASP Top 10', 'Inyecciones, auth rota y exposición de datos.'],
    ['SOLID', 'Diseño mantenible, testeable y extensible.']
  ]},
  { title: 'Módulo 8: Spring Boot, microservicios, DevOps e IA', range: '92-100', topics: [
    ['Inyección de Dependencias', '@Component, @Bean e inversión de control.'],
    ['Spring Boot Starters', 'Autoconfiguración, perfiles y configuración externa.'],
    ['Errores Globales', '@RestControllerAdvice y @ExceptionHandler.'],
    ['JWT', 'Login, tokens firmados y autenticación stateless.'],
    ['RBAC', 'Roles, permisos y @PreAuthorize.'],
    ['Testing y Logging', 'JUnit, Mockito, integración, calidad, SLF4J/Logback y trazabilidad.'],
    ['Docker y Actuator', 'Dockerfile, Docker Compose realista, health checks, métricas y empaquetado.'],
    ['Spring AI', 'LLM, RAG y bases vectoriales.'],
    ['CI/CD y Programación Asistida', 'GitHub Actions, despliegue y uso responsable de IA.']
  ]}
];

const months = [
  ['Mes 1', 'Zona de arranque', 'Temas 1-16', 'Módulo 1 + inicio del 2', ['Terminal Linux, Git, GitHub, Maven e IntelliJ (temas 1-12).', 'JVM, tipos, condicionales, bucles y métodos (temas 13-16).'], 'JanSahayak CLI con menú interactivo.'],
  ['Mes 2', 'Avenida POO', 'Temas 17-30', 'Módulo 2', ['Clases, objetos y los 4 pilares de la POO (temas 17-26).', 'Excepciones, try-with-resources y errores de dominio (temas 27-30).'], 'Modelo orientado a objetos limpio.'],
  ['Mes 3', 'Glorieta Java moderno', 'Temas 31-45', 'Módulo 3', ['Colecciones, records, sealed, lambdas y streams (temas 31-45).', 'Concurrencia: threads, executors y virtual threads.'], 'Procesamiento declarativo y concurrente.'],
  ['Mes 4', 'Autopista algorítmica', 'Temas 46-58', 'Módulo 4', ['Big O, listas, pilas, colas, hashes, árboles y grafos.', 'Búsquedas, ordenamientos y programación dinámica (temas 46-58).'], 'Buscador eficiente con turnos y deshacer.'],
  ['Mes 5', 'Puente PostgreSQL', 'Temas 59-72', 'Módulo 5', ['SQL, joins, índices, transacciones ACID y EXPLAIN (temas 59-72).', 'JDBC, HikariCP, JPA/Hibernate y problema N+1.'], 'Persistencia relacional integrada.'],
  ['Mes 6', 'Cruce REST', 'Temas 73-82', 'Módulo 6', ['HTTP, métodos, códigos, REST, JSON y paginación (temas 73-82).', 'OpenAPI/Swagger y pruebas con Postman.'], 'API REST documentada y testeada.'],
  ['Mes 7', 'Túnel de seguridad', 'Temas 83-91', 'Módulo 7', ['Multicapa, hexagonal, DDD, patrones y SOLID (temas 83-91).', 'Criptografía, OWASP Top 10, JWT y RBAC.'], 'API segura y arquitectónicamente sólida.'],
  ['Mes 8', 'Meta producción', 'Temas 92-100', 'Módulo 8', ['Spring Boot, DI, manejo global de errores y testing (temas 92-100).', 'Docker, CI/CD, Spring AI y programación asistida.'], 'JanSahayak listo para portafolio.']
];

const STORAGE_KEY = 'backend-java-2026-progress';
const TTL_MS = 5 * 60 * 60 * 1000;
const curriculum = document.querySelector('#curriculum');
const roadmap = document.querySelector('#roadmap');
const toggleChecks = document.querySelector('#toggleChecks');
let checksVisible = false;
let topicCounter = 0;

function readProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.savedAt || Date.now() - parsed.savedAt > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return parsed.items || {};
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return {};
  }
}

function saveProgress(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ savedAt: Date.now(), items }));
}

function renderCurriculum() {
  const progress = readProgress();
  curriculum.innerHTML = modules.map((module, moduleIndex) => {
    const topics = module.topics.map((topic) => {
      topicCounter += 1;
      const id = `topic-${topicCounter}`;
      const checked = progress[id] ? 'checked' : '';
      return `<li class="topic-item"><input class="topic-check" type="checkbox" id="${id}" data-module="${moduleIndex}" ${checked}><div><span class="topic-id">${topicCounter}.</span> <strong>${topic[0]}</strong><p>${topic[1]}</p></div></li>`;
    }).join('');
    return `<article class="module-card"><div class="module-header"><div><span>${module.range}</span><h3>${module.title}</h3></div><div class="module-header-right"><span class="module-count" data-module-count="${moduleIndex}">0/${module.topics.length}</span><i class="fa-solid fa-layer-group"></i></div></div><ul class="topic-list">${topics}</ul></article>`;
  }).join('');
}

function renderRoadmap() {
  roadmap.innerHTML = months.map((month) => `
    <article class="road-card">
      <div class="road-sign"><i class="fa-solid fa-diamond-turn-right"></i>${month[0]} - ${month[1]}</div>
      <div class="road-topics"><span class="topic-range">${month[2]}</span><span class="topic-module">${month[3]}</span></div>
      <ul>${month[4].map(item => `<li>${item}</li>`).join('')}</ul>
      <div class="milestone"><i class="fa-solid fa-flag-checkered"></i> ${month[5]}</div>
    </article>
  `).join('');
}

function updateProgress() {
  const checkboxes = [...document.querySelectorAll('.topic-check')];
  const checked = checkboxes.filter(box => box.checked);
  const percent = Math.round((checked.length / checkboxes.length) * 100) || 0;
  const progress = Object.fromEntries(checkboxes.map(box => [box.id, box.checked]));
  saveProgress(progress);

  document.querySelector('#progressPercent').textContent = `${percent}%`;
  document.querySelector('#progressText').textContent = `${checked.length} de ${checkboxes.length} temas completados. Persistencia local aproximada: hasta 5 horas desde la última marca.`;
  document.querySelector('#progressBar').style.width = `${percent}%`;
  document.querySelector('.progress-ring').style.background = `conic-gradient(var(--green) ${percent * 3.6}deg, #e5edf8 0deg)`;

  document.querySelector('#moduleProgress').innerHTML = modules.map((module, index) => {
    const moduleBoxes = checkboxes.filter(box => Number(box.dataset.module) === index);
    const moduleDone = moduleBoxes.filter(box => box.checked).length;
    const countBadge = document.querySelector(`[data-module-count="${index}"]`);
    if (countBadge) countBadge.textContent = `${moduleDone}/${moduleBoxes.length}`;
    return `<div class="module-pill">${module.title.replace('Módulo ', 'M')}: ${moduleDone}/${moduleBoxes.length}</div>`;
  }).join('');
}

renderCurriculum();
renderRoadmap();
updateProgress();

document.addEventListener('change', (event) => {
  if (event.target.matches('.topic-check')) updateProgress();
});

toggleChecks.addEventListener('click', () => {
  checksVisible = !checksVisible;
  document.body.classList.toggle('show-checks', checksVisible);
  toggleChecks.innerHTML = checksVisible
    ? '<i class="fa-regular fa-eye-slash"></i> Ocultar casillas'
    : '<i class="fa-regular fa-square-check"></i> Mostrar casillas';
});
