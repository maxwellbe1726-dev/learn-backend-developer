const agenticLevels = [
  {
    "id": "fundamentos",
    "title": "Fundamentos",
    "topics": [
      {
        "title": "¿Qué es Agentic AI?",
        "description": "Sistemas de IA que pueden planificar, ejecutar y corregir tareas de forma autónoma, a diferencia de chatbots pasivos que solo responden prompts.",
        "example": "Un agente que recibe 'crear una API REST' y automáticamente genera el código, lo prueba, corrige errores y documenta endpoints sin intervención humana."
      },
      {
        "title": "Agente vs Chatbot",
        "description": "Un chatbot responde a preguntas. Un agente tiene objetivos, toma decisiones, usa herramientas y aprende de resultados para cumplir metas.",
        "example": "ChatGPT responde 'cómo hacer deploy'. Un agente ejecuta el deploy en AWS, verifica que funcione y rollback si falla."
      },
      {
        "title": "Arquitectura de Agente",
        "description": "Componentes: Planner (planifica), Executor (ejecuta), Tools (herramientas), Memory (memoria), Monitor (supervisa) y Feedback (retroalimentación).",
        "example": "AutoGPT usa Planner para dividir 'construir SaaS' en tareas, Executor para escribir código, Tools para GitHub/APIs, Memory para contexto."
      },
      {
        "title": "Loop de Agente",
        "description": "Ciclo: Objetivo → Plan → Acción → Observación → Reflexión → Corrección → Repetir hasta cumplir objetivo.",
        "example": "Agente de debugging: Objetivo 'arreglar bug 500' → Plan 'revisar logs' → Acción 'grep error.log' → Observación 'null pointer' → Corrección 'add null check'."
      },
      {
        "title": "Memoria del Agente",
        "description": "Tipos: Episódica (historial de interacciones), Semántica (conocimiento general) y Procedural (cómo hacer tareas). Vector DB para retrieval.",
        "example": "Agente de soporte recuerda que el usuario prefiere Python sobre Java (episódica) y sabe que Django es framework web (semántica)."
      },
      {
        "title": "Tools y Function Calling",
        "description": "Agentes usan APIs externas: bases de datos, servicios cloud, filesystem, git, etc. Function Calling permite invocarlas de forma estructurada.",
        "example": "Agente de análisis llama a Stripe API para obtener métricas de pagos, PostgreSQL para datos de usuarios y Slack para notificar equipo."
      },
      {
        "title": "RAG + Agentes",
        "description": "Retrieval-Augmented Generation combinado con agentes permite consultar conocimiento externo y actuar sobre él dinámicamente.",
        "example": "Agente legal busca en corpus de leyes (RAG), interpreta caso, genera documento y lo envía a sistema de gestión judicial."
      },
      {
        "title": "Multi-Agent Systems",
        "description": "Múltiples agentes especializados colaboran: uno investiga, otro escribe, otro revisa, otro despliega. Comunicación vía mensajes.",
        "example": "Devin AI usa agente de código, agente de pruebas, agente de documentación y agente de deploy para construir features completas."
      }
    ]
  },
  {
    "id": "planificacion",
    "title": "Planificación",
    "topics": [
      {
        "title": "Chain of Thought",
        "description": "El agente 'piensa en voz alta', desglosando problemas complejos en pasos intermedios para mejorar razonamiento.",
        "example": "Para 'optimizar query SQL', agente razona: 1) identificar índices faltantes, 2) analizar EXPLAIN, 3) reescribir JOIN, 4) benchmark."
      },
      {
        "title": "Tree of Thoughts",
        "description": "Explora múltiples caminos de solución, evalúa cada uno y selecciona el mejor. Similar a búsqueda en árbol con heurística.",
        "example": "Agente de arquitectura evalúa 3 opciones: monolito, microservicios, serverless. Simula costos, latencia y complejidad para cada una."
      },
      {
        "title": "ReAct (Reasoning + Acting)",
        "description": "Patrón donde el agente razona sobre qué acción tomar, la ejecuta, observa resultado y ajusta siguiente paso.",
        "example": "Agente de CI/CD: Razona 'tests fallaron' → Acción 'ver logs' → Observa 'timeout en DB' → Acción 'aumentar connection pool'."
      },
      {
        "title": "Task Decomposition",
        "description": "Dividir objetivos grandes en subtareas manejables. Usual en agentes que construyen software completo.",
        "example": "Objetivo 'crear e-commerce' → Subtareas: modelo datos, API productos, carrito, pasarela pagos, auth, admin, tests, deploy."
      },
      {
        "title": "Self-Reflection",
        "description": "El agente evalúa sus propias acciones, detecta errores y se corrige. Crítico para calidad y evitar loops infinitos.",
        "example": "Agente de código escribe función, la prueba, ve que falla en edge case, refactoriza y vuelve a probar automáticamente."
      },
      {
        "title": "Goal Hierarchies",
        "description": "Objetivos principales, secundarios y terciarios. El agente prioriza y trackea progreso en cada nivel.",
        "example": "Principal: 'lanzar MVP'. Secundario: 'API funcional'. Terciario: 'endpoint users'. Agente enfoca primero en auth antes de users."
      },
      {
        "title": "Dynamic Planning",
        "description": "Planes que se adaptan en tiempo real según resultados, no estáticos. Requiere replanificación continua.",
        "example": "Agente de migración: Plan A → migra a PostgreSQL. Si replica falla, Plan B → usa pg_dump, si falla, Plan C → migra incrementalmente."
      }
    ]
  },
  {
    "id": "herramientas",
    "title": "Herramientas",
    "topics": [
      {
        "title": "LangChain",
        "description": "Framework para construir agentes con LLMs. Ofrece chains, agents, tools, memory y integraciones con 50+ servicios.",
        "example": "Usar LangChain para crear agente que consulta Pinecone (vector DB), ejecuta código con Python REPL y envía emails vía SendGrid."
      },
      {
        "title": "LangGraph",
        "description": "Extensión de LangChain para definir flujos de agentes como grafos stateful. Ideal para workflows complejos multi-step.",
        "example": "Grafo: Start → Research → Code → Test → Review → Deploy. Cada nodo es un agente especializado con condiciones de transición."
      },
      {
        "title": "AutoGen",
        "description": "Framework de Microsoft para multi-agent conversations. Agentes conversan entre sí para resolver problemas colaborativamente.",
        "example": "Agente 'Coder' escribe código, agente 'Reviewer' lo critica, agente 'Tester' valida. Conversan hasta consenso sobre calidad."
      },
      {
        "title": "CrewAI",
        "description": "Framework para orquestar crews de agentes con roles, goals y backstory. Similar a equipos humanos especializados.",
        "example": "Crew: Researcher (investiga), Writer (escribe), Editor (edita), Publisher (publica). Cada agente tiene herramientas específicas."
      },
      {
        "title": "LlamaIndex",
        "description": "Framework enfocado en data indexing y retrieval para RAG. Agentes pueden consultar datos estructurados y no estructurados.",
        "example": "Agente de análisis financiero indexa reports PDF, tablas SQL y noticias. Consulta 'ROI Q3 2026' y sintetiza respuesta."
      },
      {
        "title": "OpenAI Agents",
        "description": "API nativa de OpenAI para function calling y asistentes con tools. Simplifica creación de agentes sin frameworks externos.",
        "example": "Asistente con tools: Code Interpreter (ejecuta Python), Retrieval (busca en docs), Custom (API propia). Usuario pide 'analizar CSV'."
      },
      {
        "title": "Anthropic Tool Use",
        "description": "Claude puede usar herramientas definidas en XML. Menos dependencias, buen razonamiento y contexto largo.",
        "example": "Claude recibe tool 'query_database'. Usuario pide 'ventas mensuales'. Claude genera query SQL, ejecuta vía tool, interpreta resultados."
      },
      {
        "title": "MCP (Model Context Protocol)",
        "description": "Protocolo estándar para conectar modelos con herramientas. Permite portabilidad entre proveedores.",
        "example": "Agente usa MCP para conectar con GitHub, Jira y Slack. Si cambias de OpenAI a Anthropic, misma configuración MCP funciona."
      }
    ]
  },
  {
    "id": "implementacion",
    "title": "Implementación",
    "topics": [
      {
        "title": "Function Calling",
        "description": "LLM genera llamadas a funciones en lugar de texto. Backend ejecuta funciones y devuelve resultados al modelo.",
        "example": "Modelo decide llamar 'get_weather(city: \"Madrid\")'. Backend llama API clima, devuelve '25°C', modelo responde 'En Madrid hace 25°C'."
      },
      {
        "title": "Tool Schema",
        "description": "Definir estructura de tools: nombre, descripción, parámetros (JSON Schema). El LLM decide cuándo invocar cada una.",
        "example": "Tool 'create_user': {name: string, email: string, role: enum}. LLM invoca con params válidos basados en conversación."
      },
      {
        "title": "Context Window Management",
        "description": "Agentes generan mucho contexto. Estrategias: truncar, summarizar, usar RAG, vector DBs y modelos con 128k+ tokens.",
        "example": "Agente de código mantiene últimos 50 archivos en contexto, resto en vector DB. Cuando necesita archivo viejo, lo recupera vía RAG."
      },
      {
        "title": "State Management",
        "description": "Mantener estado del agente: objetivos completados, variables acumuladas, historial. Usual en LangGraph y AutoGen.",
        "example": "Agente de ventas trackea: leads contactados, demos agendadas, deals cerrados. Estado persiste en Redis entre sesiones."
      },
      {
        "title": "Error Handling",
        "description": "Agentes deben manejar errores: reintentos, fallbacks, logging, alertas humanas para casos no resueltos.",
        "example": "Tool 'deploy' falla. Agente reintenta 3 veces, luego notifica a Slack: 'Deploy falló, requiere intervención manual'."
      },
      {
        "title": "Rate Limiting",
        "description": "Controlar llamadas a APIs externas para no exceder límites. Backoff exponencial, colas y caché.",
        "example": "Agente consulta GitHub API 100 veces/min. Implementa backoff: si 429, espera 60s, reintentará con menor frecuencia."
      },
      {
        "title": "Safety Guardrails",
        "description": "Restringir acciones del agente: no ejecutar código destructivo, no exponer datos sensibles, validar outputs.",
        "example": "Agente de DevOps tiene tool 'delete_server'. Guardrail: requiere aprobación humana si server tiene producción activa."
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend con Agentes",
    "topics": [
      {
        "title": "Agentic Backend Architecture",
        "description": "Backend donde endpoints son orquestadores de agentes en lugar de lógica imperativa tradicional.",
        "example": "POST /analyze → Dispatcher invoca agente de análisis, que usa tools de DB, ML y reporting. Devuelve resultado procesado."
      },
      {
        "title": "Agent as Microservice",
        "description": "Cada agente es un microservice especializado con su API, escalado y monitoreo independiente.",
        "example": "Microservice 'billing-agent' expone POST /calculate_invoice. Internamente usa LLM + tools para calcular impuestos complejos."
      },
      {
        "title": "Event-Driven Agents",
        "description": "Agentes reaccionan a eventos (Kafka, SQS, webhooks) y ejecutan workflows autónomos.",
        "example": "Evento 'user_signed_up' → Kafka → Agente onboarding envía email, configura cuenta, invita a Slack, crea dashboard."
      },
      {
        "title": "Database Agents",
        "description": "Agentes que interactúan con bases de datos: generan queries, optimizan, migran, analizan datos.",
        "example": "Agente DBA recibe query lento, analiza EXPLAIN, sugiere índice, lo crea y valida mejora de performance."
      },
      {
        "title": "API Testing Agents",
        "description": "Agentes que prueban endpoints automáticamente: generan casos, envían requests, validan responses, reportan bugs.",
        "example": "Agente tester explora API Swagger, genera 100 requests válidos e inválidos, detecta 500 en edge case, crea ticket en Jira."
      },
      {
        "title": "Monitoring Agents",
        "description": "Agentes que monitorean sistemas, detectan anomalías, diagnostican y hasta reparan automáticamente.",
        "example": "Agente de observabilidad detecta spike en latency, investiga logs, identifica slow query, aplica hotfix y notifica equipo."
      },
      {
        "title": "CI/CD Agents",
        "description": "Agentes que gestionan pipelines: ejecutan tests, hacen code review, optimizan builds, despliegan.",
        "example": "Agente DevOps ve PR fallando tests, analiza diff, sugiere fix, autoriza merge si tests pasan, deploya a staging."
      }
    ]
  },
  {
    "id": "avanzado",
    "title": "Avanzado",
    "topics": [
      {
        "title": "Human-in-the-Loop",
        "description": "Agentes solicitan aprobación humana para decisiones críticas. Balance entre autonomía y control.",
        "example": "Agente de finanzas propone transferencia de $10k. Humano aprueba. Agente ejecuta y confirma recibo."
      },
      {
        "title": "Multi-Modal Agents",
        "description": "Agentes que procesan texto, imágenes, audio, video. Usan modelos vision, speech y multimodales.",
        "example": "Agente de soporte recibe screenshot de error, lo analiza con vision model, identifica UI bug, crea ticket con descripción."
      },
      {
        "title": "Agent Orchestration",
        "description": "Coordinar múltiples agentes: scheduling, resource allocation, conflict resolution, load balancing.",
        "example": "Orquestador asigna tarea 'generar reporte' a agente disponible, balancea carga entre 5 agentes de análisis, evita duplicados."
      },
      {
        "title": "Federated Agents",
        "description": "Agentes distribuidos en múltiples organizaciones que colaboran sin compartir datos sensibles.",
        "example": "Hospital A y B tienen agentes médicos que colaboran en diagnóstico sin compartir datos de pacientes (privacy-preserving)."
      },
      {
        "title": "Agent Evaluation",
        "description": "Métricas para evaluar agentes: success rate, time to completion, cost, safety, hallucination rate.",
        "example": "Evaluar agente de código: 85% tasks completadas, 12min promedio, $0.50/task, 0 bugs críticos, 2% alucinaciones."
      },
      {
        "title": "Cost Optimization",
        "description": "Agentes pueden ser costosos. Estrategias: caching, modelos más pequeños para subtareas, batching, local LLMs.",
        "example": "Agente usa GPT-4 para planning, GPT-3.5 para ejecución, cachea respuestas comunes, usa Llama 3 local para tareas simples."
      },
      {
        "title": "Future of Agentic AI",
        "description": "Tendencias 2026+: agentes más autónomos, mejor reasoning, integración con robotics, agentes físicos, swarm intelligence.",
        "example": "Agente que no solo escribe código sino que despliega infraestructura, monitorea en producción y escala automáticamente."
      }
    ]
  }
]

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function renderAgenticCards() {
  const container = document.getElementById('agenticCards');
  if (!container) return;

  let html = '';
  agenticLevels.forEach(level => {
    html += `<div id="${level.id}" class="java-level">
      <h3 class="level-title">${escapeHtml(level.title)}</h3>
      <div class="java-card-grid">`;
    
    level.topics.forEach(topic => {
      html += `<article class="java-topic-card">
        <h4>${escapeHtml(topic.title)}</h4>
        <p class="topic-desc">${escapeHtml(topic.description)}</p>
        <div class="example-block">
          <span class="example-label">Ejemplo real 2026:</span>
          <p>${escapeHtml(topic.example)}</p>
        </div>
      </article>`;
    });
    
    html += `</div></div>`;
  });

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderAgenticCards);
