const modules = [
  {
    title: 'Knowledge Hub',
    description:
      'Structured internal reference pages with owner, status, and clear operating standards.',
    highlights: ['Strategy + context', 'Brand system', 'Channel playbooks', 'Governance logs']
  },
  {
    title: 'Asset Library',
    description:
      'Searchable templates and brand files with versioning, metadata, and usage notes.',
    highlights: ['Upload + preview', 'Tags + filters', 'Version history', 'Brand kit package']
  },
  {
    title: 'Work Tracker',
    description:
      'Lightweight kanban board that links tasks to hub pages and assets.',
    highlights: ['Backlog → Done', 'Owner + due date', 'Priority + category']
  },
  {
    title: 'AI Assistant',
    description:
      'Internal-only RAG assistant that answers with citations from approved hub sources.',
    highlights: ['Citations required', 'Index controls', 'Helpful / not helpful feedback']
  },
  {
    title: 'Image Generator',
    description:
      'Generate internal-only placeholder visuals and save drafts directly into the asset library.',
    highlights: ['Prompt + format', 'Draft labeling', 'Auto-tagged metadata']
  }
];

const tasks = [
  {
    title: 'Publish fall outreach playbook',
    owner: 'Marketing Intern',
    due: 'Oct 3',
    status: 'In Progress',
    priority: 'High'
  },
  {
    title: 'Refresh LinkedIn template pack',
    owner: 'Editor',
    due: 'Oct 7',
    status: 'Needs Review',
    priority: 'Medium'
  },
  {
    title: 'Upload 2024 event photos',
    owner: 'Contributor',
    due: 'Oct 10',
    status: 'Backlog',
    priority: 'Low'
  }
];

const assets = [
  {
    name: 'OSL Brand Kit v2',
    type: 'Brand System',
    status: 'Approved',
    tags: ['Logo', 'Typography', 'Color']
  },
  {
    name: 'LinkedIn Carousel Template',
    type: 'Social Template',
    status: 'Approved',
    tags: ['LinkedIn', '2024']
  },
  {
    name: 'Outreach Flyer Draft',
    type: 'Print',
    status: 'Draft',
    tags: ['Flyer', 'Community']
  }
];

const playbooks = [
  {
    title: 'Channel Playbooks',
    body: 'Approved patterns for LinkedIn, X, website updates, and Discourse.'
  },
  {
    title: 'Website Updates',
    body: 'Safe edits, rollback steps, and non-coder instructions with screenshots.'
  },
  {
    title: 'Community Outreach',
    body: 'Event templates, outreach cadence, and approved messaging.'
  }
];

const generatorFormats = [
  { label: 'Social post (1:1)', detail: 'Square format for LinkedIn/X' },
  { label: 'Banner (16:9)', detail: 'Website hero or slide cover' },
  { label: 'Flyer cover (vertical)', detail: 'Poster or event flyer draft' }
];

export default function Home() {
  return (
    <div className="stack">
      <section className="hero" id="hub">
        <div>
          <div className="pill-row">
            <span className="pill">Internal-only</span>
            <span className="pill">Affinity-inspired UI</span>
          </div>
          <h1>OSL Marketing Ops Hub</h1>
          <p className="lead">
            A calm, premium workspace that organizes brand standards, assets, tasks, and
            AI-assisted execution in one internal system.
          </p>
          <div className="cta-row">
            <button type="button" className="primary-button">
              Enter Hub
            </button>
            <button type="button" className="ghost-button">
              View build brief
            </button>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <h3>System status</h3>
            <ul>
              <li>
                <span className="dot" /> Auth required for all pages
              </li>
              <li>
                <span className="dot" /> Assets and docs are versioned
              </li>
              <li>
                <span className="dot" /> AI answers require citations
              </li>
            </ul>
          </div>
          <div className="floating-card">
            <p className="caption">Latest updates</p>
            <p className="card-title">Brand kit v2 approved</p>
            <p className="muted">Owner: Marketing Lead · Updated today</p>
            <div className="chip-row">
              <span className="chip">Approved</span>
              <span className="chip">Brand System</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-grid">
        <div className="card hero-panel">
          <h3>Why this hub exists</h3>
          <p>
            OSL marketing should feel like a product. This hub keeps assets, playbooks, and
            approvals searchable and consistent without onboarding chaos.
          </p>
          <button type="button" className="link-button">
            See governance rules
          </button>
        </div>
        <div className="card hero-panel">
          <h3>Designed for clarity</h3>
          <p>
            Rounded surfaces, subtle gradients, and strong typography create a calm internal
            environment similar to Affinity by Canva.
          </p>
          <button type="button" className="link-button">
            Explore UI components
          </button>
        </div>
        <div className="card hero-panel">
          <h3>Internal AI with citations</h3>
          <p>
            The assistant responds only with approved sources, highlighting which hub pages
            were used for every answer.
          </p>
          <button type="button" className="link-button">
            View assistant rules
          </button>
        </div>
      </section>

      <section className="section" id="brand">
        <div className="section-header">
          <h2>Core modules</h2>
          <p className="muted">
            Each module is designed to keep OSL marketing consistent, searchable, and
            operationally clean.
          </p>
        </div>
        <div className="grid">
          {modules.map((module) => (
            <article key={module.title} className="card">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="chip-row">
                {module.highlights.map((highlight) => (
                  <span key={highlight} className="chip">
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="playbooks">
        <div className="section-header">
          <h2>Playbooks and standards</h2>
          <p className="muted">
            Structured guidance that reads like internal references, not training modules.
          </p>
        </div>
        <div className="grid">
          {playbooks.map((playbook) => (
            <article key={playbook.title} className="card">
              <h3>{playbook.title}</h3>
              <p>{playbook.body}</p>
              <button type="button" className="link-button">
                Open reference
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="brand-system">
        <div className="section-header">
          <h2>Brand system</h2>
          <p className="muted">
            A single source of truth for logos, typography, color, and usage rules.
          </p>
        </div>
        <div className="brand-grid">
          <div className="card">
            <h3>Do / Don’t gallery</h3>
            <p>Clear guidance for correct logo usage, spacing, and typography.</p>
            <div className="chip-row">
              <span className="chip">Do</span>
              <span className="chip">Don’t</span>
              <span className="chip">Examples</span>
            </div>
          </div>
          <div className="card">
            <h3>Brand kit download</h3>
            <p>Download all approved assets in one package with version history.</p>
            <button type="button" className="ghost-button">
              Download kit
            </button>
          </div>
        </div>
      </section>

      <section className="section" id="community">
        <div className="section-header">
          <h2>Community & outreach focus</h2>
          <p className="muted">
            Keep outreach tactics consistent with OSL governance, tone, and approved
            messaging.
          </p>
        </div>
        <div className="callout">
          <strong>Example standard</strong>
          <p>
            Outreach announcements must link to the current brand kit, include the approved
            tagline, and reference the most recent community update playbook.
          </p>
        </div>
      </section>

      <section className="section" id="assets">
        <div className="section-header">
          <h2>Asset library preview</h2>
          <p className="muted">
            Every asset includes usage notes, tags, versioning, and approved status.
          </p>
        </div>
        <div className="grid asset-grid">
          {assets.map((asset) => (
            <article key={asset.name} className="card asset-card">
              <div className="asset-meta">
                <span className="status">{asset.status}</span>
                <span className="type">{asset.type}</span>
              </div>
              <h3>{asset.name}</h3>
              <div className="chip-row">
                {asset.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <button type="button" className="ghost-button">
                Preview
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="tasks">
        <div className="section-header">
          <h2>Work tracker snapshot</h2>
          <p className="muted">Kanban focus: backlog, in progress, review, done.</p>
        </div>
        <div className="table">
          <div className="table-row header">
            <span>Task</span>
            <span>Owner</span>
            <span>Due</span>
            <span>Status</span>
            <span>Priority</span>
          </div>
          {tasks.map((task) => (
            <div key={task.title} className="table-row">
              <span>{task.title}</span>
              <span>{task.owner}</span>
              <span>{task.due}</span>
              <span>{task.status}</span>
              <span>{task.priority}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="website">
        <div className="section-header">
          <h2>Website updates guide</h2>
          <p className="muted">
            Safe, non-coder instructions to keep the public OSL site accurate and stable.
          </p>
        </div>
        <div className="grid">
          <article className="card">
            <h3>Safe edits vs. unsafe edits</h3>
            <p>
              Text updates and image swaps are safe. Layout or navigation changes require
              editor approval.
            </p>
            <button type="button" className="link-button">
              View checklist
            </button>
          </article>
          <article className="card">
            <h3>Step-by-step flows</h3>
            <p>
              Update a link, add a publication, or roll back a page with clear screenshots
              and checkpoints.
            </p>
            <button type="button" className="link-button">
              Open guide
            </button>
          </article>
        </div>
      </section>

      <section className="section" id="ai">
        <div className="section-header">
          <h2>Internal AI assistant</h2>
          <p className="muted">
            Retrieval-grounded answers with citations to approved hub sources.
          </p>
        </div>
        <div className="assistant">
          <div className="assistant-card">
            <p className="caption">Suggested prompts</p>
            <ul>
              <li>“Show approved LinkedIn post structures for research updates.”</li>
              <li>“Where is the latest brand kit and usage notes?”</li>
              <li>“What is the safe process to update the website hero?”</li>
            </ul>
          </div>
          <div className="assistant-card">
            <p className="caption">Answer preview</p>
            <p>
              Use the approved LinkedIn research template v2 and include a short summary
              headline, key takeaway, and CTA. See “LinkedIn Playbook” and “Template
              Library / Social” for examples.
            </p>
            <div className="citation-row">
              <span className="chip">LinkedIn Playbook</span>
              <span className="chip">Template Library</span>
            </div>
            <div className="feedback-row">
              <button type="button" className="ghost-button">
                Helpful
              </button>
              <button type="button" className="ghost-button">
                Not helpful
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="image-generator">
        <div className="section-header">
          <h2>Image generator (drafts)</h2>
          <p className="muted">
            Create AI-assisted placeholders for drafts and save them as tagged assets.
          </p>
        </div>
        <div className="generator">
          <div className="generator-form">
            <label className="field">
              <span>Prompt</span>
              <textarea
                placeholder="Minimal, credible banner for community outreach update..."
                rows={4}
              />
            </label>
            <label className="field">
              <span>Format</span>
              <select>
                {generatorFormats.map((format) => (
                  <option key={format.label}>{format.label}</option>
                ))}
              </select>
            </label>
            <button type="button" className="primary-button">
              Generate draft image
            </button>
            <p className="caption">
              Drafts are auto-tagged as AI-generated and saved to the asset library.
            </p>
          </div>
          <div className="generator-preview">
            <div className="preview-frame">
              <span className="preview-label">Draft preview</span>
              <div className="preview-swatch" />
            </div>
            <div className="chip-row">
              <span className="chip">Draft</span>
              <span className="chip">AI-generated</span>
              <span className="chip">Awaiting approval</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="governance">
        <div className="section-header">
          <h2>Governance + approvals</h2>
          <p className="muted">
            Role-based access ensures drafts are reviewed before publication.
          </p>
        </div>
        <div className="callout">
          <strong>Internal-only enforcement</strong>
          <p>
            All routes require authentication with an allowlisted domain. Editors can
            approve assets and publish docs without code changes.
          </p>
        </div>
      </section>
    </div>
  );
}
