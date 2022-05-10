import { useState } from "react";
import { useGlobalState } from '../context/GlobalState'
import request from '../services/api.requests';
import { Form, Button } from 'react-bootstrap';


export default function HandleNewMessage({ convoId, newConvo }) {
    const [state, dispatch] = useGlobalState();
    // const [toOptions, setToOptions] = useState([]);
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
        const newMessageFormData = new FormData();
        newMessageFormData.append("content", newMessage.subject)
        newMessageFormData.append("conversation", `${convoId}`)
        newMessageFormData.append("dog_received", `${newConvo.dog_other}`)
        newMessageFormData.append("dog_sent", `${newConvo.dog_creator}`)

        try {
            let options = {
              method: "POST",
              url: '/messages/',
              data: newMessage,
            }
            let resp = await request(options)

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
                    value={newMessage.content}
                    onChange={handleChange}
                />
            </label>
            <Button type="submit">Send</Button>
       </Form>
    </div>
    );
}
