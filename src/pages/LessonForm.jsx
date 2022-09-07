import React, { useState } from "react";
import { Header } from '../components';
import axios from "axios";
import { Button } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const LessonForm = () => {
    const { currentColor } = useStateContext();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [link, setLink] = useState("");


    return (
        
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="LessonForm" />
            <h2>Add a lesson</h2>
            <form>
                <label>Lesson Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Lesson Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Lesson Link:</label>
                <textarea required value={link} onChange={(e) => setLink(e.target.value)}></textarea>

                <div className="mt-6">
                   <Button
                    type="submit"
                    color="white"
                    bgColor={currentColor}
                    text="Upload"
                    borderRadius="10px"
                   />
                </div>
            </form>
        </div>
    );
};

export default LessonForm;

