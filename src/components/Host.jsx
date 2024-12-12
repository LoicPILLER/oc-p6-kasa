import "../styles/Host.scss"

function Host( {host} ) {
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host">
            <div>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <img src={host.picture} alt="Photo de profil de l'hôte" />
        </div>
    )
}

export default Host;