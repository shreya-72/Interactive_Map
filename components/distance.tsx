const commutesPermonth = 20 * 2;
const litresPerKM = 1/20;
const gasLitreCost = 100;
const litreCostKM = litresPerKM * gasLitreCost;
const secondsPerDay = 60 * 60 * 24;

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: DistanceProps) {
  if (!leg.distance || !leg.duration) return null;

  const days = Math.floor(
    (commutesPermonth * leg.duration.value) / secondsPerDay
  );
  const cost = Math.floor(
    (leg.distance.value / 1000) * litreCostKM * commutesPermonth
  );

  return (
    <div>
      <p>
        This location is <span className="highlight">{leg.distance.text}</span> away
        from your office. That would take{" "}
        <span className="highlight">{leg.duration.text}</span> per commute.
      </p>

      <p>
        At a cost of {" "}
        <span className="highlight">
          Rs {new Intl.NumberFormat().format(cost)} per month
        </span>
        .
      </p>
    </div>
  );
}
