import './App.css'

const navigation = [
  'Inicio',
  'Servicios',
  'Nosotros',
  'Blog',
  'Contacto',
]

const services = [
  {
    title: 'Servicio Principal 1',
    description:
      'Descripción breve del servicio principal que ofrece tu empresa y sus beneficios clave.',
    icon: '🚀',
  },
  {
    title: 'Servicio Principal 2',
    description:
      'Detalles sobre otro servicio importante, destacando cómo resuelve los problemas del cliente.',
    icon: '⚡',
  },
  {
    title: 'Servicio Principal 3',
    description:
      'Información sobre un tercer servicio o característica distintiva de tu negocio.',
    icon: '💎',
  },
]

const stats = [
  { label: 'Clientes Satisfechos', value: '+500' },
  { label: 'Años de Experiencia', value: '10+' },
  { label: 'Proyectos Completados', value: '1k+' },
]

const testimonials = [
  {
    author: 'Nombre Cliente',
    role: 'Cargo · Empresa',
    quote:
      'Este es un espacio para un testimonio destacado de un cliente satisfecho con tu producto o servicio.',
  },
  {
    author: 'Nombre Cliente',
    role: 'Cargo · Empresa',
    quote:
      'Otro testimonio que refuerza la confianza y credibilidad de tu marca ante nuevos visitantes.',
  },
]

const workflows = [
  'Característica destacada número uno',
  'Beneficio clave para el usuario final',
  'Ventaja competitiva de tu solución',
  'Punto importante sobre tu servicio',
]

function App() {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span>TuMarca</span>
            <div className="brand-badge">Template</div>
          </div>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <button className="ghost">Ingresar</button>
            <button className="primary">Contacto</button>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Tu Propuesta de Valor</p>
            <h1>
              Título principal atractivo para tu audiencia
            </h1>
            <p className="hero-subtitle">
              Subtítulo descriptivo que explica brevemente qué hace tu empresa y por qué es la mejor opción para el cliente.
            </p>
            <div className="hero-actions">
              <button className="primary">Llamada a la acción</button>
              <button className="ghost">Saber más</button>
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
              <p className="eyebrow">Estado del Sistema</p>
              <span className="badge success">Activo</span>
            </div>
            <div className="card-body">
              <div className="signal">
                <p>Monitoreo</p>
                <strong>Sistema funcionando</strong>                
                <small>Todo opera con normalidad</small>
              </div>
              <div className="timeline">
                <div className="timeline-row">
                  <span className="dot ok" />
                  <div>
                    <strong>Servicio A</strong>
                    <p>Rendimiento óptimo</p>
                  </div>
                  <span className="pill neutral">Estable</span>
                </div>
                <div className="timeline-row">
                  <span className="dot warn" />
                  <div>
                    <strong>Servicio B</strong>
                    <p>Mantenimiento programado</p>
                  </div>
                  <span className="pill warning">Info</span>
                </div>
                <div className="timeline-row">
                  <span className="dot ok" />
                  <div>
                    <strong>Base de Datos</strong>
                    <p>Actualizada recientemente</p>
                  </div>
                  <span className="pill neutral">OK</span>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <p>Visualización de métricas en tiempo real.</p>
              <button className="outline">Ver detalles</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section services">
        <div className="section-header">
          <p className="eyebrow">Nuestros Servicios</p>
          <h2>Soluciones diseñadas para tu crecimiento</h2>
          <p>
            Ofrecemos herramientas y servicios adaptados a las necesidades específicas de tu negocio para maximizar resultados.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="link">Más información</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflows">
        <div className="section-header">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>Procesos optimizados y eficientes</h2>
          <p>
            Nuestra metodología garantiza resultados consistentes, transparencia en cada etapa y entregas puntuales.
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
          <p className="eyebrow">Testimonios</p>
          <h2>Lo que dicen nuestros clientes</h2>
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
            <p className="eyebrow">Empieza hoy</p>
            <h2 className="white">Lleva tu negocio al siguiente nivel</h2>
            <p>
              Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
          </div>
          <div className="cta-actions">
            <button className="primary">Contactar ahora</button>
            <button className="ghost white">Ver planes</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <div className="brand">
            <span>TuMarca</span>
            <div className="brand-badge">Template</div>
          </div>
          <p>© {new Date().getFullYear()} TuMarca. Todos los derechos reservados.</p>
        </div>
        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Soporte</a>
        </div>
      </footer>
    </div>
  )
}

export default App
