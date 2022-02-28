import "./Profile-card.css"


function Card({profile}) {
    return (
        <>
            <div className="card">
                <img src={profile.avatar_url} className="img" />
                <h1>{profile.login.toUpperCase()}</h1>
                <p className="title">Developer</p>
                <p className="">Check out my github profile <a href={profile.html_url}>HERE</a></p>
                
            </div>
        </>
    );
}

export default Card;