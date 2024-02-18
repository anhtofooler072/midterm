import React, { useState } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import './Styles.css'

export default function Homepage() {
    /**------------------------------------------------------------------------
     *                           SECTION STATES
     *------------------------------------------------------------------------**/
    const [data, setData] = useState(JSON.parse(localStorage.getItem('chat')) || [
        {
            id: 1,
            name: 'John Doe',
            img: 'https://th.bing.com/th/id/OIP.7-OosZjhsaQHlYpemNsLpwAAAA?rs=1&pid=ImgDetMain',
            message: [{
                mess: 'hello world',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: true
            }, {
                mess: 'hi there',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: false
            }, {
                mess: 'how are you?',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: true
            }, {
                mess: 'I am good, thank you for asking. How about you?',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: false
            }],
            active: true
        },
        {
            id: 2,
            name: 'Jane Doe',
            img: 'https://64.media.tumblr.com/46a3cbfd3e22a446748135a523227d7c/tumblr_mtcvgypIPT1r81dyco1_500.jpg',
            message: [{
                mess: 'hello world',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: true
            }, {
                mess: 'hi there',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: false
            }, {
                mess: 'how are you?',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: true
            }, {
                mess: 'I am good, thank you for asking. How about you?',
                timestamp: '2021-10-01D12:00:03T',
                fromtheir: false
            }
            ],
            active: false
        },
        {
            id: 3,
            name: 'John Smith',
            img: 'https://th.bing.com/th/id/OIP.qtK7TZngB5mxUZ7_BXH7ngAAAA?w=254&h=247&rs=1&pid=ImgDetMain',
            message: [
                {
                    mess: 'hello world',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: true
                }, {
                    mess: 'hi there',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: false
                }, {
                    mess: 'how are you?',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: true
                }, {
                    mess: 'I am good, thank you for asking. How about you?',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: false
                }
            ],
            active: false
        },
        {
            id: 4,
            name: 'Jane Smith',
            img: 'https://th.bing.com/th/id/OIP.z60b4tfdzbJl9JdZoR6bawAAAA?rs=1&pid=ImgDetMain',
            message: [
                {
                    mess: 'hello world',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: true
                }, {
                    mess: 'hi there',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: false
                }, {
                    mess: 'how are you?',
                    timestamp: '2021-10-01D12:00:03T',
                    fromtheir: true
                }
            ],
            active: false
        }
    ])
    const [chatName, setChatName] = useState({ message: [], })
    const [type, setType] = useState('')




    /**------------------------------------------------------------------------
     *                           SECTION FUNCTION
     *------------------------------------------------------------------------**/

    const handleType = (e) => {
        setType(e.target.value)
    }
    const openChat = (e, item) => {
        setChatName(item)
        console.log(chatName)
    }
    const sendMessage = () => {
        let newMess = {
            mess: type,
            timestamp: new Date().toISOString(),
            fromtheir: false
        }
        let newChat = chatName
        newChat.message.push(newMess)
        setChatName(newChat)
        setType('')
        console.log(chatName)
        localStorage.setItem('chat', JSON.stringify(data))
    }



    /**------------------------------------------------------------------------
     *                           SECTION RENDER
     *------------------------------------------------------------------------**/

    const renderData = data.map((item) => {
        let owner = item.message[item.message.length - 1].fromtheir
        let color = owner ? 'black' : 'slategray'
        return (
            <div key={item.id} className='friendTag' onClick={(e) => { openChat(e, item) }}>
                <img src={item.img} alt={item.name} />
                <div className="nameandMess">
                    <h2>{item.name}</h2>
                    <p style={{
                        color: color
                    }}>{
                            item.message[item.message.length - 1].mess
                        }</p>
                </div>
                <span>{item.timestamp}</span>
            </div>
        )
    }
    )


    /**------------------------------------------------------------------------
     * todo                             TODO SECTION
     * 1. sort the message by timestamp
     * 2. add the message to the data.message (update to local storage)
     *------------------------------------------------------------------------**/

    const renderChat = chatName.message.map((item) => {
        let owner = item.fromtheir
        if (chatName.message.length === 0) return (<div className='messTag' style={{ justifyContent: 'center' }}><p>Start a conversation</p></div>)
        return (
            <div key={item.timestamp} className={owner ? 'messTag' : 'mymessTag'}>
                {owner ? <img src={chatName.img} alt={chatName.name} /> : null}
                <p>{item.mess}</p>
            </div>
        )
    }
    )

    //*---------------------------- END OF SECTION ----------------------------*/




    return (
        <div className='chatContainer'>
            <div className='friendList'>
                {renderData}
            </div>
            {chatName.message.length === 0 ?
                <div className='chatBox'>
                    <div className="messBoxNull">
                        <span>
                            Start a conversation
                        </span>
                    </div>
                </div>
                :
                <div className='chatBox'>
                    <div className="nameBar">
                        <h2>{chatName.name}</h2>
                        {chatName.active ? <FaCheckCircle style={{
                            color: 'green'
                        }} /> : null}
                    </div>
                    <div className="messBox">
                        {renderChat}
                    </div>
                    <div className="typeBox">
                        <input type="text" onChange={handleType} placeholder='write a message' value={type} />
                        <button onClick={sendMessage}>
                            <FaPaperPlane />
                            <span style={{
                                marginLeft: '5px'
                            }}>Send</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
