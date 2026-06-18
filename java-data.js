const javaLevels = [
  ['fundamentos', 'Nivel 1 — Fundamentos', ['JVM, JDK y JRE', 'Instalación de Java 21 LTS', 'Estructura de un programa Java', 'Tipos de Datos y Operadores', 'Variables y constantes', 'Casting y conversiones', 'Entrada y salida por consola', 'Condicionales', 'Operador ternario', 'Bucles', 'break y continue', 'Métodos', 'Paso por valor', 'Recursividad', 'Paquetes (Packages)', 'Importaciones', 'Comentarios y documentación JavaDoc', 'Naming conventions', 'Compilación y ejecución manual', 'Manejo básico de errores']],
  ['poo', 'Nivel 2 — Programación Orientada a Objetos', ['Clases y Objetos', 'Constructores', 'Sobrecarga de métodos', 'Sobrecarga de constructores', 'this y super', 'Encapsulamiento', 'Modificadores de acceso', 'Abstracción', 'Herencia', 'Polimorfismo', 'Clases Abstractas e Interfaces', 'Relaciones HAS-A y IS-A', 'Composición', 'Agregación', 'static', 'final', 'Object', 'equals()', 'hashCode()', 'toString()']],
  ['apis', 'Nivel 3 — Manejo de Excepciones y APIs Base', ['Checked Exceptions', 'Unchecked Exceptions', 'Try-with-resources', 'Excepciones personalizadas', 'Enums y Excepciones Personalizadas', 'String, StringBuilder y Fechas', 'StringBuffer', 'Regex', 'LocalDate', 'LocalDateTime', 'ZonedDateTime', 'Duration', 'Period', 'Formateo de fechas', 'Internacionalización (i18n)']],
  ['colecciones', 'Nivel 4 — Colecciones y Genéricos', ['Generics', 'Wildcards', 'Collection Framework', 'Implementaciones de Colecciones', 'ArrayList', 'LinkedList', 'HashSet', 'TreeSet', 'HashMap', 'TreeMap', 'Queue', 'Deque', 'PriorityQueue', 'Colecciones Inmutables', 'Comparable y Comparator']],
  ['moderno', 'Nivel 5 — Java Moderno', ['Records', 'Sealed Classes', 'Pattern Matching', 'Lambdas', 'Interfaces Funcionales', 'Predicate', 'Function', 'Consumer', 'Supplier', 'Streams API', 'Optional Avanzado', 'Text Blocks']],
  ['concurrencia', 'Nivel 6 — Concurrencia', ['Threads', 'synchronized', 'Locks', 'Atomic Classes', 'Concurrent Collections', 'ExecutorService', 'Virtual Threads', 'Concurrencia Estructurada']],
  ['profesional', 'Nivel 7 — Java Profesional', ['Garbage Collector', 'Gestión de memoria Heap y Stack', 'Profiling y monitoreo', 'Maven', 'Gradle', 'Logging con SLF4J', 'Logback', 'Testing con JUnit 5', 'Mockito', 'Modularización (JPMS)']]
];

const snippets = {
  'Estructura de un programa Java': ['public class Main {', '  public static void main(String[] args) {', '    System.out.println("Hola Java 21");', '  }', '}'],
  'Tipos de Datos y Operadores': ['int edad = 25;', 'double precio = 19.99;', 'boolean activo = edad >= 18;', 'System.out.println(precio * 1.19);'],
  'Condicionales': ['if (saldo >= compra) {', '  System.out.println("Pago aprobado");', '} else {', '  System.out.println("Fondos insuficientes");', '}'],
  'Bucles': ['for (int i = 1; i <= 5; i++) {', '  System.out.println("Intento " + i);', '}'],
  'Métodos': ['static int sumar(int a, int b) {', '  return a + b;', '}'],
  'Recursividad': ['static int factorial(int n) {', '  return n <= 1 ? 1 : n * factorial(n - 1);', '}'],
  'Clases y Objetos': ['class Usuario {', '  String nombre;', '}', 'Usuario user = new Usuario();', 'user.nombre = "Ana";'],
  'Constructores': ['class Producto {', '  Producto(String nombre) {', '    this.nombre = nombre;', '  }', '  String nombre;', '}'],
  'Encapsulamiento': ['class Cuenta {', '  private BigDecimal saldo = BigDecimal.ZERO;', '  public BigDecimal saldo() { return saldo; }', '}'],
  'Herencia': ['class Animal {}', 'class Perro extends Animal {}'],
  'Polimorfismo': ['List<Animal> animales = List.of(new Perro(), new Gato());', 'animales.forEach(Animal::sonar);'],
  'Checked Exceptions': ['static String leer(Path path) throws IOException {', '  return Files.readString(path);', '}'],
  'Unchecked Exceptions': ['if (id == null) {', '  throw new IllegalArgumentException("id requerido");', '}'],
  'Try-with-resources': ['try (var lines = Files.lines(Path.of("data.txt"))) {', '  lines.forEach(System.out::println);', '}'],
  'Generics': ['class Caja<T> {', '  private T valor;', '  T get() { return valor; }', '}'],
  'Collection Framework': ['List<String> nombres = new ArrayList<>();', 'Set<String> unicos = new HashSet<>();', 'Map<Long, String> mapa = new HashMap<>();'],
  'Colecciones Inmutables': ['List<String> roles = List.of("ADMIN", "USER");', 'Map<String, Integer> edades = Map.of("Ana", 30);'],
  'Records': ['record UsuarioDto(Long id, String nombre) {}', 'var dto = new UsuarioDto(1L, "Ana");'],
  'Sealed Classes': ['sealed interface Resultado permits Exito, Fallo {}', 'record Exito(String valor) implements Resultado {}', 'record Fallo(String error) implements Resultado {}'],
  'Pattern Matching': ['if (obj instanceof String texto) {', '  System.out.println(texto.toUpperCase());', '}'],
  'Lambdas': ['List.of(1, 2, 3).forEach(n -> System.out.println(n * 2));'],
  'Interfaces Funcionales': ['Function<String, Integer> largo = String::length;', 'Predicate<Integer> par = n -> n % 2 == 0;'],
  'Streams API': ['var activos = usuarios.stream()', '  .filter(Usuario::activo)', '  .map(Usuario::email)', '  .toList();'],
  'Optional Avanzado': ['Optional.ofNullable(email)', '  .map(String::trim)', '  .filter(e -> e.contains("@"))', '  .orElseThrow();'],
  'Threads': ['Thread hilo = new Thread(() -> System.out.println("trabajo"));', 'hilo.start();'],
  'ExecutorService': ['try (var executor = Executors.newFixedThreadPool(4)) {', '  executor.submit(() -> procesar());', '}'],
  'Virtual Threads': ['try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {', '  executor.submit(() -> llamarApi());', '}'],
  'Testing con JUnit 5': ['@Test', 'void sumaDosNumeros() {', '  assertEquals(4, calculadora.sumar(2, 2));', '}'],
  'Mockito': ['when(repo.findById(1L)).thenReturn(Optional.of(usuario));', 'verify(repo).findById(1L);']
};

function exampleFor(title) {
  if (snippets[title]) return snippets[title].join('\n');
  if (title.includes('Maven')) return 'mvn clean test\nmvn package';
  if (title.includes('Gradle')) return './gradlew test\n./gradlew build';
  const className = title.replace(/[^a-zA-Z0-9]/g, '') || 'Java';
  return [`class ${className}Demo {`, '  void practicar() {', `    System.out.println("Tema: ${title}");`, '  }', '}'].join('\n');
}

function descriptionFor(title, level) {
  return `Domina ${title} dentro de ${level.toLowerCase()} para escribir código Java 21 más claro, seguro y mantenible en backend.`;
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function renderJavaCards() {
  let counter = 0;
  const html = javaLevels.map(([id, level, topics]) => {
    const cards = topics.map((title) => {
      counter += 1;
      const code = exampleFor(title);
      return `<article class="java-topic-card">
        <div class="java-card-top"><span class="java-number">${counter}</span><span class="java-level">${level}</span></div>
        <h3>${title}</h3>
        <p>${descriptionFor(title, level)}</p>
        <pre class="code-block"><code>${escapeHtml(code)}</code></pre>
      </article>`;
    }).join('');
    return `<section id="${id}" class="java-level-section"><div class="java-level-heading"><span>${topics.length} temas</span><h2>${level}</h2></div><div class="java-card-grid">${cards}</div></section>`;
  }).join('');
  document.querySelector('#javaCards').innerHTML = html;
}

renderJavaCards();
