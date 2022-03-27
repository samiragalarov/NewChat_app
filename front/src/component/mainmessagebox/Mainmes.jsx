import { useEffect, useRef, useState } from "react"
import { FriendMs } from "../friendMessage/FriendMs"
import { Mymes } from "../myMessage/Mymes"
import "./Mainmes.css"
export function Manimes({ prop }) {
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();
    const messageEl = useRef(null);

        useEffect(() => {
            if (messageEl) {
              messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
              });
            }
          }, [])


    return (
        <div className="mainmesPlace" id="hey"  ref={messageEl} >
        {prop.map((record ,key1) => (
                  record.myName == JSON.parse(sessionStorage.getItem("user")).username
                    ? (<Mymes mesprop={record.new} key={key1} />)
                    : <FriendMs  mesprop2={record.new} key={key1} />
            ))}  

        </div>
    )
} 