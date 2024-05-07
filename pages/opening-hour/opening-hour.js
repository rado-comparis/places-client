export default function OpeningHour({ hours }) {
  
    return (
        <div>
            {hours.map((hour) => (
                <div key={hour.id}>
                    <div>{hour.day}</div>
                    <div >{hour.hoursText}</div>
                </div>
            ))}
        </div>
    )
  }