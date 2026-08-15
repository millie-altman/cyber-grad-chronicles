'use client';

const credentialAssets = [
  {
    category: "Cyber Threat Intelligence (CTI) Research",
    assets: [
      { name: "cti-research-lab", desc: "A centralized repository for CTI research methodologies and laboratory experiments." },
      { name: "threat-actor-profiles", desc: "Detailed analysis of threat actors, including APT29 and Volt Typhoon." },
      { name: "threat-intelligence-portfolio", desc: "A collection of finished intelligence products and PIR frameworks." }
    ]
  },
  {
    category: "Defensive Engineering & Tooling",
    assets: [
      { name: "email-header-analyzer", desc: "Parses SMTP metadata to identify transmission anomalies." },
      { name: "ip-enrichment-tool", desc: "Queries threat intelligence APIs to enrich indicators with reputation scoring." },
      { name: "phishing-url-analyzer", desc: "Heuristic-based analyzer for identifying malicious URI obfuscation." }
    ]
  }
];

function AssetList({ assets }: { assets: any[] }) {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {assets.map((asset) => (
        <div key={asset.name} className="bento-card" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          border: '1px solid var(--border-color)'
        }}>
          <div>
            <code style={{ display: 'block', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent-gold)', marginBottom: '4px' }}>{asset.name}</code>
            <span style={{ fontSize: '0.85rem', color: '#8f8578' }}>{asset.desc}</span>
          </div>
          <a href={`https://github.com/millie-altman/${asset.name}`} target="_blank" rel="noopener noreferrer" style={{ 
            fontSize: '0.7rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '1px', 
            color: 'var(--accent-green)', 
            textDecoration: 'none',
            marginLeft: '1rem'
          }}>
            GitHub ↗
          </a>
        </div>
      ))}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontStyle: 'italic', marginBottom: '1rem' }}>Intel Archive</h1>
        <p style={{ color: '#8f8578' }}>"Operational assets, research, and technical implementations."</p>
      </div>

      <section>
        <h3 style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          marginBottom: '2rem', 
          color: '#A68B64' 
        }}>
          Capability Matrix // Operational Assets
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {credentialAssets.map((group) => (
            <div key={group.category}>
              <h4 style={{ 
                color: '#A68B64', 
                fontSize: '1rem', 
                marginBottom: '1.5rem', 
                borderLeft: '2px solid #A68B64', 
                paddingLeft: '10px' 
              }}>
                {group.category}
              </h4>
              <AssetList assets={group.assets} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}