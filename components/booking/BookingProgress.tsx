type BookingProgressProps = {
  currentStep: 1 | 2;
};

const steps = [
  { number: 1, label: "Your enquiry" },
  { number: 2, label: "Your details" },
];

export default function BookingProgress({ currentStep }: BookingProgressProps) {
  return (
    <div className="mb-8 flex items-center">
      {steps.map((step, index) => {
        const active = currentStep === step.number;
        const completed = currentStep > step.number;

        return (
          <div key={step.number} className="flex flex-1 items-center">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-colors ${
                  active || completed
                    ? "border-ocean bg-ocean text-white"
                    : "border-charcoal/20 text-charcoal/50"
                }`}
              >
                {completed ? "✓" : step.number}
              </span>

              <span
                className={`hidden text-xs sm:block ${
                  active ? "font-semibold text-ocean" : "text-charcoal/50"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index === 0 && (
              <div className="mx-4 h-px flex-1 bg-charcoal/15">
                <div
                  className={`h-px bg-gold transition-all ${
                    completed ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
