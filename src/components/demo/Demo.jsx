import React, { useState } from 'react'

const Demo = (props) => {

    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        setClicked(!clicked);
    };

    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleTextToSpeech = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = speechSynthesis.getVoices()[0]; // Chọn giọng nói mặc định

            speechSynthesis.speak(utterance);
        } else {
            alert('Trình duyệt của bạn không hỗ trợ chuyển đổi văn bản thành giọng nói.');
        }
    };

    return (
        <>
            <h1>{props.title}</h1>
            <h2 style={{ color: clicked ? 'red' : 'black' }}>{count}</h2>
            <button onClick={handleClick} className={clicked ? "btn btn-danger" : "btn btn-warning"}>Click</button>

            <div>
                <div>
                    <textarea value={text} onChange={handleInputChange} placeholder="Nhập văn bản muốn chuyển đổi" rows={4} cols={50} />
                    <br />
                    <button onClick={handleTextToSpeech}>Chuyển đổi thành giọng nói</button>
                </div>
            </div>
        </>
    );
}

export default Demo