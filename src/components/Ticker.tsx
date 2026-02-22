const techs = [
  'Java', 'React', '.NET', 'Kubernetes', 'TypeScript',
  'Azure', 'Python', 'AWS', 'Node.js', 'Docker', 'Vue', 'CI/CD',
]

export function Ticker() {
  const items = [...techs, ...techs]

  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((tech, i) => (
          <span key={i}>
            {i > 0 && <span className="ticker-dot" />}
            <span className="ticker-text">{tech}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
