import './Users.css'

export function Users({ prop, setcurfrined, prop2, prop3 }) {

    const PF = "https://chat-appsamir.herokuapp.com/images/"

    return (
        <div className={`userbox ${prop2 == prop.username ? 'userStyle' : null} `} onClick={() => setcurfrined(prop.username)}>


            <div className={`userboxPhoto `}>
                <div className='userCircle'>
                {prop.profilePic && <img className="postImg" src={PF + prop.profilePic} alt="" />}
            
                    <div className={`check ${prop3 == prop.username ? 'dot' : null}`}>

                    </div>


                </div>


            </div>
            <div className='userboxname'>
                <div className='userName'>
                    <p>{prop.username}</p>

                </div>
                <div className='userLastmes'>
                    <p>
                        how are you?

                    </p>


                </div>


            </div>
            <div>

            </div>

        </div>
    )
}