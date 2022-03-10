import "./Profile-card.css"


function Card({profile}) { 
    return (
        <>
            <div className="card">
                <img src={profile.avatar_url} className="img" />
                <h1>{profile.login.toUpperCase()}</h1>
                <p className="title">Developer</p>
                <a href={profile.html_url}><i class="fa fa-github"></i></a>
            </div>
        </>
    );
}

export default Card;