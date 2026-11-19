import GuestSelector from "@/components/booking/fields/GuestSelector";
import type { BookingFormValues } from "@/types/booking";

type EventFieldsProps = {
  type: "wedding" | "conference";
  values: BookingFormValues;
  updateField: <K extends keyof BookingFormValues>(
    field: K,
    value: BookingFormValues[K],
  ) => void;
};

const inputClass =
  "mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold";

export default function EventFields({
  type,
  values,
  updateField,
}: EventFieldsProps) {
  const isWedding = type === "wedding";

  return (
    <div className="space-y-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-medium text-charcoal">
          Preferred {isWedding ? "wedding" : "event"} date
          <input
            type="date"
            value={values.eventDate}
            onChange={(event) => updateField("eventDate", event.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </label>

        <label className="block text-xs font-medium text-charcoal">
          {isWedding ? "Celebration type" : "Event duration"}
          <select
            value={isWedding ? values.eventType : values.duration}
            onChange={(event) =>
              updateField(
                isWedding ? "eventType" : "duration",
                event.target.value,
              )
            }
            className={inputClass}
          >
            <option value="">Please select</option>
            {isWedding ? (
              <>
                <option value="Wedding ceremony">Wedding ceremony</option>
                <option value="Wedding reception">Wedding reception</option>
                <option value="Full wedding celebration">
                  Full wedding celebration
                </option>
                <option value="Renewal of vows">Renewal of vows</option>
              </>
            ) : (
              <>
                <option value="Half day">Half day</option>
                <option value="Full day">Full day</option>
                <option value="Multiple days">Multiple days</option>
              </>
            )}
          </select>
        </label>
      </div>

      <div className="border border-charcoal/10 bg-white px-5 py-2">
        <GuestSelector
          label={isWedding ? "Approximate guests" : "Number of delegates"}
          value={values.guestCount}
          min={0}
          max={1000}
          onChange={(value) => updateField("guestCount", value)}
        />
      </div>

      {!isWedding && (
        <label className="block text-xs font-medium text-charcoal">
          Preferred meeting setup
          <select
            value={values.meetingSetup}
            onChange={(event) =>
              updateField("meetingSetup", event.target.value)
            }
            className={inputClass}
          >
            <option value="">Please select</option>
            <option value="Theatre">Theatre</option>
            <option value="Classroom">Classroom</option>
            <option value="Boardroom">Boardroom</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      )}
    </div>
  );
}
