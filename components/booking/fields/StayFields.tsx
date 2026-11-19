import GuestSelector from "@/components/booking/fields/GuestSelector";
import type { BookingFormValues } from "@/types/booking";
import { rooms } from "@/data/rooms";
type StayFieldsProps = {
  values: BookingFormValues;
  updateField: <K extends keyof BookingFormValues>(
    field: K,
    value: BookingFormValues[K],
  ) => void;
  errors: Record<string, string>;
};

const inputClass =
  "mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold";

export default function StayFields({
  values,
  updateField,
  errors,
}: StayFieldsProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="space-y-7">
      {/* Travel dates */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-medium text-charcoal">
          Check-in date
          <input
            type="date"
            value={values.checkIn}
            min={today}
            onChange={(event) => updateField("checkIn", event.target.value)}
            className={inputClass}
            aria-invalid={!!errors.checkIn}
          />
          {errors.checkIn && (
            <span className="mt-1 block text-xs text-red-700">
              {errors.checkIn}
            </span>
          )}
        </label>

        <label className="block text-xs font-medium text-charcoal">
          Check-out date
          <input
            type="date"
            value={values.checkOut}
            min={values.checkIn || today}
            onChange={(event) => updateField("checkOut", event.target.value)}
            className={inputClass}
            aria-invalid={!!errors.checkOut}
          />
          {errors.checkOut && (
            <span className="mt-1 block text-xs text-red-700">
              {errors.checkOut}
            </span>
          )}
        </label>
      </div>

      {/* Guest and room selection */}
      <div>
        <p className="mb-3 text-xs font-medium text-charcoal">
          Guests and accommodation
        </p>

        <div className="border border-charcoal/10 bg-white px-5 py-2">
          <GuestSelector
            label="Adults"
            value={values.adults}
            min={1}
            max={20}
            onChange={(value) => updateField("adults", value)}
          />

          <GuestSelector
            label="Children"
            value={values.children}
            min={0}
            max={20}
            onChange={(value) => updateField("children", value)}
          />

          <GuestSelector
            label="Rooms"
            value={values.rooms}
            min={1}
            max={10}
            onChange={(value) => updateField("rooms", value)}
          />
        </div>
      </div>

      {/* Preferred room */}
      <label className="block text-xs font-medium text-charcoal">
        Preferred room category
        <select
          value={values.preferredRoom}
          onChange={(event) => updateField("preferredRoom", event.target.value)}
          className={inputClass}
        >
          <option value="">No preference</option>

          {rooms.map((room) => (
            <option key={room.slug} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>
      </label>
      {/* Flexible dates */}
      <label className="flex items-start gap-3 text-sm leading-6 text-charcoal/75">
        <input
          type="checkbox"
          checked={values.flexibleDates}
          onChange={(event) =>
            updateField("flexibleDates", event.target.checked)
          }
          className="mt-1 accent-gold"
        />
        My travel dates are flexible.
      </label>
    </div>
  );
}
