import React, { useState } from "react";
import { Header } from '../components';
import axios from "axios";
import { Button } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const UploadTests = ({ medias }) => {
    const { currentColor } = useStateContext();

    const [name, setName] = useState("");
    const [file, setFile] = useState([]);

    const getAllMedias = () => {
        axios
            //.get(`${BACKEND_URI}/api/v1/media/all`)
            .then((result) => {
                setMedias(result.data);
            })
            .catch((error) => {
                setMedias([]);
                console.log(error);
                alert("Error happened!");
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let formdata = new FormData();
        for (let key in file) {
            formdata.append("file", file[key]);
        }

        formdata.append("name", name);

        axios
            .then((success) => {
                getAllMedias();
                alert("Submitted successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Error happened!");
            });

    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="UploadTests" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="videos">Upload Files</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        multiple
                        className="form-control"
                        accept=".txt, .docx"
                        onChange={(e) => {
                            setFile(e.target.files);
                        }}
                    />
                </div>

                <div className="mt-6">
                    <Button
                        type="submit"
                        color="white"
                        bgColor={currentColor}
                        text="Upload Test"
                        borderRadius="10px"
                    />
                </div>
            </form>

        </div>
    );
};

export default UploadTests;