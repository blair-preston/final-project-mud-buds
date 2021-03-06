import { useState } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import { Form, Button } from 'react-bootstrap';


export default function HandleNewMessage({ convoId, newConvo, Hide, HideSelf }) {
    const [state, dispatch] = useGlobalState();
    const [newMessage, setNewMessage] = useState({
        content: "",
        conversation: `${convoId}`,
        dog_received: `${newConvo.dog_other}`,
        dog_sent: `${newConvo.dog_creator}`,
    });

    const handleChange = (event) => {

        setNewMessage({
            ...newMessage,
            [event.target.name]: event.target.value,
        });
    }
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let options = {
              method: "POST",
              url: '/messages/',
              data: newMessage,
            }
            let resp = await request(options)
            Hide()
            HideSelf()
            // window.location.reload()
            
        } catch(error) {
            console.log(error)
        }
    }

    return (
    <div>
       <Form  onSubmit={handleSubmit}>
            <label>
                Message:
                <input
                    className="newMessageInput"
                    name="content"
                    type="text"
                    value={newMessage.content}
                    onChange={handleChange}
                />
            </label>
            <Button type="submit">Send</Button>
       </Form>
    </div>
    );
}
