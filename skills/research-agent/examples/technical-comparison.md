# Example: Technical Comparison Output

This is an illustrative example of how the Research Agent structures a technical-comparison answer. The topic, sources, and findings are placeholders chosen to show the **shape** of a good response — not real data.

> Topic (illustrative): "Should our new internal service use REST + JSON or gRPC + Protobuf?"

---

# Executive Summary

For an internal-only service with predictable, high-volume RPC traffic between trusted clients, gRPC + Protobuf is generally the stronger default; REST + JSON remains the better choice when the service must be consumed by browsers, third parties, or ad-hoc tooling. The decision hinges on client diversity and operational maturity, not raw performance.

# Key Findings

- gRPC's binary framing and HTTP/2 multiplexing typically reduce per-request overhead for high-fanout internal calls.
- REST + JSON wins on debuggability, browser support, and ecosystem familiarity for ad-hoc consumers.
- gRPC requires investment in code generation, schema governance, and observability tooling that REST shops often already have for free.
- The "performance gap" cited in vendor benchmarks frequently shrinks once payload sizes, compression, and connection reuse are matched.

# Evidence

- Official protocol documentation describes gRPC's transport (HTTP/2) and serialization (Protobuf) characteristics; REST is transport-agnostic and pairs most often with HTTP/1.1 or HTTP/2 + JSON.
- Independent engineering write-ups from large-scale operators report meaningful latency and CPU savings at high RPS, with diminishing returns at low RPS.
- Tooling maturity differs: REST has near-universal client support; gRPC's browser story relies on gRPC-Web or a gateway.

# Conflicting Views

- Vendor-published benchmarks tend to favor whichever stack the vendor sells; independent reproductions show smaller gaps.
- Some teams report gRPC's schema enforcement as a productivity win; others report it as friction during early-stage iteration.

# Risks / Caveats

- Schema-driven systems can become difficult to evolve without disciplined versioning.
- Debuggability suffers when binary protocols meet teams without strong observability tooling.
- Browser and partner-facing APIs almost always need a REST/JSON edge regardless of the internal choice.

# Confidence Level

**Medium.** The directional guidance is well supported by independent sources; the precise tradeoff depends on team tooling and traffic shape, which the example does not specify.

# Sources Consulted

- Official protocol documentation (gRPC, HTTP/2, Protobuf, REST/JSON).
- Independent engineering blog posts from operators running both stacks at scale.
- Standards-body specifications for HTTP/2 and JSON.

> Reminder: this is a format example. Real outputs must cite real sources, not source *types*.
