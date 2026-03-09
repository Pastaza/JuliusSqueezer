const facts = [
"Kubernetes started as a Google project named 'Borg' inspiration.",
"HTTP/2 multiplexing can reduce latency by enabling multiple streams on one connection.",
"Open-source dev tools often improve adoption by reducing onboarding friction.",
"A/B tests without clear hypotheses create noise, not signal.",
"Most SaaS funnels leak at onboarding — fixing 1% conversion there can outperform ad volume."
];

function pickFact(){
const f = facts[Math.floor(Math.random()*facts.length)];
return f;
}
