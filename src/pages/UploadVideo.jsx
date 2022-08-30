import React, { useState } from "react";
import { Header } from '../components';
import axios from "axios";
import { Button } from '../components';

import { useStateContext } from '../contexts/ContextProvider';

const UploadVideo = ({ medias }) => {
    const { currentColor } = useStateContext();

    const [name, setName] = useState("");
    const [videos, setVideos] = useState([]);

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
        for (let key in videos) {
            formdata.append("videos", videos[key]);
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
            <Header category="Page" title="UploadVideo" />
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
                    <label htmlFor="videos">Upload Videos</label>
                    <input
                        type="file"
                        name="videos"
                        id="videos"
                        multiple
                        className="form-control"
                        accept=".mp4, .mkv"
                        onChange={(e) => {
                            setVideos(e.target.files);
                        }}
                    />
                </div>

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

            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th width="200">Name</th>
                                <th>Videos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medias &&
                                medias.map((media) => {
                                    return (
                                        <tr>
                                            <td>{media.name}</td>
                                            <td>
                                                {media.videos.map((video) => {
                                                    return (
                                                        <video
                                                            preload="auto"
                                                            width="320"
                                                            height="240"
                                                            controls
                                                        >
                                                        </video>
                                                    );
                                                })}
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>


        </div> 
        
           
    );
};

export default UploadVideo;