import "./statsCard.css";

const StatsCard = ({stats, info, className}) => {
    return(
        <div className={`stats-card ${className}`}>
            <p className="stats-num">{stats}</p>
            <p className="stats-info">{info}</p>
        </div>
    )
}

export {StatsCard};