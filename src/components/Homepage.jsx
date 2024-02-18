import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPaperPlane } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import './Styles.css'

export default function Homepage() {
    /**------------------------------------------------------------------------
     *                           SECTION STATES
    *------------------------------------------------------------------------**/

    // localStorage.clear()
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
            active: false
        },
        {
            id: 5,
            name: 'Zuck',
            img: 'https://th.bing.com/th/id/OIP.BaE5xUtwP1idgdWP3CNx3QHaE5?rs=1&pid=ImgDetMain',
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
            active: true
        },
        {
            id: 6,
            name: 'Musk-chan',
            img: 'https://th.bing.com/th/id/R.0ddc26f8c2c1538fced48b04d0cba728?rik=XEtfp77qGMN79A&pid=ImgRaw&r=0',
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
            latestInboxTime: "2024-02-18T09:36:07.108Z",
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
    }
    const sendMessage = (e) => {
        e.preventDefault()
        if (type === '') {
            toast.error('💬 Please enter a message to send', {
                position: "top-right",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            return
        }
        let newMess = {
            mess: type,
            timestamp: new Date().toISOString(),
            fromtheir: false
        }
        let newChat = chatName
        newChat.message.push(newMess)
        newChat.latestInboxTime = newMess.timestamp
        setChatName(newChat)
        setType('')
        setData(data.map((item) => {
            if (item.id === chatName.id) {
                return chatName
            }
            return item
        }))
        setData(data.sort((a, b) => {
            return new Date(b.latestInboxTime) - new Date(a.latestInboxTime)
        }))
        console.log(data)
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
     * ! 1. sort the message by timestamp
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
                    <form className="typeBox">
                        <input type="text" onChange={handleType} placeholder='write a message' value={type} />
                        <button onClick={sendMessage} type='submit'>
                            <FaPaperPlane />
                            <span style={{
                                marginLeft: '5px'
                            }}>Send</span>
                        </button>
                    </form>
                    <ToastContainer />
                </div>
            }
        </div>
    )
}
