
function Card({profile}) {
    return (
        <>
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500 inline-block">
                <img src={profile.avatar_url} class="w-full" />
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-sm bold font-sans">{profile.login.toUpperCase()}</h3>
                    <p className="mt-2 font-sans font-light text-white">Check out my github profile <a href={profile.html_url}>HERE</a></p>
                </div>
            </div>
        </>
    );
}

export default Card;

