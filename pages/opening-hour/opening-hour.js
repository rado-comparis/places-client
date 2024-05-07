export default function OpeningHour({ hours }) {
  
    return (
        <div>
            {hours.map((hour) => (
                <div key={hour.days}>
                    <div key={hour.hours}>{hour.days}: {hour.hours.map((item) => (<span>{ item } </span>))}</div>
                </div>
            ))}
        </div>
    )
  }