import './App.css'

const navigation = [
  'Producto',
  'Soluciones',
  'Clientes',
  'Recursos',
  'Precios',
]

const services = [
  {
    title: 'Inteligencia de negocio',
    description:
      'Tableros dinámicos, alertas proactivas y modelos predictivos para anticipar demanda.',
    icon: '📊',
  },
  {
    title: 'Automatización end-to-end',
    description:
      'Orquesta flujos complejos, integra APIs y elimina tareas repetitivas usando low-code.',
    icon: '⚙️',
  },
  {
    title: 'Experiencias personalizadas',
    description:
      'Segmentación avanzada, journeys omnicanal y contenido adaptativo para cada usuario.',
    icon: '✨',
  },
]

const stats = [
  { label: 'Tiempo a valor', value: '6 semanas' },
  { label: 'Niveles de adopción', value: '92%' },
  { label: 'Eficiencia operativa', value: '+38%' },
]

const testimonials = [
  {
    author: 'Mariana Torres',
    role: 'COO · AndinaPay',
    quote:
      'Escalar operaciones en cinco países habría sido imposible sin esta plataforma. La visibilidad en tiempo real nos permite decidir con datos, no con intuición.',
  },
  {
    author: 'Luis Peretti',
    role: 'CTO · FarmaNova',
    quote:
      'Integrar nuestro legacy con nuevos servicios fue sorprendentemente ágil. Hoy liberamos features semanalmente con total trazabilidad.',
  },
]

const workflows = [
  'Control de KPIs críticos mediante paneles contextuales',
  'Integraciones listas con ERP, CRM y data warehouses líderes',
  'Workflows versionados con auditoría granular',
  'Modelos de IA supervisados para decisiones sensibles',
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span>Pulse</span>
            <div className="brand-badge">Enterprise</div>
          </div>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <button className="ghost">Iniciar sesión</button>
            <button className="primary">Agenda una demo</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Plataforma de operaciones digitales</p>
            <h1>
              Resiliencia, velocidad y control en una sola capa operativa
            </h1>
            <p className="hero-subtitle">
              Conecta tus equipos, procesos y datos en un hub unificado con
              seguridad enterprise, observabilidad avanzada e IA aplicada al
              negocio.
            </p>
            <div className="hero-actions">
              <button className="primary">Comenzar ahora</button>
              <button className="ghost">Ver arquitectura</button>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <p className="eyebrow">Status global</p>
              <span className="badge success">Operativo</span>
            </div>
            <div className="card-body">
              <div className="signal">
                <p>Tiempo real</p>
                <strong>147 servicios monitoreados</strong>
                <small>Tráfico estable · SLA 99.98%</small>
              </div>
              <div className="timeline">
                <div className="timeline-row">
                  <span className="dot ok" />
                  <div>
                    <strong>Sync distribuido</strong>
                    <p>Latency promedio 87ms</p>
                  </div>
                  <span className="pill neutral">Estable</span>
                </div>
                <div className="timeline-row">
                  <span className="dot warn" />
                  <div>
                    <strong>Batch financiero</strong>
                    <p>Backlog controlado · 14m</p>
                  </div>
                  <span className="pill warning">Atención</span>
                </div>
                <div className="timeline-row">
                  <span className="dot ok" />
                  <div>
                    <strong>Data Lake</strong>
                    <p>Consumo 63% · Último refresh 2m</p>
                  </div>
                  <span className="pill neutral">Sin riesgo</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <p>Automatiza respuestas con playbooks aprobados.</p>
              <button className="outline">Ver tablero en vivo</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section services">
        <div className="section-header">
          <p className="eyebrow">Capacidades clave</p>
          <h2>Infraestructura digital lista para escalar</h2>
          <p>
            Reúne la visibilidad técnica y el contexto de negocio que necesitas
            para operar servicios críticos con confianza.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="link">Explorar caso de uso</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflows">
        <div className="section-header">
          <p className="eyebrow">Operación orquestada</p>
          <h2>Workflows gobernados por datos</h2>
          <p>
            Define métricas críticas, alerta equipos adecuados y automatiza la
            respuesta sin perder trazabilidad.
          </p>
        </div>
        <ul className="workflow-list">
          {workflows.map((item) => (
            <li key={item}>
              <span />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section testimonials">
        <div className="section-header">
          <p className="eyebrow">Empresas de alto impacto</p>
          <h2>Equipos que ya operan con Pulse</h2>
        </div>
        <div className="cards-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <p>“{testimonial.quote}”</p>
              <div>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Prueba guiada</p>
            <h2>Activa tu entorno sandbox en menos de 10 minutos</h2>
            <p>
              Recibe acompañamiento de nuestro equipo de arquitectura y lleva
              tus flujos reales para validarlos sin riesgos.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary">Solicitar acceso</button>
            <button className="ghost">Descargar checklist</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="brand">
            <span>Pulse</span>
            <div className="brand-badge">Enterprise</div>
          </div>
          <p>© {new Date().getFullYear()} Pulse. Operación orquestada.</p>
        </div>
        <div className="footer-links">
          <a href="#">Status</a>
          <a href="#">Seguridad</a>
          <a href="#">Soporte 24/7</a>
        </div>
      </footer>
    </div>
  )
}

export default App
