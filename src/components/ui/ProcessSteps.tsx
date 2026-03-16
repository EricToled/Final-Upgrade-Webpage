interface Step {
  title: string;
  desc: string;
}

interface ProcessStepsProps {
  steps: readonly Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <div key={i} className="glass p-6 relative">
          <div className="text-primary font-bold text-5xl opacity-20 absolute top-4 right-4">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h4 className="font-bold text-lg mb-3 pr-10">{step.title}</h4>
          <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
